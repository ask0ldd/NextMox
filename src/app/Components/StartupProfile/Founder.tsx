export default function Founder({ marginTop = '20px' } : IProps){

    return(
        <div className={`flex flex-row bg-gradient-to-b from-[#ffffffaa] to-[#ffffff99] border-1 border-white p-[20px] rounded-[6px] gap-x-[15px] shadow-lg shadow-indigo-200`} style={{ marginTop }}>
            <div className="w-[75px] h-[75px] bg-indigo-100 border-1 border-indigo-200"></div>
            <div className="flex flex-col translate-y-[-1px]">
                <span>Name</span>
                <span className="mt-[5px]">Founder</span>
                <span className="mt-[5px]">LinkedIn</span>
            </div>
        </div>
    )
}

interface IProps{
    marginTop? : string
}