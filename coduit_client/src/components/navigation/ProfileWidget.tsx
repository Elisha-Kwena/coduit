"use client"
import SignOut from "./SignOut"
import Image from "next/image"
import Link from "next/link"
export default function ProfileWidget(){
    return(
        <>
            <div className="w-full p-2 flex-col gap-2 flex bg-gray-400 dark:bg-dark800">
                <Link
                    href="/profile"
                    className="group w-full bg-gray-200 dark:bg-black p-2 rounded-md flex items-center justify-start gap-2">
                    <div className="w-8 h-8 relative rounded-full overflow-hidden">
                        <Image
                            src="/user1.jpeg"
                            alt="user avatar"
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                    <span className="dark:text-white font-fira-code font-bold group-hover:text-sapphire transition-all duration-300 ease-in-out">View your Profile</span>
                </Link>
          
                <SignOut />
            </div>
        </>
    )
}