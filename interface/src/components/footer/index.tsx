import Link from "next/link"

export function Footer(){
    return (
        <footer className="bg-gray-200">
            <article className="flex justify-around">
                <aside>
                <img src="..." alt="Logo Junior Food" />
                </aside>
                <aside className="flex flex-col">
                    <Link href="/">Home</Link>
                    <Link href="/carrinho">Carrinho</Link>
                    <Link href="/dashboard">Dashboard</Link>
                </aside>
                <aside className="flex flex-col">
                    <Link href="/">Insta</Link>
                    <Link href="/carrinho">Face</Link>
                    <Link href="/carrinho">Site</Link>
                </aside>
            </article>
        </footer>
    )
}