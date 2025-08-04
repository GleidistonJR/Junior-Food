import Link from "next/link"

export function Header(){
    return (
        <header className="bg-black text-white p-2 flex justify-center">
            <nav className="">
                <ul className="flex gap-5 font-bold text-xl">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/carrinho">Carrinho</Link></li>
                    <li><Link href="/dashboard">Dashboard</Link></li>
                </ul>
            </nav>
            <br/>
        </header>
    )
}