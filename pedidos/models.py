from django.db import models
from cardapio.models import Produto

    
class Cliente(models.Model):
    nome = models.CharField(max_length=100)
    telefone = models.CharField(max_length=20)
    endereco = models.TextField()

    def __str__(self):
        return self.nome
    
class Pedido(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, related_name="pedidos")
    data_criacao = models.DateTimeField(auto_now_add=False)
    status = models.CharField(
        max_length=20,
        choices=[
            ("pendente", "Pendente"),
            ("em_andamento", "Em andamento"),
            ("entregue", "Entregue"),
            ("cancelado", "Cancelado"),
        ],
        default="pendente"
    )

    def __str__(self):
        return f'Pedido #{self.id} - {self.cliente.nome}'

class ItemPedido(models.Model):
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE, related_name="itens")
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    quantidade = models.PositiveIntegerField(default=1)
    preco_unitario = models.DecimalField(max_digits=8, decimal_places=2)

    def subtotal(self):
        return self.quantidade * self.preco_unitario

    def __str__(self):
        return f"{self.quantidade}x {self.produto.nome} (Pedido {self.pedido.id})"