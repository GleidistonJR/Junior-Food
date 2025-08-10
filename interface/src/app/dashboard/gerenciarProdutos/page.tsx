import Link from "next/link";

export default async function CadastrarProduto (){


    const url = "http://localhost:8000/produtos";
        
    const response = await fetch(url, {
        cache: "no-store" // garante que os dados são sempre atualizados
    });

    const data = await response.json()



    return(
        <main>
            
            <h1 className="text-center text-3xl my-5">Gerenciamento Produtos</h1>

            <Link href="/dashboard/" className="bg-gray-500 rounded-md px-5 py-3 mb-5">Dashboard</Link>

            {/* Verifica se tem produtos */}
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {data.map((produto) => (
            <div
              key={produto.id}
              className="border rounded-lg shadow hover:shadow-lg transition"
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
              <p className="text-gray-600 text-sm mt-1">
                {produto.descricao}
              </p>

              {/* Preço */}
              <p className="text-green-600 font-bold text-lg mx-5 text-end">
                R$ {produto.preco}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>Nenhum produto encontrado.</p>
      )}
            
        </main>
    )
}