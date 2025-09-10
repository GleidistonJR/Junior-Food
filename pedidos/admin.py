from django.contrib import admin
from .models import Cliente, Pedido, ItemPedido


# Customizar o admin do Pedido
class ItemPedidoInline(admin.TabularInline):
    model = ItemPedido
    extra = 1 # quantos itens extras aparecem para adicionar 

class PedidoAdmin(admin.ModelAdmin): 
    list_display = ('id', 'cliente', 'status', 'data_criacao') # colunas na lista
    list_filter = ('data_criacao', 'status') # filtros laterais
    inlines = [ItemPedidoInline]

admin.site.register(Cliente)
admin.site.register(Pedido, PedidoAdmin)
admin.site.register(ItemPedido)