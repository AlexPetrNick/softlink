# Generated by Django 3.2.2 on 2021-07-05 19:14

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('hardware', '0027_alter_cabinet_bug_hdd'),
    ]

    operations = [
        migrations.CreateModel(
            name='Computer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(default=uuid.uuid4, max_length=50)),
                ('power_supply_id', models.TextField(blank=True, max_length=50)),
                ('mother_id', models.TextField(blank=True, max_length=50)),
                ('hdd_id', models.TextField(blank=True, max_length=50)),
                ('cpu_id', models.TextField(max_length=50)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
