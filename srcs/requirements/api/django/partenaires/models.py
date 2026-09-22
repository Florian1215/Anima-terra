from django.db import models


class PartenaireCategorie(models.Model):
    name = models.CharField(max_length=255, verbose_name='Nom')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Date de création')

    class Meta:
        ordering = ['created_at']
        verbose_name = 'Catégorie'

    def __str__(self):
        return self.name


class Partenaire(models.Model):
    categorie = models.ForeignKey(PartenaireCategorie, on_delete=models.CASCADE, related_name='partenaires', verbose_name='Catégorie')
    url = models.URLField()
    description = models.CharField(max_length=400)
    image = models.ImageField(upload_to='partenaires', verbose_name='Logo')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Date de création')

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return f'[{self.categorie.name}] - {self.url}'
