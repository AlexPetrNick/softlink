# Generated by Django 3.2.2 on 2021-06-21 01:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hardware', '0026_alter_cabinet_bug_hdd'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cabinet',
            name='bug_hdd',
            field=models.TextField(blank=True, max_length=50),
        ),
    ]
