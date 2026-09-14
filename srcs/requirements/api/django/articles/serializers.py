from bs4 import BeautifulSoup
from rest_framework import serializers

from articles.models import Article, Page, ArticleAuthor


class SmallArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = [
            'id',
            'titre',
            'slug',
            'extrait',
            'cover_image',
            'created_at'
        ]


class AuthorArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleAuthor
        fields = '__all__'


class ArticleSerializer(serializers.ModelSerializer):
    authors = AuthorArticleSerializer(many=True)

    class Meta:
        model = Article
        fields = '__all__'

    def to_representation(self, instance):
        data = super().to_representation(instance)
        request = self.context.get('request')
        if request and data.get('content'):
            soup = BeautifulSoup(data['content'], 'html.parser')
            for img in soup.find_all('img'):
                src = img.get('src')
                if src and src.startswith('/'):
                    img['src'] = request.build_absolute_uri(src)
            data['content'] = str(soup)
        return data


class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = '__all__'
