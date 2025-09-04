'use client'

import Modal from "@/components/modal"; // importando seu modal já pronto
import { useState, useEffect } from "react";

type Produtos = Produto[];

interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  imagem: string; // URL da imagem
  ingredientes_detalhe: string[]; // Lista de ingredientes
}

interface Ingredientes {
  id: number;
  nome: string;
  preco: string;
}

// app/page.js
export default function Home() {

  const [produtos, setProdutos] = useState<Produtos>([]);
  const [ingredientes, setIngredientes] = useState<Ingredientes>([]);
  const [selecionados, setSelecionados] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);

  function abrirModal(produto: Produto){
    setProdutoSelecionado(produto);
    setIsModalOpen(true);
  }

  function fecharModal(){
    setIsModalOpen(false);
    setProdutoSelecionado(null);
  }
  
  // Alternar checkbox (verifica o check e adiciona ou remove da lista)
  function toggleIngrediente(id: number) {
    setSelecionados((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  // Fazendo requisição para sua API Django
  useEffect(() => {
    async function buscarProdutos() {
      const url = "http://localhost:8000/produtos/";
          
      const response = await fetch(url, {
          cache: "no-store" // garante que os dados são sempre atualizados
      });
      const res: Produtos = await response.json()
      setProdutos(res)
    }
    buscarProdutos();
  }, []);

  useEffect(() => {
    async function buscarIngredientes() {
      const url = "http://localhost:8000/ingredientes/";
          
      const response = await fetch(url, {
          cache: "no-store" // garante que os dados são sempre atualizados
      });
      const res: Produtos = await response.json()
      setIngredientes(res)
    }
    buscarIngredientes();
  }, []);

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
              onClick={() => abrirModal(produto)}
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
                {produto.ingredientes_detalhe.map((ing: any) => ing.nome).join(", ")}
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

      {/* Aqui você usa o seu Modal já existente */}
      <Modal isOpen={isModalOpen} onClose={fecharModal}>
        {produtoSelecionado && (
          <div>
            <h2 className="text-2xl font-bold mb-4">{produtoSelecionado.nome}</h2>
            <img
              src={produtoSelecionado.imagem}
              alt={produtoSelecionado.nome}
              className="w-full rounded mb-4"
            />
            <p className="text-gray-600 mb-2">{produtoSelecionado.descricao}</p>
            <p className="text-green-700 font-bold text-xl">
              R$ {produtoSelecionado.preco}
            </p>
            <p className="mt-2 text-sm">
              <strong>Ingredientes:</strong> {produtoSelecionado.ingredientes_detalhe.map((ing: any) => ing.nome).join(", ")}
            </p>

            {/* Ingredientes */}
            <div className="mt-5">
              <label className="font-bold">Adicionais</label>
              <div className="space-y-2">
                {ingredientes.map((ing) => (
                  <label key={ing.id} className="flex items-center gap-2 hover:cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selecionados.includes(ing.id)}
                      onChange={() => toggleIngrediente(ing.id)}
                    />
                    {ing.nome} (R$ {ing.preco})
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <label className="font-bold">Observações:</label>
              <br />
              <input type="text" className="border rounded-lg w-full h-30" />
            </div>

            <div className="mt-5 text-center">
              <button className="w-full py-2 text-white rounded-lg bg-green-700
              hover:cursor-pointer">
                Adicionar
              </button>
            </div>

          </div>
        )}
      </Modal>
    </main>
  );
}
