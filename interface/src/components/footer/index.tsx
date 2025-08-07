import Link from "next/link"
import { HomeIcon } from '@heroicons/react/24/solid'
import { ShoppingCartIcon} from '@heroicons/react/24/solid'

export function Footer(){
    return (
        <footer className="bg-black text-white">
            <article className="flex justify-around">
                <aside className="flex flex-col justify-center">
                <img src="images/juniorbest.png" className="w-30" alt="Logo Junior Food" />
                </aside>
                <aside className="flex flex-col justify-center">
                    <Link className="flex" href="/">Home < HomeIcon className="w-4"/></Link>
                    <Link className="flex" href="/carrinho">Carrinho < ShoppingCartIcon className="w-4"/></Link>
                    <Link className="flex" href="/dashboard">Dashboard</Link>
                </aside>
                <aside className="flex flex-col justify-center">
                    <Link href="/">Insta</Link>
                    <Link href="/carrinho">Face</Link>
                    <Link href="/carrinho">Site</Link>
                </aside>
            </article>
        </footer>
    )
}