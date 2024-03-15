<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vinhal | Empresa</title>
    <link rel="shortcut icon" href="./imgs/logo/favicon.bmp" type="image/x-icon">

    <!-- Incluindo CSS-->
    <?php include_once("componentes/include_css.html") ?>
</head>

<body>
    <?php
    include_once("componentes/header.html");
    ?>


    <section class="empresa-pg container-fluid">
        <article class="row">
            <aside class="col-12  col-txt">
                <h1>Conheça a Vinhal</h1>
                <p>
                    A empresa Vinhal foi aberta dia 8 de outubro de 2008
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, perspiciatis? Mollitia neque molestiae vitae dolores at, sit consequuntur repellat unde enim iusto, animi incidunt praesentium nihil iure corrupti blanditiis consequatur.
                </p>
            </aside>
        </article>

    </section>


    <section class="estatisticas container-fluid">
        <article class="row">
            <aside class="col-4">
                <h2>+4</h2>
                <h3>Representadas</h3>
            </aside>
            <aside class="col-4">
                <h2>+50</h2>
                <h3>Produtos</h3>
            </aside>
            <aside class="col-4">
                <h2>+25</h2>
                <h3>Anos de mercado</h3>
            </aside>
        </article>
    </section>




    <?php
    include_once("componentes/empresa.html");

    include_once("componentes/bem_vindo.html");

    include_once("componentes/mapa.html");

    include_once("componentes/footer.html");

    include_once("componentes/whatsapp.html");
    ?>
</body>

<script>
    var swiper_empresa = new Swiper(".empresa-slide", {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 720px
            720: {
                slidesPerView: 3,
                spaceBetween: 30
            },
        }
    });
</script>

</html>