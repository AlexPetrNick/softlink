# Generated by Django 3.1.4 on 2021-04-02 16:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hardware', '0005_mother'),
    ]

    operations = [
        migrations.CreateModel(
            name='RAM',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('model', models.TextField(max_length=30)),
                ('type_memory', models.TextField(max_length=30)),
                ('memory', models.TextField(max_length=30)),
                ('work_freq', models.TextField(max_length=30)),
                ('timing', models.TextField(max_length=30)),
                ('latency', models.TextField(max_length=30)),
                ('brand', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hardware.brand')),
                ('form_factor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hardware.formfactorram')),
            ],
        ),
    ]
