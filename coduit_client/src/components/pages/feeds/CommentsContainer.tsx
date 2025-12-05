import { Bold, Italic, Code, LinkBtn } from "@/components/ui/buttons/FormattingButtons"
import ForumRoundedIcon from '@mui/icons-material/ForumRounded'
import SendRoundedIcon from '@mui/icons-material/SendRounded'

import { comments } from "@/lib/constants/comments"
import Comment from "./Comment"

export default function CommentsContainer() {
  // Recursive function to count all comments including nested replies
  const countAllComments = (commentsArray: any[]): number => {
    return commentsArray.reduce((total, item) => {
      let count = 1 // Count the current comment/reply
      if (item.replies && item.replies.length > 0) {
        count += countAllComments(item.replies)
      }
      return total + count
    }, 0)
  }

  const totalComments = countAllComments(comments)

  return (
    <div className="w-full bg-white shadow dark:bg-black rounded dark:border border-gray-600">
      <div className="w-full p-3 sm:p-4 border-b border-gray-200 dark:border-gray-600 flex items-center justify-start gap-3">
        <ForumRoundedIcon className='dark:text-gray-300 text-gray-400'/>
        <p className="dark:text-gray-300 text-gray-500 text-sm sm:text-base">{totalComments} Comments</p>
      </div>
      <div className="w-full p-3 sm:p-4 border-b border-gray-200 dark:border-gray-600">
        <form action="" className="w-full overflow-hidden flex flex-col gap-3">
          <div className="textdiv w-full">
            <textarea 
              name="" 
              id="" 
              className="w-full border border-gray-300 dark:border-gray-600 text-gray-500 focus:outline-none rounded text-sm sm:text-base h-32 sm:h-36 max-h-48 p-3 overflow-hidden bg-gray-200 dark:bg-dark800 placeholder:text-gray-400" 
              placeholder='Add to the discussion ... (Markdown supported) '
              rows={4}
            ></textarea>
          </div>
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="w-full sm:w-auto flex items-center justify-start gap-2">
              <Bold/>
              <Italic/>
              <Code/>
              <LinkBtn/>
            </div>
            <button
              type="submit"
              className="w-full sm:w-40 p-2 sm:p-1 rounded flex gap-2 sm:gap-3 items-center justify-center px-3 sm:px-2 bg-sapphire text-white hover:bg-blue-600 transition-colors">
                <SendRoundedIcon className="text-lg sm:text-base"/>
                <p className="text-sm sm:text-base">Post Comment</p>
            </button>
          </div>
        </form>
      </div>
      <div className="w-full flex flex-col gap-3 p-3 sm:p-4">
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  )
}