import Link from "next/link";

import Logo from "../common/Logo";


export default function LandingNavBar(){
    return(
        <>
        <header className="w-full grid place-items-center fixed top-1 z-50">
            <nav className="w-[97%] lg:w-[95%] flex items-center justify-between p-1 px-2 bg-white/4 shadow rounded-md py-3 backdrop-blur-md">
                <Logo/>
                <Link href="/register" className="flex items-center justify-center p-2 lg:p-3  rounded-md bg-sapphire font-extrabold text-white text-lg lg:text-2xl">Get Started</Link>
            </nav>
        </header>
        </>
    )
}