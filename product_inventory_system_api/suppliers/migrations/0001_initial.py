# Generated by Django 5.1 on 2024-12-05 15:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Supplier',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sub_name', models.CharField(max_length=50)),
                ('sub_contact', models.IntegerField()),
                ('sub_addrass', models.TextField()),
            ],
        ),
    ]