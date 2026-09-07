from rest_framework import serializers

from partenaires.models import Partenaire, PartenaireCategorie


class PartenaireSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partenaire
        fields = '__all__'


class PartenaireCategorieSerializer(serializers.ModelSerializer):
    partenaires = PartenaireSerializer(many=True)

    class Meta:
        model = PartenaireCategorie
        fields = '__all__'
