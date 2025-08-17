import Link from "next/link"

export default function CadastrarProduto (){

    return(
        <main>
            <h1 className="text-center mt-10 font-bold text-5xl">Cadastrar Produto</h1>

            <form action="http://127.0.0.1:8000/produtos/" method="POST" encType="multipart/form-data"
             className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">

                <div className="mb-4">
                    <label htmlFor="nomeProduto" className="block text-gray-700 font-medium mb-2">Nome</label>
                    <input className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none 
                    focus:ring-2 focus:ring-blue-500" type="text" id="nomeProduto" name="nome" />
                </div>

                <div className="mb-4">
                    <label htmlFor="precoProduto" className="block text-gray-700 font-medium mb-2">Descrição</label>
                    <input className="w-full p-2 py-5 border border-gray-300 rounded-lg focus:outline-none 
                    focus:ring-2 focus:ring-blue-500" type="text" id="descricaoProduto" name="descricao" />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="precoProduto" className="block text-gray-700 font-medium mb-2">Preço</label>
                    <input className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none 
                    focus:ring-2 focus:ring-blue-500" type="text" id="precoProduto" name="preco" />
                </div>
               
                <div className="mb-4">
                    <label htmlFor="imagemProduto" className="block text-gray-700 font-medium mb-2">Imagem</label>
                    <input className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none 
                    focus:ring-2 focus:ring-blue-500" type="file" id="imagemProduto" name="imagem" />
                </div>                

                <ul className="flex gap-5 justify-center">
                    <li>
                        <Link href="/dashboard/">
                            <button className="text-center  rounded-md w-50 py-3 mb-20 text-bold bg-gray-500 text-white
                            hover:cursor-pointer hover:bg-gray-600" >
                                    Voltar
                            </button>
                        </Link>
                    </li>
                    <li>
                        <button className="text-center rounded-md w-50 py-3 mb-20 text-bold bg-green-700 text-white
                        hover:cursor-pointer hover:bg-green-800" type="submit">
                                Cadastrar
                        </button>
                    </li>
                </ul>
            </form>
            
        </main>
    )
}