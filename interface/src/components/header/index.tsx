import Link from "next/link"

export function Header(){
    return (
        <header>
            <nav className="">
                <ul className="flex justify-center gap-5 font-bold text-xl">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/carrinho">Carrinho</Link></li>
                    <li><Link href="/dashboard">Dashboard</Link></li>
                </ul>
            </nav>
            <br/>
        </header>
    )
}