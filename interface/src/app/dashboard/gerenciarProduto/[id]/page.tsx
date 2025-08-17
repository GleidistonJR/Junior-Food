"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  imagem: string; // URL da imagem
}

export default function GerenciarProduto() {
  const { id } = useParams();
  const [produto, setProduto] = useState<Produto | null> (null); // Estado do produto

  const router = useRouter();

  console.log(id)

  useEffect(() => {
    async function fetchProduto() {
      console.log("Buscando produto com id:", id);
      
      const res = await fetch(`http://localhost:8000/produtos/${id}`, {
          headers: {
            "Accept": "application/json"
          },
          cache: "no-store",
      });
      
      const data = await res.json();
      setProduto(data);

    }

    fetchProduto();
  }, [id]); // useEffect roda quando a página carrega ou quando id muda

  if(!produto){
    return <p>Carregando...</p>;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(`http://localhost:8000/produtos/${id}/`,{  //Esta enviando a atualização
        method: "PATCH",
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.text(); // <-- pega resposta do Django
        console.error("Erro no servidor:", errorData);
        alert("Erro ao atualizar o produto!");
        return;
      }

      alert("Produto atualizado com sucesso!");
      router.push("/dashboard/gerenciarProduto");
    } catch (error) {
      console.error("Erro de conexão:", error);
      alert("Erro de conexão com o servidor.");
    }
  }

  return (
    <main className=" max-w-fill lg:max-w-2/3 mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5">Editar Produto</h1>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
            <label htmlFor="produtoNome">Nome</label>
            <input
            type="text"
            defaultValue={produto.nome}
            id="produtoNome"
            name="nome"
            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none 
                        focus:ring-2 focus:ring-blue-500"
            />
        </div>

        <div className="mb-3">
            <label htmlFor="produtoDescricao">Descrição</label>
            <textarea
            defaultValue={produto.descricao}
            id="produtoDescricao"
            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none 
            focus:ring-2 focus:ring-blue-500"
            />
        </div>

        <div className="mb-3">
            <label htmlFor="produtoPreco">Preço</label>
            <input
            type="text"
            defaultValue={produto.preco}
            id="produtoPreco"
            name="preco"
            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none 
            focus:ring-2 focus:ring-blue-500"
            />
        </div>
        
        <div className="mb-3">
            <label htmlFor="produtoimagem">Imagem</label>
            <img 
              src={produto.imagem} 
              alt="Imagem do produto" 
              className="w-32 h-32 object-cover mb-2 border rounded"
            />
        </div>


        <ul className="flex gap-5 justify-center">
            <li>
              <Link href="/dashboard/gerenciarProduto/">
                  <button className="text-center  rounded-md w-50 py-3 mb-20 text-bold bg-gray-500 
                  text-white hover:cursor-pointer hover:bg-gray-700">
                    Voltar
                  </button>
              </Link>
            </li>
            <li>
                <button type="submit" className="text-center rounded-md w-50 py-3 mb-20 text-bold bg-green-700 
                text-white hover:cursor-pointer hover:bg-green-900">
                  Salver Edição
                </button>
            </li>
        </ul>
      </form>
      
    </main>
  );
}
