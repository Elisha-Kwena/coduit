"use client"

import { useState, useRef, useEffect } from "react"
import { supportedLanguages } from "@/lib/constants/languages"
import { CodeEditor } from "./CodeEditor" // Adjust import path

export function CodeBlock() {
    const [openCodes, setCodesOpen] = useState(false)
    const [showCodeEditor, setShowCodeEditor] = useState(false)
    const dropDownRef = useRef<HTMLDivElement>(null)
    const [selectedLanguage, setSelectedLanguage] = useState<string>("javascript")

    const toggleCodes = () => {
        setCodesOpen((prev) => !prev)
    }

    const handleSelectedLanguage = (lang: typeof supportedLanguages[0]) => {
        setSelectedLanguage(lang.value)
        setCodesOpen(false)
        setShowCodeEditor(true) // Open editor when language is selected
    }

    const handleInsertCode = (code: string, language: string) => {
        // Handle the inserted code here
        console.log("Code inserted:", code, "Language:", language)
        setShowCodeEditor(false)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropDownRef.current && event.target instanceof Node) {
                if (!dropDownRef.current.contains(event.target)) {
                    setCodesOpen(false)
                }
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <>
            <div className="relative">
                <button 
                    type="button"
                    onClick={toggleCodes}
                    className="flex items-center justify-center p-1 gap-6 rounded bg-gray-200 dark:bg-black group transition-all duration-300 ease-in-out dark:hover:bg-sapphire hover:bg-sapphire dark:border border-gray-600"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-gray-400 transition-all ease-in-out duration-300 group-hover:text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                    <p className="text-sm">
                        {supportedLanguages.find(lang => lang.value === selectedLanguage)?.label || "Code"}
                    </p>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                        className={`size-5 text-gray-400 transition-all ease-in-out duration-300 group-hover:text-white ${openCodes ? 'rotate-180' : ''}`}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
                
                <div className="absolute top-8 bg-white shadow dark:bg-black rounded">
                    <div 
                        ref={dropDownRef} 
                        className={`w-40 flex flex-col gap-1 overflow-y-auto border-gray-600 transition-all duration-300 ease-in-out ${openCodes ? "border rounded max-h-72 scrollbar-thin p-1" : "max-h-0"}`}
                    >
                        {supportedLanguages.map(lang => (
                            <button 
                                type="button"
                                key={lang.id} 
                                onClick={() => handleSelectedLanguage(lang)}
                                className="p-2 py-1 text-white text-sm rounded-sm text-left transition-all ease-in-out duration-300 hover:bg-dark800 hover:text-sapphire"
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Code Editor Modal */}
            {showCodeEditor && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-gray-900 border border-gray-600 rounded-lg w-full max-w-4xl">
                        <CodeEditor 
                            initialLanguage={selectedLanguage}
                            onInsert={handleInsertCode}
                            onClose={() => setShowCodeEditor(false)}
                        />
                    </div>
                </div>
            )}
        </>
    )
}