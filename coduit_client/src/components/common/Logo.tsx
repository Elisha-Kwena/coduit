import Image from "next/image";
import Link from "next/link";
import { impactFont } from "@/lib/fonts/fonts"


export default function Logo(){
    return (
        <>
        <Link href="/" className="flex items-center justify-start gap-2">
            <div className="w-8 md:w-12 h-8 md:h-12 relative">
                <Image
                    src="/coduit.png"
                    alt="coduit logo"
                    fill
                    className="object-contain object-center"
                />
            </div>
            <h1 className={`text-3xl lg:text-5xl text-sapphire font-extrabold ${impactFont.className} tracking-tight`}>
                Coduit
            </h1>
        </Link>
        </>
    )
}