import Link from "next/link";

export default async function GerenciarProduto (){


    const url = "http://localhost:8000/produtos";
        
    const response = await fetch(url, {
        cache: "no-store" // garante que os dados são sempre atualizados
    });

    const data = await response.json()



    return(
        <main>
            
          <h1 className="text-center font-bold text-3xl my-10">Gerenciamento Produtos</h1>

          <nav>
            <ul className="flex gap-5 justify-center">
              <li>
                <Link href="/">
                  <button className="text-center  rounded-md w-50 py-3 mb-20 text-bold bg-green-700
                  text-white hover:cursor-pointer hover:bg-green-900">
                  Home
                  </button>
                </Link>
              </li>
              <li>
                  <Link href="/dashboard/">
                    <button className="text-center rounded-md w-50 py-3 mb-20 text-bold bg-blue-700 
                    text-white hover:cursor-pointer hover:bg-blue-900">
                      Dashboard

                    </button>
                  </Link>
              </li>
            </ul>
          </nav>
          
          <article className="">

            {/* Verifica se tem produtos */}
            {data.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-2/3 m-auto gap-6">
                
                {data.map((produto) => (
                  <Link key={produto.id} href={`/dashboard/gerenciarProduto/${produto.id}`}>

                    <div
                      className="rounded-lg shadow-lg hover:shadow-2xl transition"
                    >
                      {/* Imagem */}
                      {produto.imagem && (
                        <img
                          src={produto.imagem}
                          alt={produto.nome}
                          className="w-full object-cover rounded"
                        />
                      )}

                      {/* Nome */}
                      <h2 className="text-2xl font-semibold mt-2 text-center">{produto.nome}</h2>

                      {/* Descrição */}
                      <p className="text-gray-600 text-sm mt-1 mx-5">
                        {produto.descricao}
                      </p>

                      {/* Preço */}
                      <p className="text-green-600 font-bold text-lg mx-5 text-end">
                        R$ {produto.preco}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p>Nenhum produto encontrado.</p>
            )}
          </article>
            
        </main>
    )
}