<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Junior Food</title>
    <link rel="shortcut icon" href="./imgs/logo/juniorbest.png" type="image/x-icon">

    <!-- Incluindo CSS-->
    <?php include_once("componentes/include_css.html") ?>
</head>

<body>
    <?php
    

    include_once("componentes/header.html");

    include_once("componentes/slide.html");

    include_once("componentes/nosso-catalogo.html");

    include_once("componentes/bem_vindo.html");

    include_once("componentes/mapa.html");

    //include_once("componentes/header-bottom.html");

    include_once("componentes/carrinho-bottom.html");

    include_once("componentes/footer.html");

    include_once("componentes/whatsapp.php");
    ?>
</body>

<script>
    const swiper = new Swiper('.slide-home', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        centeredSlides: true,
        autoplay: true,
        delay: 3000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiper_empresa = new Swiper(".carrousel-produtos", {
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        autoplay: true,
        delay: 2000,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
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


    var swiper_empresa = new Swiper(".empresa-slide", {
        slidesPerView: 1,
        spaceBetween: 30,
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