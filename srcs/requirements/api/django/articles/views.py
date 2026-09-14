from rest_framework import generics

from articles.models import Article, Page
from articles.serializers import ArticleSerializer, PageSerializer, SmallArticleSerializer


class ArticlesView(generics.ListAPIView):
    queryset = Article.objects.all()
    serializer_class = SmallArticleSerializer

    def filter_queryset(self, queryset):
        return queryset.filter(published=True)


class ArticleDetailView(generics.RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    lookup_field = 'slug'


class PageDetailView(generics.RetrieveAPIView):
    queryset = Page.objects.all()
    serializer_class = PageSerializer
    lookup_field = 'slug'
