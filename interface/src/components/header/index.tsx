import Link from "next/link"

export function Header(){
    return (
        <header>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/contatos">Contatos</Link></li>
                    <li><Link href="/dashboard">Dashboard</Link></li>
                </ul>
            </nav>
            <br/>
        </header>
    )
}