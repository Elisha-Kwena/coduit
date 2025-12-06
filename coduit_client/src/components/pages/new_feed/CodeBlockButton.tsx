// components/pages/new_feed/CodeBlockButton.tsx
"use client"

import { useState } from "react"
import { CodeEditor } from "./CodeEditor"

interface CodeBlockButtonProps {
    onInsertCode: (code: string, language: string) => void
}

export function CodeBlockButton({ onInsertCode }: CodeBlockButtonProps) {
    const [showEditor, setShowEditor] = useState(false)

    const handleInsert = (code: string, language: string) => {
        // Format as Markdown code block
        const formattedCode = `\`\`\`${language}\n${code}\n\`\`\`\n\n`
        onInsertCode(formattedCode, language)
        setShowEditor(false)
    }

    return (
        <>
            <button
                type="button"
                onClick={() => setShowEditor(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded bg-dark800 border border-gray-600 hover:border-sapphire hover:text-sapphire text-gray-300 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
                <span className="text-sm">Add Code Block</span>
            </button>
            
            {showEditor && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-gray-900 border border-gray-600 rounded-lg w-full max-w-4xl">
                        <CodeEditor 
                            onInsert={handleInsert}
                            onClose={() => setShowEditor(false)}
                        />
                    </div>
                </div>
            )}
        </>
    )
}