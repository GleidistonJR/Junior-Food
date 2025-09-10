from rest_framework import serializers
from .models import Cliente, Pedido, ItemPedido
from cardapio.models import Produto

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'


class ItemPedidoSerializer(serializers.ModelSerializer):
    produto_nome = serializers.CharField(source="produto.nome", read_only=True)

    class Meta:
        model = ItemPedido
        fields = ['id', 'produto', 'produto_nome', 'quantidade', 'preco_unitario', 'subtotal']


class PedidoSerializer(serializers.ModelSerializer):
    cliente = ClienteSerializer()  # mostra os dados do cliente
    itens = ItemPedidoSerializer(many=True, read_only=True)  # lista de itens do pedido

    class Meta:
        model = Pedido
        fields = ['id', 'cliente', 'status', 'data_criacao', 'itens']
