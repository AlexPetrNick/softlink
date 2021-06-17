# Generated by Django 3.1.4 on 2021-04-02 12:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hardware', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Processor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('series', models.TextField(max_length=20)),
                ('model', models.TextField(max_length=20)),
                ('freq', models.TextField(max_length=20)),
                ('tech_proc', models.TextField(max_length=20)),
                ('num_core', models.TextField(max_length=20)),
                ('cache1', models.IntegerField()),
                ('cache2', models.IntegerField()),
                ('tdp', models.TextField(max_length=20)),
                ('has_graph', models.BooleanField()),
                ('brand', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hardware.brand')),
                ('core_amd', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hardware.coreamd')),
                ('core_int', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hardware.coreintel')),
                ('socket', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hardware.socket')),
            ],
        ),
    ]
