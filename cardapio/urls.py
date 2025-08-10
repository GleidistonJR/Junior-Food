from cardapio import views
from django.urls import path, include

from rest_framework.routers import DefaultRouter
from cardapio.views import ProdutoViewSet

router = DefaultRouter()
router.register(r'produtos', ProdutoViewSet)


app_name = 'cardapio'

urlpatterns = [
    path('', include(router.urls)),
]
