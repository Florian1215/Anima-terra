from django.contrib import admin

from presentation.models import Presentation


@admin.register(Presentation)
class PresentationAdmin(admin.ModelAdmin):
    list_display = ('year', 'title')
