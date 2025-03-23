"use client"
import { redirect } from "next/navigation"
import { MouseEvent } from "react"

export default function CardPill({category} : {category : string}){

    function handlePillClick(e : MouseEvent<HTMLLIElement>){
        e.preventDefault()
        e.stopPropagation()

        const el = e.currentTarget as HTMLLIElement

        redirect('/?query=' + el.textContent?.toLowerCase())
    }

    return(
        <li onClick={handlePillClick} className="bg-[#373737] text-white px-[12px] py-[6px] pt-[7px] tracking-wider rounded-[3px] hover:bg-[#291b5aaa]">
            {category.toUpperCase()}
        </li>
    )
}