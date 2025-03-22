"use client"

import Link from "next/link"

function ResetFormButtonSm(){
    // not using href since server side
    /*function resetForm(){
        const searchInput = document.querySelector('#searchInput') as HTMLInputElement
        searchInput.value = ""
    }*/

    // not using href since server side
    function resetForm(){
        const searchForm = document.querySelector('#searchForm')
        if(searchForm) (searchForm as HTMLFormElement).reset()
    }

    return(
        <button type="reset" onClick={resetForm} className="bg-[#373737] text-white rounded-full shrink-0 w-[32px] h-[32px] mr-[3px]">
            <Link href="/" className="w-full h-full flex justify-center items-center">x</Link>
        </button>
    )
}

export default ResetFormButtonSm