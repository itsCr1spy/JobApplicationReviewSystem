# Generated by Django 4.1.1 on 2022-09-10 10:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_candidate_resume'),
    ]

    operations = [
        migrations.AlterField(
            model_name='candidate',
            name='resume',
            field=models.URLField(default='D:\\Django\\JobReviewApp\\backend\\api\\dummy.txt', max_length=80),
        ),
    ]
