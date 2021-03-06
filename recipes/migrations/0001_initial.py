# Generated by Django 3.2.7 on 2021-09-15 11:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=20, unique=True)),
                ('img_scr', models.TextField(blank=True, null=True)),
                ('fullname', models.TextField(unique=True)),
                ('description', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fullname', models.TextField(unique=True)),
                ('img_scr', models.TextField(blank=True, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('content', models.TextField()),
                ('likes', models.IntegerField(default=0)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='recipes.category')),
            ],
        ),
    ]
