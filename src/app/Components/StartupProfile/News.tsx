import Link from "next/link";

export default function News({titre, date, url} : {titre : string, date : string, url : string}){
    return(
        <div className="flex flex-col">
            <span><Link className="text-blue-500 font-normal" href={url}>{titre}</Link></span>
            <span className="mt-[6px] text-[14px]">{date}</span>
            <hr className="border-indigo-300 my-[12px] border-dashed"/>
        </div>
    )
}