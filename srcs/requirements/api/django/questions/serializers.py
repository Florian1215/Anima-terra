from rest_framework import serializers

from questions.models import Question, QuestionCategorie


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'


class QuestionCategorieSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True)

    class Meta:
        model = QuestionCategorie
        fields = '__all__'
