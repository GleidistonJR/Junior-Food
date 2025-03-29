<section class="carrinho-bottom container-fluid">
    <article class="row">
        <a href="?enviar-msg.php" class="row" data-bs-target="#exampleModal" data-bs-toggle="modal" target="_blank">
        <div class="col col-txt">
            <!-- Button trigger modal -->
             <p>Carrinho</p>

            </div>
            
            <div class="col col-icon">
                <i class="bi bi-cart-fill"></i>
            </div>
        </a>

    </article>
</section>
<div class="modal fade modal-carrinho" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Carrinho</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="container">
                    <form id="addressForm" class="row" action="enviar-msg.php" method="post">
                        <?php
                        $ip_address = $_SERVER['REMOTE_ADDR'];
                        $carrinho = json_decode(file_get_contents('carrinho'.$ip_address.'.json'), true);
                            foreach($carrinho as $item){
                                echo'<h3>item</h3>';
                            };
                        ?>

                        <h3>Informações Pessoais</h3>
                        
                        <div class="col-12">
                            <label for="nome" class="form-label">Nome:</label>
                            <input type="text" class="form-control" id="nome" name="nome" required>
                        </div>
                        <div class="col-12">
                            <label for="tel" class="form-label">Telefone:</label>
                            <input type="number" class="form-control" id="tel" name="tel" required>
                        </div>
                        
                        <h3>Coleta de Endereço</h3>

                        <div class="col-6">
                            <label for="cep" class="form-label">Cep:</label>
                            <input type="number" class="form-control" id="cep" name="cep" required>
                        </div>
                        <div class="col-6">
                            <label for="rua" class="form-label">Rua:</label>
                            <input type="text" class="form-control" id="rua" name="rua" required>
                        </div>
                        
                        <div class="col-5">
                            <label for="quadra" class="form-label ">Quadra:</label>
                            <input type="number" class="form-control" id="quadra" name="quadra" required>
                        </div>
                        
                        <div class="col-4">
                            <label for="lote" class="form-label">Lote:</label>
                            <input type="number" class="form-control" id="lote" name="lote" required>
                        </div>
                        
                        <div class="col-3">
                            <label for="numero" class="form-label">Número:</label>
                            <input type="number" class="form-control" id="numero" name="numero">
                        </div>
                        
                        <div class="col-12">
                            <label for="complemento" class="form-label">Complemento:</label>
                            <input type="text" class="form-control" id="complemento" name="complemento">
                        </div>
                        
                        <div class="col-12">
                            <label for="referencia" class="form-label">Ponto de Referência:</label>
                            <input type="text" class="form-control" id="referencia" name="referencia">
                        </div>
                        
                        <div class="col-12">
                            <label for="setor" class="form-label">Setor:</label>
                            <input type="text" class="form-control" id="setor" name="setor" required>
                        </div>
                        
                        
                        <div class="col-12">
                            <input class="form-check-input" type="radio" name="pagamento" id="pix" value="Pix">
                            <label class="form-check-label" for="flexRadioDefault1">Pix</label><br>
                            
                            
                            <input class="form-check-input" type="radio" name="pagamento" id="dinheiro" value="Dinheiro">
                            <label class="form-check-label" for="flexRadioDefault2">Dinheiro</label><br>
                            
                            
                            <input class="form-check-input" type="radio" name="pagamento" id="cartao" value="Cartão"
                            checked>
                            <label class="form-check-label" for="flexRadioDefault2">Cartão</label><br>
                        </div>
                            
                            


                        <button class="enviar" type="submit">Enviar Pedido <i class="bi bi-whatsapp"></i></button>
                    </form>
                </div>
            </div>
            <!--<div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>-->
        </div>
    </div>
</div>