# Generated by Django 3.1.4 on 2021-04-02 16:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hardware', '0008_delete_ram'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mother',
            name='chipsetA',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='hardware.chipsetamd'),
        ),
        migrations.AlterField(
            model_name='mother',
            name='chipsetI',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='hardware.chipsetintel'),
        ),
    ]
