from rest_framework import viewsets
from cardapio.models import Produto, Ingrediente
from cardapio.serializers import ProdutoSerializer, IngredienteSerializer

from django.shortcuts import render, get_object_or_404
#from cardapio.models import Cardapio

class IngredienteViewSet(viewsets.ModelViewSet):
    queryset = Ingrediente.objects.all()
    serializer_class = IngredienteSerializer
    
class ProdutoViewSet(viewsets.ModelViewSet):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer



def index(request):
  
    return render(
        request,
        'cardapio/index.html',
    )
