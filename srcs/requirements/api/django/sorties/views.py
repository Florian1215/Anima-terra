from rest_framework import generics

from sorties.models import SortieCategorie
from sorties.serializers import SortieCatSerializer


class SortiesView(generics.ListAPIView):
    queryset = SortieCategorie.objects.all()
    serializer_class = SortieCatSerializer
