from rest_framework import viewsets
from .models import Cliente, Pedido, ItemPedido
from .serializers import ClienteSerializer, PedidoSerializer, ItemPedidoSerializer

class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class PedidoViewSet(viewsets.ModelViewSet):
    queryset = Pedido.objects.all().order_by('-data_criacao')
    serializer_class = PedidoSerializer

class ItemPedidoViewSet(viewsets.ModelViewSet):
    queryset = ItemPedido.objects.all()
    serializer_class = ItemPedidoSerializer
