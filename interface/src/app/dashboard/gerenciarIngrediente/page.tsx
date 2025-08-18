interface Ingrediente {
  id: number;
  nome: string;
  preco: string;
  imagem?: string;
}

import Link from "next/link";

export default async function Gerenciaringrediente (){


    const url = "http://localhost:8000/ingredientes";
        
    const response = await fetch(url, {
        cache: "no-store" // garante que os dados são sempre atualizados
    });

    const data: Ingrediente[] = await response.json()



    return(
        <main>
            
          <h1 className="text-center font-bold text-3xl my-10">Gerenciamento ingredientes</h1>

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

            {/* Verifica se tem ingredientes */}
            {data.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-2/3 m-auto gap-6">
                
                {data.map((ingrediente) => (
                  <Link key={ingrediente.id} href={`/dashboard/gerenciarIngrediente/${ingrediente.id}`}>

                    <div
                      className="rounded-lg shadow-lg hover:shadow-2xl transition"
                    >
                      {/* Imagem */}
                      {ingrediente.imagem && (
                        <img
                          src={ingrediente.imagem}
                          alt={ingrediente.nome}
                          className="w-full object-cover rounded"
                        />
                      )}

                      {/* Nome */}
                      <h2 className="text-2xl font-semibold mt-2 text-center">{ingrediente.nome}</h2>

                      {/* Preço */}
                      <p className="text-green-600 font-bold text-lg mx-5 text-end">
                        R$ {ingrediente.preco}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p>Nenhum ingrediente encontrado.</p>
            )}
          </article>
            
        </main>
    )
}