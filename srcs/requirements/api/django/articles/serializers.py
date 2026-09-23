from rest_framework import serializers

from articles.content import render_content
from articles.models import Article, Page, ArticleAuthor


class SmallArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = [
            'id',
            'title',
            'slug',
            'excerpt',
            'image',
            'created_at'
        ]


class AuthorArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleAuthor
        fields = '__all__'


class ArticleSerializer(serializers.ModelSerializer):
    authors = AuthorArticleSerializer(many=True)
    participants = AuthorArticleSerializer(many=True)

    class Meta:
        model = Article
        fields = '__all__'

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['content'] = render_content(data.get('content'), self.context.get('request'))
        return data


class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = '__all__'

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['content'] = render_content(data.get('content'), self.context.get('request'))
        return data
