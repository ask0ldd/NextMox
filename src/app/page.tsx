import { Suspense } from "react";
import Header from "./Components/Header";
import HeroSection from "./Components/Hero/HeroSection";
import StartupList from "./Components/StartupList/StartupList";
import SuspensedList from "./Components/StartupList/SuspensedList";

export default async function Home({searchParams} : IProps) {
    const query = (await searchParams).query

    return (
        <div className="flex flex-col min-h-screen w-[100%] mx-auto pb-[40px] items-center">
            <Header/>
            <main className="flex flex-col row-start-2 items-center w-full justify-center">
                <HeroSection query={query}/>
                <Suspense fallback={<SuspensedList/>}>
                    <StartupList query={query}/>
                </Suspense>
            </main>
            <footer>

            </footer>
        </div>
    );
}

interface IProps{
    searchParams : Promise<{query? : string}>
}
