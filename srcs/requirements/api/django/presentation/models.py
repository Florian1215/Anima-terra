from django.db import models


class Presentation(models.Model):
    year = models.IntegerField(verbose_name="Année")
    titre = models.CharField(max_length=50)
    description = models.CharField(max_length=255)
    image = models.ImageField(upload_to='presentation')

    class Meta:
        ordering = ['year']

    def __str__(self):
        return f'{self.year} - {self.titre}'
