# Generated by Django 3.2.2 on 2021-07-10 11:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hardware', '0029_auto_20210705_2316'),
    ]

    operations = [
        migrations.RenameField(
            model_name='cabinet',
            old_name='bug_cpu',
            new_name='bag_cpu',
        ),
        migrations.RenameField(
            model_name='cabinet',
            old_name='bug_hdd',
            new_name='bag_hdd',
        ),
        migrations.RenameField(
            model_name='cabinet',
            old_name='bug_mother',
            new_name='bag_mother',
        ),
        migrations.RenameField(
            model_name='cabinet',
            old_name='bug_video',
            new_name='bag_video',
        ),
    ]