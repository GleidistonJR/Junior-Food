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
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [ingredientes, setIngredientes] = useState<any[]>([]);
  const [selecionados, setSelecionados] = useState<number[]>([]);
  const [imagem, setImagem] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  const router = useRouter();

  console.log(id)

  // Buscar ingredientes ao carregar a página
  useEffect(() => {
    fetch("http://localhost:8000/ingredientes/")
    .then((res) => res.json())
    .then((data) => setIngredientes(data))
    .catch(() => setErro("Erro ao carregar ingredientes"));
  }, []);
  
  // Buscar dados do produto ao carregar a página
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

  // Alternar checkbox (verifica o check e adiciona ou remove da lista)
  function toggleIngrediente(id: number) {
    setSelecionados((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

    // Preview de imagem
  function onChangeImagem(file: File | null) {
    setImagem(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  }


  if(!produto){
    return <p>Carregando...</p>;
  }



// Envio do formulário
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro(null);

    const formData = new FormData();
    formData.append("nome", nome);
    if(preco){
      formData.append("preco", preco.replace(",", ".")); // troca vírgula por ponto
    }
    if (imagem) formData.append("imagem", imagem);

    // Adiciona os ingredientes (um por vez)
    selecionados.forEach((id) => {
      formData.append("ingredientes", String(id));
    });

    const res = await fetch(`http://localhost:8000/produtos/${id}/`, {
      method: "PATCH",
      body: formData,
    });

    if (!res.ok) {
      const txt = await res.text();
      setErro("Erro ao salvar: " + txt);
      return;
    }

    alert("Produto editado com sucesso!");
    setNome("");
    setPreco("");
    setImagem(null);
    setPreview(null);
    setSelecionados([]);
  }


  return (
    <main className=" max-w-fill lg:max-w-2/3 mx-auto p-5">
      <h1 className="text-center text-3xl font-bold mb-5">Editar Produto</h1>

      <form onSubmit={handleSubmit} >
        <div className="mb-3">
            <label htmlFor="produtoNome">Nome</label>
            <input
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none 
                          focus:ring-2 focus:ring-blue-500"
              id="produtoNome"
              defaultValue={produto.nome}
              onChange={(e) => setNome(e.target.value)}
            />
        </div>

        <div className="mb-3">
            <label htmlFor="produtoDescricao">Ingredientes</label>
            <div className="space-y-2">
            {ingredientes.map((ing) => (
              <label key={ing.id} className="flex items-center gap-2">
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

        <div className="mb-3">
            <label htmlFor="produtoPreco">Preço</label>
            <input
            type="text"
            defaultValue={produto.preco}
            id="produtoPreco"
            name="preco"
            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none 
            focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPreco(e.target.value)}
            />
        </div>
        
        {/* Imagem */}
        <div>
          <label className="block font-medium">Imagem</label>
          <input
          className="w-full p-2 border border-gray-400 rounded-lg hover:cursor-pointer"
            type="file"
            accept="image/*"
            onChange={(e) => onChangeImagem(e.target.files?.[0] ?? null)}
          />
          {preview ? (
            <img src={preview} alt="preview" className="h-32 mt-2 object-contain" />
          ) : ( 
            <img src={produto.imagem} alt="preview" className="h-32 mt-2 object-contain" />
          )}
          
        </div>

        {erro && <p className="text-red-600 mb-2">{erro}</p>}

        <ul className="flex gap-5 mt-10 justify-center">
            <li>
              <Link href="/dashboard/gerenciarProduto/">
                  <button className="text-center  rounded-md w-50 py-3 mb-20 text-bold bg-gray-500 
                  text-white hover:cursor-pointer">
                    Voltar
                  </button>
              </Link>
            </li>
            <li>
                <button type="submit" className="text-center rounded-md w-50 py-3 mb-20 text-bold bg-green-700 
                text-white hover:cursor-pointer">
                  Salver Edição
                </button>
            </li>
        </ul>
      </form>
      
    </main>
  );
}
