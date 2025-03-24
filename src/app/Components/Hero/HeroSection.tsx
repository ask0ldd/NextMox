import Image from "next/image"
import { Rubik } from "next/font/google"
import SearchForm from "./SearchForm"

const anton = Rubik({
    subsets: ["latin"],
    weight: "700",
})

function HeroSection({query} : {query? : string}){
    return(
        <section className="flex flex-row w-full justify-center bg-gradient-to-r from-indigo-200 to-fuchsia-100 h-[500px] pb-[10px] pt-[60px] items-center">
            <div className="flex flex-row w-full max-w-[1440px] justify-between">
                <div className="flex flex-col">
                    <h1 className={anton.className + " flex text-6xl font-bold items-center leading-[75px]"}>
                        {/*<Image src="/coin.png" alt="coin" height={100} width={100} className="shrink-0 h-[130px] w-[130px] mr-[40px]"/>*/}
                        Pitch your Startup<br/>to the Right Audience
                    </h1>
                    <span className="text-[22px] mt-[25px] leading-[30px]">Discover and invest in promising startups through our curated directory,<br/>connecting you with innovative entrepreneurs poised to transform industries.</span>
                    <SearchForm query={query}/>
                </div>
                <Image src="/rocket2.png" alt="rocket" width={227 * 1.1} height={350 * 1.1} className="translate-y-[-25px]"/>
            </div>
        </section>
    )
}

export default HeroSection