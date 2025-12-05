"use client"

import { useState } from "react"
import Image from "next/image"
import { ReplyType } from "@/types/comments"
import { UpVote, DownVote, Reply, Report } from "@/components/ui/buttons/CommentsButtons"
import SendRoundedIcon from '@mui/icons-material/SendRounded'

interface ReplyItemProps {
  reply: ReplyType
  parentAuthor: string
  depth: number
}

export default function ReplyItem({ reply, parentAuthor, depth }: ReplyItemProps) {
  const [openReplyForm, setOpenReplyForm] = useState(false)
  // Responsive margin based on screen size and depth
  const marginLeft = depth === 0 ? 'ml-0 sm:ml-10' : `ml-${Math.min(depth * 6, 24)} sm:ml-${depth * 10}`
  
  return (
    <div className={`mt-3 ${marginLeft}`}>
      <div className="border rounded border-gray-600 p-3 sm:p-4">
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
          <div className="flex items-center justify-start gap-3">
            <div className="w-9 h-9 sm:w-8 sm:h-8 rounded-full overflow-hidden relative flex-shrink-0">
              <Image
                src={reply.author_profile}
                alt={reply.author}
                fill
                className='object-cover object-center'
                sizes="36px"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm sm:text-base text-gray-500 font-medium">{reply.author}</h1>
              <p className="text-xs sm:text-[12px] text-gray-500">{reply.work}</p>
            </div>
          </div>
          <div className="flex sm:justify-end">
            <p className="text-xs sm:text-sm text-gray-500 self-end">{reply.time}</p>
          </div>
        </div>
        
        <div className="w-full mt-3 pl-0 sm:pl-10">
          <p className="dark:text-white text-sm sm:text-base leading-relaxed">
            <span className="text-sapphire font-medium">@{parentAuthor} </span>
            {reply.content}
          </p>
        </div>
        
        <div className="w-full mt-4 pl-0 sm:pl-10">
          <div className="w-full bg-dark800 p-2 sm:p-1 rounded flex items-center justify-start gap-2 sm:gap-3">
            <UpVote count={reply.upvotes} />
            <DownVote count={reply.downvotes} />
            <Reply 
              toggleReplyForm={() => setOpenReplyForm(!openReplyForm)} 
              openReplyForm={openReplyForm}
              count={reply.replies_count}
            />
            <Report />
          </div>
        </div>

        {/* Reply form for this reply */}
        <div className={`w-full pl-0 sm:pl-10 transition-all duration-300 ease-in-out overflow-hidden ${openReplyForm ? "max-h-96" : "max-h-0"}`}>
          <div className="w-full pt-3">
            <form action="" className="w-full overflow-hidden flex flex-col gap-3">
              <div className="textdiv w-full">
                <textarea 
                  name="" 
                  id="" 
                  className="w-full border border-gray-300 dark:border-gray-600 text-gray-500 focus:outline-none rounded text-sm min-h-24 h-24 max-h-32 p-3 overflow-hidden bg-gray-200 dark:bg-dark800 placeholder:text-gray-400" 
                  placeholder={`Reply to ${reply.author} ...`}
                  rows={3}
                ></textarea>
              </div>
              <div className="w-full flex flex-col sm:flex-row items-center justify-end gap-2 pb-2">
                <button
                  type="button"
                  onClick={() => setOpenReplyForm(false)}
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

        {/* Recursively render nested replies */}
        {reply.replies && reply.replies.length > 0 && (
          <div className="mt-3">
            {reply.replies.map((nestedReply) => (
              <ReplyItem 
                key={nestedReply.id} 
                reply={nestedReply} 
                parentAuthor={reply.author}
                depth={depth + 1}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}