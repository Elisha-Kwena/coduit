"use client"

import { useState, useRef } from 'react';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import { useClickOutside } from '@/hooks/outSideClick';

export default function FeedFilters(){
    const [openFilters, setFiltersOpen] = useState(false);
    const filterRef = useRef<HTMLDivElement>(null);

    const toggleFilter = () => {
        setFiltersOpen((prev) => !prev);
    };

    // Use the custom hook
    useClickOutside(filterRef, () => {
        setFiltersOpen(false);
    });

    return(
        <>
            <div className="flex items-center justify-center relative" ref={filterRef}>
                <button
                    onClick={toggleFilter}
                    className="flex group items-center justify-center p-1 bg-white dark:bg-black rounded shadow dark:shadow dark:shadow-white/30">
                    <TuneRoundedIcon className={`${openFilters?"text-sapphire":"dark:text-white"} group-hover:text-sapphire transition-all duration-300 ease-in-out`}/>
                </button>

                <div className="absolute z-[100] w-56 right-0 bottom-0 top-[115%]">
                    <div className={`w-full flex flex-col gap-1 shadow dark:shadow-gray-400/20 rounded bg-white dark:bg-black overflow-hidden transition-all duration-300 ease-in-out ${openFilters?"max-h-72 p-2":"max-h-0"}`}>
                        <h1 className="dark:text-white font-bold capitalize">Filter feeds </h1>
                        <button className="mt-3 w-full p-2 border border-gray-500/50 rounded dark:text-white hover:bg-gray-400 dark:hover:bg-dark800 text-left hover:text-sapphire text-sm transition-all duration-300 ease-out">Interests</button>
                        <button className="w-full p-2 border border-gray-500/50 rounded dark:text-white hover:bg-gray-400 dark:hover:bg-dark800 text-left hover:text-sapphire text-sm transition-all duration-300 ease-out">Top Engagement</button>
                        <button className="w-full p-2 border border-gray-500/50 rounded dark:text-white hover:bg-gray-400 dark:hover:bg-dark800 text-left hover:text-sapphire text-sm transition-all duration-300 ease-out">Following Only</button>
                        <button className="w-full p-2 border border-gray-500/50 rounded dark:text-white hover:bg-gray-400 dark:hover:bg-dark800 text-left hover:text-sapphire text-sm transition-all duration-300 ease-out">Date</button>
                        <button className="w-full p-2 border border-gray-500/50 rounded dark:text-white hover:bg-gray-400 dark:hover:bg-dark800 text-left hover:text-sapphire text-sm transition-all duration-300 ease-out">Content Type</button>
                    </div>
                </div>
            </div> 
        </>
    )
}