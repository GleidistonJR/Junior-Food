<?php
   //MODIFICAÇÂO NECESSARIA!!
   //sera apenas guardado o ID do produto na variavel de sessão carrinho
   //Assim não sera necessario utilizar json, para o carrinho, e no final do pedido
   //fazer um codigo que buscara todos os ID do carrinho e preencher o pedido!

    session_start();

    $add = $_GET["add"];
    $addItem = json_decode(file_get_contents("./data/lanches/" . $add .".json"), true);


    // Verifica se o array já existe na sessão
    if (!isset($_SESSION['carrinho'])) {
        $_SESSION['carrinho'] = array(); // Se não existir, cria um array vazio
    }

    // Adiciona o novo item ao array
    array_push($_SESSION['carrinho'], $addItem);

    echo "Item adicionado com sucesso!";
    
    

    echo '<pre>';
    print_r($_SESSION['carrinho'])


?>
<html>
<meta http-equiv="refresh" content="1; URL='./catalogo.php'"/>
</html>