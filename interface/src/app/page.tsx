import { Metadata } from "next"

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
    <div>
      <h1 className="text-center my-10 font-bold text-5xl">Pagina HOME</h1>
    </div>
  )
}