"use client"
import { Rubik } from "next/font/google"
import Link from "next/link"
import { usePathname } from "next/navigation"

const anton = Rubik({
    subsets: ["latin"],
    weight: "700",
})

function Header(){

    const pathname = usePathname()

    return(
        <header className="flex flex-row max-w-[1440px] w-full shrink-0 grow-0 justify-between items-center h-[80px] relative">
            <nav className="flex flex-row gap-x-[10px]">
                <ul className="flex flex-row gap-x-[60px] h-[40px]">
                    <Link href="/" className={pathname == "/" ? "border-b-[2px] border-[#373737] flex items-center" : "flex items-center"}>Home</Link>
                    <Link href="/page1" className="flex items-center">Page 1</Link>
                    <Link href="/page2" className="flex items-center">Page 2</Link>
                    <Link href="/page2" className="flex items-center">Page 3</Link>
                </ul>
            </nav>
            <div className={`${anton.className} flex justify-center h-[40px] w-[400px] items-center font-extrabold text-2xl absolute mx-[50%] translate-x-[-50%] text-center`}>YC Directory</div>
            <div className="flex justify-center items-center w-[140px] rounded-full text-white bg-[#373737] h-[40px] cursor-pointer px-[15px]">Login</div>
        </header>
    )
}

export default Header