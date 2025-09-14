'use client';
import { useEffect, useState } from 'react';

// Interface para o objeto Produto
interface Produto {
  id: number;
  nome: string;
  preco: string; // Preço como string, conforme o JSON
  imagem: string;
}

// Interface para cada adicional
interface Adicional {
  id: number;
  nome: string;
  preco: string; // Preço como string, conforme o JSON
}

// Interface para cada item dentro de itens
interface CarrinhoItem {
  id: number;
  produto: Produto;
  quantidade: number;
  adicionais: Adicional[];
  observacoes: string;
}

// Interface para o objeto Carrinho (nível superior)
interface Carrinho {
  id: number;
  itens: CarrinhoItem[];
  session_id: string;
  criado_em: string;
}

// Tipo para o array de Carrinho retornado pela API
type CarrinhoList = Carrinho[];

export default function Carrinho() {
  const [carrinho, setCarrinho] = useState<CarrinhoList>([]);

  useEffect(() => {
    async function buscarCarrinho() {
      try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/carrinho/`;
        const response = await fetch(url, {
          cache: 'no-store', // Garante que os dados são sempre atualizados
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar carrinho');
        }

        const res: CarrinhoList = await response.json();
        setCarrinho(res);
      } catch (error) {
        console.error('Erro ao carregar carrinho:', error);
      }
    }
    buscarCarrinho();
  }, []);

  return (
    <article>
      <h1 className="text-center mt-10 font-bold text-3xl">Carrinho</h1>

      {carrinho.length > 0 ? (
        <div className="flex flex-col gap-4 my-5 mx-5 ">
          {carrinho.map((carrinhoItem) =>
            carrinhoItem.itens.map((item) => (
              <div
                key={item.id}
                className="flex items-center rounded-lg bg-gray-300"
              >
                <img
                  className="w-32 object-contain rounded-lg"
                  src={`${process.env.NEXT_PUBLIC_API_URL + item.produto.imagem}` || '/images/hamburguer.jpeg'}
                  alt={`Imagem de ${item.produto.nome}`}/>
                <div className="flex flex-col mx-5">
                  <h3 className="font-semibold text-xl">{item.produto.nome}</h3>
                  <p className="text-start">
                    Quantidade: {item.quantidade}
                  </p>
                  <p className="text-start">
                    Preço: R$ {item.produto.preco}
                  </p>
                  {item.adicionais.length > 0 && (
                    <p className="text-start">
                      Adicionais:{' '}
                      {item.adicionais.map((adicional) => adicional.nome).join(', ')}
                    </p>
                  )}
                  {item.observacoes && (
                    <p className="text-start">
                      Observações: {item.observacoes}
                    </p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        <p className="text-center mt-5">Nenhum produto adicionado ao carrinho.</p>
      )}
    </article>
  );
} 