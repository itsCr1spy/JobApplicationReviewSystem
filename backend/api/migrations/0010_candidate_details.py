# Generated by Django 4.1.1 on 2022-09-11 08:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_alter_candidate_resume'),
    ]

    operations = [
        migrations.AddField(
            model_name='candidate',
            name='details',
            field=models.CharField(default='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis pharetra magna at blandit. Etiam volutpat fringilla tortor. Nam in gravida metus, sed dignissim sem. Proin lobortis quam in neque semper varius. Quisque eget nisl nec lectus imperdiet placerat. Mauris tincidunt lorem nec est lacinia, sed scelerisque nisl iaculis. Integer quis varius arcu. Duis ac convallis risus. In suscipit posuere nibh a maximus.\nInteger porta justo sed turpis maximus fermentum. Etiam vitae gravida dolor. Phasellus ut congue quam. Sed ac magna ac lacus pellentesque sodales. Pellentesque molestie vitae sem eu mollis. Ut aliquet pellentesque lectus ut ullamcorper. Praesent sagittis, magna eget aliquet ultricies, lorem libero sagittis ante, nec suscipit nisi nisl non magna.', max_length=200),
        ),
    ]
