function SuspensedCard(){
        return(
            <article className="flex flex-col max-w-[calc(33.33333333%-20px/3)] w-[30%] bg-gradient-to-b from-[#ffffffbb] to-[#ffffffaa] border-1 border-white shrink grow p-[20px] rounded-[6px] hover:shadow-xl hover:bg-white cursor-pointer">
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-col gap-y-[14px]">
                        <div className="flex flex-row gap-x-[20px] font-light">
                            <div className="w-[100px] h-[20px] bg-[#f1f1f2] grow-0 loading-elt"></div>
                            <div className="w-[100px] h-[20px] bg-[#f1f1f2] grow-0 loading-elt"></div>
                        </div>
                        <div className="w-[100px] h-[20px] bg-[#f1f1f2] loading-elt"></div>
                    </div>
                    <div className="grow-0 shrink-0 h-[45px] w-[45px] rounded-full bg-[#f1f1f2] loading-elt"/>
                </div>
                <ul className="flex flex-row gap-x-[8px] text-[12px] mt-[14px]">
                    <li className="bg-[#f1f1f2] h-[30px] w-[100px] px-[10px] py-[5px] loading-elt"></li>
                    <li className="bg-[#f1f1f2] h-[30px] w-[100px] px-[10px] py-[5px] loading-elt"></li>
                    <li className="bg-[#f1f1f2] h-[30px] w-[100px] px-[10px] py-[5px] loading-elt"></li>
                </ul>
                <div className="h-[300px] mt-[15px] w-full bg-[#f1f1f2] loading-elt"/>
            </article>
        )
}

export default SuspensedCard