import StartupCard from "./StartupCard"

function StartupList(){
    return(
        <section className="flex flex-col w-full">
            <h2 className="text-[22px] pt-[30px]">Recommended Startups</h2>
            <div className="flex flex-row flex-wrap gap-x-[15px] gap-y-[15px] w-full mt-[25px]">
                <StartupCard/>
                <StartupCard/>
                <StartupCard/>
                <StartupCard/>
                <StartupCard/>
                <StartupCard/>
                <StartupCard/>
                <StartupCard/>
                <StartupCard/>
                <StartupCard/>
                <StartupCard/>
                <StartupCard/>
            </div>
        </section>
    )
}

export default StartupList