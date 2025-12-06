"use client"

import { useState, useRef, useEffect } from "react"
import CodeMirror from "@uiw/react-codemirror"
import { oneDark } from "@codemirror/theme-one-dark"
import { javascript } from "@codemirror/lang-javascript"
import { python } from "@codemirror/lang-python"
import { java } from "@codemirror/lang-java"
import { html } from "@codemirror/lang-html"
import { css } from "@codemirror/lang-css"
import { cpp } from "@codemirror/lang-cpp"
import { php } from "@codemirror/lang-php"
import { sql } from "@codemirror/lang-sql"
import { json } from "@codemirror/lang-json"
import { markdown } from "@codemirror/lang-markdown"
import { rust } from "@codemirror/lang-rust"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { supportedLanguages } from "@/lib/constants/languages"

interface CodeEditorProps {
    onInsert?: (code: string, language: string) => void
}

export function CodeEditor({ onInsert }: CodeEditorProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [code, setCode] = useState("// Write your code here...")
    const [selectedLanguage, setSelectedLanguage] = useState("javascript")
    const [isCopied, setIsCopied] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const [showDropdown, setShowDropdown] = useState(false)

    const getLanguageExtension = () => {
        switch(selectedLanguage) {
            case "javascript":
                return javascript()
            case "typescript":
                return javascript({ typescript: true })
            case "python":
                return python()
            case "java":
                return java()
            case "html":
                return html()
            case "css":
                return css()
            case "cpp":
                return cpp()
            case "php":
                return php()
            case "sql":
                return sql()
            case "json":
                return json()
            case "markdown":
                return markdown()
            case "rust":
                return rust()
            default:
                return javascript()
        }
    }

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code)
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy:', err)
        }
    }

    const handleInsert = () => {
        if (onInsert) {
            onInsert(code, selectedLanguage)
        }
        setCode("// Write your code here...")
        setSelectedLanguage("javascript")
        setIsOpen(false)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && event.target instanceof Node) {
                if (!dropdownRef.current.contains(event.target)) {
                    setShowDropdown(false)
                }
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div className="w-full mt-2">
            {/* Toggle Button */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-dark800 hover:bg-gray-800 border border-gray-600 rounded text-gray-300 hover:text-white transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
                <span className="text-sm font-medium">
                    {isOpen ? "Close Code Editor" : "Add Code Block"}
                </span>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="currentColor" 
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>

            {/* Code Editor */}
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[800px] mt-3" : "max-h-0"}`}>
                <div className="border border-gray-600 rounded-lg overflow-hidden max-w-full">
                    {/* Editor Header */}
                    <div className="bg-dark800 px-4 py-2 flex items-center justify-between border-b border-gray-600">
                        <div className="flex items-center gap-3">
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    type="button"
                                    onClick={() => setShowDropdown(!showDropdown)}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded bg-gray-900 border border-gray-600 hover:border-sapphire transition-colors"
                                >
                                    <span className="text-white text-sm font-medium">
                                        {supportedLanguages.find(lang => lang.value === selectedLanguage)?.label || "JavaScript"}
                                    </span>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth="1.5" 
                                        stroke="currentColor" 
                                        className={`w-4 h-4 text-gray-400 transition-transform ${showDropdown ? 'rotate-180' : ''}`}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>
                                
                                {showDropdown && (
                                    <div className="absolute top-10 left-0 bg-gray-900 border border-gray-600 rounded shadow-lg z-50 max-w-48">
                                        <div className="w-48 max-h-64 overflow-y-auto">
                                            {supportedLanguages.map(lang => (
                                                <button
                                                    key={lang.id}
                                                    onClick={() => {
                                                        setSelectedLanguage(lang.value)
                                                        setShowDropdown(false)
                                                    }}
                                                    className={`w-full px-3 py-2 text-sm text-left hover:bg-gray-800 transition-colors ${selectedLanguage === lang.value ? 'text-sapphire bg-gray-800' : 'text-gray-300'}`}
                                                >
                                                    {lang.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            
                            {/* Expand Button */}
                            <button
                                type="button"
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="text-gray-400 hover:text-white text-sm flex items-center gap-1"
                                title={isExpanded ? "Collapse Editor" : "Expand Editor"}
                            >
                                {isExpanded ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                    </svg>
                                )}
                                <span className="hidden sm:inline">{isExpanded ? "Collapse" : "Expand"}</span>
                            </button>
                        </div>
                        
                        <div className="flex items-center gap-2">
                            {/* Copy Button */}
                            <button
                                type="button"
                                onClick={handleCopy}
                                className={`text-sm flex items-center gap-1 transition-all duration-300 ${isCopied ? 'text-green-400' : 'text-gray-400 hover:text-white'}`}
                            >
                                {isCopied ? (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                        <span>Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                                        </svg>
                                        <span>Copy</span>
                                    </>
                                )}
                            </button>
                            
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-white"
                                title="Close Editor"
                            >
                                <CloseRoundedIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    
                    {/* CodeMirror Editor */}
                    <div className="bg-black overflow-x-auto max-w-full">
                        <CodeMirror
                            value={code}
                            height={isExpanded ? "400px" : "200px"}
                            theme={oneDark}
                            extensions={[getLanguageExtension()]}
                            onChange={setCode}
                            basicSetup={{
                                lineNumbers: true,
                                highlightActiveLineGutter: true,
                                bracketMatching: true,
                                closeBrackets: true,
                                autocompletion: true,
                                indentOnInput: true,
                                tabSize: 4,
                            }}
                            className="max-w-full overflow-x-auto"
                            style={{
                                maxWidth: "100%",
                                overflowX: "auto",
                            }}
                        />
                    </div>
                    
                    {/* Footer */}
                    <div className="bg-dark800 px-4 py-3 border-t border-gray-600 flex justify-end">
                        <button
                            type="button"
                            onClick={handleInsert}
                            className="px-4 py-2 bg-sapphire hover:bg-blue-700 text-white rounded text-sm font-medium transition-colors"
                        >
                            Insert Code Block
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}