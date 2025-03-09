"use client"

function ResetFormButton(){
    // not using href since server side
    /*function resetForm(){
        const searchInput = document.querySelector('#searchInput') as HTMLInputElement
        searchInput.value = ""
    }*/

    // not using href since server side
    function resetForm(){
        const searchForm = document.querySelector('#searchForm') as HTMLFormElement
        if(searchForm) searchForm.reset()
    }

    return(
        <input type="button" value={"Reset"} onClick={resetForm} className="w-[140px] text-white cursor-pointer bg-[#171717] px-[15px] h-[40px] rounded-full shadow-indigo-800 drop-shadow-md"/>
    )
}

export default ResetFormButton