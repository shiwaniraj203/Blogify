release: python manage.py migrate && python manage.py collectstatic --noinput
web: gunicorn blogify_backend.wsgi:application
