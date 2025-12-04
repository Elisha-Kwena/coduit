import Image from 'next/image';

import ShareIcon from '@mui/icons-material/Share';
import FileCopyIcon from '@mui/icons-material/FileCopy';
export default function FeedContents(){
    return(
        <>
            <div className="w-full p-2 md:p-4 ">
                <div className="w-full max-h-96 h-96 relative rounded-md overflow-hidden mb-2">
                    <Image
                        src="/post4banner.jpg"
                        alt="banner"
                        fill
                        className='object-cover object-center'
                    />
                </div>
                <h1 className="text-white text-2xl font-bold mb-2">Introduction</h1>

                <p className="text-gray-200 text-sm"></p>


                <p className="text-gray-200 text-sm">Traditional voting systems suffer from transparency issues, trust requirements, and privacy concerns. In this tutorial, we'll build a decentralized voting system using Ethereum smart contracts and zero-knowledge proofs to ensure both privacy and verifiability.</p>
                <p className="text-gray-200 text-sm mt-2">Zero-knowledge proofs allow voters to prove they've voted correctly without revealing their actual vote, ensuring complete privacy while maintaining system integrity.</p>

                <h1 className="text-white text-2xl my-2 font-bold ">Prerequisites</h1>
                <ul className="mt-2 flex flex-col gap-0 pl-6">
                    <li className="text-gray-200 text-sm list-disc">Basic understanding of Ethereum and smart contracts</li>
                    <li className="text-gray-200 text-sm list-disc">Node.js and npm installed</li>
                    <li className="text-gray-200 text-sm list-disc">Hardhat or Truffle development environment</li>
                    <li className="text-gray-200 text-sm list-disc">Knowledge of Circom for circuit compilation</li>
                    <li className="text-gray-200 text-sm list-disc">MetaMask wallet for testing</li>
                    {/* <li className="text-gray-200 text-sm list-disc"></li>
                    <li className="text-gray-200 text-sm list-disc"></li>
                    <li className="text-gray-200 text-sm list-disc"></li> */}

                    
                </ul>

                <h1 className="text-white text-2xl font-bold my-2">SmartContract Implementation</h1>
                <p className="text-gray-200 text-sm mt-2">Here's our main voting contract with ZK-proof verification:</p>

                {/* ======================================================== code block=============================================== */}

                <div className="w-full rounded-md bg-gray-900 my-2 border border-gray-500">
                    <div className="w-full flex items-center justify-between p-2 border-b border-gray-500">
                        <div className="flex items-center justify-start gap-2">
                            <ShareIcon className='text-gray-500'/>
                            <p className="font-bold text-gray-500">Circom</p>
                        </div>
                        <button className="flex items-center justify-center gap-1 rounded bg-dark700 p-1 px-2 hover:bg-black transition-all ease-in-out duration-300">
                            <FileCopyIcon className='text-gray-500 !w-6'/>
                            <p className="text-gray-500 text-[12px]">Copy</p>
                        </button>
                    </div>
                    <div className="w-full p-2">
                        <pre className='font-mono text-[12px] p-4 rounded'>
                            <code className="leading-relaxed">
                                <p className="text-gray-500">//voting.circom</p>
                                <p className="text-white"><span className="text-pink-500">pragma circom </span><span className="text-yellow-500">2.0.0</span>;</p>
                                <p className="text-white"><span className="text-pink-500">include </span><span className="text-lime_green">"../../node_modules/poseidon.circom"</span>;</p>

                                <p className="text-white my-2"><span className="text-pink-500">template </span><span className="text-white">{`VotingCircuit() {`}</span></p>

                                <p className="text-gray-500 ml-6">//Private inputs</p>

                                <p className="text-white ml-6"><span className="text-pink-500">signa input </span><span className="text-white">secret</span>;</p>
                                <p className="text-white ml-6"><span className="text-pink-500">signa input </span><span className="text-white">nulllifier</span>;</p>
                                <p className="text-white ml-6"><span className="text-pink-500">signa input </span><span className="text-white">VoteOption</span>;</p>

                                <p className="text-gray-500 mt-2 ml-6">//Public inputs</p>

                                <p className="text-white ml-6"><span className="text-pink-500">signal input </span><span className="text-white">markleRoot</span>;</p>
                                <p className="text-white ml-6"><span className="text-pink-500">signal input </span><span className="text-white">VotingSession</span>;</p>

                                <p className="text-gray-500 mt-2 ml-6">//Compute commitment</p>
                                <p className="text-white ml-6"><span className="text-pink-500">Component</span><span className="text-white">poseidon = </span> <span className="text-sapphire">{`Poseidon(`}</span><span className="text-yellow-500">3</span>;</p>
                
                            </code>
                        </pre>
                    </div>
                    

                </div>
                
            </div>
        </>
    )
}