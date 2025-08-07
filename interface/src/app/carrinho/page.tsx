export default function Carrinho() {
    return (
        <article>
            <h1 className="text-center mt-10 font-bold text-3xl">Carrinho</h1>

            <div className="flex justify-between items-center bg-gray-300 my-5 mx-2 p-2 rounded-lg">
                <img className="w-30 object-contain rounded-lg" src="images/hamburguer.jpeg" alt="Imagem produto" />
                <div className="flex flex-col text-center mx-3">
                    <h3 className="font-semibold text-xl">Titulo Produto</h3>
                    <p className="text-start">
                        Descripiton: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, pariatur! Eum sunt blanditiis sequi error atque iure expedita ex cum voluptatum. Explicabo?
                    </p>
                </div>
            </div>
        </article>
    )
}