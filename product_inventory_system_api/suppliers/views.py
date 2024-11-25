from django.shortcuts import render
from rest_framework.response import Response

# Create your views here.


def something(request):
    
    return Response({"status":"something","status_code":402})