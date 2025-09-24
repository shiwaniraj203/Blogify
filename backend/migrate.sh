#!/bin/bash

# migrate.sh - Run migrations and start server
echo "Starting migration process..."

# Run migrations
python manage.py migrate --noinput

# Check if migrations were successful
if [ $? -eq 0 ]; then
    echo "Migrations completed successfully"
    # Start the server
    gunicorn blogify_backend.wsgi:application
else
    echo "Migration failed!"
    exit 1
fi