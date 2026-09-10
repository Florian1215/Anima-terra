from rest_framework import generics

from photos.models import Photo
from photos.serializers import PhotoSerializer


class PhotoView(generics.ListAPIView):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer
