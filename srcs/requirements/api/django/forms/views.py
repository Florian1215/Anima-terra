from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from forms.serializers import ContactSerializer


class ContactView(APIView):
    @staticmethod
    def post(request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data
            # TODO : envoyer l'email, sauvegarder, etc.
            print(data)
            return Response({"message": "Votre message a bien été envoyé."}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
