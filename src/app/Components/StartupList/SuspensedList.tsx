import SuspensedCard from "./SuspensedCard"

function SuspensedList(){
    return(
        <section className="flex flex-col w-full shrink grow max-w-[1440px]">
            <h2 className="text-[22px] font-semibold pt-[20px]">Searching for Startups</h2>
            <div className="flex flex-row flex-wrap gap-x-[15px] gap-y-[15px] w-full mt-[20px]">
                <SuspensedCard/><SuspensedCard/><SuspensedCard/>
            </div>
        </section>
    )
}

export default SuspensedList