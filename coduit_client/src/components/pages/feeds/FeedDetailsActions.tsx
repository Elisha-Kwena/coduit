
import { Upvote,Downvote,Comments,Save,Repost,Share,CopyLink } from "../../ui/buttons/FeedDetailsButtons"
export default function FeedDetailsAction(){
    return(
        <>
            <div className="w-20 flex p-2 flex-col gap-3 items-center justify-center border bg-black border-gray-600 rounded">
                <Upvote/> 
                <Downvote/>
                <Comments/>
                <Save/>
                <Repost/>
                <Share/>
                <CopyLink/>
            </div>
        </>
    )
}