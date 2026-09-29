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


class SortieTime(models.Model):
    name = models.CharField(max_length=30, verbose_name='Nom', unique=True)

    def __str__(self):
        return self.name


class SortieIcon(models.Model):
    title = models.CharField(max_length=30, verbose_name='Titre')
    image = models.ImageField(upload_to='sorties/icons/', verbose_name='Image')

    def __str__(self):
        return self.title


class SortieIconBlock(models.Model):
    description = models.CharField(max_length=30)
    icon = models.ForeignKey(SortieIcon, on_delete=models.PROTECT, verbose_name='Icon')
    sortie = models.ForeignKey('Sortie', on_delete=models.CASCADE, related_name='icons', verbose_name='Sortie')

    def __str__(self):
        return f'{self.icon.title} - {self.description}'


class SortieForWho(models.Model):
    text = models.CharField(max_length=100, verbose_name='Texte')

    def __str__(self):
        return self.text


class SortieRelated(models.Model):
    title = models.CharField(max_length=25, verbose_name='Title')
    sortie = models.ForeignKey('sorties.Sortie', on_delete=models.CASCADE, related_name='related', verbose_name='Sortie')
    recommended = models.ForeignKey('sorties.Sortie', on_delete=models.CASCADE, related_name='recommended_in', verbose_name='Sortie recommandée')

    def __str__(self):
        return self.title


class Sortie(models.Model):
    STATUS_CHOICES = [
        ('disponible', 'Disponible'),
        ('temporairement-indisponible', 'Temporairement indisponible'),
        ('prochainement-disponible', 'Prochainement disponible'),
    ]

    title = models.CharField(max_length=255, verbose_name='Titre', unique=True)
    slug = models.SlugField(max_length=255, unique=True)
    subtitle = models.CharField(max_length=120, verbose_name='Sous-titre')
    categorie = models.ForeignKey(SortieCategorie, on_delete=models.CASCADE, related_name='sorties', verbose_name='Catégorie')
    status = models.CharField(default=STATUS_CHOICES[0][0], choices=STATUS_CHOICES, max_length=30, verbose_name='Statut')
    place = models.CharField(max_length=255, verbose_name='Lieu')
    duration = models.ForeignKey(SortieTime, on_delete=models.PROTECT, related_name='sorties', verbose_name='Durée')
    # todo remake admin panel
    minimum_age = models.IntegerField(verbose_name='Age minimum')
    price = models.IntegerField(verbose_name='Prix')
    available_winter = models.BooleanField(default=True, verbose_name="Disponible l'hiver")
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Date de création')
    for_who = models.ManyToManyField(SortieForWho, related_name='sorties', verbose_name='Pour qui?', blank=True)
    image_walking_approach = models.ImageField(upload_to='sorties/walking_approach/', verbose_name='Image marche d\'approche')
    walking_time_approach = models.IntegerField(verbose_name="Temps marche d'approche")
    elevation_gain = models.IntegerField(null=True, blank=True, verbose_name='Dénivelé positif (m)')
    distance = models.IntegerField(null=True, blank=True, verbose_name='Longueur (m)')
    elevation_profile = models.JSONField(null=True, blank=True, verbose_name="Profil d'altitude")
    # todo supprimer null=True, etc...

    class Meta:
        ordering = ['created_at']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return f'[{self.categorie}] {self.title}'

