'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useDropdown } from '@/context/DropDownContext';


interface GroupProps{
  id:string;
}

export default function Groups({ id }:GroupProps) {
  const pathname = usePathname();
  const { openDropdownId, setOpenDropdownId } = useDropdown();
  const isOpen = openDropdownId === id;

  return (
    <div className={`w-full relative rounded-md pl-1 p-2 transition-all duration-300 ease-in-out hover:bg-gray-400 hover:shadow dark:hover:bg-[#232323] ${isOpen ? "bg-gray-400 dark:bg-[#232323]":"bg-gray-200 dark:bg-black"}`}>
      <button
        className={`group w-full flex items-center justify-between rounded-md ${isOpen ? "text-sapphire" : "dark:text-white"}`}
        onClick={() => setOpenDropdownId(isOpen ? null : id)}
      >
        <div className="flex items-center justify-start gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 transition-all duration-300 ease-in-out group-hover:text-sapphire">
              <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
              <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
            </svg>

          <span className="text-sm font-bold font-fira-code transition-all duration-300 ease-in-out group-hover:text-sapphire">Groups</span>
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
      >
        <div className="w-3/4 shadow-xl bg-gray-200 dark:bg-black px-1 rounded">
            <div className="top p-2 border-b border-gray-700">
                <h1 className="text-sm uppercase text-gray-500 font-['Times_New_Roman']">Your groups</h1>
            </div>
            <div className="w-full flex flex-col items-start justify-between gap-1 py-1 border-b border-gray-700">
                <Link href="" className='group hover:bg-gray-400 dark:hover:bg-dark800 rounded pl-1 hover:text-sapphire transition-all duration-300 ease-in-out w-full p-2 px-0 flex items-center justify-start gap-2'>
                    <div className="w-4 h-4 relative">
                        <Image
                            src="/java-script.png"
                            alt="group-banner"
                            fill
                            className='object-contain object-center'
                        />
                    </div>
                    <span className="text-[12px] font-bold font-fira-code dark:text-white capitalize group-hover:text-sapphire transition-all duration-300 ease-in-out">JavaScript Scriptors</span>
                </Link>
                <Link href="" className='group hover:bg-gray-400 dark:hover:bg-dark800 rounded pl-1 hover:text-sapphire transition-all duration-300 ease-in-out w-full p-2 px-0 flex items-center justify-start gap-2'>
                    <div className="w-4 h-4 relative">
                        <Image
                            src="/python.png"
                            alt="group-banner"
                            fill
                            className='object-contain object-center'
                        />
                    </div>
                    <span className="text-[12px] font-bold font-fira-code dark:text-white capitalize group-hover:text-sapphire transition-all duration-300 ease-in-out">python pioneers</span>
                </Link>
                <Link href="" className='hover:bg-gray-400 dark:hover:bg-dark800 group rounded pl-1 hover:text-sapphire transition-all duration-300 ease-in-out w-full p-2 px-0 flex items-center justify-start gap-2'>
                    <div className="w-4 h-4 relative">
                        <Image
                            src="/typescript.png"
                            alt="group-banner"
                            fill
                            className='object-contain object-center'
                        />
                    </div>
                    <span className="text-[12px] dark:text-white font-bold capitalize font-fira-code group-hover:text-sapphire transition-all duration-300 ease-in-out">typescript typers</span>
                </Link>
            </div>
            <div className="top p-2 border-b border-gray-700">
                <h1 className="text-sm uppercase text-gray-500 font-['Times_New_Roman']">Discover</h1>
            </div>
            <div className="w-full flex flex-col items-start justify-between gap-1 py-1">
                <Link href="" className='group hover:bg-gray-400 dark:hover:bg-dark800 rounded pl-1 w-full p-2 px-0 flex items-center justify-start gap-2'>
                    <div className="w-6 h-6 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 dark:text-white group-hover:text-sapphire transition-all duration-300 ease-in-out">
                          <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                        </svg>
                    </div>
                    <span className="text-[12px] font-bold font-fira-code capitalize dark:text-white group-hover:text-sapphire transition-all duration-300 ease-in-out">Browse All Groups</span>
                </Link>
                <Link href="" className='group hover:bg-gray-400 dark:hover:bg-dark800 rounded pl-1  w-full p-2 px-0 flex items-center justify-start gap-2'>
                    <div className="w-6 h-6 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 dark:text-white group-hover:text-sapphire transition-all duration-300 ease-in-out">
                          <path d="M6 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM15.75 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3H18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.25ZM6 12.75a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3v-2.25a3 3 0 0 0-3-3H6ZM17.625 13.5a.75.75 0 0 0-1.5 0v2.625H13.5a.75.75 0 0 0 0 1.5h2.625v2.625a.75.75 0 0 0 1.5 0v-2.625h2.625a.75.75 0 0 0 0-1.5h-2.625V13.5Z" />
                        </svg>
                    </div>
                    <span className="text-[12px] font-bold font-fira-code capitalize dark:text-white group-hover:text-sapphire transition-all duration-300 ease-in-out">Create new group</span>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}