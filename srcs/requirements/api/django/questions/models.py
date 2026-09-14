from django.db import models


class QuestionCategorie(models.Model):
    name = models.CharField(max_length=255, verbose_name='Nom')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Date de création')

    class Meta:
        ordering = ['created_at']
        verbose_name = 'Catégorie'

    def __str__(self):
        return self.name


class Question(models.Model):
    categorie = models.ForeignKey(QuestionCategorie, on_delete=models.CASCADE, related_name='questions', verbose_name='Catégorie')
    question = models.CharField(max_length=255)
    answer = models.TextField(verbose_name='Réponse')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Date de création')

    class Meta:
        ordering = ['created_at']
