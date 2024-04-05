<?php

    // Informações sobre o visitante
    $ip_address = $_SERVER['REMOTE_ADDR'];


    if(file_exists('carrinho'.$ip_address.'.json')){
        $arquivoJson = fopen('carrinho'.$ip_address.'.json', 'a');
        fwrite($arquivoJson, '}');
        fclose($arquivoJson);
    }else{
        echo 'Seu carrinho está vazio!';
    }

    
    
    echo '<pre>';
    $carrinho = json_decode(file_get_contents('carrinho'.$ip_address.'.json'),true);
    print_r($carrinho);
    


    // Verifica se os dados foram enviados pelo formulário
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Coleta os dados do endereço
        $rua = $_POST['rua'];
        $quadra = $_POST['quadra'];
        $lote = $_POST['lote'];
        $numero = $_POST['numero'];
        $complemento = $_POST['complemento'];
        $referencia = $_POST['referencia'];
        $setor = $_POST['setor'];

        //forma de pagamento
        $formaPagamento = $_POST['pagamento'];


        $enderecoCliente = 'Rua:%20'.$rua.'%0A';
        $enderecoCliente .= 'Quadra:%20'.$quadra.'%20Lote:%20'.$lote.'%20Número:%20'.$numero.'%0A';
        $enderecoCliente .= 'Complemento:%20'.$complemento.'%0A';
        $enderecoCliente .= 'Ponto%20de%20Referencia:%20'.$referencia.'%0A';
        $enderecoCliente .= 'Setor:%20'.$setor.'';
    }

       



    //criando variaveis para link formatado
    $data = date('Y-m-d H:i:s');
    $nomeCliente = 'Gleidiston';
    $celularCliente = '(62)994406991';
    //$enderecoCliente = 'Rua Cp 43, 001, Quadra: 37, Lote: 12, Carolina parque , Goiânia, GO, Ponto de Referência: Rua da igreja católica';
    $taxaEntrega = 3; 



    //Montando link

    //pedido data identificação
    $linkMensagem = 'Meu%20pedido%20';
    $linkMensagem .= $data . '%0A';
    
    //
    foreach($carrinho as $item){
        $linkMensagem .= $item['titulo'] . '%0A';
        $linkMensagem .= 'Quantidade:%20'.$item['quantidade'] . '%0A';
        $linkMensagem .= 'Valor:%20'. ($item['preco']*$item['quantidade']) . '%0A';
        $linkMensagem .= '----------------------------------%0A';
        $subtotal .= ($item['preco']*$item['quantidade']);
    };
    
    $linkMensagem .= 'Nome:%20'. $nomeCliente . '%0A';
    $linkMensagem .= '----------------------------------%0A';
    $linkMensagem .= 'Celular:%20'. $celularCliente . '%0A';
    $linkMensagem .= '----------------------------------%0A';
    $linkMensagem .= 'Forma%20de%20pagamento:%20'. $formaPagamento . '%0A';
    $linkMensagem .= '----------------------------------%0A';
    $linkMensagem .= 'Endereço:%0A'. $enderecoCliente . '%0A';
    $linkMensagem .= '----------------------------------%0A';
    $linkMensagem .= 'Subtotal:%20'. $subtotal . '%0A';
    $linkMensagem .= 'Taxa%20de%20Entrega:%20'. $taxaEntrega . '%0A';
    $linkMensagem .= 'Total:%20'. $subtotal+$taxaEntrega . '%0A';
    $linkMensagem .= '%0A';
    $linkMensagem .= 'Obrigado pelo seu pedido!';
    
    
    
?>

<html>
    <meta http-equiv="refresh" content="0; URL='https://api.whatsapp.com/send/?phone=5562994406991&text=<?php echo $linkMensagem?>&type=phone_number&app_absent=0"/>



<!--<meta http-equiv="refresh" content="0; URL='./catalogo.php'"/> 
-->
</html>

<?php
    unlink('carrinho'.$ip_address.'.json')
?>