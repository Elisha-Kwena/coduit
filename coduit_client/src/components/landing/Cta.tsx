import Link from "next/link"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { GradientButton } from "../ui/buttons/Gradient-button"

export default function Cta(){
    return(
        <div className="relative cta rounded-lg border border-chrome hover:border-none p-3 lg:p-6 mt-16 w-full lg:w-[60%] mx-auto">
            {/* Add Glowing Effect */}
            <GlowingEffect
                spread={35}
                glow={true}
                disabled={false}
                proximity={50}
                inactiveZone={0.3}
                borderWidth={3}
                movementDuration={2}
            />
            
            {/* Original content with z-index to stay above glow */}
            <div className="relative z-10">
                <h1 className="text-2xl lg:text-5xl font-plex-sans font-extrabold text-center text-white">Ready to join the Community?</h1>
                <div className="text-chrome mt-6 text-md lg:text-xl font-fira-code text-center">Join a community of developers who are passionate about coding and building amazing things.</div>
                <div className="w-full flex items-center justify-center gap-2 mt-6">
                    {/* <Link href="/register" className='bg-sapphire p-2 lg:p-3 text-white font-fira-code font-extrabold border-[2px] border-sapphire text-center text-sm lg:text-xl rounded-sm transition-all duration-300 hover:bg-transparent hover:text-sapphire hover:-translate-y-2'>Get Started Now</Link>
                    <Link href="" className='bg-transparent p-2 lg:p-3 text-white font-fira-code font-extrabold border-[2px] border-white text-center text-sm lg:text-xl rounded-sm transition-all duration-300 hover:border-sapphire hover:text-sapphire hover:-translate-y-2'>Explore communities</Link> */}
                    <GradientButton>
                        <a href="">Get Started Now</a>
                    </GradientButton>
                    <GradientButton variant="variant">
                        <a href="">Explore Communities</a>
                    </GradientButton>
                </div>
            </div>
        </div>
    )
}