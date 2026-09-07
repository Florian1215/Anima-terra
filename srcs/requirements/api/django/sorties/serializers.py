from rest_framework import serializers

from sorties.models import Sortie, SortieCategorie


class SortieSerializer(serializers.ModelSerializer):
    images = serializers.StringRelatedField(many=True)

    class Meta:
        model = Sortie
        fields = '__all__'


class SortieCatSerializer(serializers.ModelSerializer):
    sorties = SortieSerializer(many=True)

    class Meta:
        model = SortieCategorie
        fields = '__all__'
