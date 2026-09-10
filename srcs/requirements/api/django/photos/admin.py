from django.contrib import admin

from photos.models import Photo


@admin.register(Photo)
class SortieAdmin(admin.ModelAdmin):
    list_display = (
        'grotte',
        'date',
        'departement',
        'auteur'
    )

    search_fields = (
        'grotte',
        'departement',
        'auteur'
    )
