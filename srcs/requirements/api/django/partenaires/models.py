from django.db import models


class PartenaireCategorie(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Date de création")

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return self.name


class Partenaire(models.Model):
    categorie = models.ForeignKey(PartenaireCategorie, on_delete=models.CASCADE, related_name='partenaires')
    name = models.CharField(max_length=255)
    url = models.URLField()
    description = models.TextField()
    image = models.ImageField(upload_to='partenaires')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Date de création")

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return f'[{self.categorie.name}] - {self.name}'
