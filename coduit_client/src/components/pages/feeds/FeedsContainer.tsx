import banner1 from "../../../../public/post2banner.jpg"
import banner2 from "../../../../public/post1banner.png"
import banner3 from "../../../../public/post3banner.webp"
import banner4 from "../../../../public/post4banner.jpg"

import javaScript from "../../../../public/java-script.png"
import python from "../../../../public/python.png"
import software from "../../../../public/software.png"
import react from "../../../../public/react.png"

import user1 from "../../../../public/user2.jpeg"
import user2 from "../../../../public/user3.jpeg"
import user3 from "../../../../public/user4.jpeg"
import user4 from "../../../../public/user5.jpeg"

const feeds = [
    {
        id:1,
        title:"7 Quick JavaScript Performance Optimizations Every Developer Should Know in 2025",
        banner:banner1,
        content:"Tired of sluggish web apps? Here are 7 battle-tested JS tricks to speed things up: Debounce expensive operations  Use memoization wisely  Avoid unnecessary re-renders in frameworks  Leverage Web Workers  Optimize loops and array methods  Lazy load images/scripts  Profile with Chrome DevTools first!",
        likes:342,
        comments:28,
        group:javaScript,
        group_name:"JavaScripters",
        time_posted: "2 hours ago",
        author: "Alex Johnson",
        author_profile: user1
    },
    {
        id:2,
        title:"React Hooks Mistakes I Wish I Avoided Sooner (And How to Fix Them)",
        banner:banner2,
        content:"Hooks changed everything in React, but common pitfalls still trip people up: Don't call Hooks inside loops/conditions Always clean up in useEffect Extract custom hooks for reusability",
        likes:518,
        comments:47,
        group:react,
        group_name:"Reactreactors",
        time_posted: "5 hours ago",
        author: "Sarah Chen",
        author_profile: user2
    },
    {
        id:3,
        title:"Getting Started with Async/Await in Python – Stop Blocking Your Apps!",
        banner:banner3,
        content:"Async Python isn't just for experts anymore. Learn the basics: Why asyncio over threading for I/O-bound tasks Simple awaitable examples with aiohttp Common patterns for APIs and web scraping",
        likes:289,
        comments:19, 
        group:python,
        group_name:"Pytho pioneers",
        time_posted: "1 day ago",
        author: "Marcus Rodriguez",
        author_profile: user3
    },
    {
        id:4,
        title:"One Simple Trick That Instantly Improved My Code Readability",
        banner:banner4,
        content:"Meaningful variable names + early returns = magic. writing deeply nested if-else pyramids. Refactor example included (works in JS, Python, etc.). Your future self (and teammates) will thank you.",
        likes:912,
        comments:83,
        group:software,
        group_name:"software devs",
        time_posted: "3 days ago",
        author: "Taylor Kim",
        author_profile: user4
    }
]


import FeedCard from "../../ui/cards/FeedsCard"

export default function FeedsContainer(){
    return(
        <>
            <div className="w-full grid grif-cols-1 md:grid-cols-3 gap-3 pb-2">
                {feeds.map(feed =>(
                    <FeedCard
                        key={feed.id}
                        title={feed.title}
                        banner={feed.banner}
                        content={feed.content}
                        likes={feed.likes}
                        comments={feed.comments}
                        group={feed.group}
                        group_name={feed.group_name}
                        time_posted={feed.time_posted}
                        author={feed.author}
                        author_profile={feed.author_profile}

                    />
                ))}
                
            </div>
        </>
    )
}