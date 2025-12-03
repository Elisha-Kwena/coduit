"use client"

import React, {useState} from 'react'
import { useRouter } from 'next/navigation'

export default function SignOut(){
    const [error, setError] = useState<string | null>(null)
    const router = useRouter();

    const handleLogout = async () =>{
        
    }
    return(
        <button
        onClick={handleLogout}
        className="group w-full bg-gray-200 dark:bg-black p-2 rounded-md flex items-center justify-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 dark:text-white group-hover:text-sapphire transition-all duration-300 ease-in-out">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
            </svg>
            <span className="darktext-white font-fira-code font-bold group-hover:text-sapphire transition-all duration-300 ease-in-out">SignOut</span>
        </button>
    )
}