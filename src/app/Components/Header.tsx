import Link from "next/link"

function Header(){
    return(
        <header className="flex flex-row justify-between items-center h-[80px] bg-amber-100 px-[20px]">
            <div>YC Directory</div>
            <nav className="flex flex-row gap-x-[10px]">
                <ul className="flex flex-row gap-x-[20px]">
                    <Link href="/">Home</Link>
                    <Link href="/page1">Page 1</Link>
                    <Link href="/page2">Page 2</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header