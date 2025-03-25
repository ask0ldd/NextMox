"use client"
import { useFormStatus } from "react-dom"

function SubmitButton() {

    const { pending } = useFormStatus()

    return (
        <button 
            type="submit" 
            className="w-[180px] tracking-wide text-white cursor-pointer bg-[#373737] px-[15px] h-[40px] rounded-full shadow-indigo-800 drop-shadow-md hover:bg-[#291b5aaa]"
        >
            {pending ? 'Searching...' : 'Search'}
        </button>
    )
  }
  
  export default SubmitButton