"use client"
import Link from "next/link"
import Image from "next/image";
import Logo from "../common/Logo"
import NavSearch from "./NavSearch";
import { usePathname } from "next/navigation";

// icons
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';


import { useSidebar } from "@/context/SidebarContext";
export default function Navbar(){
    const {toggleSidebar} = useSidebar()
    const pathname = usePathname()
    return(
        <>
            <header className="z-[100] fixed top-0 left-0 right-0 md:h-16 pt-1 bg-white flex flex-col gap-1 dark:bg-black shadow  md:grid place-items-center">
                <nav className="w-full flex items-center justify-between gap-1">
                    <div className="md:w-72 px-2 ">
                        <Logo/>
                    </div>
                    <div className="md:flex-1 hidden md:flex items-center justify-left  gap-4">
                        <Link href="/feeds" 
                            className={`font-fira-code dark:text-white p-2 px-3 rounded  self-end ${pathname == "/feeds"?"bg-sapphire":"dark:bg-dark800"}`}                        
                        >Feeds</Link>

                        <div className="flex w-[600px] self-end  ">
                            <NavSearch/>
                        </div>
                    </div>
                    <div className="md:w-30 flex items-center justify-end gap-2 px-2 relative z-100">
                        <button
                            onClick={toggleSidebar} 
                            className="flex md:hidden items-center justify-center relative self-end">
                                <WidgetsRoundedIcon className="!text-[34px] text-black dark:text-gray-400"/>
                        </button>
                        <Link href="/" className="flex items-center justify-center relative self-end">
                            <QuestionAnswerRoundedIcon className="!text-[34px] text-gray-400 dark:text-white"/>
                            <div className="w-4 h-4 flex items-center justify-center absolute top-0 right-0 rounded-full p-1 bg-red-600">
                                <p className="text-[10px]">12</p>
                            </div>
                        </Link>
                        <button className="flex items-center justify-center relative self-end">
                            <NotificationsRoundedIcon className="!text-[34px] text-gray-400 dark:text-white"/>
                            <div className="w-4 h-4 flex items-center justify-center absolute top-0 right-0 rounded-full p-1 bg-red-600">
                                <p className="text-[10px]">12</p>
                            </div>
                        </button>
                        <button className="relative w-11 md:w-12 h-11 md:h-12 rounded-full ">
                            <Image
                                src="/user1.jpeg"
                                alt="redhat_109"
                                fill
                                className="object-cover object-center rounded-full"
                            />
                            <span className="absolute -bottom-1 -right-1 ">
                                <ExpandCircleDownRoundedIcon className="dark:shadow text-sapphire"/>
                            </span>
                        </button>
                    </div>
                </nav>
                <div className="nav2 w-full block md:hidden  p-1 px-2">
                    <div className="w-full flex items-center justify-between gap-2">
                        <div className="w-7 h-7 rounded-full overflow-hidden relative">
                            <Image 
                                src="/user1.jpeg"
                                fill
                                alt="user avatar"
                                className="object-cover object-center"
                            />
                        </div>
                        <div className="flex-1">
                            <input type="text" className="w-full p-1 font-fira-code text-sm focus:outline-none border border-gray-500 rounded-md dark:text-white px-2 placeholder:dark:text-white" placeholder='What is trending on Tech World...'/>
                        </div>
                        <div className="flex ml-3 items-center justify-center">
                            <input type="file" id="postImage" className="hidden"/>
                            <label htmlFor="postImage" className="w-7 h-7 rounded overflow-hidden relative">
                                <Image 
                                    src="/icons/photo.png"
                                    fill
                                    alt="user avatar"
                                    className="object-cover object-center"
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}