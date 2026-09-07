from django.db import models


class QuestionCategorie(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Question(models.Model):
    categorie = models.ForeignKey(QuestionCategorie, on_delete=models.CASCADE, related_name='questions')
    question = models.CharField(max_length=255)
    reponse = models.TextField()
