# Generated by Django 3.2.2 on 2021-08-21 16:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hardware', '0036_auto_20210821_1425'),
    ]

    operations = [
        migrations.AddField(
            model_name='mother',
            name='cpu',
            field=models.TextField(blank=True, max_length=30),
        ),
    ]
