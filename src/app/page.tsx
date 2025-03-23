/* eslint-disable @typescript-eslint/no-unused-vars */
import { Suspense, use } from "react";
import Header from "./Components/Header";
import HeroSection from "./Components/Hero/HeroSection";
import StartupList from "./Components/StartupList/StartupList";
import SuspensedList from "./Components/StartupList/SuspensedList";

// searchParams prop is passed by default by next
export default function Home({searchParams} : IProps) {
    const params = use(searchParams)
    const query = params.query // query : is the input name of the form used in the url by default

    /*const [isPending, startTransition] = useTransition()

    const handleQueryChange = (newQuery: string) => {
        startTransition(() => {
          // Update the query or trigger any async operation
          params.query = newQuery
        })
    }*/

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
