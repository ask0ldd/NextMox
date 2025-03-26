import Header from "@/app/Components/Header";
import CardPill from "@/app/Components/StartupList/CardPill";
import StartupAPIService from "@/app/Services/StartupAPIService";
import Image from "next/image"

// params prop is passed by default by next
export default async function StartupPage({params} : IProps) {
  const id = (await params).id
  
    const startupService = new StartupAPIService()
    const startup = await startupService.getById(parseInt(id))

  return (
        <div className="flex flex-col min-h-screen w-[100%] mx-auto pb-[40px] items-center">
            <Header/>
            <main className="flex flex-col row-start-2 items-center w-full justify-center">
                <div className="flex flex-col w-full max-w-[1440px]">
                    <span>{`Home > Companies > ${startup?.companyName}`}</span>
                    <section className="flex w-full gap-x-[30px] mt-[20px]">
                        <div className="flex grow shrink flex-col w-full">
                            <div className="flex flex-row gap-x-[20px]">
                                <Image className="grow-0 shrink-0 opacity-85 rounded-[6px]" src={'/logos/' + startup?.icon} width={128} height={128} alt={startup?.companyName + "logo"}/>
                                <div className="flex flex-col">
                                    <span className="text-[30px] font-semibold">{startup?.companyName}</span>
                                    <span>{startup?.description.split('.')[0] + '.'}</span>
                                    <ul className="flex flex-row gap-x-[5px]">
                                        {startup?.categories.slice(0, 4).map((category, idx) => <CardPill key={'pill' + idx} category={category}/>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col grow-0 shrink-0 w-[300px]">
                            <div className="flex flex-col w-full bg-[#f6f6f6] border-1 border-[#eaeaea] p-[20px] rounded-[6px] gap-y-[10px]">
                                <div className="w-[140px] h-[80px] mx-auto bg-[#e6e6e6]"></div>
                                <span className="text-[22px] font-semibold mt-[10px]">{startup?.companyName}</span>
                                <div className="flex justify-between"><span>Founded:</span><span>{startup?.founded}</span></div>
                                <div className="flex justify-between"><span>Team Size:</span><span>{startup?.teamSize}</span></div>
                                <div className="flex justify-between"><span>Status:</span><span>{startup?.status}</span></div>
                                <div className="flex justify-between"><span>Location:</span><span>{startup?.location.split(',')[0]}</span></div>
                            </div>
                            <h4 className="text-[24px] mt-[30px]">Founders</h4>
                            <div className="flex flex-row bg-[#f6f6f6] border-1 border-[#eaeaea] p-[20px] rounded-[6px] mt-[10px] gap-x-[15px]">
                                <div className="w-[75px] h-[75px] bg-[#e6e6e6]"></div>
                                <div className="flex flex-col">
                                    <span>Name</span>
                                    <span>Founder</span>
                                    <span>LinkedIn</span>
                                </div>
                            </div>
                            <div className="flex flex-row bg-[#f6f6f6] border-1 border-[#eaeaea] p-[20px] rounded-[6px] mt-[20px] gap-x-[15px]">
                                <div className="w-[75px] h-[75px] bg-[#e6e6e6]"></div>
                                <div className="flex flex-col">
                                    <span>Name</span>
                                    <span>Founder</span>
                                    <span>LinkedIn</span>
                                </div>
                            </div>
                            <div className="flex flex-row bg-[#f6f6f6] border-1 border-[#eaeaea] p-[20px] rounded-[6px] mt-[20px] gap-x-[15px]">
                                <div className="w-[75px] h-[75px] bg-[#e6e6e6]"></div>
                                <div className="flex flex-col">
                                    <span>Name</span>
                                    <span>Founder</span>
                                    <span>LinkedIn</span>
                                </div>
                            </div>
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