"use client"; // Necessário no Next.js App Router para rodar JS no cliente

import Link from "next/link";
import { useState, useEffect } from "react";

export default function GerenciarProduto({ params }) {
  const { id } = params;
  const [produto, setProduto] = useState(null);

  // Busca o produto no servidor
  useEffect(() => {
    async function fetchProduto() {
      const res = await fetch(`http://127.0.0.1:8000/produtos/${id}`, {
        cache: "no-store",
      });
      const data = await res.json();
      setProduto(data);
    }
    fetchProduto();
  }, [id]);

  // Envia o PUT para o backend
  async function handleSubmit(e) {
    e.preventDefault(); // impede envio padrão

    const form = e.target;
    const formData = new FormData(form); // pega todos os campos e arquivos

    try {
      const res = await fetch(`http://127.0.0.1:8000/produtos/${id}/`, {
        method: "PUT",
        body: formData, // Envia direto para o Django
      });

      if (res.ok) {
        alert("Produto atualizado com sucesso!");
        window.location.href = "/dashboard"; // redireciona
      } else {
        alert("Erro ao atualizar o produto.");
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  if (!produto) return <p>Carregando...</p>;

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
            <input
            type="file"
            defaultValue={produto.imagem}
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
