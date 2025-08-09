from rest_framework import viewsets
from .models import Produto
from .serializers import ProdutoSerializer

from django.shortcuts import render, get_object_or_404
#from cardapio.models import Cardapio

class ProdutoViewSet(viewsets.ModelViewSet):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer


def index(request):

   
    return render(
        request,
        'cardapio/index.html',
    )
