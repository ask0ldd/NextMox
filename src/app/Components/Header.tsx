"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


function Header(){

    const pathname = usePathname()

    return(
        <header className="flex flex-row justify-between items-center h-[80px]">
            <div className={`flex h-[40px] items-center`}>YC Directory</div>
            <nav className="flex flex-row gap-x-[10px]">
                <ul className="flex flex-row gap-x-[60px] h-[40px]">
                    <Link href="/" className={pathname == "/" ? "border-b-[2px] border-[#373737] flex items-center" : "flex items-center"}>Home</Link>
                    <Link href="/page1" className="flex items-center">Page 1</Link>
                    <Link href="/page2" className="flex items-center">Page 2</Link>
                    <Link href="/page2" className="flex items-center">Page 3</Link>
                </ul>
            </nav>
            <div className="flex justify-center items-center w-[140px] rounded-full text-white bg-[#373737] h-[40px] cursor-pointer px-[15px]">Login</div>
        </header>
    )
}

export default Header