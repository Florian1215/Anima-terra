from django.db import models


class Presentation(models.Model):
    year = models.IntegerField(verbose_name='Année')
    title = models.CharField(max_length=50, verbose_name='Titre')
    description = models.CharField(max_length=255)
    image = models.ImageField(upload_to='presentation')

    class Meta:
        ordering = ['year']
        verbose_name = 'Présentation'

    def __str__(self):
        return f'{self.year} - {self.title}'
