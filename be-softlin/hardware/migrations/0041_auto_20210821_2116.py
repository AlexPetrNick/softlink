# Generated by Django 3.2.2 on 2021-08-21 17:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hardware', '0040_mother_msata_cnt'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mother',
            name='cpu',
            field=models.IntegerField(blank=True, max_length=30),
        ),
        migrations.AlterField(
            model_name='mother',
            name='ddr3',
            field=models.IntegerField(blank=True, max_length=30),
        ),
        migrations.AlterField(
            model_name='mother',
            name='ddr3L',
            field=models.IntegerField(blank=True, max_length=30),
        ),
        migrations.AlterField(
            model_name='mother',
            name='ddr4',
            field=models.IntegerField(blank=True, max_length=30),
        ),
        migrations.AlterField(
            model_name='mother',
            name='pcie16',
            field=models.IntegerField(blank=True, max_length=30),
        ),
        migrations.AlterField(
            model_name='mother',
            name='pcie2',
            field=models.IntegerField(blank=True, max_length=30),
        ),
        migrations.AlterField(
            model_name='mother',
            name='pcie4',
            field=models.IntegerField(blank=True, max_length=30),
        ),
    ]
