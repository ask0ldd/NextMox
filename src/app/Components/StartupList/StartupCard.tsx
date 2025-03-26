import { IStartup } from "@/app/constants/startups"
import Image from "next/image"
import Link from "next/link"
import CardPill from "./CardPill"

function StartupCard({startup} : {startup : IStartup}){

    return(
        <Link className="group flex shrink grow max-w-[calc(33.33333333%-20px/3)] w-[30%] shadow-lg shadow-indigo-200 hover:shadow-[#a5b4fc88] hover:shadow-[0_8px_16px_0px,0_4px_8px_0px] rounded-[6px] overflow-hidden" href={`/startups/${startup.id}`}>
            <article className="w-full bg-gradient-to-b from-[#ffffffbb] to-[#ffffffaa] border-1 border-white shrink grow p-[20px] hover:bg-white cursor-pointer">
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-x-[20px] font-light">
                            <span className="text-[20px] font-semibold translate-y-[-2px]">{startup.companyName}</span>
                            <span className="text-[14px] mt-[4px] text-[#a5a5a5] font-normal">{startup.location}</span>
                        </div>
                        <div className="text-[16px] mt-[1px]">{startup.description.split('.')[0] + '.'}</div>
                    </div>
                    <Image className="grow-0 shrink-0 h-[45px] opacity-85 rounded-full" src={'/logos/' + startup.smallIcon} width={45} height={45} alt={startup.companyName + "logo"}/>
                </div>
                <ul className="flex flex-row gap-x-[8px] text-[11px] mt-[14px]">
                    {startup.categories.slice(0, 4).map((category, idx) => <CardPill key={'pill' + idx} category={category}/>)}
                </ul>
                <div className="flex w-full h-[300px] max-h-[300px] overflow-hidden rounded-[3px] border-1 border-[#373737] mt-[15px]">
                    <Image 
                        src={'/landing/' + startup.pic} 
                        width={500} height={150} 
                        alt="screenshot"
                        className="w-full h-full saturate-65 object-cover object-center opacity-90 transition-transform duration-800 ease-in-out group-hover:scale-110 group-hover:saturate-85"
                    />
                </div>
            </article>
        </Link>
    )
}

export default StartupCard

/*
    Pre-Seed Stage
    Seed Stage
    Early Stage
    Growth Stage
    Expansion phase
    Exit phase
*/