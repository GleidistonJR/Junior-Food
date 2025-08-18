"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

interface Ingrediente {
  id: number;
  nome: string;
  preco: string;
}

export default function GerenciarIngrediente() {
  const { id } = useParams();
  const [Ingrediente, setIngrediente] = useState<Ingrediente | null> (null); // Estado do Ingrediente

  const router = useRouter();

  console.log(id)

  useEffect(() => {
    async function fetchIngrediente() {
      console.log("Buscando Ingrediente com id:", id);
      
      const res = await fetch(`http://localhost:8000/ingredientes/${id}`, {
          headers: {
            "Accept": "application/json"
          },
          cache: "no-store",
      });
      
      const data = await res.json();
      setIngrediente(data);

    }

    fetchIngrediente();
  }, [id]); // useEffect roda quando a página carrega ou quando id muda

  if(!Ingrediente){
    return <p>Carregando...</p>;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(`http://localhost:8000/Ingredientes/${id}/`,{  //Esta enviando a atualização
        method: "PATCH",
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.text(); // <-- pega resposta do Django
        console.error("Erro no servidor:", errorData);
        alert("Erro ao atualizar o Ingrediente!");
        return;
      }

      alert("Ingrediente atualizado com sucesso!");
      router.push("/dashboard/gerenciarIngrediente");
    } catch (error) {
      console.error("Erro de conexão:", error);
      alert("Erro de conexão com o servidor.");
    }
  }

  return (
    <main className=" max-w-fill lg:max-w-2/3 mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5">Editar Ingrediente</h1>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
            <label htmlFor="IngredienteNome">Nome</label>
            <input
            type="text"
            defaultValue={Ingrediente.nome}
            id="IngredienteNome"
            name="nome"
            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none 
                        focus:ring-2 focus:ring-blue-500"
            />
        </div>

        <div className="mb-3">
            <label htmlFor="IngredientePreco">Preço</label>
            <input
            type="text"
            defaultValue={Ingrediente.preco}
            id="IngredientePreco"
            name="preco"
            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none 
            focus:ring-2 focus:ring-blue-500"
            />
        </div>
        


        <ul className="flex gap-5 justify-center">
            <li>
              <Link href="/dashboard/gerenciarIngrediente/">
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
