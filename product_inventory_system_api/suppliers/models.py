from django.db import models


class Supplier(models.Model):
    sub_name = models.CharField(max_length=50)
    sub_contact = models.IntegerField()
    sub_addrass = models.TextField()