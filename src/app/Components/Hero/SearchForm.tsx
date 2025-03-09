import Form from "next/form"
import ResetFormButton from "./ResetFormButton"

function SearchForm(){

    return(
        <Form id="searchForm" action="" className="flex w-[45%] gap-x-[10px] mt-[40px]">
            <input 
                id="searchInput"
                type="text" 
                placeholder="Search for a Startup" 
                className="w-full bg-white h-[40px] rounded-full px-[15px]"
            />
            <input type="submit" value={"Submit"} className="w-[140px] text-white cursor-pointer bg-[#171717] px-[15px] h-[40px] rounded-full shadow-indigo-800 drop-shadow-md"/>
            <ResetFormButton/>
        </Form>
    )
}

export default SearchForm