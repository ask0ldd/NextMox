import Form from "next/form"
import ResetFormButton from "./ResetFormButton"

function SearchForm({query} : {query? : string}){

    return(
        <Form id="searchForm" action="/" className="flex w-full gap-x-[10px] mt-[40px]">
            {/* input name is mandatory since it will be used as parameter in the url query string */}
            <input 
                id="searchInput"
                name="query"
                type="text"
                defaultValue={query}
                placeholder="Search for a Startup" 
                className="w-full bg-white h-[40px] rounded-full px-[15px] border-2 border-indigo-300 focus:border-[#291b5aaa] focus:outline-none"
            />
            <button 
                type="submit" 
                className="w-[180px] text-white cursor-pointer bg-[#373737] px-[15px] h-[40px] rounded-full shadow-indigo-800 drop-shadow-md hover:bg-[#291b5aaa]"
            >
                Search
            </button>
            {query && <ResetFormButton/>}
        </Form>
    )
}

export default SearchForm