from django.contrib import admin

from articles.models import Article, Page, ArticleAuthor


@admin.register(ArticleAuthor)
class ArticleAuthorAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'published')
    list_filter = ('published', 'created_at')
    search_fields = ('title', 'slug')
    exclude = ('slug',)


@admin.register(Page)
class PageAdmin(admin.ModelAdmin):
    list_display = ('title', 'updated_at',)
