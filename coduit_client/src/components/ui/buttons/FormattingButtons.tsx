import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';

import ListRoundedIcon from '@mui/icons-material/ListRounded';

import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded';

export function Bold(){
    return(
        <>
            <button 
                type="button"
                className="flex group items-center justify-center p-1 rounded dark:bg-black bg-gray-200 transition-all duration-300 ease-in-out dark:hover:bg-sapphire hover:bg-sapphire dark:border border-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-gray-400 transition-all ease-in-out duration-300 group-hover:text-white">
                    <path strokeLinejoin="round" d="M6.75 3.744h-.753v8.25h7.125a4.125 4.125 0 0 0 0-8.25H6.75Zm0 0v.38m0 16.122h6.747a4.5 4.5 0 0 0 0-9.001h-7.5v9h.753Zm0 0v-.37m0-15.751h6a3.75 3.75 0 1 1 0 7.5h-6m0-7.5v7.5m0 0v8.25m0-8.25h6.375a4.125 4.125 0 0 1 0 8.25H6.75m.747-15.38h4.875a3.375 3.375 0 0 1 0 6.75H7.497v-6.75Zm0 7.5h5.25a3.75 3.75 0 0 1 0 7.5h-5.25v-7.5Z" />
                </svg>
            </button>
        </>
    )
}
export function Italic(){
    return(
        <>
            <button 
                type="button"
                className="flex items-center justify-center p-1 rounded bg-gray-200 dark:bg-black group transition-all duration-300 ease-in-out dark:hover:bg-sapphire hover:bg-sapphire dark:border border-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-gray-400 transition-all ease-in-out duration-300 group-hover:text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.248 20.246H9.05m0 0h3.696m-3.696 0 5.893-16.502m0 0h-3.697m3.697 0h3.803" />
                </svg>
            </button>
        </>
    )
}
export function Code(){
    return(
        <>
            <button 
                type="button"
                className="flex items-center justify-center p-1 rounded bg-gray-200 dark:bg-black group transition-all duration-300 ease-in-out dark:hover:bg-sapphire hover:bg-sapphire dark:border border-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-gray-400 transition-all ease-in-out duration-300 group-hover:text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
            </button>
        </>
    )
}
export function LinkBtn(){
    return(
        <>
            <button 
                type="button"
                className="flex items-center justify-center p-1 rounded bg-gray-200 dark:bg-black transition-all group duration-300 ease-in-out dark:hover:bg-sapphire hover:bg-sapphire dark:border border-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-gray-400 transition-all ease-in-out duration-300 group-hover:text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                </svg>
            </button>
        </>
    )
}
export function Header1(){
    return(
        <>
            <button 
                type="button"
                className="flex w-7 h-7 items-center justify-center  p-1 rounded bg-gray-200 dark:bg-black transition-all group duration-300 ease-in-out dark:hover:bg-sapphire hover:bg-sapphire dark:border border-gray-600">
                    <div className=" text-gray-400 text-center transition-all ease-in-out duration-300 group-hover:text-white">H1</div>
            </button>
        </>
    )
}
export function Header2(){
    return(
        <>
            <button 
                type="button"
                className="flex w-7 h-7 items-center justify-center  p-1 rounded bg-gray-200 dark:bg-black transition-all group duration-300 ease-in-out dark:hover:bg-sapphire hover:bg-sapphire dark:border border-gray-600">
                    <div className=" text-gray-400 text-center transition-all ease-in-out duration-300 group-hover:text-white">H2</div>
            </button>
        </>
    )
}
export function Header3(){
    return(
        <>
            <button 
                type="button"
                className="flex w-7 h-7 items-center justify-center  p-1 rounded bg-gray-200 dark:bg-black transition-all group duration-300 ease-in-out dark:hover:bg-sapphire hover:bg-sapphire dark:border border-gray-600">
                    <div className=" text-gray-400 text-center transition-all ease-in-out duration-300 group-hover:text-white">H3</div>
            </button>
        </>
    )
}


export function ListDisc(){
    return(
        <>
            <button 
                type="button"
                className="flex !w-7 !h-7 items-center justify-center p-1 rounded bg-gray-200 dark:bg-black transition-all group duration-300 ease-in-out dark:hover:bg-sapphire hover:bg-sapphire dark:border border-gray-600">
                <ListRoundedIcon className=" text-gray-400 transition-all ease-in-out duration-300 group-hover:text-white"/>
            </button>
        </>
    )
}
export function ListNum(){
    return(
        <>
            <button 
                type="button"
                className="flex !w-7 !h-7 items-center justify-center p-1 rounded bg-gray-200 dark:bg-black transition-all group duration-300 ease-in-out dark:hover:bg-sapphire hover:bg-sapphire dark:border border-gray-600">
                <FormatListNumberedRoundedIcon className=" text-gray-400 transition-all ease-in-out duration-300 group-hover:text-white"/>
            </button>
        </>
    )
}
export function Quotes(){
    return(
        <>
            <button 
                type="button"
                className="flex !w-7 !h-7 items-center justify-center p-1 rounded bg-gray-200 dark:bg-black transition-all group duration-300 ease-in-out dark:hover:bg-sapphire hover:bg-sapphire dark:border border-gray-600">
                <FormatQuoteRoundedIcon className=" text-gray-400 transition-all ease-in-out duration-300 group-hover:text-white"/>
            </button>
        </>
    )
}