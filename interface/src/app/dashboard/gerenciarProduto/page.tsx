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
                  <Link href="/dashboard">
                    <button className="text-center rounded-md w-50 py-3 mb-20 text-bold bg-blue-700 
                    text-white hover:cursor-pointer hover:bg-blue-900">
                      Dashboard
                    </button>
                  </Link>
              </li>
            </ul>
          </nav>
          
          <article className="">

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-2/3 m-auto gap-6">
                
                {produto.map((prod : Produto) => (

                    <div key={prod.id} className="rounded-lg shadow-lg hover:shadow-2xl transition">
                      {/* Imagem */}
                      {prod.imagem && (
                        <img
                          src={prod.imagem}
                          alt={prod.nome}
                          className="w-full object-cover rounded"
                        />
                      )}

                      {/* Nome */}
                      <h2 className="text-2xl font-semibold mt-2 text-center">{prod.nome}</h2>

                      {/* Descrição */}
                      <p className="text-gray-600 text-sm mt-1 mx-5">
                        {prod.descricao}
                      </p>

                      <div className="flex justify-between items-center py-6">
                        {/* Preço */}
                        <button className="text-white bg-red-600 font-bold text-lg px-3 py-1 rounded-lg 
                        mx-5 text-start hover:cursor-pointer hover:bg-red-800" >
                          Deletar
                        </button>

                        {/* Preço */}
                        <p className="text-green-600 font-bold text-lg mx-5 text-end">
                          R$ {prod.preco}
                        </p>
                      </div>
                    </div>
                ))}
              </div>
          </article>
            
        </main>
    )
}