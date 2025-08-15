"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
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

  console.log(id)

useEffect(() => {
  if (!id) return;

  async function fetchProduto() {
    console.log("Buscando produto com id:", id);

    try {
      const res = await fetch(`http://localhost:8000/produtos/${id}`, {
          headers: {
            "Accept": "application/json"
          },
          cache: "no-store",
      });
      console.log("Status da resposta:", res.status);

      if (!res.ok) {
        console.error("Erro na requisição:", res.statusText);
        return;
      }

      const data = await res.json();
      console.log("Dados recebidos:", data);

      setProduto(data);
    } catch (error) {
      console.error("Erro no fetch:", error);
    }
  }

  fetchProduto();
}, [id]); // useEffect roda quando a página carrega ou quando id muda

if(!produto){
  return <p>Carregando...</p>;
}
  return (
    <main className=" max-w-fill lg:max-w-2/3 mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5">Editar Produto</h1>
      <form encType="multipart/form-data">
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
            <input
            type="file"
            id="produtoImagem"
            name="imagem"
            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none 
            focus:ring-2 focus:ring-blue-500"
            />
        </div>


        <ul className="flex gap-5 justify-center">
            <Link href="/dashboard/gerenciarProduto/">
            <li className="text-center  rounded-md w-50 py-3 mb-20 text-bold bg-gray-500 text-white">
                Voltar
            </li>
            </Link>
            <li className="text-center rounded-md w-50 py-3 mb-20 text-bold bg-green-700 text-white">
                <input type="submit" value="Salvar Edição" />
            </li>
        </ul>
      </form>
    </main>
  );
}
