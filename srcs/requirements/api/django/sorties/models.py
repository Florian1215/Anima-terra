from django.db import models
from django.utils.text import slugify


class SortieImage(models.Model):
    image = models.ImageField(upload_to='sorties')
    sortie = models.ForeignKey('Sortie', on_delete=models.CASCADE, related_name='images')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Date de création')

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return self.image.name


class SortieCategorie(models.Model):
    name = models.CharField(max_length=255, verbose_name='Nom')
    slug = models.SlugField(max_length=255, unique=True)
    image = models.ImageField(upload_to='sorties', verbose_name='Image de couverture')
    description = models.TextField()
    image_front = models.ImageField(upload_to='sorties', blank=True, null=True, verbose_name='Image de la personne png')
    image_bg = models.ImageField(upload_to='sorties', blank=True, null=True, verbose_name='Image de fond')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Date de création')

    class Meta:
        ordering = ['created_at']
        verbose_name = 'Catégorie'

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class Sortie(models.Model):
    DUREE_CHOICES = [
        ('demi-journee', 'Demi-journée'),
        ('journee', 'Journée')
    ]
    STATUS_CHOICES = [
        ('disponible', 'Disponible'),
        ('temporairement-indisponible', 'Temporairement indisponible'),
        ('prochainement-disponible', 'Prochainement disponible'),
    ]

    title = models.CharField(max_length=255, verbose_name='Titre')
    categorie = models.ForeignKey(SortieCategorie, on_delete=models.CASCADE, related_name='sorties', verbose_name='Catégorie')
    status = models.CharField(default=STATUS_CHOICES[0][0], choices=STATUS_CHOICES, max_length=30, verbose_name='Statut')
    place = models.CharField(max_length=255, verbose_name='Lieu')
    duration = models.CharField(choices=DUREE_CHOICES, max_length=20, verbose_name='Durée')
    walking_time_approach = models.IntegerField(verbose_name="Temps marche d'approche")
    minimum_age = models.IntegerField(verbose_name='Age minimum')
    price = models.IntegerField(verbose_name='Prix')
    available_winter = models.BooleanField(default=True, verbose_name="Disponible l'hiver")
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Date de création')

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return f'[{self.categorie}] {self.title}'
