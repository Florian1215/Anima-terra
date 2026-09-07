from django.db import models


class SortieImage(models.Model):
    image = models.ImageField(upload_to='medias/sorties')
    sortie = models.ForeignKey('Sortie', on_delete=models.CASCADE, related_name='images')

    def __str__(self):
        return self.image.url


class SortieCategorie(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='medias/sorties')
    description = models.TextField()

    def __str__(self):
        return self.name


class Sortie(models.Model):
    DUREE_CHOICES = [
        ('demi-journee', 'Demi-journée'),
        ('journee', 'Journée')
    ]

    titre = models.CharField(max_length=255)
    categorie = models.ForeignKey(SortieCategorie, on_delete=models.CASCADE, related_name='sorties')
    lieu = models.CharField(max_length=255)
    duree = models.CharField(choices=DUREE_CHOICES, max_length=20)
    temps_marche_approche = models.IntegerField(verbose_name="Temps marche d'approche")
    age_minimum = models.IntegerField()
    prix = models.IntegerField()
    disponible_hiver = models.BooleanField(default=True, verbose_name="Disponible l'hiver")
    description = models.TextField()

    def __str__(self):
        return f'[{self.categorie}] {self.titre}'
