<?php



    if(file_exists('arraypedido.json')){
        $arquivoJson = fopen('arraypedido.json', 'a');
        fwrite($arquivoJson, '}');
        fclose($arquivoJson);
    }else{
        echo 'Seu carrinho está vazio!';
    }

    
    
    echo '<pre>';
    $carrinho = json_decode(file_get_contents("arraypedido.json"),true);
    print_r($carrinho);
    

    /*    $pedidoFormatado = " ";
    
    foreach($arrayPedido as $item){
        if ($item == " "){//if para pegar espaço nos nomes
            $pedidoFormatado .= "%20";        
        }
        $pedidoFormatado .= $item;
        //$pedidoFormatado = substr_replace($pedidoFormatado, $item,-1);
    };*/
        
    
    
?>
<html>
<meta http-equiv="refresh" content="0; URL='./catalogo.php'"/>
</html>