"use client"
import { Rubik } from "next/font/google"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { authAPIService } from "../Services/AuthAPIService"
import { localStorageService } from "../Services/LocalStorageService"
import { jwtDecode } from "jwt-decode"
// import { useEffect, useState } from "react"
import IJWTToken from "../interfaces/IJWTToken"
import useLocalStorage from "../hooks/useLocalStorage"

const anton = Rubik({
    subsets: ["latin"],
    weight: "700",
})

function Header(){

    const pathname = usePathname()

    const token = useLocalStorage()

    // const [token, setToken] = useState<string | null>(null)

    /*useEffect(() => {
        const tk = localStorageService.getToken() // !!! useSyncExternalStore
        setToken(tk)
    }, [])*/

    async function login(){
        if(token) {
            logOut()
            return
        }
        const tk = await authAPIService.login({username : "maria", password : "guess"})
        localStorageService.setToken(tk)
        // setToken(tk)
    }

    function logOut(){
        localStorageService.empty()
        // setToken(null)
    }

    function getName() : string | null {
        if (!token) return null
        const { username } = jwtDecode(token) as IJWTToken
        return username || null
    }

    return(
        <header className="flex flex-row max-w-[1440px] w-full shrink-0 grow-0 justify-between items-center h-[80px] relative">
            <nav className="flex flex-row gap-x-[10px] h-full items-center">
                <ul className="flex flex-row gap-x-[10px] h-full">
                    <Link href="/" className={pathname == "/" ? "border-y-[4px] border-[#373737] flex items-center h-full px-[10px]" : "flex items-center h-full pr-[10px]"}>Home</Link>
                    <Link href="/page1" className="flex items-center h-full px-[10px]">About</Link>
                    <Link href="/page2" className="flex items-center h-full px-[10px]">Startup Jobs</Link>
                    <Link href="/page2" className="flex items-center h-full px-[10px]">Find a Co-founder</Link>
                </ul>
            </nav>
            <div className={`${anton.className} flex justify-center h-[40px] w-[400px] items-center font-extrabold text-2xl absolute mx-[50%] translate-x-[-50%] text-center`}>YC Directory</div>
            <div 
                onClick={login} 
                role="button" 
                aria-label={!getName() ? 'Login' : `Logged in as ${getName()}`} 
                className="flex justify-center items-center w-[140px] rounded-full text-white bg-[#373737] h-[40px] cursor-pointer px-[15px]">
                    {!getName() ? 'Login' : 'Hi ' + getName()}
                </div>
        </header>
    )
}

export default Header