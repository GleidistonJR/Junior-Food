# carrinho/serializers.py
from rest_framework import serializers
from .models import Carrinho, CarrinhoItem
from cardapio.models import Ingrediente, Produto

class IngredienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingrediente
        fields = ["id", "nome", "preco"]

class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produto
        fields = ["id", "nome", "preco"]

class CarrinhoItemSerializer(serializers.ModelSerializer):
    produto = serializers.PrimaryKeyRelatedField(queryset=Produto.objects.all())
    adicionais = serializers.PrimaryKeyRelatedField(queryset=Ingrediente.objects.all(), many=True)

    class Meta:
        model = CarrinhoItem
        fields = ["id", "produto", "quantidade", "adicionais", "observacoes"]

class CarrinhoSerializer(serializers.ModelSerializer):
    itens = CarrinhoItemSerializer(many=True)

    class Meta:
        model = Carrinho
        fields = ["id", "criado_em", "itens"]
