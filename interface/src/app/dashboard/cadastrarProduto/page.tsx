"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function CriarProduto() {
  const [ingredientes, setIngredientes] = useState([])
  const [formData, setFormData] = useState({
    nome: "",
    preco: "",
    imagem: null,
    ingredientes: []
  })

  // Buscar ingredientes da API Django
  useEffect(() => {
    fetch("http://localhost:8000/ingredientes/")
      .then(res => res.json())
      .then(data => setIngredientes(data))
  }, [])

  // Atualiza os dados do form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Seleciona ingredientes (checkboxes)
  const handleCheck = (id) => {
    let novaLista = [...formData.ingredientes]
    if (novaLista.includes(id)) {
      novaLista = novaLista.filter(i => i !== id)
    } else {
      novaLista.push(id)
    }
    setFormData({ ...formData, ingredientes: novaLista })
  }

  // Envia para o backend Django
  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = new FormData()
    data.append("nome", formData.nome)
    data.append("preco", formData.preco)
    if (formData.imagem) data.append("imagem", formData.imagem)
    formData.ingredientes.forEach(id => data.append("ingredientes", id))

    await fetch("http://localhost:8000/produtos/", {
      method: "POST",
      body: data
    })
  }

    return(
        <main>
            <h1 className="text-center mt-10 font-bold text-5xl">Cadastrar Produto</h1>

            <form action="http://127.0.0.1:8000/produtos/" method="POST" encType="multipart/form-data"
             className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">

                <input
                    type="text"
                    name="nome"
                    placeholder="Nome do produto"
                    value={formData.nome}
                    onChange={handleChange}
                    className="border p-2 w-full"
                />

                <input
                    type="number"
                    step="0.01"
                    name="preco"
                    placeholder="Preço"
                    value={formData.preco}
                    onChange={handleChange}
                    className="border p-2 w-full"
                />

                <input
                    type="file"
                    name="imagem"
                    onChange={(e) => setFormData({ ...formData, imagem: e.target.files[0] })}
                    className="border p-2 w-full"
                />

                <div>
                    <p className="font-semibold">Ingredientes:</p>
                    {ingredientes.map((ing) => (
                    <label key={ing.id} className="block">
                        <input
                        type="checkbox"
                        checked={formData.ingredientes.includes(ing.id)}
                        onChange={() => handleCheck(ing.id)}
                        />
                        {ing.nome}
                    </label>
                    ))}
                </div>

                <ul className="flex gap-5 justify-center">
                    <li>
                        <Link href="/dashboard/">
                            <button className="text-center  rounded-md w-50 py-3 mb-20 text-bold bg-gray-500 text-white
                            hover:cursor-pointer hover:bg-gray-600" >
                                    Voltar
                            </button>
                        </Link>
                    </li>
                    <li>
                        <button className="text-center rounded-md w-50 py-3 mb-20 text-bold bg-green-700 text-white
                        hover:cursor-pointer hover:bg-green-800" type="submit">
                                Cadastrar
                        </button>
                    </li>
                </ul>
            </form>
            
        </main>
    )
}