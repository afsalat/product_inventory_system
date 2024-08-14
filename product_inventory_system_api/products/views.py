import traceback
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Products, Variant, SubVariant
from .serializers import ProductSerializer
from rest_framework import generics


# Endpoint: create new product
@api_view(['POST'])
def create_product(request):
    try: 
        serializer = ProductSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        variants = request.data.get('variants', [])
        product = serializer.save()
        
        for variant_data in variants:
            variant = Variant.objects.create(product=product, name=variant_data['name'])
            for sub_variant in variant_data['options']:
                SubVariant.objects.create(variant=variant, option=sub_variant, stock=0.00)

        return Response({"message": "successfully added"}, status=200) 
    except Exception as e:
        print(traceback.format_exc())
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



# Endpoint: add stock (purchase)
@api_view(['PATCH'])
def add_stock(request, subvariant_id):
    try:
        subvariant = SubVariant.objects.get(id=subvariant_id)
        if not subvariant:
            return Response(subvariant.errors, status=status.HTTP_400_BAD_REQUEST)

        stock_to_add = request.data.get('stock', 0)
        if stock_to_add <= 0:
            return Response({'error': 'Invalid stock amount'}, status=status.HTTP_400_BAD_REQUEST)

        subvariant.stock += stock_to_add
        subvariant.save()
        return Response({"message":"Stock Successfully Purchase"}, status=200)
    
    except Exception as e:
        print(traceback.format_exc())
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



# Endpoint: remove stock (selling)
@api_view(['PATCH'])
def remove_stock(request, subvariant_id):
    try:
        subvariant = SubVariant.objects.get(id=subvariant_id)
        if not subvariant:
            return Response({'error': 'SubVariant not found'}, status=status.HTTP_404_NOT_FOUND)

        stock_to_remove = request.data.get('stock', 0)
        if stock_to_remove <= 0 or stock_to_remove > subvariant.stock:
            return Response({'error': 'Invalid stock amount'}, status=status.HTTP_400_BAD_REQUEST)

        subvariant.stock -= stock_to_remove
        subvariant.save()
        return Response({"message":"Stock Successfully Sell"}, status=200)

    except Exception as e:
        print(traceback.format_exc())
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



# Endpoint: view all products
class ProductListView(generics.ListAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductSerializer
