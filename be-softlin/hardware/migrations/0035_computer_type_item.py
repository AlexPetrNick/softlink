# Generated by Django 3.2.2 on 2021-08-21 10:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hardware', '0034_typeitem'),
    ]

    operations = [
        migrations.AddField(
            model_name='computer',
            name='type_item',
            field=models.ForeignKey(blank=True, default=0, on_delete=django.db.models.deletion.CASCADE, to='hardware.typeitem'),
        ),
    ]