import { ManualThemeToggle } from "../theme/ToggleTheme";
interface ThemeWidgetProps {
  themeWidgetIsOpen: boolean;
  toggleThemeWidget: () => void;
}
export default function ThemeWidget({themeWidgetIsOpen,toggleThemeWidget}:ThemeWidgetProps){
    return(
        <div className="w-full flex flex-col gap-2 bg-gray-400 dark:bg-dark800 p-2">
            
            <button
                onClick={toggleThemeWidget}
                className="w-full flex items-center justify-start gap-2 bg-gray-200 dark:bg-black p-2 rounded-md">
                <span className="dark:text-white flex items-center justify-center rotate-90">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clipRule="evenodd" />
                    </svg>
                </span>
                <span className="dark:text-white ">Toggle system appearance</span>
            </button>
            <ManualThemeToggle/>
        </div>
    )
}