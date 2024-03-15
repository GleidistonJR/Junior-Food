<?php

$prod = $_GET["produto"];

$desc = json_decode(file_get_contents("./data/produtos/" . $prod . ".json"), true);

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vinhal | <?php echo $desc["Titulo"]; ?></title>
    <link rel="shortcut icon" href="imgs/logo/favicon.bmp" type="image/x-icon">
    <link rel="stylesheet" href="css/produto.css">

    <?php
    include_once("componentes/include_css.html");
    ?>
</head>

<body>
    <?php
    include_once("componentes/header.html");
    ?>
    <section class="produto container-fluid">
        <article class="row">
            <aside class="col-12 col-md-4 col-img">
                <img src="<?php echo $desc["ImagemPrincipal"]; ?>" alt="">
            </aside>
            <aside class="col-12 col-md-6 col-txt">
                <div class="tit">
                    <h2 class="titulo"><?php echo $desc["Titulo"]; ?></h2>
                    <h3 class="categoria"><?php echo $desc["Categoria"]; ?></h3>
                </div>
                <p class="subtitulo"><?php echo $desc["Subtitulo"]; ?></p>
                <!--<a href="https://wa.me//5563981393300?" target="_blank" class="btn-orcamento-amarelo">Fale Conosco <i class="bi bi-whatsapp"></i></a>-->


                <?php
                if ($desc["sanfona"] == "true")
                    include_once("componentes/sanfona_item.php");
                echo ('
                <a href="' . $desc["pdf"] . '" target="_blank" class="btn-orcamento-amarelo">Baixar PDF</a>
                ')
                ?>

            </aside>
        </article>

    </section>
    <?php



    include_once($desc["mais"]);

    include_once("componentes/bem_vindo.html");

    include_once("componentes/footer.html");

    include_once("componentes/whatsapp.html");
    ?>
</body>

<script>
    var swiper_empresa = new Swiper(".mais-produtos-slide", {
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        autoplay: true,
        delay: 2000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 720px
            1370: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            720: {
                slidesPerView: 3,
                spaceBetween: 30
            },
        }
    });
</script>

</html>