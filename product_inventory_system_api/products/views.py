import traceback
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import ProductPagination, Products, Variant, SubVariant
from .serializers import ProductSerializer
from rest_framework import generics



# Endpoint: create new product
@api_view(['POST'])
def create_product(request):
    try: 
        serializer = ProductSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=404)
        
        variants = request.data.get('variants', [])
        product = serializer.save()
        
        for variant_data in variants:
            variant = Variant.objects.create(product=product, name=variant_data['name'])
            for sub_variant in variant_data['options']:
                SubVariant.objects.create(variant=variant, option=sub_variant, stock=0.00)

        return Response({"message": "successfully added"}, status=200) 
    except Exception as e:
        print(traceback.format_exc())
        return Response({"error": str(e)}, status=500)




# Endpoint: add stock (purchase)
@api_view(['PATCH'])
def add_stock(request):
    try:
        productname = request.data.get('productname')
        variantname = request.data.get('variantname')
        option = request.data.get('option')
        stock_to_add = int(request.data.get('stock', 0))

        product = Products.objects.filter(ProductName=productname).first()
        variant = Variant.objects.filter(name=variantname,product=product).first()
        subvariant = SubVariant.objects.filter(variant=variant,option=option).first()

        if not subvariant:
            return Response({'error': 'SubVariant or Product not found'}, status=404)

        if stock_to_add <= 0:
            return Response({'error': 'Invalid stock amount'}, status=404)

        subvariant.stock += stock_to_add
        subvariant.save()
        return Response({"message": "Stock successfully added"}, status=200)

    except Exception as e:
        print(traceback.format_exc())
        return Response({"error": str(e)}, status=500)




# Endpoint: remove stock (selling)
@api_view(['PATCH'])
def remove_stock(request):
    try:
        productname = request.data.get('productname')
        variantname = request.data.get('variantname')
        option = request.data.get('option')
        stock_to_add = int(request.data.get('stock', 0))

        product = Products.objects.filter(ProductName=productname).first()
        variant = Variant.objects.filter(name=variantname,product=product).first()
        subvariant = SubVariant.objects.filter(variant=variant,option=option).first()

        if not subvariant:
            return Response({'error': 'SubVariant or Product not found'}, status=404)

        if stock_to_add <= 0:
            return Response({'error': 'Invalid stock amount'}, status=404)

        subvariant.stock -= stock_to_add
        subvariant.save()
        return Response({"message": "Stock successfully added"}, status=200)

    except Exception as e:
        print(traceback.format_exc())
        return Response({"error": str(e)}, status=500)




# Endpoint: view all products
@api_view(['GET'])
def ProductListView(request):
    products = Products.objects.all()
    paginator = ProductPagination()
    result_page = paginator.paginate_queryset(products, request)
    serializer = ProductSerializer(result_page, many=True)
    return paginator.get_paginated_response(serializer.data)


# Endpoint: delete particular product
@api_view(['DELETE'])
def DeleteProduct(request, productid):
    try:
        print("working del")
        product = Products.objects.filter(ProductID=productid).first()
        if not product:
            return Response({"message":"product not founded"}, status=404)
        
        variant = Variant.objects.filter(product=product).first()
        subvariant = SubVariant.objects.filter(variant=variant).first()
        product.delete()
        variant.delete()
        subvariant.delete()
        
        return Response({"message":"successfully deleted"}, status=200)
        
    except Exception as e:
        return Response({"error":str(e)}, status=500)