# Generated by Django 3.1.4 on 2021-04-03 03:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hardware', '0011_videocard'),
    ]

    operations = [
        migrations.CreateModel(
            name='PowerSupply',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('model', models.TextField(max_length=30)),
                ('power_all', models.TextField(max_length=30)),
                ('PFC', models.TextField(max_length=30)),
                ('int_for_mother', models.TextField(max_length=30)),
                ('molex', models.TextField(max_length=30)),
                ('sata', models.TextField(max_length=30)),
                ('fdd', models.TextField(max_length=30)),
                ('brand', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hardware.brand')),
                ('form_factor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hardware.formfactorpowersupply')),
            ],
        ),
    ]
