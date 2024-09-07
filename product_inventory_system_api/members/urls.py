from django.urls import path
from .views import create, login

urlpatterns = [
    path('auth/', login, name='login'),
    path('create/', create, name='create')
]
