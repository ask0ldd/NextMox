import { IStartup } from "@/app/constants/startups"
import Image from "next/image"

function StartupCard({startup} : {startup : IStartup}){
    return(
        <article className="flex flex-col max-w-[calc(33.33333333%-20px/3)] w-[30%] bg-[#fafafa] shrink grow border-[#E5E5E5] border-1 p-[20px] rounded-[6px] hover:shadow-xl hover:bg-white cursor-pointer">
            <div className="flex flex-row justify-between w-full">
                <div className="flex flex-col">
                    <div className="flex flex-row gap-x-[20px] font-light">
                        <span className="text-[20px] font-semibold translate-y-[-1px]">{startup.companyName}</span>
                        <span className="text-[14px] mt-[4px]">{startup.location}</span>
                    </div>
                    <div className="text-[16px] mt-[1px]">{startup.description.split('.')[0] + '.'}</div>
                </div>
                <Image className="grow-0 shrink-0 h-[45px] rounded-full" src={'/logos/' + startup.icon} width={45} height={45} alt={startup.companyName + "logo"}/>
            </div>
            <ul className="flex flex-row gap-x-[8px] text-[12px] mt-[14px]">
                {startup.categories.slice(0, 4).map((category,i) => <li key={i} className="bg-neutral-100 border-1 border-gray-200 px-[10px] py-[5px] rounded-[3px]">{category.toUpperCase()}</li>)}
            </ul>
            <Image 
                src={'/landing/' + startup.pic} 
                width={1000} height={300} 
                alt="screenshot"
                className="w-full h-[300px] saturate-75 mt-[15px] object-cover object-center opacity-90"
            />
        </article>
    )
}

export default StartupCard