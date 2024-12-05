from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Supplier, PageNumberPagination

# Create your views here.


def something(request):
    
    return Response({"status":"something","status_code":402})


# Endpoint: view all suppliers
@api_view(['GET'])
def ViewAllSuppliers(request):
    try:
        suppliers = Supplier.objects.all()
        paginator = PageNumberPagination()
        paginated_suppliers = paginator.paginate_queryset(suppliers, request)
        data = paginated_suppliers.get_paginated_response(paginated_suppliers.data)

        return Response({'message':data}, status=200)

    except Exception as e:
        return Response({"error":str(e)}, status=500)
    
