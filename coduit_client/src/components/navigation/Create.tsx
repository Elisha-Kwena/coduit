'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useDropdown } from '@/context/DropDownContext';
const navItems = [
  { label: 'Live Session', href: '/livesession' },
  { label: 'Challenge', href: '/challenges' }
];

export default function Create({ id }: { id: string }) {
  const pathname = usePathname();
  const { openDropdownId, setOpenDropdownId } = useDropdown();
  const isOpen = openDropdownId === id;

  // const toggleModal = () =>{
  //       setModalOpen((prev) =>!prev)
  //   }

  return (
    <>
    <div className={`w-full relative rounded-md pl-1 p-2 transition-all duration-300 ease-in-out hover:bg-gray-400 dark:hover:bg-[#232323] ${isOpen ? "bg-gray-400 dark:bg-[#232323]":"bg-gray-200 dark:bg-black"}`}>
      <button
        className={`w-full group flex items-center justify-between rounded-md ${isOpen ? "text-sapphire" : "dark:text-white"}`}
        onClick={() => setOpenDropdownId(isOpen ? null : id)}>
        <div className="flex items-center justify-start gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 transition-all duration-300 ease-in-out group-hover:text-sapphire">
            <path d="M6 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM15.75 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3H18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.25ZM6 12.75a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3v-2.25a3 3 0 0 0-3-3H6ZM17.625 13.5a.75.75 0 0 0-1.5 0v2.625H13.5a.75.75 0 0 0 0 1.5h2.625v2.625a.75.75 0 0 0 1.5 0v-2.625h2.625a.75.75 0 0 0 0-1.5h-2.625V13.5Z" />
          </svg>
          <span className="text-md font-bold font-fira-code transition-all duration-300 ease-in-out group-hover:text-sapphire">Create</span>
        </div>
        <span className={`flex items-center justify-center transition-all duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path fillRule="evenodd" d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clipRule="evenodd" />
            </svg>
        </span>
      </button>

      <div
        className={`w-full flex flex-col justify-start items-end gap-1 mt-1 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}>
          <button className={`w-3/4 group flex items-center p-2 justify-between bg-gray-200 dark:bg-black rounded-[8px] font-bold shadow-xl `}>
            <div className="flex items-center justify-start gap-4">
              <span className="text-[12px] dark:text-white font-fira-code group-hover:text-sapphire transition-all duration-300 ease-in-out">New Post</span>
            </div>
          </button>
        {navItems.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={`w-3/4 flex items-center p-2 justify-between bg-gray-200 dark:bg-black rounded-[8px] font-bold shadow-xl hover:text-sapphire transition-all duration-300 ease-in-out ${
              pathname === link.href ? 'text-sapphire' : 'dark:text-white'
            }`}>
            <div className="flex items-center justify-start gap-4">
              <span className="text-[12px] font-fira-code">{link.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}