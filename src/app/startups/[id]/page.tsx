import Founder from "@/app/Components/StartupProfile/Founder";
import Header from "@/app/Components/Header";
import StartupAPIService from "@/app/Services/StartupAPIService";
import Image from "next/image"
import StartupPill from "@/app/Components/StartupProfile/StartupPill";

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
                    <span>{`Home > Companies > ${startup?.companyName}`}</span>
                    <section className="flex w-full gap-x-[30px] mt-[20px]">
                        <div className="flex grow shrink flex-col w-full">
                            <div className="flex flex-row gap-x-[20px]">
                                <Image className="grow-0 shrink-0 opacity-85 rounded-[6px] w-[100px] h-[100px]" src={'/logos/' + startup?.icon} width={128} height={128} alt={startup?.companyName + "logo"}/>
                                <div className="flex flex-col">
                                    <span className="text-[30px] font-semibold translate-y-[-7px]">{startup?.companyName}</span>
                                    <span className="translate-y-[-9px]">{startup?.description.split('.')[0] + '.'}</span>
                                    <ul className="flex flex-row gap-x-[8px] h-[30px] text-[12px]">
                                        {startup?.categories.slice(0, 4).map((category, idx) => <StartupPill key={'pill' + idx} category={category}/>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col grow-0 shrink-0 w-[300px]">
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