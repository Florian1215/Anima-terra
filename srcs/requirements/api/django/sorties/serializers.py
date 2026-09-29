from rest_framework import serializers

from sorties.models import Sortie, SortieCategorie, SortieImage, SortieRelated, SortieIconBlock


class SortieIconSerializer(serializers.ModelSerializer):
    icon = serializers.ImageField(source='icon.image')
    title = serializers.CharField(source='icon.title')

    class Meta:
        model = SortieIconBlock
        fields = [
            'title',
            'description',
            'icon',
        ]


class SortieImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = SortieImage
        fields = '__all__'


class SmallSortieSerializer(serializers.ModelSerializer):
    duration = serializers.CharField(source='duration.name')
    image = serializers.SerializerMethodField()

    class Meta:
        model = Sortie
        fields = [
            'id',
            'title',
            'image',
            'place',
            'duration',
            'minimum_age',
            'price'
        ]

    def get_image(self, obj):
        first = obj.images.first()
        if not first:
            return None
        request = self.context.get('request')
        return request.build_absolute_uri(first.image.url) if request else first.image.url


class SortieRelatedSerializer(serializers.ModelSerializer):
    recommended = SmallSortieSerializer()

    class Meta:
        model = SortieRelated
        fields = [
            'title',
            'recommended'
        ]


class SortieSerializer(serializers.ModelSerializer):
    icons = SortieIconSerializer(many=True, read_only=True)
    images = SortieImageSerializer(many=True, read_only=True)
    for_who = serializers.SerializerMethodField()
    duration = serializers.CharField(source='duration.name')
    related = SortieRelatedSerializer(many=True, read_only=True)

    class Meta:
        model = Sortie
        fields = '__all__'

    @staticmethod
    def get_for_who(obj):
        return [for_who.text for for_who in obj.for_who.all()]


class SortieCatSerializer(serializers.ModelSerializer):
    sorties = SortieSerializer(many=True)

    class Meta:
        model = SortieCategorie
        fields = '__all__'
