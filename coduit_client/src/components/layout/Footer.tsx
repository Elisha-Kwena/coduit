"use client"
import Image from "next/image";
import React from "react";
import apple from '../../../public/icons/apple.png'
import playstore from '../../../public/icons/google-play.png'
import Logo from "../common/Logo";
import DoubleArrowSharpIcon from '@mui/icons-material/DoubleArrowSharp';

import { SOCIAL_LINKS, FOOTER_LINKS } from '@/lib/constants';
const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return(
        <>
        <div className="w-full py-12 pt-20 bg-black">
            <div className="w-[95%] mx-auto flex flex-col items-start justify-center">
                <div className="w-full flex lg:flex-row flex-col items-center gap-10 justify-between">
                    {/* logo */}
                    <div className="flex flex-col items-start gap-1">
                        <Logo/>
                        <p className="mt-2 text-chrome font-fira-code text-md">The ultimate platform for developer collaboration and knowledge sharing.</p>

                        <div className="flex items-center justify-center gap-2 mt-4">
                            <a href="" className="flex items-center justify-start gap-1 p-2 px-3 rounded-md bg-white">
                                <div className="w-10 h-10 relative">
                                  <Image
                                    src={apple.src}
                                    alt="Apple logo"
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                                <div className="flex flex-col gap-0 items-start justify-center">
                                    <h2 className="text-black  text-[12px] lg:text-md">Download on the</h2>
                                    <h1 className=" font-extrabold md:text-xl -mt-2 text-black">App Store</h1>
                                </div>
                            </a>
                            <a href="" className="flex items-center justify-start gap-1 p-2 px-3 rounded-md bg-white">
                                <div className="w-10 h-10 relative">
                                  <Image
                                    src={playstore}
                                    alt="Apple logo"
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                                <div className="flex flex-col gap-0 items-start justify-center">
                                    <h2 className="text-black text-[12px] lg:text-md">GET IT ON</h2>
                                    <h1 className=" font-extrabold md:text-xl -mt-2 text-black">Google Play</h1>
                                </div>
                            </a>
                        </div>

                        <div className="w-full flex items-center justify-start gap-2 mt-4">
                            {SOCIAL_LINKS.map(item =>(
                                <a key={item.id}
                                 href={item.href}
                                 target={item.target}
                                 className="social w-10 h-10 rounded-full p-1 hover:p-0 flex items-center justify-center group"
                                 >
                                    <img src={item.icon.src} alt="" className="w-full h-full object-contain md:group-hover:-translate-y-3 transition-all duration-300 ease-in-out"/>
                                 </a>
                            ))}
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-2 lg:grid-cols-4 mt-6 lg:mt-0">
                        {FOOTER_LINKS.map((section, index)=>(
                            <div key={index} className="footer-section">
                                <h3 className="text-lg font-bold mb-4 text-sapphire">{section.category}</h3>
                                <ul className="space-y-2">
                                  {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                      <a
                                        href={link.url}
                                        className="hover:text-red-600 text-chrome transition-all duration-300 hover:translate-x-2 flex items-center justify-start gap-2"
                                        rel="noopener noreferrer"
                                      >
                                        <DoubleArrowSharpIcon className="text-lg"/>
                                        {link.text}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className="h-1 w-full mt-10" />
                <div className="w-full p-4">
                    <p className="text-chrome text-center text-lg">© {year} Coduit. All rights reserved. Powered by <span className="text-sapphire">Coduit</span></p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;