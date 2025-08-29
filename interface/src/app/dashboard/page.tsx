import Link from "next/link";

import { 
  PlusCircleIcon, 
  CubeIcon, 
  ClipboardDocumentListIcon, 
  WrenchScrewdriverIcon 
} from "@heroicons/react/24/outline";


export default async function Dashboard (){



    return(
        <main>
            
            <article className="grid grid-cols-5 ">

                <nav className=" col-1">
                    <ul className="h-full flex flex-col gap-2 p-5 shadow-xl bg-gray-200">
                        <li>
                            <Link href="dashboard/cadastrarIngrediente">
                                <button className="flex items-center w-full gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:cursor-pointer">
                                    <PlusCircleIcon className="w-5" />
                                    Cadastrar Ingredientes
                                </button>
                            </Link>
                        </li>

                        <li>
                            <Link href="dashboard/cadastrarProduto">
                                <button className="flex items-center w-full gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:cursor-pointer">
                                <CubeIcon className="w-5" />
                                Cadastrar Produtos
                                </button>
                            </Link>
                        </li>
                        
                        <li>
                            <Link href="dashboard/gerenciarIngrediente">
                                <button className="flex items-center w-full gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:cursor-pointer">
                                    <ClipboardDocumentListIcon className="w-5" />
                                    Gerenciar Ingredientes
                                </button>
                            </Link>
                        </li>

                        <li>
                            <Link href="dashboard/gerenciarProduto">
                                <button className="flex items-center w-full gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:cursor-pointer">
                                    <WrenchScrewdriverIcon className="w-5" />
                                    Gerenciar Produtos

                                </button>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <aside className="col-span-4 px-10">
                    <h1 className="text-center mt-10 font-bold text-5xl">DashBoard</h1>
                    
                    <div className="grid grid-cols-3 gap-6 px-10">
                        <div className="">
                            <h2 className="text-center mt-10 font-bold text-3xl">Graficos</h2>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sed cumque possimus aliquam, natus temporibus nam pariatur iure quae ratione accusantium id, assumenda repudiandae nostrum, laudantium necessitatibus non quis officia?
                            </p>
                        </div>
                        <div>
                            <h2 className="text-center mt-10 font-bold text-3xl">Informações</h2>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sed cumque possimus aliquam, natus temporibus nam pariatur iure quae ratione accusantium id, assumenda repudiandae nostrum, laudantium necessitatibus non quis officia?
                            </p>
                        </div>
                        <div>
                            <h2 className="text-center mt-10 font-bold text-3xl">Dados</h2>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sed cumque possimus aliquam, natus temporibus nam pariatur iure quae ratione accusantium id, assumenda repudiandae nostrum, laudantium necessitatibus non quis officia?
                            </p>
                        </div>
                        <div>
                            <h2 className="text-center mt-10 font-bold text-3xl">Etc...</h2>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sed cumque possimus aliquam, diandae nostrum, laudantium necessitatibus non quis officia?
                            </p>
                        </div>
                    </div>

                </aside>

            </article>
            
        </main>
    )
}