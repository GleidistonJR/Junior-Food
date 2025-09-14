'use client'
import Link from "next/link";
import {GraficoPedidos, RelatorioPedidos, RelatorioFinanceiro} from "@/components/graficos";

import { 
  PlusCircleIcon, 
  CubeIcon, 
  ClipboardDocumentListIcon, 
  WrenchScrewdriverIcon 
} from "@heroicons/react/24/outline";




export default async function Dashboard (){



    return(
        <main>
            
            <article className="grid grid-cols-1 lg:grid-cols-5 ">

                <nav className="col-span-1">
                    <ul className="h-full flex flex-col gap-2 p-5 shadow-xl bg-gray-200">
                        <li>
                            <Link href="dashboard/cadastrarIngrediente">
                                <button className="flex items-center w-full gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:cursor-pointer">
                                    <PlusCircleIcon className="w-5" />
                                    Cadastrar Ingredientes
                                </button>
                            </Link>
                        </li>

                        <li>
                            <Link href="dashboard/cadastrarProduto">
                                <button className="flex items-center w-full gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:cursor-pointer">
                                <CubeIcon className="w-5" />
                                Cadastrar Produtos
                                </button>
                            </Link>
                        </li>
                        
                        <li>
                            <Link href="dashboard/gerenciarIngrediente">
                                <button className="flex items-center w-full gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:cursor-pointer">
                                    <ClipboardDocumentListIcon className="w-5" />
                                    Gerenciar Ingredientes
                                </button>
                            </Link>
                        </li>

                        <li>
                            <Link href="dashboard/gerenciarProduto">
                                <button className="flex items-center w-full gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:cursor-pointer">
                                    <WrenchScrewdriverIcon className="w-5" />
                                    Gerenciar Produtos

                                </button>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <aside className="col-span-2 lg:col-span-4 px-10">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-10">
                        
                        <div className="col-span-2">
                            <h2 className="text-center mt-10 font-bold text-3xl">Grafico Pedidos</h2>
                            <GraficoPedidos />                            
                        </div>
                        <div className="col-span-1 ">
                            <h2 className="text-center mt-10 font-bold text-3xl">Relatorio Pedidos</h2>
                            <RelatorioPedidos />
                        </div>
                        <div className="col-span-1">
                            <h2 className="text-center mt-10 font-bold text-3xl">Relatorio Financeiro</h2>
                            <RelatorioFinanceiro />
                        </div>
                        
                    </div>

                </aside>

            </article>
            
        </main>
    )
}