import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import ThumbDownRoundedIcon from '@mui/icons-material/ThumbDownRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';

export function Upvote(){
    return(
        <>
            <div className="flex flex-col gap-2 w-full">
                <button className="flex group w-full flex-col items-center justify-center p-1 hover:bg-dark700 rounded transition-all ease-in-out duration-300">
                    <span className="bg-dark700 p-1 rounded-full group-hover:bg-sapphire transition-all ease-in-out duration-300">
                        <ThumbUpRoundedIcon className='text-sapphire group-hover:text-white transition-all ease-in-out duration-300'/>
                    </span>
                    
                    <div className="flex mt-1 flex-col items-center justify-center">
                        <h1 className="text-sm text-sapphire">1.2k</h1>
                        <p className="text-[12px] text-sapphire ">UpVotes</p>
                    </div>
                </button>
            </div>
        </>
    )
}
export function Downvote(){
    return(
        <>
            <div className="flex flex-col gap-2 w-full">
                <button className="flex group w-full flex-col items-center justify-center p-1 hover:bg-dark700 rounded transition-all ease-in-out duration-300">
                    <span className="bg-dark700 p-1 rounded-full group-hover:bg-sapphire transition-all ease-in-out duration-300">
                        <ThumbDownRoundedIcon className='text-gray-400 group-hover:text-white transition-all ease-in-out duration-300'/>
                    </span>
                    
                    <div className="flex mt-1 flex-col items-center justify-center">
                        <h1 className="text-sm text-gray-400 group-hover:text-sapphire transition-all ease-in-out duration-300">49</h1>
                        <p className="text-[12px] text-gray-400 group-hover:text-sapphire transition-all ease-in-out duration-300 ">DownVotes</p>
                    </div>
                </button>
            </div>
        </>
    )
}
export function Comments(){
    return(
        <>
            <div className="flex flex-col gap-2 w-full">
                <button className="flex group w-full flex-col items-center justify-center p-1 hover:bg-dark700 rounded transition-all ease-in-out duration-300">
                    <span className="bg-dark700 p-1 rounded-full group-hover:bg-sapphire transition-all ease-in-out duration-300">
                        <ChatBubbleRoundedIcon className='text-gray-400 group-hover:text-white transition-all ease-in-out duration-300'/>
                    </span>
                    
                    <div className="flex mt-1 flex-col items-center justify-center">
                        <h1 className="text-sm text-gray-400 group-hover:text-sapphire transition-all ease-in-out duration-300">89</h1>
                        <p className="text-[12px] text-gray-400 group-hover:text-sapphire transition-all ease-in-out duration-300 ">Comments</p>
                    </div>
                </button>
            </div>
        </>
    )
}
export function Save(){
    return(
        <>
            <div className="flex flex-col gap-2 w-full">
                <button className="flex group w-full flex-col items-center justify-center p-1 hover:bg-dark700 rounded transition-all ease-in-out duration-300">
                    <span className="bg-dark700 p-1 rounded-full group-hover:bg-sapphire transition-all ease-in-out duration-300">
                        <BookmarkRoundedIcon className='text-gray-400 group-hover:text-white transition-all ease-in-out duration-300'/>
                    </span>
                    
                    <div className="flex mt-1 flex-col items-center justify-center">
                        <p className="text-[12px] text-gray-400 group-hover:text-sapphire transition-all ease-in-out duration-300 ">Save</p>
                    </div>
                </button>
            </div>
        </>
    )
}
export function Repost(){
    return(
        <>
            <div className="flex flex-col gap-2 w-full">
                <button className="flex group w-full flex-col items-center justify-center p-1 hover:bg-dark700 rounded transition-all ease-in-out duration-300">
                    <span className="bg-dark700 p-1 rounded-full group-hover:bg-sapphire transition-all ease-in-out duration-300">
                        <RepeatRoundedIcon className='text-gray-400 group-hover:text-white transition-all ease-in-out duration-300'/>
                    </span>
                    
                    <div className="flex mt-1 flex-col items-center justify-center">
                        <h1 className="text-sm text-gray-400 group-hover:text-sapphire transition-all ease-in-out duration-300">53</h1>
                        <p className="text-[12px] text-gray-400 group-hover:text-sapphire transition-all ease-in-out duration-300 ">Reposts</p>
                    </div>
                </button>
            </div>
        </>
    )
}
export function Share(){
    return(
        <>
            <div className="flex flex-col gap-2 w-full">
                <button className="flex group w-full flex-col items-center justify-center p-1 hover:bg-dark700 rounded transition-all ease-in-out duration-300">
                    <span className="bg-dark700 p-1 rounded-full group-hover:bg-sapphire transition-all ease-in-out duration-300">
                        <ReplyRoundedIcon className='text-gray-400 group-hover:text-white transition-all ease-in-out duration-300'/>
                    </span>
                    
                    <div className="flex mt-1 flex-col items-center justify-center">
                        <p className="text-[12px] text-gray-400 group-hover:text-sapphire transition-all ease-in-out duration-300 ">Share</p>
                    </div>
                </button>
            </div>
        </>
    )
}
export function CopyLink(){
    return(
        <>
            <div className="flex flex-col gap-2 w-full">
                <button className="flex group w-full flex-col items-center justify-center p-1 hover:bg-dark700 rounded transition-all ease-in-out duration-300">
                    <span className="bg-dark700 p-1 rounded-full group-hover:bg-sapphire transition-all ease-in-out duration-300">
                        <FileCopyRoundedIcon className='text-gray-400 group-hover:text-white transition-all ease-in-out duration-300'/>
                    </span>
                    
                    <div className="flex mt-1 flex-col items-center justify-center">
                        <p className="text-[12px] text-gray-400 group-hover:text-sapphire transition-all ease-in-out duration-300 ">Copy Link</p>
                    </div>
                </button>
            </div>
        </>
    )
}











