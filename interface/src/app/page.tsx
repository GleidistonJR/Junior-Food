// app/page.js
export default async function Home() {
  // Fazendo requisição para sua API Django
  const res = await fetch("http://localhost:8000/produtos/", {
    cache: "no-store" // garante que os dados são sempre atualizados
  });

  // Convertendo resposta para JSON
  const produtos = await res.json();

  return (
    <main className="p-8">
      <h1 className="text-center text-3xl font-bold mb-12">Cardapio</h1>

      {/* Verifica se tem produtos */}
      {produtos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-2/3 m-auto gap-6">
          
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="rounded-lg shadow-lg hover:shadow-xl transition"
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
              <p className="text-gray-600 text-md mx-5 mt-1">
                {produto.descricao}
              </p>

              {/* Preço */}
              <p className="text-green-700 font-bold text-2xl m-5 text-end">
                R$ {produto.preco}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>Nenhum produto encontrado.</p>
      )}
    </main>
  );
}
