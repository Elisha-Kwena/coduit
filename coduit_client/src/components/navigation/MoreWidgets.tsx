import Link from "next/link"

import ReportIcon from '@mui/icons-material/Report';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import { usePathname } from "next/navigation"
import ThemeWidget from "./ThemeWidget";
interface MoreWidgetProps {
  themeWidgetIsOpen: boolean;
  toggleThemeWidget: () => void;
}

export default function MoreWidget({themeWidgetIsOpen,toggleThemeWidget}:MoreWidgetProps){

    return(
        <>
        <div className={`w-full flex items-start justify-start gap-2 flex-col p-2 ${themeWidgetIsOpen ?"max-h-0":"max-h-96"}`}>
            <Link         
            href="/feeds" className={`group w-full block pl-1 p-3 rounded-md font-fira-code bg-gray-200 dark:bg-black hover:text-sapphire transition-all duration-300 ease-in-out`}>
                <div className="w-full flex items-center justify-start gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 dark:text-white group-hover:text-sapphire transition-all duration-300 ease-in-out">
                      <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
                      <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
                      <path fillRule="evenodd" d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                    <span className="text-md font-bold font-fira-code dark:text-white group-hover:text-sapphire transition-all duration-300 ease-in-out">Settings</span>
                </div>
            </Link>
            <button
                onClick={toggleThemeWidget}
                className={`group w-full block pl-1 p-3 rounded-md font-fira-code bg-gray-200 dark:bg-black hover:text-sapphire transition-all duration-300 ease-in-out`}>
                    <div className="w-full flex items-center justify-start gap-4">
                        <WbSunnyIcon className="!text-8 dark:text-white group-hover:text-sapphire transition-all duration-300 ease-in-out"/>
                        <span className="text-md font-bold font-fira-code dark:text-white group-hover:text-sapphire transition-all duration-300 ease-in-out">Change appearance</span>
                    </div>
            </button>
            <Link
            
            href="/feeds" className={`group w-full block pl-1 p-3 rounded-md font-fira-code bg-gray-200 dark:bg-black hover:text-sapphire transition-all duration-300 ease-in-out`}>
                <div className="w-full flex items-center justify-start gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 dark:text-white group-hover:text-sapphire transition-all duration-300 ease-in-out">
                      <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                    </svg>
                    <span className="text-md font-bold font-fira-code dark:text-white group-hover:text-sapphire transition-all duration-300 ease-in-out">Saved</span>
                </div>
            </Link>
            <Link
            
            href="/feeds" className={`group w-full block pl-1 p-3 rounded-md font-fira-code bg-gray-200 dark:bg-black hover:text-sapphire transition-all duration-300 ease-in-out`}>
                <div className="w-full flex items-center justify-start gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 dark:text-white group-hover:text-sapphire transition-all duration-300 ease-in-out">
                      <path fillRule="evenodd" d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z" clipRule="evenodd" />
                    </svg>
                    <span className="text-md font-bold font-fira-code dark:text-white group-hover:text-sapphire transition-all duration-300 ease-in-out">Tags</span>
                </div>
            </Link>
            <Link
            
            href="/feeds" className={`group w-full block pl-1 p-3 rounded-md font-fira-code bg-gray-200 dark:bg-black hover:text-sapphire transition-all duration-300 ease-in-out`}>
                <div className="w-full flex items-center justify-start gap-4">
                    <ReportIcon className="text-8 dark:text-white group-hover:text-sapphire transition-all duration-300 ease-in-out"/>
                    <span className="text-md font-bold font-fira-code dark:text-white group-hover:text-sapphire transition-all duration-300 ease-in-out">Report a problem</span>
                </div>
            </Link>
           
        </div>
        </>
    )
}