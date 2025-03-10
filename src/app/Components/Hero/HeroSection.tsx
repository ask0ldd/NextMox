import Image from "next/image"

import SearchForm from "./SearchForm"

function HeroSection({query} : {query? : string}){
    return(
        <section className="flex flex-row w-full justify-between bg-gradient-to-r from-indigo-200 to-fuchsia-100 h-[400px] pb-[10px] items-center px-[80px]">
            <div className="flex flex-col ml-[50px]">
                <h1 className="flex text-6xl font-bold items-center leading-[75px]">
                    {/*<Image src="/coin.png" alt="coin" height={100} width={100} className="shrink-0 h-[130px] w-[130px] mr-[40px]"/>*/}
                    Pitch your Startup<br/>to the Right Audience
                </h1>
                <span className="text-[22px] mt-[25px] leading-[30px]">Discover and invest in promising startups through our curated directory,<br/>connecting you with innovative entrepreneurs poised to transform industries.</span>
                <SearchForm query={query}/>
            </div>
            <Image src="/rocket.png" alt="rocket" height={350} width={350}/>
        </section>
    )
}

export default HeroSection