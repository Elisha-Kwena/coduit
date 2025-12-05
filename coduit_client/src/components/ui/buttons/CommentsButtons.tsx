import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import ThumbDownRoundedIcon from '@mui/icons-material/ThumbDownRounded';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';

interface ReplyProps{
    toggleReplyForm: ()=> void;
    openReplyForm:boolean;
    count:number;
}

interface UpVoteProps{
    count:number;
}
interface DownVoteProps{
    count:number;
}

export function UpVote({count}:UpVoteProps){
    return(
        <>
        <button className="flex items-center justify-start gap-1 group border border-gray-600 p-1 rounded transition-all ease-in-out hover:border-sapphire">
            <ThumbUpRoundedIcon className='text-gray-400 transition-all duration-300 ease-in-out group-hover:text-sapphire'/>
            <span className="text-white text-[12px]">{count}</span>
        </button>
        </>
    )
}
export function DownVote({count}:DownVoteProps){
    return(
        <>
        <button className="flex items-center justify-start gap-1 group border border-gray-600 p-1 rounded transition-all ease-in-out hover:border-sapphire">
            <ThumbDownRoundedIcon className='text-gray-400 transition-all duration-300 ease-in-out group-hover:text-sapphire'/>
            <span className="text-white text-[12px]">{count}</span>
        </button>
        </>
    )
}

export function Reply({count,openReplyForm,toggleReplyForm}:ReplyProps){
    return(
        <>
        <button 
            onClick={toggleReplyForm}
            className={`flex items-center justify-start gap-1 border  p-1 rounded group transition-all ease-in-out hover:border-sapphire ${openReplyForm?"border-sapphire":"border-gray-600"}`}>
            <QuestionAnswerRoundedIcon className={` transition-all duration-300 ease-in-out group-hover:text-sapphire ${openReplyForm?"text-sapphire":"text-gray-400"}`}/>
            <span className="text-white text-[12px]">{count}</span>
        </button>
        </>
    )
}
export function Report(){
    return(
        <>
        <button className="flex items-center justify-start gap-1 border border-gray-600 p-1 rounded group transition-all ease-in-out hover:border-candy">
            <FlagRoundedIcon className='text-gray-400 transition-all duration-300 ease-in-out group-hover:text-candy'/>
            <span className="text-white text-[12px]">Report</span>
        </button>
        </>
    )
}