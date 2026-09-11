from django.contrib import admin

from sorties.models import SortieCategorie, SortieImage, Sortie


class SortieImageInline(admin.TabularInline):
    model = SortieImage
    extra = 1


@admin.register(Sortie)
class SortieAdmin(admin.ModelAdmin):
    inlines = [
        SortieImageInline,
    ]

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
