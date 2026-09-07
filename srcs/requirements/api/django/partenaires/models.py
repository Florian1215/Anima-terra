from django.db import models


class PartenaireCategorie(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Partenaire(models.Model):
    categorie = models.ForeignKey(PartenaireCategorie, on_delete=models.CASCADE, related_name='partenaires')
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='medias/partenaires')

    def __str__(self):
        return f'[{self.categorie.name}] - {self.name}'
