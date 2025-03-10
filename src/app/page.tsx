import Header from "./Components/Header";
import HeroSection from "./Components/Hero/HeroSection";
import StartupList from "./Components/StartupList/StartupList";

export default async function Home({searchParams} : IProps) {
    const query = (await searchParams).query

    return (
        <div className="flex flex-col min-h-screen max-w-[1440px] w-[100%] mx-auto pb-[40px]">
            <Header/>
            <main className="flex flex-col row-start-2 items-center sm:items-start">
                <HeroSection query={query}/>
                <StartupList query={query}/>
            </main>
            <footer>

            </footer>
        </div>
    );
}

interface IProps{
    searchParams : Promise<{query? : string}>
}
