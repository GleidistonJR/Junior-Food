<?php
    $carrinho = json_decode(file_get_contents('data/lanches/hamburgueres/hamburguer-gemeos.json'), true);


echo '<pre>';
    $arrayPedido = array();
    //Existe duas formas de adiconar elemento ao array
    //Primeira por funçao
    array_push($arrayPedido, $carrinho['titulo']);
    //Segunda por deixar o indice vazio, sera adiconada na ultima posiçao
    $arrayPedido[] = $carrinho['preco']; 



    //Guardando array em json
$arquivoJson = fopen('pedido.json', 'w');
fwrite($arquivoJson, json_encode($arrayPedido));
fclose($arquivoJson);

print_r($carrinho);
