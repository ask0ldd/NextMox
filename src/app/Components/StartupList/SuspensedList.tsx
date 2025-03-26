import SuspensedCard from "./SuspensedCard"

function SuspensedList(){
    return(
        <section className="flex flex-col w-full shrink grow items-center bg-gradient-to-t from-indigo-100 to-indigo-50 pb-[40px]">
            <div className="flex flex-col w-full max-w-[1440px] shrink grow">
                <h2 className="text-[22px] font-semibold pt-[20px]">Searching for Startups</h2>
                <div className="flex flex-row flex-wrap gap-x-[15px] gap-y-[15px] w-full mt-[20px]">
                    <SuspensedCard/><SuspensedCard/><SuspensedCard/>
                </div>
            </div>
        </section>
    )
}

export default SuspensedList