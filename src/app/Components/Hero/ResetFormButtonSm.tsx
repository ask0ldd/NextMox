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
            <Link href="/" className="w-full h-full flex justify-center items-center">
                <svg className="w-[18px] h-[18px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#FFFFFF" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            </Link>
        </button>
    )
}

export default ResetFormButtonSm