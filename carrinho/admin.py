# carrinho/admin.py
from django.contrib import admin
from .models import Carrinho, CarrinhoItem

@admin.register(Carrinho)
class CarrinhoAdmin(admin.ModelAdmin):
    list_display = ["id", "criado_em"]

@admin.register(CarrinhoItem)
class CarrinhoItemAdmin(admin.ModelAdmin):
    list_display = ["id", "carrinho", "produto", "quantidade"]
    filter_horizontal = ["adicionais"]  # facilita adicionar múltiplos adicionais
