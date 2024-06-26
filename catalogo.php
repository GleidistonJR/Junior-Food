<?php
session_start();

$filtro = $_GET["filtro"];


?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Junior Food | Catalogo</title>
    <link rel="shortcut icon" href="./imgs/logo/favicon.bmp" type="image/x-icon">

    <!-- Incluindo CSS-->
    <?php include_once("componentes/include_css.html") ?>
    <link rel="stylesheet" href="css/catalogo.css">
</head>

<body>
    <?php
    include_once("componentes/header.html");
    ?>


    <nav class="col-12 col-md-12 col-filtro " id="nav-filtro">
        <a href="?filtro=todos">Todos</a>
        <a href="?filtro=hamburgueres">Hamburguer</a>
        <a href="?filtro=pizzas">Pizza</a>
    </nav>

    <section class="catalogo container-fluid">

        <h1 class='txt-center'>Produtos</h1>

            
        <article class="row row-prod">
            <?php



            $pastas = array("data/lanches/hamburgueres/", "data/lanches/pizzas/");

            foreach ($pastas as $pasta) {
                $arquivos = glob("$pasta{*.json}",  GLOB_BRACE);

                foreach ($arquivos as $arquivo) {
                    $produto = json_decode(file_get_contents($arquivo), true);
                    if ($filtro == "todos" || $filtro == $produto['categoria-filtro'] || $filtro == $produto['categoria-filtro']) {
                        echo '                
                        <aside class="col-12 d-flex col-prod">
                            <div class="col-img col-3">
                                <img class="img-fluid" src="'.$produto["imagem-principal"].'" width="100%" alt="">
                            </div>
                            <div class="col-txt col-9 d-flex">
                                <p class="col-9 ingredientes">'; 
                                foreach ($produto["ingredientes"] as $imprimir){
                                    echo ''.$imprimir. ', ' ;
                                };
                                echo' </p>
                                <div class="col-3">
                                <h3>'.$produto["preco"].'</h3>
                                <a href="./adicionar.php?add=' . $produto['categoria-filtro'] . '/' . $produto["nome-arquivo"] . '"><i class="bi bi-cart-plus-fill"></i></a>
                                </div>
                            </div>
                        </aside>
                        ';
                    }

    //include_once("componentes/whatsapp.php");
                }
            }

            /*if(!file_exists('arraypedido.json')){
                $arquivoJson = fopen('arraypedido.json', 'a');
                fwrite($arquivoJson,'{');
                fclose($arquivoJson);
            }*/

            ?>

        </article>




    </section>


    <?php
    include_once("componentes/carrinho-bottom.php");
    include_once("componentes/footer.html");

    ?>


</body>


</html>