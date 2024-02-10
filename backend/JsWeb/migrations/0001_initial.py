# Generated by Django 4.2.7 on 2024-01-23 08:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('CompanyName', models.CharField(max_length=50)),
                ('FullName', models.CharField(max_length=50)),
                ('PhoneNumber', models.IntegerField(max_length=50)),
                ('Email', models.EmailField(max_length=254)),
            ],
        ),
    ]
