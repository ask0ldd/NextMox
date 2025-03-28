export default function Footer(){
    return(
        <footer className="flex flex-col w-full max-w-[1440px] mx-auto pt-[40px]">
            <div className="flex flex-row gap-x-[80px]">
                <div className="w-[60px] h-[60px] bg-indigo-100 border-1 border-indigo-200"></div>
                <div className="flex flex-col">
                    <h3 className="font-semibold">Programs</h3>
                    <ul className="flex flex-col gap-y-[5px] mt-[10px] text-[14px]">
                        <li>YC Program</li>
                        <li>Startup School</li>
                        <li>Work at a Startup</li>
                        <li>Co-Founder Matching</li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h3 className="font-semibold">Company</h3>
                    <ul className="flex flex-col gap-y-[5px] mt-[10px] text-[14px]">
                        <li>YC Blog</li>
                        <li>Contact</li>
                        <li>Press</li>
                        <li>People</li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h3 className="font-semibold">Resources</h3>
                    <ul className="flex flex-col gap-y-[5px] mt-[10px] text-[14px]">
                        <li>Startup Directory</li>
                        <li>Startup Library</li>
                        <li>Investors</li>
                        <li>SAFE</li>
                    </ul>
                </div>
                <div className="flex flex-row ml-auto gap-x-[20px]">
                    <span className="h-[40px] flex justify-center items-center text-[18px]">Make something people want.</span>
                    <button className="h-[40px] flex justify-center items-center bg-[#373737] text-white px-[20px] rounded-[6px] text-[14px]">Apply to Our Program</button>
                </div>
            </div>
        </footer>)
}