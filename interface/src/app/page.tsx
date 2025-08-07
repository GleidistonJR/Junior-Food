'use client'
import { Metadata } from "next"
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useState } from "react"
import Modal from "@/components/modal"

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  function modalAdicionais(){
    setShowModal(true);
  }

  return (
    <main>
      <article>
        <h1 className="text-center my-10 font-bold text-3xl">Catalogo</h1>
        <hr />

        <aside>
          <h2 className="text-center my-10 font-bold text-2xl">Sanduiches</h2>

          <button onClick={modalAdicionais} className=" ">
            <div className="flex justify-between items-center bg-gray-300 my-5 mx-2 p-2 rounded-lg">
              <img className="w-30 object-contain rounded-lg" src="images/hamburguer.jpeg" alt="Imagem produto" />
              <div className="flex flex-col text-center mx-3">
                <h3 className="font-semibold text-xl">Titulo Produto</h3>
                <p className="text-start">
                  Descripiton: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, pariatur! Eum sunt blanditiis sequi error atque iure expedita ex cum voluptatum. Explicabo?
                </p>
              </div>
            </div>
          </button>

          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>

            <h2 className="text-xl font-bold mb-4">Adicionais</h2>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> Bacon
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> Ovo
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> Cheddar
            </label>

            <h2 className="text-xl font-bold mb-4">Comentario</h2>
            <input type="text" className="text-gray-500 border-1 rounded-lg w-full h-30" />

            <div className="text-end">
              <button
              onClick={() => setShowModal(false)}
                className="mt-4 px-4 py-2 bg-green-700 text-white rounded"
              >
                Adicionar ao Carrinho
              </button>
            </div>

          </Modal>

        </aside>

      </article>
    </main>
  )
}