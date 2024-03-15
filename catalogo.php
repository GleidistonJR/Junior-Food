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
    <link rel="stylesheet" href="css/produtos.css">
</head>

<body>
    <?php
    include_once("componentes/header.html");
    ?>


        <article class="row filtro">
            <a class='d-block d-md-none btn-filtro' id="btn-filtro" href="#" >Filtros <i class="bi bi-caret-down-fill"></i></a>
            <nav class="col-12 col-md-12 col-filtro d-none d-md-block " id="nav-filtro">
                <a href="?filtro=todos">Todos</a>
                <a href="?filtro=indumak">Indumak</a>
                <a href="?filtro=markem">Markem</a>
                <a href="?filtro=schulz">Schulz</a>
                <a href="?filtro=garten">garten</a>
                <a href="?filtro=ensacamento">Ensacamento</a>
                <a href="?filtro=empacotadora">Empacotadora</a>
                <a href="?filtro=impressao">Impressão</a>
                <a href="?filtro=laser">Laser</a>
                <a href="?filtro=compressor">Compressor</a>
            </nav>
        </article>
    <section class="produtos container-fluid">

        <h1>Produtos</h1>



        <article class="row row-prod">
            <?php



            $pastas = array("data/produtos/indumak/", "data/produtos/markem/", "data/produtos/schulz/", "data/produtos/garten/");

            foreach ($pastas as $pasta) {
                $arquivos = glob("$pasta{*.json}",  GLOB_BRACE);

                foreach ($arquivos as $arquivo) {
                    $produto = json_decode(file_get_contents($arquivo), true);
                    if ($filtro == $produto['representada'] || $filtro == "todos" || $filtro == $produto['Categoria'] || $filtro == $produto['CategoriaFiltro']) {
                        echo '                
                        <div class="card">
                        <img src="' . $produto["ImagemPrincipal"] . '" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">' . $produto["Titulo"] . '</h5>
                        <p class="card-text">' . $produto["Categoria"] . '</p>
                        <a href="produto.php?produto=' . $produto["representada"] . '/' . $produto["Nome"] . '" class="ver_mais">Ver Mais Detalhes</a>
                                </div>
                            </div>
                        ';
                    }
                }
            }


            ?>

        </article>




    </section>


    <?php
    include_once("componentes/footer.html");

    include_once("componentes/whatsapp.html");
    ?>


</body>

<script>
const btnfiltro = document.querySelector('#btn-filtro')
const nav_filtro = document.querySelector('#nav-filtro')

btnfiltro.addEventListener("click", function() {
    nav_filtro.classList.toggle('aparecer-filtro')
      
    })
</script>

</html>