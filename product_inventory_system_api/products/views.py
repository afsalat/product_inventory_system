from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Products, Variant, SubVariant
from .serializers import ProductSerializer
from rest_framework import generics


@api_view(['POST'])
def create_product(request):
    serializer = ProductSerializer(data=request.data)
    if serializer.is_valid():
        product = serializer.save()
        for variant_data in request.data.get('variants', []):
            variant = Variant.objects.create(product=product, name=variant_data['name'])
            for subvariant_name in variant_data['options']:
                SubVariant.objects.create(variant=variant, name=subvariant_name)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




@api_view(['PATCH'])
def add_stock(request, product_id, subvariant_id):
    try:
        subvariant = SubVariant.objects.get(id=subvariant_id, variant__product__id=product_id)
    except SubVariant.DoesNotExist:
        return Response({'error': 'SubVariant not found'}, status=status.HTTP_404_NOT_FOUND)

    stock_to_add = request.data.get('stock', 0)
    if stock_to_add <= 0:
        return Response({'error': 'Invalid stock amount'}, status=status.HTTP_400_BAD_REQUEST)

    subvariant.stock += stock_to_add
    subvariant.save()
    return Response({'stock': subvariant.stock}, status=status.HTTP_200_OK)




@api_view(['PATCH'])
def remove_stock(request, product_id, subvariant_id):
    try:
        subvariant = SubVariant.objects.get(id=subvariant_id, variant__product__id=product_id)
    except SubVariant.DoesNotExist:
        return Response({'error': 'SubVariant not found'}, status=status.HTTP_404_NOT_FOUND)

    stock_to_remove = request.data.get('stock', 0)
    if stock_to_remove <= 0 or stock_to_remove > subvariant.stock:
        return Response({'error': 'Invalid stock amount'}, status=status.HTTP_400_BAD_REQUEST)

    subvariant.stock -= stock_to_remove
    subvariant.save()
    return Response({'stock': subvariant.stock}, status=status.HTTP_200_OK)



class ProductListView(generics.ListAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductSerializer
