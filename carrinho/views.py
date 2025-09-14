from rest_framework import viewsets
from .models import Carrinho, CarrinhoItem
from .serializers import CarrinhoSerializer, CarrinhoItemSerializer

class CarrinhoViewSet(viewsets.ModelViewSet):
    queryset = Carrinho.objects.prefetch_related("itens__adicionais")
    serializer_class = CarrinhoSerializer

class CarrinhoItemViewSet(viewsets.ModelViewSet):
    queryset = CarrinhoItem.objects.all()
    serializer_class = CarrinhoItemSerializer

    def perform_create(self, serializer):
        # Pega a session do request
        session_id = self.request.session.session_key
        if not session_id:
            self.request.session.create()  # cria nova session
            session_id = self.request.session.session_key

        # Recupera ou cria o carrinho associado à session
        carrinho, created = Carrinho.objects.get_or_create(session_id=session_id)

        # Salva o item vinculado ao carrinho
        serializer.save(carrinho=carrinho)