import { Metadata } from "next"
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Junior Food',
  description: 'Junior Food - Soluções para lanchonetes ',
  openGraph:{
    title: 'Junior Food',
    description: 'Junior Food - Soluções para lanchonetes ',
    images: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fsme.goiania.go.gov.br%2Fconexaoescola%2Fensino_fundamental%2Flingua-inglesa-healthy-food-alimentacao-saudavel%2F&psig=AOvVaw1sJtZu2zlHkOmQn6ai-zsW&ust=1754355706383000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOC60rz6744DFQAAAAAdAAAAABAE']
  }
}

export default function Home(){
  return(
    <main>
      <article>
      <h1 className="text-center my-10 font-bold text-3xl">Catalogo</h1>

      <aside>
        <h2 className="text-center my-10 font-bold text-2xl">Sanduiches</h2>
        
        <div className="flex justify-between items-center bg-gray-300 my-5 p-2">
          <img className="w-30 object-contain rounded-lg" src="images/hamburguer.jpeg" alt="Imagem produto" />
          <div className="flex flex-col text-center mx-3">
            <h3 className="font-semibold text-xl">Titulo Produto</h3>
            <p>
              Descripiton: Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, pariatur! Eum sunt blanditiis sequi error atque iure expedita ex cum voluptatum. Explicabo?
            </p>
          </div>
          <div >
            <button className="flex flex-col justify-center bg-green-600 p-5 rounded-lg text-white hover:bg-green-800 hover:cursor-pointer" type="submit"><ShoppingCartIcon className="h-6 w-6" /> </button>
          </div>
        </div>

        
      </aside>

      </article>
    </main>
  )
}