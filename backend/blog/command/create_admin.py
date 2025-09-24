from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

class Command(BaseCommand):
    help = 'Create superuser for production'

    def handle(self, *args, **options):
        if not User.objects.filter(username='admin').exists():
            User.objects.create_superuser(
                username='admin',
                email='admin@blogify.com',
                password='admin1234'
            )
            self.stdout.write(
                self.style.SUCCESS('Successfully created superuser "admin"')
            )
        else:
            self.stdout.write(
                self.style.WARNING('Superuser "admin" already exists')
            )