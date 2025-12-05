"use client"

import { useState } from "react"
import Image from "next/image"
import { CommentType } from "@/types/comments"
import { UpVote, DownVote, Reply, Report } from "@/components/ui/buttons/CommentsButtons"
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import ReplyItem from "./ReplyItem"

interface CommentProps {
  comment: CommentType
}

export default function Comment({ comment }: CommentProps) {
  const [openReplyForm, setReplyFormOpen] = useState(false)
  
  const toggleReplyForm = () => {
    setReplyFormOpen((prev) => !prev)
  }

  return (
    <div className="comment w-full flex flex-col gap-2 border p-3 sm:p-4 rounded border-gray-600">
      {/* ========================================= Main Comment ======================================= */}
      <div className="w-full comment-content">
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
          <div className="flex items-center justify-start gap-3">
            <div className="w-10 h-10 sm:w-8 sm:h-8 rounded-full overflow-hidden relative flex-shrink-0">
              <Image
                src={comment.author_profile}
                alt={comment.author}
                fill
                className='object-cover object-center'
                sizes="40px"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm sm:text-base text-gray-500 font-medium">{comment.author}</h1>
              <p className="text-xs sm:text-[12px] text-gray-500">{comment.work}</p>
            </div>
          </div>
          <div className="flex sm:justify-end">
            <p className="text-xs sm:text-sm text-gray-500 self-end">{comment.time}</p>
          </div>
        </div>
        
        <div className="w-full mt-3 pl-0 sm:pl-10">
          <p className="dark:text-white text-sm sm:text-base leading-relaxed">{comment.content}</p>
        </div>
        
        <div className="w-full mt-4 pl-0 sm:pl-10">
          <div className="w-full bg-dark800 p-2 sm:p-1 rounded flex items-center justify-start gap-2 sm:gap-3">
            <UpVote count={comment.upvotes} />
            <DownVote count={comment.downvotes} />
            <Reply 
              toggleReplyForm={toggleReplyForm} 
              openReplyForm={openReplyForm}
              count={comment.replies_count}
            />
            <Report />
          </div>
        </div>

        {/* ================================================= Reply Container ========================================== */}
        <div className={`w-full pl-0 sm:pl-10 transition-all duration-300 ease-in-out overflow-hidden ${openReplyForm ? "max-h-96" : "max-h-0"}`}>
          <div className="w-full pt-3">
            <form action="" className="w-full overflow-hidden flex flex-col gap-3">
              <div className="textdiv w-full">
                <textarea 
                  name="" 
                  id="" 
                  className="w-full border border-gray-300 dark:border-gray-600 text-gray-500 focus:outline-none rounded text-sm min-h-24 h-24 max-h-32 p-3 overflow-hidden bg-gray-200 dark:bg-dark800 placeholder:text-gray-400" 
                  placeholder={`Reply to ${comment.author} ...`}
                  rows={3}
                ></textarea>
              </div>
              <div className="w-full flex flex-col sm:flex-row items-center justify-end gap-2 pb-2">
                <button
                  type="button"
                  onClick={() => setReplyFormOpen(false)}
                  className="w-full sm:w-auto px-4 py-2 rounded border border-gray-400 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-40 p-2 rounded flex gap-2 items-center justify-center px-3 bg-sapphire text-white hover:bg-blue-600 transition-colors text-sm">
                  <SendRoundedIcon className="text-lg"/>
                  <p>Submit Reply</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ========================================= Comment Replies (with nesting) =============================== */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="flex flex-col gap-3 mt-3">
          {comment.replies.map((reply) => (
            <ReplyItem 
              key={reply.id} 
              reply={reply} 
              parentAuthor={comment.author}
              depth={0}
            />
          ))}
        </div>
      )}
    </div>
  )
}