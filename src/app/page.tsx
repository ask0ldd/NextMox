import Header from "./Components/Header";
import HeroSection from "./Components/Hero/HeroSection";
import StartupList from "./Components/StartupList/StartupList";

export default function Home() {
return (
    <div className="flex flex-col min-h-screen max-w-[1440px] w-[100%] mx-auto">
    <Header/>
    <main className="flex flex-col row-start-2 items-center sm:items-start">
        <HeroSection/>
        <StartupList/>
    </main>
    <footer>

    </footer>
    </div>
);
}
