
import { Upvote,Downvote,Comments,Save,Repost,Share,CopyLink } from "../../ui/buttons/FeedDetailsButtons"
export default function FeedDetailsAction(){
    return(
        <>
            <div className="w-full md:w-20 flex p-2 flex-row md:flex-col gap-3 md:items-center items-end justify-center border bg-black border-gray-600 rounded">
                <Upvote/> 
                <Downvote/>
                <Comments/>
                <Repost/>
                <Save/>
                <Share/>
                <div className="hidden md:block">
                    <CopyLink/>
                </div>
                
            </div>
        </>
    )
}