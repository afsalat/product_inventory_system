from django.contrib import admin
from products.models import Products, SubVariant, Variant


admin.site.register(Products)
admin.site.register(Variant)
admin.site.register(SubVariant)