'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useDropdown } from '@/context/DropDownContext';

const navItems = [
  { label: 'Articles', href: '/articles' },
  { label: 'Tutorials', href: '/tutorials' },
  { label: 'Trending', href: '/trending' },
  { label: 'AI Recs', href: '/airecommendation' },
];

export default function Explore({ id }: { id: string }) {
    const pathname = usePathname();
    const { openDropdownId, setOpenDropdownId } = useDropdown();
    const isOpen = openDropdownId === id;
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setOpenDropdownId(null);
    }, [pathname, setOpenDropdownId]);

    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenDropdownId(null);
            }
        };

        // Handle Escape key
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                setOpenDropdownId(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isOpen, setOpenDropdownId]);

    return (
    <div 
        ref={dropdownRef}
        className={`w-full relative rounded pl-1 p-2 transition-all duration-300 ease-in-out dark:hover:bg-[#232323] hover:bg-gray-400 ${isOpen ? "bg-gray-400 dark:bg-[#232323]":"bg-gray-200 dark:bg-black"}`}
    >
      <button
        className={`w-full group flex items-center justify-between rounded-md ${isOpen ? "text-sapphire" : "dark:text-white"}`}
        onClick={() => setOpenDropdownId(isOpen ? null : id)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="flex items-center justify-start gap-4">
          <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24"fill="currentColor"className="size-5 transition-all duration-300 ease-in-out group-hover:text-sapphire">
            <path fillRule="evenodd"d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"clipRule="evenodd"/>
            <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
          </svg>
          <span className="text-sm font-bold font-fira-code transition-all duration-300 ease-in-out group-hover:text-sapphire">Explore</span>
        </div>
        <span className={`flex items-center justify-center transition-all duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`}>
            <svg xmlns="http://www.w3.org2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 transition-all duration-300 ease-in-out group-hover:text-sapphire">
                <path fillRule="evenodd" d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clipRule="evenodd" />
            </svg>
        </span>
      </button>

      <div
        className={`w-full flex flex-col justify-start items-end gap-1 mt-1 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
        role="menu"
        aria-labelledby="explore-button"
      >
        {navItems.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={`w-3/4 flex items-center p-2 justify-between bg-gray-200 dark:bg-black rounded-[8px] font-bold shadow-xl hover:text-sapphire dark:hover:text-sapphire transition-all duration-300 ease-in-out ${
              pathname === link.href ? 'text-sapphire' : 'dark:text-white'
            }`}
            role="menuitem"
            tabIndex={isOpen ? 0 : -1}
            onClick={() => setOpenDropdownId(null)}
          >
            <div className="flex items-center justify-start gap-4">
              <span className="text-[12px] font-fira-code">{link.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}