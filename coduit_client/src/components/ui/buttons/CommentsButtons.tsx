import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';

export function Vote(){
    return(
        <>
        <button className="flex items-center justify-start gap-0 group">
            <ThumbUpRoundedIcon className='text-gray-400 transition-all duration-300 ease-in-out group-hover:text-sapphire'/>
            <span className="text-white text-[12px]">24</span>
        </button>
        </>
    )
}
export function Reply(){
    return(
        <>
        <button className="flex items-center justify-start gap-0 group">
            <ReplyRoundedIcon className='text-gray-400 transition-all duration-300 ease-in-out group-hover:text-sapphire'/>
            <span className="text-white text-[12px]">Reply</span>
        </button>
        </>
    )
}
export function Report(){
    return(
        <>
        <button className="flex items-center justify-start gap-0 group ">
            <FlagRoundedIcon className='text-gray-400 transition-all duration-300 ease-in-out group-hover:text-candy'/>
            <span className="text-white text-[12px]">Report</span>
        </button>
        </>
    )
}