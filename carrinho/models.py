from django.db import models
from cardapio.models import Produto, Ingrediente  # aproveitando seu app cardapio

class Carrinho(models.Model):
    session_id = models.CharField(max_length=100, unique=True)
    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Carrinho {self.session_id}"

class CarrinhoItem(models.Model):
    carrinho = models.ForeignKey(Carrinho, on_delete=models.CASCADE, related_name="itens")
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    quantidade = models.PositiveIntegerField(default=1)
    adicionais = models.ManyToManyField(Ingrediente, blank=True)  # ingredientes extras
    observacoes = models.TextField()

    def __str__(self):
        return f"{self.quantidade}x {self.produto.nome}"