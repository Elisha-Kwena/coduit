import { useNumberFormatter } from "@/lib/utils/Formaters";

import Link from "next/link"
import Image, { StaticImageData } from "next/image"

interface FeedCardProps{
    id?:string;
    name:string;
    logo:string | StaticImageData;
    members:number;
    link:string
}
export default function FeaturedGroupCard({id,logo,name,members,link}:FeedCardProps){
    const { formatNumber } = useNumberFormatter();
    return(
        <>
            <Link href={link} className="flex flex-col gap-2 bg-white shadow dark:bg-black rounded-md p-2 border h border-white dark:border-black transition-all ease-in-out duration-300 hover:border-sapphire dark:hover:border-sapphire">
                <div className="w-full flex items-center justify-center">
                    <div className="w-12 h-12 overflow-hidden relative">
                        <Image
                            src={logo}
                            alt={name}
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <h1 className="font-fira-code capitalize text-center dark:text-white">{name}</h1>
                    <h1 className="font-fira-code capitalize text-center text-sm text-chrome mt-1 text-md">
                        {formatNumber(members)}  members
                    </h1>
                </div>
            </Link>
        </>
    )
}