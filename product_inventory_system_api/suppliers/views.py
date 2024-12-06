from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Supplier, PageNumberPagination



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
    

# Endpoint: create supplier 
@api_view(['POST'])
def CreateSupplier(request):
    try:
        supplier_name = request.POST.get("sub_name")

        supplier_name = Supplier.objects.filter(sub_name=supplier_name)
        if supplier_name:
            return Response({"message":"supplier already exist"}, status=404)
        
        supplier = Supplier(request.POST)
        supplier.save()

        return Response({"message":"Successfully created supplier"}, status=200)

    except Exception as e:
        return Response({"error":str(e)}, status=500)
    


# Endpoint: update supplier
@api_view(['PUT'])
def UpadateSupplier(request):
    try:
        supplier_name = request.POST.get("sub_name")
        supplier_id = request.POST.get("sub_id")

        supplier_n = Supplier.objects.filter(sub_name=supplier_name)
        if supplier_n and supplier_n.id != supplier_id:
            return Response({"message":"supplier name already exist. please enter other name."}, status=404)
        
        supplier = Supplier.objects.get(supplier_id)
        supplier.sub_name = supplier_name
        supplier.save()

        return Response({"message":"Successfully created supplier"}, status=200)

    except Exception as e:
        return Response({"error":str(e)}, status=500)
    


# Endpoint: delete supplier 
@api_view(['DELETE'])
def DeleteSupplier(request):
    try:
        supplier_id = request.POST.get('sub_id')

        supplier = Supplier.objects.get(supplier_id)
        if supplier_id is None:
            return Response({"message": "supplier not exist!"})
        
        supplier = Supplier(request.POST)
        supplier.delete()

        return Response({"message": "supplier successfully deleted"})

    except Exception as e:
        return Response({"error":str(e)}, status=500)