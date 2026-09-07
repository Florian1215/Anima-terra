from rest_framework import generics

from questions.models import QuestionCategorie
from questions.serializers import QuestionCategorieSerializer


class QuestionsView(generics.ListAPIView):
    queryset = QuestionCategorie.objects.all()
    serializer_class = QuestionCategorieSerializer
