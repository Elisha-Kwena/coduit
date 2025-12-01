"use client"

import { useState } from "react";
import { useNumberFormatter } from "@/lib/utils/Formaters"
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BookmarkIcon from '@mui/icons-material/Bookmark';

interface ButtonProps{
    count?:number | any;
}

export function Vote({count}:ButtonProps){
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [likesCount, setLikesCount] = useState<number | any>(count);
    const { formatNumber } = useNumberFormatter();

    const toggleLike =()=>{
        setIsLiked((prev)=>!prev)
    }
    return(
            <div className="votes w-full flex items-center justify-center gap-1 p-[2px] rounded-sm border-[1px] border-chrome">
                <button
                    onClick={toggleLike}
                    className={`group flex w-6 items-center justify-center border hover:border-sapphire p-1 rounded-sm transition-all duration-300 ${isLiked ? "border-sapphire" : "border-chrome/40"}`}
                >
                    <ThumbUpIcon className={`text-chrome !text-[14px] transition-all duration-300 group-hover:text-sapphire ${isLiked ? "text-sapphire" : "text-chrome"}`} />
                </button>
                    <span className="text-white text-sm">{formatNumber(likesCount)}</span>
                <button
                    onClick={toggleLike}
                    className={`group flex w-6 items-center justify-center border border-chrome/40 hover:border-candy p-1 rounded-sm transition-all duration-300 `}
                >
                    <ThumbDownIcon className="text-chrome !text-[14px] transition-all duration-300 group-hover:text-candy" />
                </button>
            </div>
    )
}



export function Comment({ count }: ButtonProps) {
  const { formatNumber } = useNumberFormatter();
  return (
    <div className="votes w-full flex items-center justify-center gap-1 p-[2px] rounded-sm border-[1px] border-chrome">
      <button className="flex w-6 items-center justify-center border border-chrome/40 p-1 rounded-sm transition-all duration-300 group hover:border-electric">
        <ModeCommentIcon className="text-chrome !text-[14px] group-hover:text-electric transition-all duration-300" />
      </button>
      <span className="text-white text-sm">{formatNumber(count)}</span>
    </div>
  );
}

export function Repost({ count }: ButtonProps) {
  const { formatNumber } = useNumberFormatter();
  return (
    <div className="reposts w-full flex items-center justify-center gap-1 p-[2px] rounded-sm border-[1px] border-chrome">
      <button className="flex w-6 items-center justify-center border border-chrome/40 p-1 rounded-sm transition-all duration-300 group hover:border-electric">
        <RepeatOnIcon className="text-chrome !text-[14px] group-hover:text-electric transition-all duration-300" />
      </button>
      <span className="text-black dark:text-white text-sm">{formatNumber(count)}</span>
    </div>
  );
}

export function Bookmark() {
  return (
    <div className="reposts w-full flex items-center justify-center gap-1 p-[2px] rounded-sm">
      <button className="flex items-center justify-center border-[2px] border-chrome/40 p-1 rounded-sm transition-all duration-300 group hover:border-sapphire">
        <BookmarkIcon className="text-chrome !text-[20px] group-hover:text-sapphire transition-all duration-300" />
        <span className="text-gray-500 text-[12px] lg:text-sm hidden lg:flex">Bookmark</span>
      </button>
    </div>
  );
}

export function Share() {
  return (
    <div className="reposts w-full flex items-center justify-center gap-1 p-[2px] rounded-sm">
      <button className="flex items-center justify-center gap-1 border-[2px] border-chrome/40 p-1 rounded-sm transition-all duration-300 group hover:border-sapphire">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-chrome !text-[20px] group-hover:text-sapphire transition-all duration-300">
          <path fillRule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-500 text-[12px] lg:text-sm hidden lg:flex">Share</span>
      </button>
    </div>
  );
}