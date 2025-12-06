"use client"

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


import FormMarkDown from '@/components/pages/new_feed/FormMarkdown';
export default function NewFeed(){

  return(
    <>
      <div className="w-full md:pl-72 ml-0 h-screen pt-[64] bg-white dark:bg-black md:pr-1">
        <div className="w-full ml-0 bg-gray-100 dark:bg-dark800 h-full overflow-scroll rounded-t-sm">

          <div className="w-full flex flex-col gap-2 p-1 pt-0">

            <div className=" p-1 fixed right-1 left-72">
              <div className="w-full bg-black border border-gray-600 p-1 flex items-center justify-between rounded">
                <div className="flex items-center justify-start gap-3">
                    <h1 className="text-sapphire font-bold">Create a New Feed</h1>
                </div>
                <div className="flex items-center justify-end gap-2">
                   
                </div>
              </div>
                
            </div>


            {/* ========================================== new post ========================================== */}
            <div className="w-full flex items-start justify-between gap-4 mt-10">
              <div className="flex-1 bg-black border border-gray-600 rounded">
                <div className="w-full border-b border-gray-600 p-4">
                  <h1 className="text-white font-bold text-xl">Create Your Feed</h1>
                  <p className="text-gray-500 text-sm">Share your knowledge with the deveoper community</p>
                </div>

                {/* ========================================== new post form ====================================== */}

                <div className="w-full p-4">
                  <form action="" className="w-full flex flex-col gap-2">
                    <div className="input-container w-full">
                      <label htmlFor="title" className="uppercase text-gray-200 text-sm">POST TITLE <span className="text-candy">*</span></label>
                      <input type="text" className="w-full bg-dark800 border border-gray-600 p-2 text-md text-white placeholder:text-white focus:outline-none focus:border-sapphire rounded" placeholder='Enter a desciptive title . . .'/>
                      <p className="text-white font-bold text-[12px]">Tip: Use clear, descriptive titles to attract the right audience</p>
                    </div>
                    <div className="markdown-container w-full mt-2">
                      <div className="w-full flex items-center justify-start gap-4">
                        <label htmlFor="content" className="uppercase text-gray-200 text-sm">content <span className="text-candy">*</span></label>
                        <p className="text-gray-500 font-bold text-[12px]">{`(Markdown $ HTML supported)`}</p>
                      </div>
                      <div className="w-full my-1">
                        <FormMarkDown/>
                      </div>

                      <div className="textdiv w-full">
                        <textarea 
                          name="" 
                          id="" 
                          className="w-full border border-gray-300 dark:border-gray-600 text-white focus:outline-none dark:focus:border-sapphire  focus:border-sapphire rounded text-[12px] sm:text-[12px] min-h-40 h-40 p-3 overflow-hidden bg-gray-200 dark:bg-dark800 placeholder:text-gray-400" 
                          placeholder='Start writing your post here... You can use Markdown, HTMLL, or insert code blocks.'
                          rows={4}
                        ></textarea>
                      </div>
                      <div className="w-full">
                        <div className="w-full flex items-center justify-start gap-4 mt-3">
                          <label htmlFor="content" className="uppercase text-gray-200 text-sm">tags</label>
                          <p className="text-gray-500 font-bold text-[12px]">{`(Add upto 10)`}</p>
                        </div>
                        <div className="w-full bg-dark800 rounded p-2 border border-gray-600 mt-1 flex items-center justify-start gap-2 flex-wrap">
                          <div className="flex items-center justify-start gap-1">

                            <div className="flex items-center justify-between gap-2 rounded-2xl p-1 px-2 bg-sapphire text-white">
                              <p className="text-sm">Blockchain</p>
                              <span className="flex items-center justify-center text-xl"><CloseRoundedIcon className='!w-3'/></span>
                            </div>
                            <div className="flex items-center justify-between gap-2 rounded-2xl p-1 px-2 bg-sapphire text-white">
                              <p className="text-sm text-nowrap">Smart Contracts</p>
                              <span className="flex items-center justify-center text-xl"><CloseRoundedIcon className='!w-3'/></span>
                            </div>

                          </div>
                          <div className="flex">
                            <input type="text" className="text-gray-600 text-[12px] bg-transparent p-2" placeholder='Add a tag ... ' />
                          </div>
                        </div>
                        <div className="w-full flex items-center justify-start gap-2">
                          <p className="text-white text-[12px]">Popular tags: </p>
                          <div className="flex items-center justify-start gap-0">
                            <p className="text-white text-[12px]">#Solidity, </p>
                            <p className="text-white text-[12px]">#Web3, </p>
                            <p className="text-white text-[12px]">#React, </p>
                            <p className="text-white text-[12px]">#TypeScript, </p>
                            <p className="text-white text-[12px]">#Python, </p>
                            <p className="text-white text-[12px]">#AI, </p>
                            <p className="text-white text-[12px]">#Security</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

              </div>
              <div className="w-1/3 h-96 bg-blue-400"></div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}