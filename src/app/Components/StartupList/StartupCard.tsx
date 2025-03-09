function StartupCard(){
    return(
        <article className="flex flex-col w-[20%] shrink grow border-neutral-200 bg-neutral-50 border-1 p-[10px] rounded-[6px]">
            <div className="flex flex-row justify-between">
                <span>Date</span>
                <div>Views</div>
            </div>
        </article>
    )
}

export default StartupCard