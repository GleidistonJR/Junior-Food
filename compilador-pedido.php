<?php
    $add = $_GET["add"];
    $addItem = json_decode(file_get_contents("./data/lanches/" . $add .".json"), true);
    
    $arrayPedido = array();
    array_push($arrayPedido, json_decode(file_get_contents("./data/lanches/" . $add .".json"), true));
    array_push($arrayPedido, $addItem);
    
    /*    $pedidoFormatado = " ";
    
    foreach($arrayPedido as $item){
        if ($item == " "){//if para pegar espaço nos nomes
            $pedidoFormatado .= "%20";        
        }
        $pedidoFormatado .= $item;
        //$pedidoFormatado = substr_replace($pedidoFormatado, $item,-1);
    };*/
        
    
    //Guardando array em json
    
    $arquivoJson = fopen('arraypedido.json', 'w');
    fwrite($arquivoJson, json_encode($arrayPedido));
    fclose($arquivoJson);

    print_r($arrayPedido);
?>
<html>
<meta http-equiv="refresh" content="0; URL='./catalogo.php'"/>
</html>

