from rest_framework import serializers
from cardapio.models import Produto, Ingrediente

class IngredienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingrediente
        fields = '__all__'


class ProdutoSerializer(serializers.ModelSerializer):
    ingredientes = serializers.PrimaryKeyRelatedField(
        queryset=Ingrediente.objects.all(),
        many=True
    )
    # Para leitura: ingredientes detalhados (opcional)
    ingredientes_detalhe = IngredienteSerializer(
        source='ingredientes', many=True, read_only=True
    )

    class Meta:
        model = Produto
        fields = "__all__"