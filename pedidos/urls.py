from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ClienteViewSet, PedidoViewSet, ItemPedidoViewSet

router = DefaultRouter()
router.register(r'clientes', ClienteViewSet)
router.register(r'pedidos', PedidoViewSet)
router.register(r'itens', ItemPedidoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
