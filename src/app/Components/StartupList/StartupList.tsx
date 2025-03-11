import StartupAPIService from "@/app/Services/StartupAPIService"
import StartupCard from "./StartupCard"

async function StartupList({query} : {query? : string}){

    const startupService = new StartupAPIService()
    const startups = await startupService.getAll()

    return(
        <section className="flex flex-col w-full shrink grow max-w-[1440px]">
            <h2 className="text-[22px] font-semibold pt-[20px]">{!query ? 'Recommended Startups' : `Search Results for : "${query}"`}</h2>
            <div className="flex flex-row flex-wrap gap-x-[15px] gap-y-[15px] w-full mt-[20px]">
                {startups.filter(startup => startup.companyName.toLowerCase().includes((query ?? "").toLowerCase())).map((startup, i) => 
                    <StartupCard key={"startup" + i} startup={startup}/>
                )}
            </div>
        </section>
    )
}

export default StartupList