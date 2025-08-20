"use client"

import { useState, useEffect } from "react";
interface Ingrediente {
  id: number;
  nome: string;
  preco: string;
  imagem?: string;
}

import Link from "next/link";

export default function Gerenciaringrediente (){

  const [data, setData] = useState<Ingrediente[]>([]);

  useEffect(() => {
    async function buscarIngredientes() {
      const url = "http://localhost:8000/ingredientes";
          
      const response = await fetch(url, {
          cache: "no-store" // garante que os dados são sempre atualizados
      });
      const res: Ingrediente[] = await response.json()
      setData(res)
    }
    buscarIngredientes();
  }, []);
  
    async function excluirIngrediente(id: number) {
      const url = `http://localhost:8000/ingredientes/${id}/`;
          
      const response = await fetch(url, { 
        method: "DELETE", 
        cache: "no-store"
      });
      document.location.reload(); //Atualiza a página após a exclusão do ingrediente
    }



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
                      className="rounded-lg shadow-lg hover:shadow-2xl transition relative"
                    >
                      {/* Imagem */}
                      {ingrediente.imagem && (
                        <img
                          src={ingrediente.imagem}
                          alt={ingrediente.nome}
                          className="w-full object-cover rounded"
                        />
                      )}

                      <button className="absolute top-0 right-0 bg-red-700 text-white font-bold rounded-lg p-2
                      hover:cursor-pointer hover:scale-105" onClick={() => excluirIngrediente(ingrediente.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                          <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                        </svg>
                      </button>

                      {/* Nome */}
                      <h2 className="text-2xl font-semibold mt-2 text-center">{ingrediente.nome}</h2>

                      {/* Preço */}
                      <p className="text-green-600 font-bold text-lg mx-5 text-center">
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