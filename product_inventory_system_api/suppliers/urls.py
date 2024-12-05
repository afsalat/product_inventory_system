from django.urls import path
from . import views


urlpatterns = [
    path('some/',views.something, name='some'),
    path('get-all-supplier/', views.ViewAllSuppliers, name='getallsuppliers')
]