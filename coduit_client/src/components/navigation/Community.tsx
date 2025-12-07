'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useDropdown } from '@/context/DropDownContext';

const navItems = [
  { label: 'Q&A Forum', href: '/questions' },
  { label: 'Live Collaboration', href: '/livecollabo' },
  { label: 'Events', href: '/events' },
  { label: 'Mentorship', href: '/mentorship' },
];

export default function Community({ id }: { id: string }) {
  const pathname = usePathname();
  const { openDropdownId, setOpenDropdownId } = useDropdown();
  const isOpen = openDropdownId === id;
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when route changes
  useEffect(() => {
    setOpenDropdownId(null);
  }, [pathname, setOpenDropdownId]);

  // Handle click outside and escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdownId(null);
      }
    };

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
      className={`w-full relative rounded-md pl-1 p-2 transition-all duration-300 ease-in-out dark:hover:bg-[#232323] hover:bg-gray-400 ${isOpen ? "bg-gray-400 dark:bg-[#232323]":"bg-gray-200 dark:bg-black"}`}
    >
      <button
        className={`group w-full flex items-center justify-between rounded-md ${isOpen ? "text-sapphire" : "dark:text-white"}`}
        onClick={() => setOpenDropdownId(isOpen ? null : id)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        id={`community-button-${id}`}
      >
        <div className="flex items-center justify-start gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 transition-all duration-300 ease-in-out group-hover:text-sapphire">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z" clipRule="evenodd" />
          </svg>

          <span className="text-sm font-bold font-fira-code transition-all duration-300 ease-in-out group-hover:text-sapphire">Community</span>
        </div>
        <span className={`flex items-center justify-center transition-all duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 transition-all duration-300 ease-in-out group-hover:text-sapphire">
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
        aria-labelledby={`community-button-${id}`}
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