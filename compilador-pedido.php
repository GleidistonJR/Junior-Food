<?php
    $carrinho = json_decode(file_get_contents('data/lanches/hamburgueres/hamburguer-gemeos.json'), true);


echo '<pre>';
    $arrayPedido = array();
    $arrayPedido = $carrinho;
    $pedidoFormatado = " ";
    foreach($arrayPedido as $item){
        if //if para pegar espaço nos nomes
        $pedidoFormatado .= $item;
        $pedidoFormatado .= "%20";
        //$pedidoFormatado = substr_replace($pedidoFormatado, $item,-1);
    };
    


    //Guardando array em json
$arquivoJson = fopen('arraypedido.json', 'w');
fwrite($arquivoJson, json_encode($arrayPedido));
fclose($arquivoJson);

print_r($pedidoFormatado);

