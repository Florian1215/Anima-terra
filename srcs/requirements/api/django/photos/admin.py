from django.contrib import admin

from photos.models import Photo


@admin.register(Photo)
class SortieAdmin(admin.ModelAdmin):
    list_display = ('cave', 'date', 'departement', 'author')
    search_fields = ('cave', 'departement', 'author')
