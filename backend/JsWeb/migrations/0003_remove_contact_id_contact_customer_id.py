# Generated by Django 5.0.1 on 2024-01-23 11:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('JsWeb', '0002_alter_contact_phonenumber'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contact',
            name='id',
        ),
        migrations.AddField(
            model_name='contact',
            name='Customer_id',
            field=models.AutoField(default=0, primary_key=True, serialize=False),
        ),
    ]
