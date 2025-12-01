import Link from "next/link"
import Image from "next/image"

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import Footer from "../layout/Footer"
import {impactFont} from "@/lib/fonts/fonts"

import { MEMBERS } from "@/lib/constants"
import { Vote,Comment,Repost,Share,Bookmark } from "../ui/buttons/PostButtons";

export default function Hero(){
    return(
        <>
            <section className="w-full herosection bg-black-to-dark-blue px-2 lg:px-0 min-h-[80vh]">
                <div className="w-full lg:w-[90%] flex items-center justify-between flex-col lg:flex-row mx-auto gap-4">
                    {/* heroleft */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-2">
                        <div className="heading w-full">
                            <div className="flex items-end justify-start gap-1">
                                <h1 className={`text-6xl lg:text-7xl text-white ${impactFont.className}`}>Connect</h1>
                                <span className="w-3 lg:w-4 h-3 lg:h-4 mb-1 rounded-full bg-sapphire"></span>
                                <h1 className={`text-6xl lg:text-7xl text-sapphire ${impactFont.className}`}>Code</h1>
                                <span className="w-3 lg:w-4 h-3 lg:h-4 mb-1 rounded-full bg-white"></span>
                            </div>
                            <div className="flex items-end justify-start gap-1">
                                <h1 className={`text-6xl lg;text-7xl text-white ${impactFont.className}`}>Collaborate</h1>
                                <span className="w-3 lg:w-4 h-3 lg:h-4 mb-1 rounded-full bg-sapphire"></span>
                            </div>
                        </div>

                        {/* details */}
                        <div className="w-full mt-2">
                          <p className="text-white font-fira-code text-md">The ultimate platform for developers to share knowledge, buildprojects, and grow their careers in tech communities.</p>
                        </div>

                        <div className="w-full flex items-center justify-start gap-4 lg:gap-2 ">
                            <Link href="/register" className="text-white bg-sapphire font-fira-code font-bold text-sm lg:text-lg p-3 rounded-sm border-[3px] border-sapphire hover:bg-cosmic transition-all duration-300">Join Now - It is Free</Link>
                            <Link href="" className="border-[2px] border-white rounded-sm p-3 font-bold flex items-center justify-center gap-2 group hover:border-sapphire treansition-all duration-300">
                              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center treansition-all duration-300 group-hover:bg-sapphire"><PlayArrowIcon className="text-xl text-black treansition-all duration-300 group-hover:text-white"/></span>
                              <span className="text-white font-fira-code text-sm lg:text-lg treansition-all duration-300 group-hover:text-sapphire">Watch Demo</span>
                            </Link>
                        </div>

                        <div className="w-full flex items-center justify-start gap-2 lg:gap-4">
                            <div className="w-1/2 relative flex items-center justify-start">
                                {MEMBERS.slice(0, 5).map((user, index) => (
                                    <div
                                        key={user.id || index}
                                        className="w-10 lg:w-12 h-10 lg:h-12 rounded-full bg-red-crimson absolute"
                                        style={{ left: `${index * 34}px` }} 
                                    >
                                        {user.profile ? (
                                            <Image
                                            src={user.profile}
                                            alt="user avatar"
                                            fill
                                            className="rounded-full object-cover"
                                            />
                                            ) : (
                                                ''
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="w-1/2 lg:mt-6">
                                <p className=" text-white font-bold font-fira-code text-sm lg:text-lg">Join <span className="text-sapphire text-md lg:text-lg font-extrabold">24,817+</span> developers worldwide</p>
                            </div>
                        </div>

                    </div>

                    {/* hero right */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center lg:h-[600px] lg:pl-20 p-2">
                        <div className="dummy-post relative w-full flex-col gap-0 rounded-lg bg-dark800 z-10">
                            <div className="top w-full p-2 bg-dark700 flex items-center justify-start gap-2 rounded-t-lg">
                                <div className="flex items-center justify-start gap-1">
                                    <span className="w-4 h-4 rounded-full bg-candy"></span>
                                    <span className="w-4 h-4 rounded-full bg-sunflower"></span>
                                    <span className="w-4 h-4 rounded-full bg-lime_green"></span>
                                </div>
                                <p className="text-chrome font-fira-code text-lg">#react-community</p>
                            </div>
                            <div className="w-full flex items-start gap-2 p-2 bg-dark800 rounded-b-lg">
                                <div className="left">
                                    <div className="w-8 lg:w-12 h-8 lg:h-12 rounded-full relative overflow-hidden">
                                        <Image
                                            src="/user1.jpeg"
                                            alt="User profile"
                                            fill
                                            className="w-20 h-20 rounded-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="right w-full flex-1 flex flex-col items-start justify-start gap-2">
                                    <div className="w-full flex items-center justify-between">
                                        <div>
                                            <h1 className="text-white text-md lg:text-lg font-fira-code font-extrabold">John Doe</h1>
                                            <div className="flex items-center justify-start gap-2">
                                                <p className="text-gray-500 text-[12px] lg:text-sm">Posted in React_devFest</p>
                                                <p className="text-chrome text-[12px] lg:text-sm">. 12 hours ago</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <button className="p-2 flex items-center justify-center rounded-md transition-all ease-in-out hover:text-sapphire font-extrabold">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="details w-full mt-1 lg:mt-2 pr-2">
                                        <h1 className="text-off_white text-[12px] lg:text-md font-bold">PRE-INSTALLATION OF REACT AND WORKING WITH IT</h1>
                                        <p className="text-chrome text-[11px] lg:text-sm">Has anyone implemented React Server Components in Production Yet?.</p>
                                        <div className="w-full relative rounded-lg border-l-[5px] border-sapphire mt-2 overflow-hidden">
                                          <Image
                                            src="/code.png"
                                            alt="Code snippet"
                                            width={800}
                                            height={400}
                                            className="w-full h-auto rounded-lg"
                                          />
                                        </div>
                                    </div>
                                    <div className="w-full flex items-center justify-between gap-2">
                                        <div className="buttons flex items-center justify-cebnter gap-2">
                                            <Vote count={54}/>
                                            <Comment count={112}/>
                                            <Bookmark/>
                                        </div>
                                        <div className="buttons flex items-center justify-cebnter gap-2">
                                            <Repost count={79}/>
                                            <Share/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}