from rest_framework import generics

from presentation.models import Presentation
from presentation.serializers import PresentationSerializer


class PresentationView(generics.ListAPIView):
    queryset = Presentation.objects.all()
    serializer_class = PresentationSerializer
