<?php

echo ('
    <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    ' . $desc["sanfona1"] . '
</button>
</h2>
<div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
    <div class="accordion-body">
        <p>
            ' . $desc["txt1"] . '
        </p>
    </div>
</div>
</div>');

if ($desc["sanfona2"]) {
    echo ('
<div class="accordion-item">
    <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            ' . $desc["sanfona2"] . '
        </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
            <p>');

if ($desc["representada"] == "schulz") {
    echo ('
    <!-- Button trigger modal -->
    <a class="btn-variacoes" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Ver Variações/Ficha-Tecnica
    </a>
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Variações</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <img src="' . $desc["txt2"] . '" width="100%" alt="">
            </div>
            <div class="modal-footer">
            <a href="' . $desc["txt2"] . '" target="_blank" class="btn-amarelo">Ver em guia separada</a>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>
            </div>
        </div>
      </div>
    </div>
    
    ');
} else {
    echo ($desc["txt2"]);
};
}
echo ('
            </p>
        </div>
    </div>
</div>

</div>




')
?>