from django.contrib import admin

from questions.models import Question, QuestionCategorie


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = (
        'question',
        'categorie'
    )

    search_fields = (
        'question',
        'reponse',
    )


admin.site.register(QuestionCategorie)
