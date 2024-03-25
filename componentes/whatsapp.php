<?php 
    $pedido = json_decode(file_get_contents('pedido.json'), true);
    
    echo'<a href="https://api.whatsapp.com/send/?phone=5562994406991&text=' . $pedido['titulo'] . '&type=phone_number&app_absent=0" target="_blank"><img class="whatsapp" src="imgs/icons/whatsapp.png" alt="whatsapp icon-link"></a>';
?>
