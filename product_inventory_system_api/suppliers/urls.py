from django.urls import path
from . import views


urlpatterns = [
    path('get-all-supplier/', views.ViewAllSuppliers, name='getallsuppliers'),
    path('create-supplier/', views.CreateSupplier, name='createsupplier'),
    path('update-supplier/<int:supplier_id>/', views.UpadateSupplier, name='updatesupplier'),
    path('delete-supplier/<int:supplier_id>/', views.DeleteSupplier, name='deletesupplier')
]