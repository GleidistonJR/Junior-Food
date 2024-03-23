<?php

$filtro = $_GET["filtro"];


?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vinhal | Produtos</title>
    <link rel="shortcut icon" href="./imgs/logo/favicon.bmp" type="image/x-icon">

    <!-- Incluindo CSS-->
    <?php include_once("componentes/include_css.html") ?>
    <link rel="stylesheet" href="css/catalogo.css">
</head>

<body>
    <?php
    include_once("componentes/header.html");
    ?>



    <section class="catalogo container-fluid">
        <nav class="col-12 col-md-12 col-filtro " id="nav-filtro">
            <a href="?filtro=todos">Todos</a>
            <a href="?filtro=hamburguer">Hamburguer</a>
            <a href="?filtro=pizza">Pizza</a>
        </nav>

        <h1 class='txt-center'>Produtos</h1>

            
        <article class="row row-prod">
            <?php



            $pastas = array("data/lanches/hamburgueres/", "data/lanches/pizzas/");

            foreach ($pastas as $pasta) {
                $arquivos = glob("$pasta{*.json}",  GLOB_BRACE);

                foreach ($arquivos as $arquivo) {
                    $produto = json_decode(file_get_contents($arquivo), true);
                    if ($filtro == "todos" || $filtro == $produto['categoria-filtro'] || $filtro == $produto['CategoriaFiltro']) {
                        echo '                
                        <aside class="col-12 d-flex">
                            <div class="col-img col-3">
                                <img class="img-fluid" src="'.$produto["imagem-principal"].'" width="100%" alt="">
                            </div>
                            <div class="col-txt col-9 d-flex">
                                <p class="col-8">'; 
                                foreach ($produto["ingredientes"] as $imprimir){
                                    echo ''.$imprimir. ', ' ;
                                };
                                echo' </p>
                                <h3 class="col-4">'.$produto["preco"].'</h3>
                            </div>
                        </aside>
                        ';
                    }

    include_once("componentes/whatsapp.php");
                }
            }


            ?>

        </article>




    </section>


    <?php
    include_once("componentes/footer.html");

    ?>


</body>


</html>