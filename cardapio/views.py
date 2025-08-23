from rest_framework import viewsets
from cardapio.models import Produto, Ingrediente
from cardapio.serializers import ProdutoSerializer, IngredienteSerializer
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser

from django.shortcuts import render, get_object_or_404
#from cardapio.models import Cardapio

class IngredienteViewSet(viewsets.ModelViewSet):
    queryset = Ingrediente.objects.all().order_by('nome')
    serializer_class = IngredienteSerializer
    
class ProdutoViewSet(viewsets.ModelViewSet):
    queryset = Produto.objects.all().order_by('-id')
    serializer_class = ProdutoSerializer
    parser_classes = [MultiPartParser, FormParser, JSONParser] # para receber FormData
