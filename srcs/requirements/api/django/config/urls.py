from django.contrib import admin
from django.urls import path

from partenaires.views import PartenairesView
from questions.views import QuestionsView
from sorties.views import SortiesView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/sorties/', SortiesView.as_view(), name='sorties'),
    path('api/questions/', QuestionsView.as_view(), name='questions'),
    path('api/partenaires/', PartenairesView.as_view(), name='partenaires'),
]
