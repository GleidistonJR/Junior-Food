import Link from "next/link"
import { HomeIcon } from '@heroicons/react/24/solid'
import { ShoppingCartIcon} from '@heroicons/react/24/solid'

export function Header(){
    return (
        <header className="bg-black text-white p-2 flex justify-center">
            <nav className="">
                <ul className="flex gap-5 font-bold text-xl">
                    
                    <li><Link className="flex" href="/">Home < HomeIcon className="text-white w-5" /></Link></li>
                    <li><Link className="flex" href="/carrinho">Carrinho< ShoppingCartIcon className="w-5"/></Link></li>
                </ul>
            </nav>
            <br/>
        </header>
    )
}