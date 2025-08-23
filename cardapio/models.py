from django.db import models


class Ingrediente(models.Model):
    nome = models.CharField(max_length=100)
    preco = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return self.nome
    
class Produto(models.Model):
    nome = models.CharField(max_length=100)
    preco = models.CharField(max_length=50)
    imagem = models.ImageField(upload_to='produtos/')
    ingredientes = models.ManyToManyField(Ingrediente, related_name="produtos")

    def __str__(self):
        return self.nome
    
    @property
    def descricao(self) -> str:
        # útil para exibição sem salvar texto redundante no banco
        return ', '.join(self.ingredientes.values_list('nome', flat=True))