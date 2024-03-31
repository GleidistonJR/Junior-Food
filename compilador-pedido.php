<?php
    $carrinho = json_decode(file_get_contents('data/lanches/hamburgueres/hamburguer-gemeos.json'), true);


echo '<pre>';
    $arrayPedido = array();
    $arrayPedido = $carrinho;
    $pedidoFormatado = " ";
    foreach($arrayPedido as $item){
        if ($item == " "){//if para pegar espaço nos nomes
            $pedidoFormatado .= "%20";        
        }
        $pedidoFormatado .= $item;
        //$pedidoFormatado = substr_replace($pedidoFormatado, $item,-1);
    };
    


    //Guardando array em json
$arquivoJson = fopen('arraypedido.json', 'w');
fwrite($arquivoJson, json_encode($pedidoFormatado));
fclose($arquivoJson);

print_r($pedidoFormatado);
?>
<html>
<meta http-equiv="refresh" content="0; 
URL='catalogo.php '"/>
</html>

