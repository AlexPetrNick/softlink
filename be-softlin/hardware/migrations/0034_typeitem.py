# Generated by Django 3.2.2 on 2021-08-21 10:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hardware', '0033_auto_20210730_2017'),
    ]

    operations = [
        migrations.CreateModel(
            name='TypeItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(blank=True, max_length=50)),
            ],
        ),
    ]