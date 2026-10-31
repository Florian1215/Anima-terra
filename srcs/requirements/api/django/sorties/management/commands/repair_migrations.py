"""Remet une base PostgreSQL en cohérence avec les migrations du dépôt.

Pour chaque app, compare le schéma réel (colonnes, types, NULL, UNIQUE) à
l'état produit par chaque migration, retrouve la dernière qui correspond
exactement, réécrit django_migrations en conséquence, puis lance `migrate`
pour appliquer ce qui manque.

    manage.py repair_migrations            # affiche le plan, ne change rien
    manage.py repair_migrations --apply    # répare
    manage.py repair_migrations --check    # code 1 si la base a divergé
"""
import sys

from django.apps import apps as installed_apps
from django.conf import settings
from django.core.management import call_command
from django.core.management.base import BaseCommand, CommandError
from django.db import connection, transaction
from django.db.migrations.loader import MigrationLoader
from django.db.migrations.recorder import MigrationRecorder


def normalize_type(db_type):
    return db_type.replace('varchar', 'character varying')


def read_database_schema():
    """{table: {colonne: (type, nullable, unique)}} pour le schéma courant."""
    schema = {}
    with connection.cursor() as cursor:
        cursor.execute("""
            SELECT c.relname, a.attname, format_type(a.atttypid, a.atttypmod), NOT a.attnotnull
            FROM pg_attribute a
            JOIN pg_class c ON c.oid = a.attrelid
            JOIN pg_namespace n ON n.oid = c.relnamespace
            WHERE c.relkind = 'r' AND n.nspname = current_schema()
              AND a.attnum > 0 AND NOT a.attisdropped
        """)
        for table, column, db_type, nullable in cursor.fetchall():
            schema.setdefault(table, {})[column] = (db_type, nullable)
        result = {}
        for table, columns in schema.items():
            constraints = connection.introspection.get_constraints(cursor, table)
            unique = {
                c['columns'][0] for c in constraints.values()
                if c['unique'] and not c['primary_key'] and len(c['columns']) == 1
            }
            result[table] = {
                name: (db_type, nullable, name in unique)
                for name, (db_type, nullable) in columns.items()
            }
    return result


def expected_schema(loader, app_label, node):
    """Schéma attendu des modèles de l'app après la migration `node`."""
    state = loader.project_state(node)
    expected = {}
    for model in state.apps.get_models(include_auto_created=True):
        if model._meta.app_label != app_label or not model._meta.managed:
            continue
        columns = {}
        for field in model._meta.local_fields:
            unique = field.unique and not field.primary_key
            columns[field.column] = (normalize_type(field.db_type(connection)), field.null, unique)
        expected[model._meta.db_table] = columns
    return expected


def table_prefix_filter(app_label, actual):
    prefix = f'{app_label}_'
    return {table: columns for table, columns in actual.items() if table.startswith(prefix)}


def describe_differences(expected, actual):
    lines = []
    for table in sorted(expected.keys() | actual.keys()):
        if table not in actual:
            lines.append(f'table absente de la base : {table}')
        elif table not in expected:
            lines.append(f'table en trop dans la base : {table}')
        else:
            for column in sorted(expected[table].keys() | actual[table].keys()):
                want, got = expected[table].get(column), actual[table].get(column)
                if want != got:
                    lines.append(f'{table}.{column} : attendu {want}, trouvé {got}')
    return lines


class Command(BaseCommand):
    help = 'Aligne une base existante sur les migrations du dépôt, sans perdre ses données.'

    def add_arguments(self, parser):
        mode = parser.add_mutually_exclusive_group()
        mode.add_argument('--apply', action='store_true', help='Modifie réellement la base.')
        mode.add_argument('--check', action='store_true', help='Vérifie seulement, code 1 si divergence.')

    def handle(self, *args, **options):
        if connection.vendor != 'postgresql':
            raise CommandError('Cette commande ne fonctionne que sur PostgreSQL.')

        recorder = MigrationRecorder(connection)
        if not recorder.has_table():
            self.stdout.write('Base vierge : `migrate` suffit.')
            return

        loader = MigrationLoader(connection)
        actual = read_database_schema()
        app_labels = sorted(
            config.label for config in installed_apps.get_app_configs()
            if str(config.path).startswith(str(settings.BASE_DIR)) and loader.graph.leaf_nodes(config.label)
        )

        if options['check']:
            self.check_applied_state(loader, recorder, app_labels, actual)
            return

        plan, failures = {}, []
        for app_label in app_labels:
            chain = self.chain_for(loader, app_label)
            app_tables = table_prefix_filter(app_label, actual)
            if not app_tables:
                continue
            match = None
            closest, closest_gap = None, None
            for name in reversed(chain):
                expected = expected_schema(loader, app_label, (app_label, name))
                gap = describe_differences(expected, app_tables)
                if not gap:
                    match = name
                    break
                if closest_gap is None or len(gap) < len(closest_gap):
                    closest, closest_gap = name, gap
            if match is None:
                failures.append((app_label, closest, closest_gap))
            else:
                plan[app_label] = (match, chain[chain.index(match) + 1:], chain)

        if failures:
            for app_label, closest, gap in failures:
                self.stderr.write(f'{app_label} : aucune migration ne correspond. Plus proche : {closest}')
                for line in gap:
                    self.stderr.write(f'  - {line}')
            raise CommandError('Réparation annulée, rien n\'a été modifié.')

        for app_label, (match, remaining, _) in plan.items():
            self.stdout.write(f'{app_label} : la base correspond à {match}, reste {len(remaining)} migration(s)')
            for name in remaining:
                self.stdout.write(f'  -> {name}')

        if not options['apply']:
            self.stdout.write('Rien n\'a été modifié. Relancer avec --apply pour réparer.')
            return

        with transaction.atomic():
            for app_label, (match, _, chain) in plan.items():
                recorder.migration_qs.filter(app=app_label).delete()
                for name in chain[:chain.index(match) + 1]:
                    recorder.record_applied(app_label, name)

        call_command('migrate', verbosity=1)

        loader = MigrationLoader(connection)
        actual = read_database_schema()
        self.check_applied_state(loader, recorder, app_labels, actual)
        self.stdout.write(self.style.SUCCESS('Base en cohérence avec les migrations.'))

    @staticmethod
    def chain_for(loader, app_label):
        leaves = loader.graph.leaf_nodes(app_label)
        if len(leaves) != 1:
            raise CommandError(f'{app_label} : historique de migrations à plusieurs branches : {leaves}')
        return [name for app, name in loader.graph.forwards_plan(leaves[0]) if app == app_label]

    def check_applied_state(self, loader, recorder, app_labels, actual):
        applied = recorder.applied_migrations()
        problems = []
        for app_label in app_labels:
            chain = self.chain_for(loader, app_label)
            done = [name for name in chain if (app_label, name) in applied]
            if not done:
                continue
            expected = expected_schema(loader, app_label, (app_label, done[-1]))
            for line in describe_differences(expected, table_prefix_filter(app_label, actual)):
                problems.append(f'{app_label} ({done[-1]}) : {line}')
        if problems:
            for line in problems:
                self.stderr.write(line)
            self.stderr.write('La base ne correspond pas aux migrations enregistrées : lancer `make repair-db`.')
            sys.exit(1)
        self.stdout.write('Schéma conforme aux migrations enregistrées.')
