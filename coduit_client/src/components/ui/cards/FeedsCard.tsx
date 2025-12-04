import Link from "next/link"
import Image from "next/image"

import FeedActions from "@/components/pages/feeds/FeedActions";
import { StaticImageData } from "next/image";

import { useNumberFormatter,useTextTruncate } from "@/lib/utils/Formaters";

interface FeedCardProps {
    id?: number;
    title: string;
    banner: StaticImageData | string;
    content: string;
    likes: number;
    comments: number;
    group: StaticImageData | string;
    group_name: string;
    time_posted: string;
    author: string;
    author_profile: StaticImageData | string;
}
import { Vote,Comment,Bookmark,Repost,Share } from "../buttons/PostButtons";
export default function FeedCard({id,title,banner,content,comments,likes,group,group_name,time_posted,author,author_profile}:FeedCardProps){
    const { formatNumber } = useNumberFormatter();
    const { truncateText } = useTextTruncate();
    return(
        <>
            <div className="rounded bg-white dark:bg-black flex flex-col gap-1 border dark:border-black border-white transition-all duration-300 ease-out md:hover:border-sapphire md:dark:hover:border-sapphire md:hover:-translate-y-2">

                {/* top */}
                <div className="w-full flex items-start justify-between gap-3 p-2">
                    <div className="flex flex-1 items-center justify-start gap-2">
                        <div className="w-9 md:w-10 h-9 md:h-10 rounded-full overflow-hidden relative">
                            <Image
                                src={author_profile}
                                alt={author}
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                        <div className="flex flex-col gap-0">
                            <h1 className="font-fira-code capitalize">{author}</h1>
                            <div className="flex itms-center justify-start gap-2">
                                <p className="text-[12px] text-gray-500 -mt-1">@{author} .</p>
                                <p className="text-[12px] text-gray-500 -mt-1">{time_posted}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <FeedActions feedId={id} author={author} group_name={group_name}/>
                    </div>
                </div>

                {/* contents */}
                <div className="w-full md:px-2 md:pl-2 pl-10 ">
                    <h1 className="uppercase md:text-[12px] text-[14px] font-bold">{title}</h1>
                </div>
                
                {/* banner */}
                <div className="w-full md:p-2 md:pl-2 pl-10">
                    <div className="w-full md:h-36 min-h-52 md:min-h-36 max-h-64 md:max-h-36 relative rounded overflow-hidden">
                        <Image
                            src={banner}
                            alt={title}
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                </div>

                <div className="w-full md:px-2 pl-10 flex-1">
                    <p className="dark:text-white md:text-[12px] text-[14px] block md:hidden">{truncateText(content,120)}</p>
                    <p className="dark:text-white md:text-[12px] md:block hidden text-[14px]">{truncateText(content,100)}</p>
                </div>

                <div className="w-full md:p-2 md:pl-2 pl-10 pb-1">
                    <div className="w-full bg-gray-200 dark:bg-dark800 rounded p-1 flex items-center justify-between">
                        <Link href="" className="hidden md:flex  items-center justify-start gap-1">
                            <div className="w-6 h-6 relative">
                                <Image
                                    src={group}
                                    alt={group_name}
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                            <p className="text-[12px] capitalize text-black dark:text-gray-500">{group_name}</p>
                        </Link>
                        <div className="flex w-full md:flex-1 items-center justify-between md:justify-end gap-2">
                            <div className="flex items-center justify-start gap-1">
                                <Vote count={likes}/>
                                <Comment count={comments}/>
                                <div className="md:hidden">
                                    <Bookmark/>
                                </div>
                                
                            </div>
                            <div className="md:hidden flex items-center justiify-end gap-1">
                                <Repost/>
                                <Share/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}