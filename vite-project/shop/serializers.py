
from rest_framework import serializers
from .models import ShopProduct
class ShopProductSerializer(serializers.ModelSerializer):
    price = serializers.DecimalField(source='new_price', max_digits=8, decimal_places=2, read_only=True)
    prevprice = serializers.DecimalField(source='old_price', max_digits=8, decimal_places=2, read_only=True)
    images = serializers.SerializerMethodField()

    class Meta:
        model = ShopProduct
        fields="__all__"

    def get_images(self, obj):
        return [obj.image1, obj.image2, obj.image3, obj.image4, obj.image5]