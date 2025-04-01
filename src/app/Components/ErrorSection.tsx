export default function ErrorSection({message} : {message ?: string}){

    return(
        <section className="flex flex-col w-full shrink grow items-center bg-gradient-to-t from-indigo-100 to-indigo-50 pb-[40px] pt-[20px]">
            <div className="flex flex-col w-full max-w-[1440px] shrink grow">
                <div className="flex flex-row flex-wrap gap-x-[15px] gap-y-[15px] w-full mt-[20px] justify-center items-center">
                    ERROR {message ? ': ' + message : ''}
                </div>
            </div>
        </section>
    )
}