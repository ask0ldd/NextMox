import Founder from "@/app/Components/StartupProfile/Founder";
import Header from "@/app/Components/Header";
import StartupAPIService from "@/app/Services/StartupAPIService";
import Image from "next/image"
import StartupPill from "@/app/Components/StartupProfile/StartupPill";
import News from "@/app/Components/StartupProfile/News";

// params prop is passed by default by next
export default async function StartupPage({params} : IProps) {
  const id = (await params).id
  
    const startupService = new StartupAPIService()
    const startup = await startupService.getById(parseInt(id))

  return (
        <div className="flex flex-col min-h-screen w-[100%] mx-auto pb-[40px] items-center">
            <Header/>
            <main className="flex flex-col row-start-2 items-center w-full justify-center bg-gradient-to-t from-indigo-100 to-indigo-50 pt-[20px] pb-[60px]">
                <div className="flex flex-col w-full max-w-[1440px]">
                    <section className="flex w-full gap-x-[50px]">

                        <div className="flex grow shrink flex-col w-full">
                            <span className="text-[13px]">{`Home > Companies > ${startup?.companyName}`}</span>
                            <div className="flex flex-row gap-x-[20px] mt-[18px]">
                                <Image className="grow-0 shrink-0 opacity-85 rounded-[6px] w-[100px] h-[100px] shadow-lg shadow-indigo-200" src={'/logos/' + startup?.icon} width={128} height={128} alt={startup?.companyName + "logo"}/>
                                <div className="flex flex-col">
                                    <span className="text-[30px] font-semibold translate-y-[-7px]">{startup?.companyName}</span>
                                    <span className="translate-y-[-9px]">{startup?.description.split('.')[0] + '.'}</span>
                                    <ul className="flex flex-row gap-x-[8px] h-[30px] text-[12px]">
                                        {
                                            startup?.categories.slice(0, 4).map((category, idx) => <StartupPill key={'pill' + idx} category={category}/>)
                                        }
                                    </ul>
                                </div>
                            </div>
                            <hr className="mt-[30px] border-indigo-300"/>
                            <ul className="w-full h-[80px] flex flex-row gap-x-[20px] items-center">
                                <li>Company</li>
                                <li>Jobs</li>
                                <li>News</li>
                                <li className="ml-auto">http://airbnb.com</li>
                            </ul>
                            <hr className="mb-[30px] border-indigo-300"/>
                            <div>{companyFullDescription}</div>
                            <h4 className="text-[24px] font-semibold mt-[30px] mb-[20px]">Latest News</h4>
                            {
                                news.map((newsItem, index) => (
                                    <News key={index} titre={newsItem.title} date={newsItem.date} url={newsItem.url} />
                                ))
                            }
                        </div>

                        <div className="flex flex-col grow-0 shrink-0 w-[300px] pt-[10px]">
                            <div className="flex flex-col w-full bg-gradient-to-b from-[#ffffffaa] to-[#ffffff99] border-1 border-white p-[20px] gap-x-[15px] shadow-lg shadow-indigo-200 rounded-[6px] gap-y-[10px]">
                                <div className="w-[140px] h-[80px] mx-auto bg-indigo-100 border-1 border-indigo-200"></div>
                                <span className="text-[22px] font-semibold mt-[10px]">{startup?.companyName}</span>
                                <div className="flex justify-between"><span>Founded:</span><span>{startup?.founded}</span></div>
                                <div className="flex justify-between"><span>Team Size:</span><span>{startup?.teamSize}</span></div>
                                <div className="flex justify-between"><span>Status:</span><span>{startup?.status}</span></div>
                                <div className="flex justify-between"><span>Location:</span><span>{startup?.location.split(',')[0]}</span></div>
                            </div>
                            <h4 className="text-[24px] mt-[30px]">Founders</h4>
                            <Founder marginTop={'10px'}/>
                            <Founder/>
                            <Founder/>
                        </div>

                    </section>
                </div>
            </main>
            <footer>
            </footer>
        </div>
  );
}

interface IProps{
    params : Promise<{id : string}>
}

const companyFullDescription = `Founded in August of 2008 and based in San Francisco, California, Airbnb is a trusted community marketplace for people to list, discover, and book unique accommodations around the world — online or from a mobile phone. Whether an apartment for a night, a castle for a week, or a villa for a month, Airbnb connects people to unique travel experiences, at any price point, in more than 33,000 cities and 192 countries. And with world-class customer service and a growing community of users, Airbnb is the easiest way for people to monetize their extra space and showcase it to an audience of millions.\n\n\n

No global movement springs from individuals. It takes an entire team united behind something big. Together, we work hard, we laugh a lot, we brainstorm nonstop, we use hundreds of Post-Its a week, and we give the best high-fives in town. Headquartered in San Francisco, we have satellite offices in Dublin, London, Barcelona, Paris, Milan, Copenhagen, Berlin, Moscow, São Paolo, Sydney, and Singapore.`


const news : INews[] = [
    {title : `Airbnb CEO Brian Chesky on taking it back to basics: ‘I can’t make products just for 41-year-old tech founders’ - The Verge`,
    date : `May 09, 2023`,
    url : 'http://www.google.com'},
    {title : `Airbnb launches Airbnb Rooms listing category for budget travel`,
    date : `May 03, 2023`,
    url : 'http://www.google.com'},
    {title : `Brian Chesky Isn't Running Airbnb--He's 'Designing' It`,
    date : `Mar 16, 2023`,
    url : 'http://www.google.com'},
    {title : `Airbnb’s cofounder just donated $25M to get plastic out of the ocean`,
    date : `Feb 02, 2023`,
    url : 'http://www.google.com'},
    {title : `'Hocus Pocus' fans can now stay in the Sanderson Sisters' cottage : NPR`,
    date : `Oct 06, 2022`,
    url : 'http://www.google.com'},
]

interface INews {
    title : string
    date : string
    url : string
}