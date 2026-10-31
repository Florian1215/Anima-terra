#!/bin/bash
RED="\033[031m"
BOLD="\033[001m"
RESET="\033[000m"


if [[ $MIGRATION = true ]]; then
    echo -e $BOLD$RED"- API migrations processing"$RESET

    if ! python manage.py makemigrations --check --dry-run; then
        echo -e $BOLD$RED"- Modèles modifiés sans migration : lancer make migrations"$RESET
        [[ $DEBUG = True ]] || exit 1
    fi
    echo -e $BOLD$RED"- Checking database schema"$RESET
    python manage.py repair_migrations --check || exit 1
    echo -e $BOLD$RED"- Migrating"$RESET
    python manage.py migrate || exit 1
fi

if [[ $COLLECT_STATIC = true ]]; then
    echo -e $BOLD$RED"- Collecting static files"$RESET
    python manage.py collectstatic --noinput
fi

exec "$@"
