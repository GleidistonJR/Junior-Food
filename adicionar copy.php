<?php
    $add = $_GET["add"];
    $addItem = json_decode(file_get_contents("./data/lanches/" . $add .".json"), true);
    
    // Informações sobre o visitante
    $ip_address = $_SERVER['REMOTE_ADDR'];

    //Guardando array em json
    
    if(file_exists('carrinho'.$ip_address.'.json')){
        
        $arquivoJson = fopen('carrinho'.$ip_address.'.json', 'a');
        fwrite($arquivoJson, ',');
        fwrite($arquivoJson, '"'.$addItem["nome-arquivo"].'" : ' . json_encode($addItem) . '');
        
            
    }else{
           
        $arquivoJson = fopen('carrinho'.$ip_address.'.json', 'a');
        fwrite($arquivoJson,'{');
        fwrite($arquivoJson,'"'.$addItem["nome-arquivo"].'" : ' . json_encode($addItem) . '');
          
    }
    
    fclose($arquivoJson);

    print_r($addItem);
?>
<html>
<meta http-equiv="refresh" content="0; URL='./catalogo.php'"/>
</html>

