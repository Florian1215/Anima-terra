from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

from articles.views import ArticleDetailView, ArticlesView, PageDetailView
from forms.views import ContactView
from partenaires.views import PartenairesView
from photos.views import PhotoView
from presentation.views import PresentationView
from questions.views import QuestionsView
from sorties.views import SortiesView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('ckeditor5/', include('django_ckeditor_5.urls')),
    path('api/sorties/', SortiesView.as_view(), name='sorties'),
    path('api/questions/', QuestionsView.as_view(), name='questions'),
    path('api/partenaires/', PartenairesView.as_view(), name='partenaires'),
    path('api/photos/', PhotoView.as_view(), name='photos'),
    path('api/contact/', ContactView.as_view(), name='contact'),
    path('api/articles/', ArticlesView.as_view(), name='articles'),
    path('api/presentation/', PresentationView.as_view(), name='presentation'),
    path('api/articles/<slug:slug>/', ArticleDetailView.as_view(), name='article-detail'),
    path('api/pages/<slug:slug>/', PageDetailView.as_view(), name='page-detail'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
