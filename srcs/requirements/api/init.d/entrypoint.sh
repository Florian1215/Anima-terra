#!/bin/bash
RED="\033[031m"
BOLD="\033[001m"
RESET="\033[000m"


if [[ $MIGRATION = true ]]; then
    echo -e $BOLD$RED"- API migrations processing"$RESET

    echo -e $BOLD$RED"- Making migrations"$RESET
    python manage.py makemigrations
    echo -e $BOLD$RED"- Migrating"$RESET
    python manage.py migrate
fi

if [[ $COLLECT_STATIC = true ]]; then
    echo -e $BOLD$RED"- Collecting static files"$RESET
    python manage.py collectstatic --noinput
fi

exec "$@"
