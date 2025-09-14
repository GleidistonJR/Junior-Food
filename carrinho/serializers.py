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
        fields = ["id", "nome", "preco", 'imagem']


class CarrinhoItemSerializer(serializers.ModelSerializer):
    # Aqui dizemos: no POST, esperamos IDs
    produto = serializers.PrimaryKeyRelatedField(queryset=Produto.objects.all())
    adicionais = serializers.PrimaryKeyRelatedField(queryset=Ingrediente.objects.all(), many=True)

    def to_representation(self, instance):
            # 1. Pega a representação padrão (que teria só os IDs)
            representation = super().to_representation(instance)

            # 2. Substitui o campo 'produto' que era só um ID
            # pelo resultado do ProdutoSerializer
            representation['produto'] = ProdutoSerializer(instance.produto).data

            # 3. Substitui o campo 'adicionais' que era só [2, 4]
            # pela lista expandida com todos os dados dos adicionais
            representation['adicionais'] = IngredienteSerializer(instance.adicionais.all(), many=True).data

            # 4. Retorna o JSON final ajustado
            return representation
    class Meta:
        model = CarrinhoItem
        fields = ['id', 'produto', 'quantidade', 'adicionais', 'observacoes']


class CarrinhoSerializer(serializers.ModelSerializer):
    itens = CarrinhoItemSerializer(many=True)

    class Meta:
        model = Carrinho
        fields = "__all__"
