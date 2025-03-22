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
            <nav className="flex flex-row gap-x-[10px] h-full items-center">
                <ul className="flex flex-row gap-x-[10px] h-full">
                    <Link href="/" className={pathname == "/" ? "border-y-[4px] border-indigo-300 flex items-center h-full px-[10px]" : "flex items-center h-full px-[10px]"}>Home</Link>
                    <Link href="/page1" className="flex items-center h-full px-[10px]">About</Link>
                    <Link href="/page2" className="flex items-center h-full px-[10px]">Startup Jobs</Link>
                    <Link href="/page2" className="flex items-center h-full px-[10px]">Find a Co-founder</Link>
                </ul>
            </nav>
            <div className={`${anton.className} flex justify-center h-[40px] w-[400px] items-center font-extrabold text-2xl absolute mx-[50%] translate-x-[-50%] text-center`}>YC Directory</div>
            <div className="flex justify-center items-center w-[140px] rounded-full text-white bg-[#373737] h-[40px] cursor-pointer px-[15px]">Login</div>
        </header>
    )
}

export default Header