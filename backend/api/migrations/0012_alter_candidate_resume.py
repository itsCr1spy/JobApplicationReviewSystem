# Generated by Django 4.1.1 on 2022-09-11 08:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_alter_candidate_details'),
    ]

    operations = [
        migrations.AlterField(
            model_name='candidate',
            name='resume',
            field=models.ImageField(upload_to='resume/'),
        ),
    ]