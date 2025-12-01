import React from "react";

const Stats: React.FC = () => {
    return(
        <>
        <div className="w-full flex flex-col gap-0">
            <h1 className="text-sapphire font-plex-sans text-xl lg:text-3xl font-bold">YOUR ULTIMATE PROGRAMMING PARTNER</h1>
            <h2 className="text-xl lg:text-4xl font-extrabold text-white mt-6">Join Our Developer Community</h2>
            <p className="text-chrome font-fira-code text-md lg:text-lg mt-6">Connect with developers worldwide, share knowledge, and grow your skills in a supportive environment.</p>
            <div className="w-full flex items-center justify-start gap-4 mt-10">
                <div className="flex flex-col gap-1">
                    <h1 className="text-sapphire text-3xl lg:text-5xl font-extrabold">24K+</h1>
                    <div className="text-chrome text-sm lg:text-lg">Active Members</div>
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-sapphire text-3xl lg:text-5xl font-extrabold">100+</h1>
                    <div className="text-chrome text-sm lg:text-lg">Communities</div>
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-sapphire text-3xl lg:text-5xl font-extrabold">50K</h1>
                    <div className="text-chrome text-sm lg:text-lg">Discussions</div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Stats;