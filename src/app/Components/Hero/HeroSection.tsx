// import Image from "next/image"

import SearchForm from "./SearchForm"

function HeroSection(){
    return(
        <section className="flex flex-col w-full bg-gradient-to-r from-indigo-400 to-purple-300 h-[400px] pt-[30px] items-center">
            <h1 className="text-6xl font-semibold text-white text-center leading-[80px]">Pitch your Startup<br/>to the Right Audience</h1>
            <span className="text-white text-2xl mt-[40px] opacity-90">Connect with 1000s of Startup Founders and Investors in One Place</span>
            {/*<Image src="/mega.png" alt="mega" width={200} height={200}/>*/}
            <SearchForm/>
        </section>
    )
}

export default HeroSection