
import "./globals.css";
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const metadata: Metadata = {
  title: 'Junior Food',
  description: 'Junior Food - Soluções para lanchonetes ',
  openGraph:{
    title: 'Junior Food',
    description: 'Junior Food - Soluções para lanchonetes ',
    images: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fsme.goiania.go.gov.br%2Fconexaoescola%2Fensino_fundamental%2Flingua-inglesa-healthy-food-alimentacao-saudavel%2F&psig=AOvVaw1sJtZu2zlHkOmQn6ai-zsW&ust=1754355706383000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOC60rz6744DFQAAAAAdAAAAABAE']
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body 
      className={`antialiased`}>

        <Header />
        {children}

        <Footer />

      </body>
    </html>
  );
}
