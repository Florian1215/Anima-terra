from rest_framework import serializers

from sorties.models import Sortie, SortieCategorie, SortieImage


class SortieImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = SortieImage
        fields = '__all__'


class SortieSerializer(serializers.ModelSerializer):
    images = SortieImageSerializer(many=True, read_only=True)

    class Meta:
        model = Sortie
        fields = '__all__'


class SortieCatSerializer(serializers.ModelSerializer):
    sorties = SortieSerializer(many=True)

    class Meta:
        model = SortieCategorie
        fields = '__all__'
