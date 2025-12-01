import React from "react";
import Rating from "@/components/common/Rating";
import Image from "next/image";
interface FeedbackCardProps {
    name: string;
    feedback: string;
    role: string;
    date: string;
    rating: number;
    imageUrl: string;
}
const FeedbackCard: React.FC<FeedbackCardProps> = ({
    name,
    feedback,
    role, 
    date,
    rating,
    imageUrl
}) => {

    return(
        <>
        <div className="flex flex-col gap-2 rounded-lg bg-dark700/50 border border-chrome p-6 transition-all duration-300 hover:border-sapphire hover:-translate-y-2">
            <div className="w-full flex items-center justify-start gap-3">
                <div className="banner w-12 h-12 relative">
                    <Image 
                    src={imageUrl} 
                    alt="alt name" 
                    fill 
                    className="rounded-full object-cover object-top" />
                </div>
                <div className="flex flex-col gap-0">
                    <h1 className="text-white font-extrabold text-xl lg;text-3xl">{name}</h1>
                    <p className="text-black text-lg lg:text-md font-extrabold italic">{role}</p>
                </div>
            </div>
            <div className="w-full mt-4 flex-grow">
                <p className="lg:text-lg text-sms text-chrome">{feedback}</p>
            </div>
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center justify-start gap-2">
                    <div className="flex items-center justify-between gap-1">
                        <Rating rating={rating} />
                    </div>
                    <p className="text-white text-md">{rating}/10</p>
                </div>
                <div className="text-white font-fira-code text-sm">{date}</div>
            </div>
        </div>
        </>
    )
}
export default FeedbackCard;
