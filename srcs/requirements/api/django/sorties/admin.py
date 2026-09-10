from django.contrib import admin

from sorties.models import SortieCategorie, SortieImage, Sortie


@admin.register(Sortie)
class SortieAdmin(admin.ModelAdmin):
    list_display = (
        'titre',
        'categorie',
        'lieu'
    )

    search_fields = (
        'titre',
    )


@admin.register(SortieCategorie)
class SortieCategorieAdmin(admin.ModelAdmin):
    search_fields = (
        'name',
    )
    exclude = (
        'slug',
    )


admin.site.register(SortieImage)
