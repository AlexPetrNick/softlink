# Generated by Django 3.2.2 on 2021-06-15 12:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hardware', '0022_auto_20210615_1649'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mother',
            name='ddr3',
            field=models.TextField(blank=True, max_length=30),
        ),
        migrations.AlterField(
            model_name='mother',
            name='ddr4',
            field=models.TextField(blank=True, max_length=30),
        ),
    ]
