from django.db import models
from django.utils import timezone
from django.utils.html import strip_tags
from django.utils.text import slugify
from django_ckeditor_5.fields import CKEditor5Field


class ArticleAuthor(models.Model):
    name = models.CharField(max_length=255, verbose_name='Nom')

    class Meta:
        verbose_name = 'Auteur'

    def __str__(self):
        return self.name


EXCERPT_LENGTH = 120


class Article(models.Model):
    title = models.CharField(max_length=255, verbose_name='Titre')
    slug = models.SlugField(max_length=255, unique=True)
    published = models.BooleanField(default=True, verbose_name='Publié')
    participants = models.ManyToManyField(ArticleAuthor, related_name='articles_participant', verbose_name='Participants')
    authors = models.ManyToManyField(ArticleAuthor, related_name='articles_authors', verbose_name='Auteurs')
    created_at = models.DateField(default=timezone.now, verbose_name='Date de publication')
    excerpt = models.CharField(max_length=EXCERPT_LENGTH, verbose_name='Extrait')
    image = models.ImageField(upload_to='articles')
    content = CKEditor5Field(verbose_name='Contenu')

    def save(self, *args, **kwargs):
        self.excerpt = strip_tags(self.content)[:EXCERPT_LENGTH - 3] + '...'
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title


class Page(models.Model):
    SLUG_CHOICES = [
        ('cgv', 'Conditions générales de vente'),
        ('mentions-legales', 'Mentions légales'),
    ]
    slug = models.CharField(max_length=255, choices=SLUG_CHOICES, unique=True)
    title = models.CharField(max_length=255, verbose_name='Titre')
    content = CKEditor5Field(verbose_name='Contenu')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Dernière mise à jour')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Date de création')

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title
