"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useSidebar } from "@/context/SidebarContext"
import { DropdownProvider } from "@/context/DropDownContext"
import { impactFont } from "@/lib/fonts/fonts"

import { useState, useRef, useEffect, use } from "react"

import Explore from "../navigation/Explore"
import Community from "../navigation/Community"
import Groups from "../navigation/Group"
import Create from "../navigation/Create"

import MoreWidget from "../navigation/MoreWidgets"
import ThemeWidget from "../navigation/ThemeWidget"
import ProfileWidget from "../navigation/ProfileWidget"
export default function Sidebar(){
    const { isOpen } = useSidebar();


    const pathname = usePathname()
    const currentYear = new Date().getFullYear()

    const [moreWidgetIsOpen, setMoreWidgetOpen] = useState(false)
    const [profileWidgetIsOpen, setProfileWidgetOpen] = useState(false)
    const [themeWidgetIsOpen, setThemeWidgetOpen] = useState(false)

    const bottomsideRef = useRef<HTMLDivElement>(null)

    const toggleMoreWidget = () => {
        setMoreWidgetOpen(prev => !prev)
        setThemeWidgetOpen(false)
        setProfileWidgetOpen(false)
    }

    const toggleProfileWidget = () => {
        setProfileWidgetOpen(prev => !prev)
        setThemeWidgetOpen(false)
        setMoreWidgetOpen(false)
    }

    const toggleThemeWidget = () => {
        setThemeWidgetOpen(prev => !prev) 
        setMoreWidgetOpen(false)
        setProfileWidgetOpen(false)
    }

    useEffect(() =>{
        const handleClickOutside = (event:MouseEvent) => {
            if (bottomsideRef.current && !bottomsideRef.current.contains(event.target as Node)){
                setMoreWidgetOpen(false)
                setThemeWidgetOpen(false)
                setProfileWidgetOpen(false)
                
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () =>{
            document.removeEventListener("mousedown",handleClickOutside)
        }
    })



    return(
        <>
            <DropdownProvider>
                <aside className={`w-72 h-screen bg-white dark:bg-black p-3 pb-1 md:pt-20 pt-16 md:block fixed top-0 transition-all duration-300 ease-in-out ${isOpen?" left-0":"md:left-0 -left-72"} z-50`}>
                    <div className="w-full h-full flex items-center justify-between flex-col gap-4">

                        {/* top side of the sidebar */}
                        <div className="top-side w-full flex items-center justify-start gap-1 flex-col h-3/4 overflow-scroll">
                            {/* ============================================= Home ============================================= */}
                                <div className="nav-item w-full h-30">
                                    <Link
                                        href="/feeds"
                                        className={`block pl-1 p-2 rounded font-fira-code ${
                                        pathname === '/feeds' ? 'text-sapphire dark:bg-[#232323] shadow bg-gray-500' : 'dark:text-white bg-gray-200 dark:bg-black'
                                    }`}>
                                        <div className="w-full flex items-center justify-start gap-4 group">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 group-hover:text-sapphire transition-all duration-300 ease-in-out">
                                                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                                            </svg>
                                            <span className="text-sm font-bold font-fira-code group-hover:text-sapphire transition-all duration-300 ease-in-out">Home</span>
                                        </div>
                                    </Link>
                                </div>


                                {/* ============================================= Explore ============================================*/}
                                <div className="nav-item w-full">
                                    <Explore id="explore"  />
                                </div>


                                {/* ============================================= Community ============================================*/}
                                <div className="nav-item w-full">
                                    <Community id="community"  />
                                </div>


                                {/* ============================================= Group ============================================*/}
                                <div className="nav-item w-full">
                                    <Groups id="groups"  />
                                </div>


                                {/* ============================================= Jobs ============================================== */}
                                <div className="nav-item w-full">
                                    <Link
                                        href="/jobs"
                                        className={`group block pl-1 p-2 rounded font-fira-code hover:bg-gray-400 dark:hover:bg-[#232323] hover:shadow bg-gray-200 transition-all duration-300 ease-in-out ${
                                          pathname === '/jobs' ? 'text-sapphire dark:bg-[#232323] shadow bg-gray-500' : 'dark:text-white dark:bg-black'
                                        }`}>
                                            <div className="w-full flex items-center justify-start gap-4">
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 group-hover:text-sapphire transition-all duration-300 ease-in-out" >
                                                <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd"/>
                                                <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                                              </svg>
                                              <span className="text-md font-bold font-fira-code group-hover:text-sapphire transition-all duration-300 ease-in-out">Jobs</span>
                                            </div>
                                    </Link>
                                </div>


                                {/* ============================================= Create ============================================*/}
                                <div className="nav-item w-full">
                                    <Create id="create"  />
                                </div>
                        </div>

                        {/* bottom side of the navbar */}
                        <div ref={bottomsideRef} className="w-full shrink-0  h-30 rellative flex items-center justify-end flex-col">

                            {/* ================================================ ============= more widgets =========================================================== */}

                            <div className={`w-full mb-1 bg-gray-400 dark:bg-dark800 rounded shadow shadow-white/20 overflow-hidden transition-all duration-300 ease-in-out ${moreWidgetIsOpen ?"max-h-72":"max-h-0"}`}>
                                <MoreWidget themeWidgetIsOpen={themeWidgetIsOpen} toggleThemeWidget={toggleThemeWidget} />
                            </div>

                            {/* ==============================================theme widget =============================== */}
                            <div className={`w-full mb-0  rounded shadow shadow-white/20 transition-all duration-300 ease-in-out overflow-hidden ${themeWidgetIsOpen?"max-h-40":"max-h-0"}`}>
                                <ThemeWidget themeWidgetIsOpen={themeWidgetIsOpen} toggleThemeWidget={toggleThemeWidget}/>
                            </div>


                            {/* ==============================================Profile widget =============================== */}
                            <div className={`w-full mb-2 bg-gray-400 dark:bg-dark800 rounded shadow shadow-white/20 overflow-hidden transition-all duration-300 ease-in-out ${profileWidgetIsOpen ?"max-h-56":"max-h-0"}`}>
                                <ProfileWidget/>
                            </div>

                            {/* ================================================ more button ===========================================================*/}
                            <button 
                                onClick={toggleMoreWidget}
                                className={`z-[100] group mb-2 w-full dark:text-white pl-1 p-2 rounded font-fira-code transition-all duration-300 ease-in-out dark:hover:bg-[#232323] hover:bg-gray-400 ${moreWidgetIsOpen?"bg-gray-400 dark:bg-[#232323]":"bg-gray-200 dark:bg-black"} `}>
                                <div className="w-full flex items-center justify-start gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`size-7 group-hover:text-sapphire transition-all duration-300 ease-in-out ${moreWidgetIsOpen ?"text-sapphire":"dark:text-white"}`}>
                                        <path fillRule="evenodd"d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd"/>
                                    </svg>
                                    <span className={`text-md font-bold font-fira-code group-hover:text-sapphire transition-all duration-300 ease-in-out ${moreWidgetIsOpen?"text-sapphire":"dark:text-white"}`}>More</span>
                                </div>
                            </button>


                            {/* ================================================ more button ===========================================================*/}
                                <button 
                                    onClick={toggleProfileWidget}
                                    className={`group w-full dark:text-white pl-1 p-2 relative rounded font-fira-code transition-all duration-300 ease-in-out hover:bg-gray-400 dark:hover:bg-[#232323] flex items-center justify-between ${profileWidgetIsOpen ?"bg-gray-400 dark:bg-[#232323]":"bg-gray-200 dark:bg-black"} `}>
                                    <div className="w-full flex items-center justify-start gap-4">
                                        <div className="w-8 h-8 relative rounded-full overflow-hidden">
                                            <Image
                                              src="/user1.jpeg"
                                              alt="user avatar"
                                              fill
                                              className="object-cover object-center"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-0 items-start justify-center">
                                            <span className={`text-md font-bold font-fira-code ${impactFont.className}`}>RedHat_109</span>
                                            <span className={`text-[12px] font-bold font-fira-code text-lime_green`}>online</span>
                                         </div>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`size-10 transition-all duration-300 ease-in-out group-hover:text-sapphire ${profileWidgetIsOpen?"text-sapphire":"text-white"}`}>
                                            <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                </button>


                                {/* <div className="w-full flex items-center justify-between gap-2 mt-4">
                                    <div className="flex flex-col gap-0 items-start justify-start">
                                        <p className="text-white text-[12px] font-fira-code">Powered by Coduit</p>
                                        <p className="text-white text-[12px] font-fira-code">&copy; Coduit {currentYear} all rights reserved</p>
                                    </div>
                                </div> */}
                        </div>
                    </div>
                </aside>
            </DropdownProvider>
        </>
    )
}