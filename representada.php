<?php

$prod = $_GET["representada"];

$desc = json_decode(file_get_contents("./data/representada/" . $prod . ".json"), true);

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vinhal Máquinas | <?php echo ucfirst($desc['representada']) ?></title>
    <link rel="shortcut icon" href="./imgs/logo/favicon.bmp" type="image/x-icon">

    <link rel="stylesheet" href="css/representada.css">
    <!-- Incluindo CSS-->
    <?php include_once("componentes/include_css.html") ?>
</head>

<body>
    <?php
    include_once("componentes/header.html");
    ?>


    <section class="representada container-fluid">
        <article class="row">
            <aside class="col-12 col-md-6 col-txt order-md-2">
                <a href="<?php echo $desc['site'] ?>" target="_blank"><img src="<?php echo $desc['img-logo'] ?>" alt="Foto <?php echo $desc['representada'] ?>"></a>

                <p><?php echo $desc['texto-1'] ?></p>

            </aside>
            <aside class="col-12 col-md-6 col-img order-md-1">
                <img src="<?php echo $desc['img-1'] ?>" alt="Foto <?php echo $desc['representada'] ?>">
            </aside>
        </article>


        <article class="row row-2">
            <aside class="col-12 col-md-12 col-txt">
                <div class="col-12 col-md-4">
                    <h3><i class="bi bi-bookmark-star-fill"></i> Valores </h3>
                    <ul>
                        <?php
                        foreach ($desc["texto-valores"] as $val) {
                            echo ("<li>" . $val . "</li>");
                        }
                        ?>
                    </ul>
                </div>
                
                <div class="col-12 col-md-4">
                    <img src="<?php echo $desc['img-2'] ?>" alt="Foto <?php echo $desc['representada'] ?>">
                </div>

                <div class="col-12 col-md-4">
                    <h3><i class="bi bi-clipboard2-data-fill"></i> Missão</h3>
                    <p><?php echo $desc['texto-missao'] ?></p>
                </div>
            </aside>
        </article>
    </section>








    <?php
    include_once($desc['produtos-da-marca']);

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