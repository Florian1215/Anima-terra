from rest_framework import generics

from partenaires.models import PartenaireCategorie
from partenaires.serializers import PartenaireCategorieSerializer


class PartenairesView(generics.ListAPIView):
    queryset = PartenaireCategorie.objects.all()
    serializer_class = PartenaireCategorieSerializer
