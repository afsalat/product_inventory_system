from django.db import models
from rest_framework.pagination import PageNumberPagination

class Supplier(models.Model):
    sub_name = models.CharField(max_length=50)
    sub_contact = models.IntegerField()
    sub_addrass = models.TextField()


class SupplierPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100