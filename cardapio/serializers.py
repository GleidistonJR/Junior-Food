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
    
    class Meta:
        model = Produto
        fields = '__all__'