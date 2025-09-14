from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CarrinhoViewSet, CarrinhoItemViewSet

router = DefaultRouter()
router.register(r'carrinho', CarrinhoViewSet, basename='carrinho')
router.register(r'carrinho-item', CarrinhoItemViewSet, basename='carrinho-item')

urlpatterns = [
    path('', include(router.urls)),
]
