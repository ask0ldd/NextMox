export default function StartupPill({category} : {category : string}){

    return(
        <li className="bg-[#373737] text-white px-[12px] py-[6px] pt-[7px] tracking-wider rounded-[3px] hover:bg-[#291b5aaa]">
            {category.toUpperCase()}
        </li>
    )
}