"use client"

import Link from "next/link"

function ResetFormButton(){
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
        <button type="reset" onClick={resetForm} className="w-[140px] text-white cursor-pointer bg-[#171717] h-[40px] rounded-full shadow-indigo-800 drop-shadow-md">
            <Link href="/" className="w-full h-full flex justify-center items-center px-[15px]">Reset</Link>
        </button>
    )
}

export default ResetFormButton