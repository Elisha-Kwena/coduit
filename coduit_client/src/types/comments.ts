import { StaticImageData } from "next/image"

export interface ReplyType {
  id: number
  author: string
  author_profile: StaticImageData | string
  time: string
  content: string
  work: string
  upvotes: number
  downvotes: number
  replies_count: number
  replies?: ReplyType[] // Add this for nested replies
}

export interface CommentType {
  id: number
  author: string
  author_profile: StaticImageData | string
  time: string
  content: string
  work: string
  upvotes: number
  downvotes: number
  replies_count: number
  replies: ReplyType[]
}