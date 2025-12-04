import Link from 'next/link';


import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
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
import Image from 'next/image';
export default function FeedDetails(){
  return(
    <>
      <div className="w-full md:pl-72 ml-0 h-screen md:pt-[64] pt-[90] bg-white dark:bg-black md:pr-1">
        <div className="w-full ml-0 bg-gray-100 dark:bg-dark800 h-full overflow-scroll rounded-t-sm">

          <div className="w-full flex flex-col gap-2 p-1 pt-0">


            <div className="w-full flex items-center justify-between pt-1">
                <div className="flex items-center justify-start gap-3">
                    <button className="flex items-center justify-center p-1 rounded border border-gray-500 rotate-180">
                        <ArrowForwardIosRoundedIcon/>
                    </button>
                    <button className="flex items-center justify-center p-1 rounded border border-gray-500">
                        <ArrowForwardIosRoundedIcon/>
                    </button>
                </div>
                <div className="flex items-center justify-end gap-2">
                    <button className="flex items-center justify-center gap-2 bg-sapphire p-1 rounded px-3">
                        <NotificationsRoundedIcon/>
                        <p className="text-white">Follow Post</p>
                    </button>
                    <button className="flex items-center justify-center p-1 rounded hover:bg-black">
                        <MoreHorizRoundedIcon/>
                    </button>
                </div>
            </div>


            {/* ========================================== top side details ========================================== */}
            <div className="w-fulls flex items-start justify-between gap-6">

                {/* post actions */}

                <div className="flex sticky h-fit top-0">
                    <FeedDetailsAction/>
                </div>

                {/*==================================================== details======================================================= */}
                <div className="flex flex-1 bg-black border border-gray-600 rounded-sm overflow-scroll flex-col gap-2">

                    {/* ======================================================= author details ============================================== */}
                    <div className="w-full p-4 flex flex-col gap-1 border-b border-gray-600">
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
                                    <h1 className="text-white">RedHat_109</h1>
                                    <div className="flex items-center justify-start gap-2">
                                        <div className="flex items-center justify-center gap-2 p-1 px-2 rounded text-white bg-sapphire">
                                            <CheckRoundedIcon/>
                                            <div className="text-sm">Verified</div>
                                        </div>
                                        <div className="flex items-center justify-center gap-2 p-1 px-2 rounded text-white bg-purple-700">
                                            <CodeRoundedIcon/>
                                            <div className="text-sm">Senior Dev</div>
                                        </div>
                                        <div className="flex items-center justify-center gap-2 p-1 px-2 rounded text-white bg-lime_green">
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
                            <h1 className="text-2xl font-bold">Building a Decentralized Voting System with Zero-Knowledge Proofs</h1>
                            <div className="mt-2 w-full flex items-center justify-start gap-3 flex-wrap">
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

                </div>

                {/*=========================================================== post extra details ===========================================================================*/}

                <div className="w-80 h-fit top-0">
                    <FeedExtraDetails/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}