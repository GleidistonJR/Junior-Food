import Link from "next/link";


export default async function Dashboard (){



    return(
        <main>
            <h1 className="text-center mt-10 font-bold text-5xl">DashBoard</h1>
            
            <article className="flex justify-center ">
                <div className="text-center m-5">
                    <Link href="dashboard/cadastrarProduto" 
                    className="bg-blue-500 px-8 py-3 text-white rounded-md">
                        Cadastrar Produtos
                    </Link>
                </div>
                <div className="text-center m-5">
                    <Link href="dashboard/gerenciarProduto" 
                    className="bg-blue-500 px-8 py-3 text-white rounded-md">
                        Gerenciar Produtos
                    </Link>
                </div>

            </article>

            
        </main>
    )
}