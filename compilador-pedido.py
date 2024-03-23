
import json


testevariavel = 'Meu pedido 7535291 - 16/10/2023\nGêmeos\n1x Hamb, Bovino Caseiro - 100g, - R$25,00\n\nQuantidade: --\nValor: R$25,00\n------------------------------\n\nNome: Gleidiston\n\n------------------------------\nCelular: (47) 98803-7520\n------------------------------\nFormas de Pagamento: Dinheiro\n------------------------------\nEndereço: Rua Cp 43, 001, Quadra: 37, Lote: \n12, Carolina parque , Goiânia, GO, \nPonto de Referência: Rua da igreja católica \n\n------------------------------\nSubtotal: R$25,00\nDesconto: R$0,00\nTaxa de entrega: R$2,00\nValor Total: R$27,00\nTroco para: R$50,00\n\nhttps://tioslanches.gynfood.com.br/r/ccf9189f-6c8b-11ee-b5b3-0e69c27a4a13\n\nObrigado!'


texto_formatado = ''


for caracter in testevariavel:
    if caracter == ' ':
        texto_formatado += '%20'   

    elif caracter == '\n':
        texto_formatado += '%0A'   
    else :
        texto_formatado += caracter
    

with open('/media/gjr-agroiot/HD/web/Junior-Food/pedido.json', 'w+', encoding='utf8') as arquivo:
    json.dump(texto_formatado,arquivo,ensure_ascii=False,indent=2,)


'''

Meu pedido #7535291 - 16/10/2023

Gêmeos
1x Hamb, Bovino Caseiro - 100g, - R$25,00

Quantidade: --
Valor: R$25,00
------------------------------

Nome: Gleidiston 
------------------------------
Celular: (47) 98803-7520
------------------------------
Formas de Pagamento: Dinheiro
------------------------------
Endereço: Rua Cp 43, 001, Quadra: 37, Lote: 12, Carolina parque , Goiânia, GO, 
Ponto de Referência: Rua da igreja católica 
------------------------------
Subtotal: R$25,00
Desconto: R$0,00
Taxa de entrega: R$2,00
Valor Total: R$27,00
Troco para: R$50,00

https://tioslanches.gynfood.com.br/r/ccf9189f-6c8b-11ee-b5b3-0e69c27a4a13

Obrigado!
'''