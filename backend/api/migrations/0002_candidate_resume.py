# Generated by Django 4.1.1 on 2022-09-10 10:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='candidate',
            name='resume',
            field=models.URLField(default='./dummy.jpg', max_length=80),
        ),
    ]
