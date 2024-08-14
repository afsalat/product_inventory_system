from rest_framework import serializers
from .models import Products, Products, Variant, SubVariant

class SubVariantSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubVariant
        fields = ['option', 'stock']

class VariantSerializer(serializers.ModelSerializer):
    sub_variants = SubVariantSerializer(many=True, read_only=True)

    class Meta:
        model = Variant
        fields = ['name', 'product','sub_variants']

class ProductSerializer(serializers.ModelSerializer):
    variants = VariantSerializer(many=True, read_only=True)

    class Meta:
        model = Products
        fields = ['id', 'ProductName', 'variants','ProductID','CreatedUser','ProductCode']
