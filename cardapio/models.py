from django.db import models

class Produto(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    preco = models.CharField(max_length=50)
    imagem = models.ImageField(upload_to='produtos/')

class Ingrediente(models.Model):
    nome = models.CharField(max_length=100)
    preco = models.CharField(max_length=50)

    def __str__(self):
        return self.nome