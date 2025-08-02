from django.shortcuts import render, get_object_or_404
#from cardapio.models import Cardapio

# Create your views here.

def index(request):

   
    return render(
        request,
        'cardapio/index.html',
    )
