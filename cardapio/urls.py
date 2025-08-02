from cardapio import views
from django.urls import path

app_name = 'cardapio'

urlpatterns = [
    path('', views.index, name='index'),
]
