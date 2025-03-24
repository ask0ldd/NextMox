import Header from "@/app/Components/Header";
import StartupAPIService from "@/app/Services/StartupAPIService";

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
        </div>
      </main>
      <footer>
        {id}
      </footer>
  </div>
  );
}

interface IProps{
    params : Promise<{id : string}>
}