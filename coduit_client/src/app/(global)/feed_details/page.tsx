"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

import FeedDetailsAction from '@/components/pages/feeds/FeedDetailsActions';
import FeedExtraDetails from '@/components/pages/feeds/FeedsExtraDetails';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

import QueryBuilderRoundedIcon from '@mui/icons-material/QueryBuilderRounded';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';

import SendRoundedIcon from '@mui/icons-material/SendRounded';

import FeedContents from "@/components/pages/feeds/FeedContents";
import { Bold,Italic,Code,LinkBtn } from '@/components/ui/buttons/FormattingButtons';

import { Vote,Reply,Report } from '@/components/ui/buttons/CommentsButtons';
export default function FeedDetails(){
    const [openExtras,setExtrasOpen] = useState(false)

    const toggleExtras = () =>{
        setExtrasOpen((prev)=>!prev)
    }
  return(
    <>
      <div className="w-full md:pl-72 ml-0 h-screen pt-[64] bg-white dark:bg-black md:pr-1">
        <div className="w-full ml-0 bg-gray-100 dark:bg-dark800 h-full overflow-scroll rounded-t-sm">

          <div className="w-full flex flex-col gap-2 p-1 pt-0">


            <div className="w-full flex items-center justify-between pt-1">
                <div className="flex items-center justify-start gap-3">
                    <button className="flex items-center justify-center p-1 rounded border border-gray-500 rotate-180 hover:border-sapphire transition-all duration-300 ease-in-out group">
                        <ArrowForwardIosRoundedIcon className='transition-all duration-300 ease-in-out group-hover:text-sapphire'/>
                    </button>
                    <button className="flex items-center justify-center p-1 rounded border border-gray-500 hover:border-sapphire transition-all duration-300 ease-in-out group">
                        <ArrowForwardIosRoundedIcon className='transition-all duration-300 ease-in-out group-hover:text-sapphire'/>
                    </button>
                </div>
                <div className="flex items-center justify-end gap-2">
                    <button className="flex items-center justify-center border border-sapphire gap-2 bg-sapphire p-1 rounded px-3">
                        <NotificationsRoundedIcon/>
                        <p className="text-white">Follow Post</p>
                    </button>
                    <button className="flex items-center justify-center p-1 rounded border border-gray-600 bg-black">
                        <MoreHorizRoundedIcon/>
                    </button>
                    <button 
                        onClick={toggleExtras}
                        className="md:hidden flex items-center justify-center p-1 rounded bg-black border border-gray-600 hover:bg-black">
                        <MenuRoundedIcon/>
                    </button>
                </div>
            </div>


            {/* ========================================== top side details ========================================== */}
            <div className="w-fulls flex md:flex-row flex-col items-start justify-between gap-3 md:gap-6 relative pb-4">

                {/* post actions */}

                <div className="hidden md:flex md:sticky h-fit top-0 ">
                    <FeedDetailsAction/>
                </div>

                {/*==================================================== details======================================================= */}
                <div className="flex flex-1 bg-black border border-gray-600 rounded-sm overflow-hidden top-24 flex-col gap-2">

                    {/* ======================================================= author details ============================================== */}
                    <div className="w-full p-2 md:p-4 flex flex-col gap-1 border-b border-gray-600">
                        <div className="w-full flex items-start gap-3">
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-sapphire relative">
                                <Image
                                    src="/user1.jpeg"
                                    alt="redhat_109"
                                    fill
                                    className='object-cover object-center'
                                />
                            </div>
                            <div className="flex-1 flex-col flex">
                                <div className="w-full flex items-center justify-start gap-2">
                                    <h1 className="text-white text-sm md:text-md">RedHat_109</h1>
                                    <div className="flex items-center justify-start gap-1 md:gap-2">
                                        <div className="flex items-center justify-center gap-2 p-1 md:px-2 rounded text-white bg-sapphire">
                                            <CheckRoundedIcon/>
                                            <div className="text-[12px] md:text-sm">Verified</div>
                                        </div>
                                        <div className="flex items-center justify-center gap-2 p-1 md:px-2 rounded text-white bg-purple-700">
                                            <CodeRoundedIcon/>
                                            <div className="text-[12px] md:text-sm">Senior Dev</div>
                                        </div>
                                        <div className="hidden md:flex items-center justify-center gap-2 p-1 md:px-2 rounded text-white bg-lime_green">
                                            <LanguageRoundedIcon/>
                                            <div className="text-sm">Web3 expert</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-gray-600 text-sm">@redhat_109 . Blockchain Engineer @ChainTech</p>
                                    <div className="w-full flex items-center justify-start gap-4">
                                        <div className="flex items-center justify-start gap-2 text-gray-600">
                                            <QueryBuilderRoundedIcon className='!w-4'/>
                                            <p className="text-sm">4 hours ago</p>
                                        </div>
                                        <div className="flex items-center justify-start gap-2 text-gray-600">
                                            <RemoveRedEyeRoundedIcon className='!w-4'/>
                                            <p className="text-sm">2.4k views</p>
                                        </div>
                                        <div className="flex items-center justify-start gap-2 text-gray-600">
                                            <WatchLaterRoundedIcon className='!w-4'/>
                                            <p className="text-sm">5 min read</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <h1 className="text-xl md:text-2xl font-bold">Building a Decentralized Voting System with Zero-Knowledge Proofs</h1>
                            <div className="mt-2 w-full flex items-center justify-start gap-1 md:gap-3 gap-y-2 flex-wrap">
                                <Link href="" className="p-2 group bg-dark800 border border-gray-600 rounded flex items-center justify-start gap-2 transition-all duration-300 ease-in-out hover:border-sapphire">
                                    <div className="w-4 h-4 relative">
                                        <Image
                                        src="/python.png"
                                        alt="python"
                                        fill
                                        className='object-cover object-center'
                                    />
                                    </div> 
                                    <p className="text-gray-300 text-[12px] transition-all duration-300 ease-in-out group-hover:text-sapphire">Python Pioneers</p>
                                </Link>
                                <Link href="" className="p-2 group bg-dark800 border border-gray-600 rounded flex items-center justify-start gap-2 transition-all duration-300 ease-in-out hover:border-sapphire">
                                    <div className="w-4 h-4 relative">
                                        <Image
                                        src="/software.png"
                                        alt="python"
                                        fill
                                        className='object-cover object-center'
                                    />
                                    </div> 
                                    <p className="text-gray-300 text-[12px] transition-all duration-300 ease-in-out group-hover:text-sapphire">Software Devs</p>
                                </Link>
                                <Link href="" className="p-2 group bg-dark800 border border-gray-600 rounded flex items-center justify-start gap-2 transition-all duration-300 ease-in-out hover:border-sapphire">
                                    <div className="w-4 h-4 relative">
                                        <Image
                                        src="/swift.png"
                                        alt="python"
                                        fill
                                        className='object-cover object-center'
                                    />
                                    </div> 
                                    <p className="text-gray-300 text-[12px] transition-all duration-300 ease-in-out group-hover:text-sapphire">Swift App Developers</p>
                                </Link>
                                <Link href="" className="p-2 bg-dark800 border border-gray-600 rounded flex items-center justify-start gap-2 transition-all duration-300 ease-in-out hover:border-sapphire">
                                    <div className="w-4 h-4 relative">
                                        <Image
                                        src="/c-sharp.png"
                                        alt="python"
                                        fill
                                        className='object-cover object-center'
                                    />
                                    </div> 
                                    <p className="text-gray-300 text-[12px]">C-Sharp Shapers</p>
                                </Link>
                                <Link href="" className="p-2 bg-dark800 border group border-gray-600 rounded flex items-center justify-start gap-2 transition-all duration-300 ease-in-out hover:border-sapphire">
                                    <div className="w-4 h-4 relative">
                                        <Image
                                        src="/java.png"
                                        alt="python"
                                        fill
                                        className='object-cover object-center'
                                    />
                                    </div> 
                                    <p className="text-gray-300 text-[12px] transition-all duration-300 ease-in-out group-hover:text-sapphire">Java Dev Pros</p>
                                </Link>
                            </div>
                        </div>
                    </div>


                    {/* =================================================== feed details ================================================== */}

                    <div className="w-full">
                        <FeedContents/>
                    </div>

                </div>

                <div className="md:hidden flex w-full ">
                    <FeedDetailsAction/>
                </div>

                {/*=========================================================== post extra details ===========================================================================*/}

                <div className={`w-full md:w-80 shadow md:sticky p-1  left-0 md:p-0 fixed md:h-fit h-screen overflow-scroll top-14 md:top-2 md:flex  md:bg-transparent transition-all duration-300 ease-in-out bg-dark800 ${openExtras?"left-0":"-left-[1000px]"}`}>
                    <FeedExtraDetails toggleExtras={toggleExtras}/>
                </div>
            </div>
            
            {/* ========================================== Comments details ============================================ */}
            <div className="w-full bg-black rounded border border-gray-600">
                <div className="w-full p-2 border-b border-gray-600 flex items-center justify-start gap-3">
                    <ForumRoundedIcon/>
                    <p className="text-gray-300"> 89 Comments</p>
                </div>
                <div className="w-full p-2 border-b border-gray-600">
                    <form action="" className="w-full overflow-hidden flex flex-col gap-2">
                        <div className="textdiv w-full">
                            <textarea name="" id="" className="max-w-full min-w-full border border-gray-600 text-gray-500 focus:outline-none rounded text-sm h-36 max-40 p-2 overflow-hidden bg-dark800 placeholder:text-gray-400" placeholder='Add to the discussion ... (Markdown supported) '></textarea>
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <div className="flex items-center justify-start gap-2">
                                <Bold/>
                                <Italic/>
                                <Code/>
                                <LinkBtn/>
                            </div>
                            <button
                                type="submit"
                                className="w-40 p-1 rounded flex gap-3 items-center justify-center px-2 bg-sapphire text-white">
                                    <SendRoundedIcon/>
                                    <p className="text-sm">Post Comment</p>
                            </button>
                        </div>
                    </form>
                </div>

                <div className="w-full flex flex-col gap-3 p-4">

                    <div className="comment w-full border-b border-gray-600 pb-2">
                        <div className="w-full flex items-center justify-between">
                            <div className="flex items-center justify-start gap-3">
                                <div className="w-8 h-8 rounded-full overflow-hidden relative">
                                    <Image
                                        src="/user2.jpeg"
                                        alt="user2"
                                        fill
                                        className='object-cover object-center'
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-sm text-gray-500">Sarah Miller</h1>
                                    <p className="text-[12px] text-gray-500">Senior Security Researcher</p>
                                </div>
                            </div>
                            <div className="flex">
                                <p className="text-sm text-gray-500 sellf-end">2 hours ago</p>
                            </div>
                        </div>
                        <div className="w-full mt-2 pl-10">
                            <p className="text-white text-sm">Great tutorial! Have you considered integrating with Semaphore for anonymous signaling? It could provide additional privacy guarantees for the voting process. ```solidity // Example integration ISemaphore semaphore = ISemaphore(semaphoreAddress); semaphore.verifyProof(proof, merkleTreeDepth, signal); ```</p>
                        </div>

                        <div className="w-ful flex items-center justify-start gap-3 mt-2 pl-10">
                            <Vote/>
                            <Reply/>
                            <Report/>
                        </div>
                    </div>
                    <div className="comment w-full border-b border-gray-600 pb-2">
                        <div className="w-full flex items-center justify-between">
                            <div className="flex items-center justify-start gap-3">
                                <div className="w-8 h-8 rounded-full overflow-hidden relative">
                                    <Image
                                        src="/user4.jpeg"
                                        alt="user2"
                                        fill
                                        className='object-cover object-center'
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-sm text-gray-500">Mike Rodriguez</h1>
                                    <p className="text-[12px] text-gray-500">DevRel@Ethereum</p>
                                </div>
                            </div>
                            <div className="flex">
                                <p className="text-sm text-gray-500 sellf-end">3 hours ago</p>
                            </div>
                        </div>
                        <div className="w-full mt-2 pl-10">
                            <p className="text-white text-sm">Excellent implementation! One suggestion: you might want to add a timelock for vote revealing to prevent last-minute manipulation attacks. Also, consider using EIP-712 for typed structured data signing when registering voters.</p>
                        </div>

                        <div className="w-ful flex items-center justify-start gap-3 mt-2 pl-10">
                            <Vote/>
                            <Reply/>
                            <Report/>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}