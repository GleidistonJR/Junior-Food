from django.db import models


class Ingrediente(models.Model):
    nome = models.CharField(max_length=100)
    preco = models.CharField(max_length=50)

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
    def descricao(self):
        # Monta a descrição como lista de ingredientes
        ingredientes_list = self.ingredientes.all()
        return ", ".join([ing.nome for ing in ingredientes_list])
    