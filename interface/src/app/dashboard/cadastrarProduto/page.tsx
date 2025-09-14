'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NovoProdutoPage() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState<File | null>(null);
  const [ingredientes, setIngredientes] = useState<any[]>([]);
  const [selecionados, setSelecionados] = useState<number[]>([]);
  const [preview, setPreview] = useState<string | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  // Buscar ingredientes ao carregar a página
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/ingredientes/`)
      .then((res) => res.json())
      .then((data) => setIngredientes(data))
      .catch(() => setErro("Erro ao carregar ingredientes"));
  }, []);

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

  // Envio do formulário
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro(null);

    if (!nome || !preco || selecionados.length === 0) {
      setErro("Preencha todos os campos e selecione ingredientes");
      return;
    }

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("preco", preco.replace(",", ".")); // troca vírgula por ponto
    if (imagem) formData.append("imagem", imagem);

    // Adiciona os ingredientes (um por vez)
    selecionados.forEach((id) => {
      formData.append("ingredientes", String(id));
    });

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/produtos/`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const txt = await res.text();
      setErro("Erro ao salvar: " + txt);
      return;
    }

    alert("Produto criado com sucesso!");
    setNome("");
    setPreco("");
    setImagem(null);
    setPreview(null);
    setSelecionados([]);
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Cadastrar Produto</h1>

      {erro && <p className="text-red-600 mb-2">{erro}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nome */}
        <div>
          <label className="block font-medium">Nome</label>
          <input
            className="border border-gray-400 rounded w-full p-2"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        {/* Preço */}
        <div>
          <label className="block font-medium">Preço</label>
          <input
            className="border border-gray-400 rounded w-full p-2"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            placeholder="Ex: 25,90"
          />
        </div>

        {/* Imagem */}
        <div>
          <label className="block font-medium">Imagem</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => onChangeImagem(e.target.files?.[0] ?? null)}
            className="border border-gray-400 rounded-lg w-full p-2 hover:cursor-pointer"
          />
          {preview && (
            <img src={preview} alt="preview" className="h-32 mt-2 object-contain" />
          )}
        </div>

        {/* Ingredientes */}
        <div>
          <label className="block font-medium mb-2">Ingredientes</label>
          <div className="space-y-2 border border-gray-400 rounded w-full p-2">
            {ingredientes.map((ing) => (
              <label key={ing.id} className="flex items-center gap-2 ">
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

        <div className="flex flex-row gap-5 justify-center">

          <Link href="/dashboard">
          <button className="bg-gray-500 w-50 py-3 rounded-lg text-white
          hover:cursor-pointer">
            Voltar
          </button>
          </Link>
          <button
            type="submit"
            className="bg-green-700 text-white w-50 py-3 rounded-lg
            hover:cursor-pointer"
            >
            Cadastrar
          </button>
        
        </div>
      </form>
    </div>
  );
}
