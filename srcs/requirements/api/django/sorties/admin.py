from django import forms
from django.contrib import admin

from sorties.gpx import parse_gpx
from sorties.models import SortieCategorie, SortieImage, Sortie, SortieTime, SortieIcon, SortieForWho, SortieRelated, \
    SortieIconBlock


class SortieImageInline(admin.TabularInline):
    model = SortieImage
    extra = 1


class SortieRelatedInline(admin.TabularInline):
    model = SortieRelated
    fk_name = 'sortie'
    extra = 1


class SortieIconBlockInline(admin.TabularInline):
    model = SortieIconBlock
    extra = 1


class SortieAdminForm(forms.ModelForm):
    gpx_file = forms.FileField(required=False, label='Fichier GPX', help_text='Remplit automatiquement dénivelé, longueur, temps et profil.')

    class Meta:
        model = Sortie
        fields = '__all__'

    def clean_gpx_file(self):
        f = self.cleaned_data.get('gpx_file')
        if not f:
            return None
        try:
            return parse_gpx(f)
        except Exception:
            raise forms.ValidationError('Fichier GPX invalide.')


@admin.register(Sortie)
class SortieAdmin(admin.ModelAdmin):
    form = SortieAdminForm
    inlines = [SortieImageInline, SortieIconBlockInline, SortieRelatedInline]
    list_display = ('title', 'categorie', 'place')
    search_fields = ('title',)
    exclude = ('elevation_profile', 'slug')

    def save_model(self, request, obj, form, change):
        data = form.cleaned_data.get('gpx_file')
        if data:
            for field, value in data.items():
                setattr(obj, field, value)
        super().save_model(request, obj, form, change)


@admin.register(SortieCategorie)
class SortieCategorieAdmin(admin.ModelAdmin):
    search_fields = ('name',)
    exclude = ('slug',)


class SortieTimeAdmin(admin.ModelAdmin):
    def get_model_perms(self, request):
        return {}


admin.site.register(SortieTime, SortieTimeAdmin)
admin.site.register(SortieIcon, SortieTimeAdmin)
admin.site.register(SortieForWho, SortieTimeAdmin)

