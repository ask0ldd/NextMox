import { IStartup } from "@/app/constants/startups"
import Image from "next/image"
import Link from "next/link"

function StartupCard({startup} : {startup : IStartup}){
    return(
        <Link className="group flex shrink grow max-w-[calc(33.33333333%-20px/3)] w-[30%]" href={`/startups/${startup.id}`}>
            <article className="w-full bg-gradient-to-b from-[#ffffffee] to-[#ffffffbb] border-1 border-indigo-100 shrink grow p-[20px] rounded-[6px] hover:shadow-xl hover:bg-white cursor-pointer">
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-x-[20px] font-light">
                            <span className="text-[20px] font-semibold translate-y-[-2px]">{startup.companyName}</span>
                            <span className="text-[14px] mt-[4px] text-[#a5a5a5] font-normal">{startup.location}</span>
                        </div>
                        <div className="text-[16px] mt-[1px]">{startup.description.split('.')[0] + '.'}</div>
                    </div>
                    <Image className="grow-0 shrink-0 h-[45px] rounded-full" src={'/logos/' + startup.icon} width={45} height={45} alt={startup.companyName + "logo"}/>
                </div>
                <ul className="flex flex-row gap-x-[8px] text-[11px] mt-[14px]">
                    {startup.categories.slice(0, 4).map((category,i) => 
                            <li key={i} className="bg-[#291b5a25] border-1 border-[#291b5a30] px-[12px] py-[5px] rounded-full">
                                {category.toUpperCase()}
                            </li>
                        )}
                </ul>
                <div className="flex w-full h-[300px] max-h-[300px] overflow-hidden rounded-[3px] border-1 border-[#a5a5a5] mt-[15px]">
                    <Image 
                        src={'/landing/' + startup.pic} 
                        width={500} height={150} 
                        alt="screenshot"
                        className="w-full h-full saturate-75 object-cover object-center opacity-90 transition-transform duration-800 ease-in-out group-hover:scale-125 group-hover:saturate-90"
                    />
                </div>
            </article>
        </Link>
    )
}

export default StartupCard