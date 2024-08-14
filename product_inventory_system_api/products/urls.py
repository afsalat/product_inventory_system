from django.urls import path
from .views import create_product, ProductListView, add_stock, remove_stock

urlpatterns = [
    path('products/', ProductListView, name='product-list'),
    path('products/create/', create_product, name='create-product'),
    path('products/add_stock/', add_stock, name='add-stock'),
    path('products/remove_stock/', remove_stock, name='remove-stock'),
]
