/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import Form from "next/form"
import ResetFormButtonSm from "./ResetFormButtonSm"
import SubmitButton from "./SubmitButton"
import { Dispatch, FormEvent, SetStateAction } from "react"
import { useRouter } from "next/navigation"

function SearchForm({query} : {query? : string, setIsPending? : Dispatch<SetStateAction<boolean>>}){

    const router = useRouter()

    function handleSearchSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const queryValue = formData.get('query') as string
        router.push(`/?query=${encodeURIComponent(queryValue)}`)
    }

    return(
        <Form id="searchForm" action="/" onSubmit={handleSearchSubmit} className="flex w-full gap-x-[10px] mt-[40px]">
            {/* input name is mandatory since it will be used as parameter in the url query string */}
            <div className="w-full flex bg-white h-[40px] rounded-full pl-[13px] border-2 border-indigo-300 focus-within:outline-none focus-within:border-[#291b5aee] justify-center items-center">
                <input 
                    id="searchInput"
                    name="query"
                    type="text"
                    defaultValue={query}
                    placeholder="Search for a Startup" 
                    className="w-full tracking-wide focus:border-none focus:outline-none"
                />
                {query && <ResetFormButtonSm/>}
            </div>
            <SubmitButton/>
        </Form>
    )
}

export default SearchForm