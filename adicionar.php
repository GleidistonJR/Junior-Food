<?php
    $add = $_GET["add"];
    $addItem = json_decode(file_get_contents("./data/lanches/" . $add .".json"), true);
    
    
    //Guardando array em json
    
    if(file_exists('arraypedido.json')){
        
        $arquivoJson = fopen('arraypedido.json', 'a');
        fwrite($arquivoJson, ',');
        fwrite($arquivoJson, '"'.$addItem["nome-arquivo"].'" : ' . json_encode($addItem) . '');
        
            
    }else{
           
        $arquivoJson = fopen('arraypedido.json', 'a');
        fwrite($arquivoJson,'{');
        fwrite($arquivoJson,'"'.$addItem["nome-arquivo"].'" : ' . json_encode($addItem) . '');
          
    }
    
    fclose($arquivoJson);

    print_r($addItem);
?>
<html>
<meta http-equiv="refresh" content="0; URL='./catalogo.php'"/>
</html>

