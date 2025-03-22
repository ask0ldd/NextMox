import StartupAPIService from "@/app/Services/StartupAPIService"
import StartupCard from "./StartupCard"
import { use } from "react"

function StartupList({query} : {query? : string}){

    const startupService = new StartupAPIService()
    const startups = use(startupService.getAll())

    return(
        <section className="flex flex-col w-full shrink grow items-center bg-gradient-to-t from-indigo-100 to-indigo-50 pb-[40px]">
            <div className="flex flex-col w-full max-w-[1440px] shrink grow">
                <h2 className="text-[22px] font-semibold pt-[20px]">{!query ? 'Recommended Startups' : `Search Results for : "${query}"`}</h2>
                <div className="flex flex-row flex-wrap gap-x-[15px] gap-y-[15px] w-full mt-[20px]">
                    {startups.filter(startup => startup.companyName.toLowerCase().includes((query ?? "").toLowerCase())).map((startup, i) => 
                        <StartupCard key={"startup" + i} startup={startup}/>
                    )}
                </div>
            </div>
        </section>
    )
}

export default StartupList