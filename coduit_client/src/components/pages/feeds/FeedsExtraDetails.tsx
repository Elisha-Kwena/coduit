import Image from "next/image"
import Link from "next/link";
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


interface ExtraDetailsProps{
    toggleExtras: ()=> void;
}
export default function FeedExtraDetails({toggleExtras}:ExtraDetailsProps){
    return(
        <>
        <div className="w-full flex flex-col gap-6">
            <div className="w-full border bg-black border-gray-600 rounded p-4  flex flex-col gap-3 relative">
                <button 
                    onClick={toggleExtras}
                    className="md:hidden absolute top-1 right-1 p-1 bg-dark800 shadow shadow-gray-700 rounded border border-gray-600 flex items-center justify-center">
                    <CloseRoundedIcon/>
                </button>
                <h1 className="text-white font-bold">About the Author</h1>
                <div className="w-full rounded flex items-start gap-2 bg-dark800 p-2">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative">
                        <Image
                            src="/user1.jpeg"
                            alt="author"
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                    <div className="flex-1 flex-col gap-2">
                        <div className="w-full">
                            <h1 className="text-white">RedHat_109</h1>
                            <p className="text-gray-500 text-[12px]">Blockchain Engineer</p>
                            <p className="text-gray-500 text-[12px]">@ChainTech</p>
                        </div>
                       <div className="w-full flex items-center justify-between gap-3 mt-2">
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <h1 className="font-bold text-sapphire text-[14px]">142</h1>
                                <p className="text-gray-500 capitalize text-sm -mt-2">Posts</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <h1 className="font-bold text-sapphire text-[14px]">5.2k</h1>
                                <p className="text-gray-500 capitalize text-sm -mt-2">Followers</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <h1 className="font-bold text-sapphire text-[14px]">89</h1>
                                <p className="text-gray-500 capitalize text-sm -mt-2">Following</p>
                            </div>
                       </div>
                    </div>
                </div>
                <div className="w-full">
                    <button className="w-full p-2 rounded flex items-center gap-2 justify-center bg-sapphire">
                        <PersonAddAlt1RoundedIcon/>
                        <p className="text-white capitalize">Follow RedHat_109</p>
                    </button>
                </div>
            </div>

            <div className="w-full border bg-black border-gray-600 rounded p-4  flex flex-col gap-3">
                <h1 className="text-white font-bold">Related Posts</h1>

                <div className="w-full flex flex-col gap-2">
                    <Link  href="" className="flex flex-col gap-2 pl-6 p-2 rounded-sm border-b transition-all duration-300 ease-in-out border-gray-600 hover:bg-dark800">
                        <div className="w-full">
                            <p className="text-white font-bold text-sm">Building Defi Protocols with Uniswap V4</p>
                            <p className="text-white font-bold text-sm">Learn about the new hooks architecture</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="bg-dark700 text-gray-300 p-1 rounded text-[12px]">DeFi</span>
                            <span className="bg-dark700 text-gray-300 p-1 rounded text-[12px]">Uniswap</span>
                        </div>
                    </Link>
                    <Link  href="" className="flex flex-col gap-2 pl-6 p-2 rounded-sm border-b transition-all duration-300 ease-in-out border-gray-600 hover:bg-dark800">
                        <div className="w-full">
                            <p className="text-white font-bold text-sm">Zero-Knowledge Rollups: Complete Guide</p>
                            <p className="text-white font-bold text-sm">Scalling Ethereum with ZK-Rollups</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="bg-dark700 text-gray-300 p-1 rounded text-[12px]">ZK-Rollups</span>
                            <span className="bg-dark700 text-gray-300 p-1 rounded text-[12px]">Scalling</span>
                        </div>
                    </Link>
                    <Link  href="" className="flex flex-col gap-2 pl-6 p-2 rounded-sm transition-all duration-300 ease-in-out hover:bg-dark800">
                        <div className="w-full">
                            <p className="text-white font-bold text-sm">Smart Contract Security Audit Checklist</p>
                            <p className="text-white font-bold text-sm">Common vulnerabilities and how to avoid them</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="bg-dark700 text-gray-300 p-1 rounded text-[12px]">Security</span>
                            <span className="bg-dark700 text-gray-300 p-1 rounded text-[12px]">Audit</span>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="w-full border bg-black border-gray-600 rounded p-4  flex flex-col gap-3">
                <h1 className="text-white font-bold">Trending Tags</h1>
                <div className="w-full flex items-center justify-start gap-3 flex-wrap">
                    <div className="bg-dark800 rounded-full p-2 text-gray-300 text-center px-3 text-sm transition-all ease-in-out duration-300 hover:text-white hover:bg-sapphire">#Solidity</div>
                    <div className="bg-dark800 rounded-full p-2 text-gray-300 text-center px-3 text-sm transition-all ease-in-out duration-300 hover:text-white hover:bg-sapphire">#Web3</div>
                    <div className="bg-dark800 rounded-full p-2 text-gray-300 text-center px-3 text-sm transition-all ease-in-out duration-300 hover:text-white hover:bg-sapphire">#Rust</div>
                    <div className="bg-dark800 rounded-full p-2 text-gray-300 text-center px-3 text-sm transition-all ease-in-out duration-300 hover:text-white hover:bg-sapphire">#ZKProofs</div>
                    <div className="bg-dark800 rounded-full p-2 text-gray-300 text-center px-3 text-sm transition-all ease-in-out duration-300 hover:text-white hover:bg-sapphire">#DeFi</div>
                    <div className="bg-dark800 rounded-full p-2 text-gray-300 text-center px-3 text-sm transition-all ease-in-out duration-300 hover:text-white hover:bg-sapphire">#NFT</div>
                    <div className="bg-dark800 rounded-full p-2 text-gray-300 text-center px-3 text-sm transition-all ease-in-out duration-300 hover:text-white hover:bg-sapphire">#DAO</div>
                    <div className="bg-dark800 rounded-full p-2 text-gray-300 text-center px-3 text-sm transition-all ease-in-out duration-300 hover:text-white hover:bg-sapphire">#Layer2</div>
                </div>
            </div>
        </div>
        </>
    )
}