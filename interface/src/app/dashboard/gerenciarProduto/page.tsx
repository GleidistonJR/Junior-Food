'use client';

interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  imagem?: string;
}

import Link from "next/link";
import { useState, useEffect } from "react";
import Dashboard from "../page";


export default function GerenciarProduto (){

  const [produto, setProduto] = useState<Produto[]>([])

    useEffect(() =>{
      async function buscarProdutos() {        
        const url = "http://localhost:8000/produtos";
        
        const response = await fetch(url, {
          headers: {
            "Accept": "application/json"
          },
          cache: "no-store",
        });
        
        const data = await response.json()

        setProduto(data)
      }
      buscarProdutos();
    }, []);

      
    async function deletarProduto(id: number) {        
      const url = `http://localhost:8000/produtos/${id}/`;
      
      const response = await fetch(url, {
        method: "DELETE",
      });
      document.location.reload(); //Atualiza a página após a exclusão do produto
    }


    return(
        <main>

          <nav>
            <ul className="flex gap-5 mt-5 justify-center">
              <li>
                <Link href="/">
                  <button className="text-center  rounded-md w-50 py-3 mb-20 text-bold bg-green-700
                  text-white hover:cursor-pointer hover:bg-green-900">
                  Home
                  </button>
                </Link>
              </li>
              <li>
                  <Link href="/dashboard">
                    <button className="text-center rounded-md w-50 py-3 mb-20 text-bold bg-blue-700 
                    text-white hover:cursor-pointer hover:bg-blue-900">
                      Dashboard
                    </button>
                  </Link>
              </li>
            </ul>
          </nav>
            
                    <h1 className="text-center font-bold text-3xl my-10">Gerenciamento Produtos</h1>
          
          <article className="">

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-2/3 m-auto gap-6">
                
                {produto.map((prod : Produto) => (
                    <Link href={`/dashboard/gerenciarProduto/${prod.id}`} >                    
                    <div key={prod.id} className="rounded-lg shadow-lg hover:shadow-2xl transition relative">
                      {/* Imagem */}
                      {prod.imagem && (
                        <img
                          src={prod.imagem}
                          alt={prod.nome}
                          className="w-full object-cover rounded"
                        />
                      )}
                      {/* Deletar */}
                      <button className="absolute top-0 right-0 bg-red-700 text-white font-bold rounded-lg p-2
                        hover:cursor-pointer hover:scale-105" onClick={() => deletarProduto(prod.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                          <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                        </svg>
                      </button>

                      {/* Nome */}
                      <h2 className="text-2xl font-semibold mt-2 text-center">{prod.nome}</h2>

                      {/* Descrição */}
                      <p className="text-gray-600 text-sm mt-1 mx-5">
                        {prod.descricao}
                      </p>


                      {/* Preço */}
                      <p className="text-green-600 font-bold text-lg mx-5 text-end">
                        R$ {prod.preco}
                      </p>
                    </div>
                    </Link>
                ))}
              </div>
          </article>
            
        </main>
    )
}