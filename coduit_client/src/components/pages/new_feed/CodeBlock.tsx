export function CodeBlock(){
    return(
        <>
        <div className="relative">
            <button 
                type="button"
                className="flex px-3 items-center justify-center p-1 gap-2 rounded bg-gray-200 dark:bg-black group transition-all duration-300 ease-in-out dark:hover:bg-sapphire hover:bg-sapphire dark:border border-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-gray-400 transition-all ease-in-out duration-300 group-hover:text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
                <p className="text-sm">Code</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-gray-400 transition-all ease-in-out duration-300 group-hover:text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
            <div className="absolute top-8 bg-white shadow dark:bg-black p-1 border border-gray-600 rounded"></div>
        </div>
        </>
    )
}