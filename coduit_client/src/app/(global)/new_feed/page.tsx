"use client"

import Image from 'next/image'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import BackupRoundedIcon from '@mui/icons-material/BackupRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { useState, useRef, KeyboardEvent, useEffect, ChangeEvent } from 'react'
import { CodeEditor } from '@/components/pages/new_feed/CodeEditor'
import FormMarkDown from '@/components/pages/new_feed/FormMarkdown'

export default function NewFeed() {
    const [content, setContent] = useState("")
    const [tags, setTags] = useState<string[]>(["Blockchain", "Smart Contracts"])
    const [tagInput, setTagInput] = useState("")
    const [showMaxTagsAlert, setShowMaxTagsAlert] = useState(false)
    const [selectedImage, setSelectedImage] = useState<File | null>(null)
    const [imagePreview, setImagePreview] = useState<string | null>(null)
    
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const tagInputRef = useRef<HTMLInputElement>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    // Show alert when maximum tags reached
    useEffect(() => {
        if (showMaxTagsAlert) {
            const timer = setTimeout(() => {
                setShowMaxTagsAlert(false)
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [showMaxTagsAlert])

    // Clean up image preview URL when component unmounts
    useEffect(() => {
        return () => {
            if (imagePreview) {
                URL.revokeObjectURL(imagePreview)
            }
        }
    }, [imagePreview])

    // Handle inserting code from CodeEditor
    const handleInsertCode = (code: string, language: string) => {
        const codeBlock = `\`\`\`${language}\n${code}\n\`\`\`\n\n`
        
        if (textareaRef.current) {
            const textarea = textareaRef.current
            const start = textarea.selectionStart
            const end = textarea.selectionEnd
            const text = textarea.value
            
            const newText = text.substring(0, start) + codeBlock + text.substring(end)
            setContent(newText)
            
            setTimeout(() => {
                textarea.focus()
                const newCursorPos = start + codeBlock.length
                textarea.setSelectionRange(newCursorPos, newCursorPos)
            }, 0)
        } else {
            setContent(prev => prev + codeBlock)
        }
    }

    // Handle adding a tag when Enter is pressed
    const handleTagInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault()
            addTag()
        }
    }

    // Add a new tag
    const addTag = () => {
        const trimmedTag = tagInput.trim()
        
        if (tags.length >= 10) {
            setShowMaxTagsAlert(true)
            return
        }
        
        if (trimmedTag && !tags.includes(trimmedTag) && tags.length < 10) {
            setTags([...tags, trimmedTag])
            setTagInput("")
        }
    }

    // Remove a tag
    const removeTag = (tagToRemove: string) => {
        setTags(tags.filter(tag => tag !== tagToRemove))
    }

    // Add popular tag
    const addPopularTag = (popularTag: string) => {
        if (tags.length >= 10) {
            setShowMaxTagsAlert(true)
            return
        }
        
        if (!tags.includes(popularTag) && tags.length < 10) {
            setTags([...tags, popularTag])
        }
    }

    // Handle image file selection
    const handleImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            // Clean up previous preview if exists
            if (imagePreview) {
                URL.revokeObjectURL(imagePreview)
            }
            
            setSelectedImage(file)
            const previewUrl = URL.createObjectURL(file)
            setImagePreview(previewUrl)
        }
    }

    // Handle remove image
    const handleRemoveImage = () => {
        if (imagePreview) {
            URL.revokeObjectURL(imagePreview)
        }
        setSelectedImage(null)
        setImagePreview(null)
        
        // Reset file input
        if (fileInputRef.current) {
            fileInputRef.current.value = ''
        }
    }

    // Handle upload area click
    const handleUploadAreaClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }

    return (
        <>
            <div className="w-full md:pl-72 ml-0 h-screen pt-[64] bg-white dark:bg-black md:pr-1">
                <div className="w-full ml-0 bg-gray-100 dark:bg-dark800 h-full overflow-scroll rounded-t-sm">
                    <div className="w-full flex flex-col gap-2 p-1 pt-0">
                        <div className="p-1 fixed right-1 left-72 bg-dark800">
                            <div className="w-full bg-black border border-gray-600 p-1 flex items-center justify-between rounded">
                                <div className="flex items-center justify-start gap-3">
                                    <h1 className="text-sapphire font-bold">Create a New Feed</h1>
                                </div>
                            </div>
                        </div>

                        {/* Maximum Tags Alert Popup */}
                        {showMaxTagsAlert && (
                            <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
                                <div className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                    </svg>
                                    <span className="text-sm font-medium">Maximum of 10 tags reached! Remove some to add more.</span>
                                </div>
                            </div>
                        )}

                        <div className="w-full overflow-hidden flex items-start justify-between gap-4 mt-10 pb-4">
                            <div className="flex-1 bg-black border border-gray-600 rounded">
                                <div className="w-full border-b border-gray-600 p-4">
                                    <h1 className="text-white font-bold text-xl">Create Your Feed</h1>
                                    <p className="text-gray-500 text-sm">Share your knowledge with the developer community</p>
                                </div>

                                <div className="w-full p-4">
                                    <form action="" className="w-full flex flex-col gap-2">
                                        <div className="input-container w-full">
                                            <label htmlFor="title" className="uppercase text-gray-200 text-sm">POST TITLE <span className="text-candy">*</span></label>
                                            <input type="text" className="w-full bg-dark800 border border-gray-600 p-2 text-md text-white placeholder:text-white focus:outline-none focus:border-sapphire rounded" placeholder='Enter a descriptive title . . .'/>
                                            <p className="text-white font-bold text-[12px]">Tip: Use clear, descriptive titles to attract the right audience</p>
                                        </div>
                                        
                                        <div className="markdown-container w-full mt-2">
                                            <div className="w-full flex items-center justify-start gap-4">
                                                <label htmlFor="content" className="uppercase text-gray-200 text-sm">content <span className="text-candy">*</span></label>
                                                <p className="text-gray-500 font-bold text-[12px]">{`(Markdown & HTML supported)`}</p>
                                            </div>
                                            
                                            <div className="w-full my-1">
                                                <FormMarkDown/>
                                            </div>

                                            <div className="textdiv w-full">
                                                <textarea 
                                                    ref={textareaRef}
                                                    value={content}
                                                    onChange={(e) => setContent(e.target.value)}
                                                    className="w-full border border-gray-600 text-white focus:outline-none focus:border-sapphire rounded text-sm min-h-40 max-h-[1000px] p-3 bg-dark800 placeholder:text-gray-400 resize-y overflow-y-auto" 
                                                    placeholder='Start writing your post here... You can use Markdown, HTML, or insert code blocks.'
                                                    rows={8}
                                                    
                                                />
                                            </div>

                                            {/* Code Editor Section */}
                                            <div className="w-full mt-4">
                                                <CodeEditor onInsert={handleInsertCode} />
                                            </div>

                                            {/* Tags Section */}
                                            <div className="w-full">
                                                <div className="w-full flex items-center justify-start gap-4 mt-3">
                                                    <label htmlFor="content" className="uppercase text-gray-200 text-sm">tags</label>
                                                    <p className="text-gray-500 font-bold text-[12px]">{`(Add up to 10)`}</p>
                                                    <span className="text-gray-500 text-[12px]">
                                                        ({tags.length}/10)
                                                    </span>
                                                </div>
                                                <div className="w-full bg-dark800 rounded p-2 border border-gray-600 mt-1 flex items-center justify-start gap-2 flex-wrap">
                                                    {/* Tags container */}
                                                    <div className="flex items-center justify-start gap-1 flex-wrap">
                                                        {tags.map((tag, index) => (
                                                            <div 
                                                                key={index} 
                                                                className="flex items-center justify-between gap-2 rounded-2xl p-1 px-2 bg-sapphire text-white"
                                                            >
                                                                <p className="text-sm">{tag}</p>
                                                                <button 
                                                                    type="button"
                                                                    onClick={() => removeTag(tag)}
                                                                    className="flex items-center justify-center text-xl hover:text-gray-200"
                                                                >
                                                                    <CloseRoundedIcon className='!w-3'/>
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Tags input - Disabled when max reached */}
                                                    <div className="flex">
                                                        <input 
                                                            ref={tagInputRef}
                                                            type="text" 
                                                            value={tagInput}
                                                            onChange={(e) => setTagInput(e.target.value)}
                                                            onKeyDown={handleTagInputKeyDown}
                                                            className={`text-white text-[12px] focus:outline-none bg-transparent p-2 min-w-[120px] ${tags.length >= 10 ? 'opacity-50 cursor-not-allowed' : ''}`} 
                                                            placeholder={tags.length >= 10 ? 'Maximum tags reached' : 'Add a tag ... (Press Enter)'}
                                                            disabled={tags.length >= 10}
                                                        />
                                                    </div>
                                                </div>
                                                
                                                {/* Tag counter and popular tags */}
                                                <div className="w-full flex items-center justify-between mt-2">
                                                    <div className="flex items-center gap-2">
                                                        <p className="text-white text-[12px]">Popular tags: </p>
                                                        <div className="flex items-center justify-start gap-1 flex-wrap">
                                                            {["Solidity", "Web3", "React", "TypeScript", "Python", "AI", "Security"].map((popularTag) => (
                                                                <button
                                                                    key={popularTag}
                                                                    type="button"
                                                                    onClick={() => addPopularTag(popularTag)}
                                                                    className={`text-white text-[12px] hover:text-sapphire transition-colors ${tags.length >= 10 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                                    disabled={tags.length >= 10}
                                                                >
                                                                    #{popularTag},
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Tag counter */}
                                                    <div className={`text-xs px-2 py-1 rounded ${tags.length >= 10 ? 'bg-red-900/30 text-red-400' : 'bg-gray-800 text-gray-400'}`}>
                                                        {tags.length}/10 tags
                                                    </div>
                                                </div>
                                            </div>

                                            {/* ==================== Cover Image Section ==================== */}
                                            <div className="w-full mt-4">
                                                <div className="w-full flex items-center justify-start gap-4 mt-3">
                                                    <label htmlFor="content" className="uppercase text-gray-200 text-sm">cover image</label>
                                                    <p className="text-gray-500 font-bold text-[12px]">{`(Recommended: 1200x630px)`}</p>
                                                </div>

                                                {/* Upload Area - Only shown when no image is selected */}
                                                {!selectedImage && (
                                                    <div className="w-full mt-2">
                                                        <input 
                                                            type="file" 
                                                            id="cover" 
                                                            ref={fileInputRef}
                                                            accept="image/*"
                                                            className='hidden' 
                                                            onChange={handleImageSelect}
                                                        />
                                                        <label htmlFor="cover" className="cursor-pointer">
                                                            <div 
                                                                onClick={handleUploadAreaClick}
                                                                className="w-full h-40 border-2 border-dashed rounded bg-dark800 hover:border-sapphire transition-all ease-in-out duration-300 hover:bg-gray-800 cursor-pointer border-gray-600 flex flex-col gap-1 items-center justify-center"
                                                            >
                                                                <BackupRoundedIcon className='text-gray-500 !w-12 !h-12'/>
                                                                <h1 className="font-bold text-gray-500 text-sm">Drag & drop or click to upload</h1>
                                                                <p className="text-gray-500 text-[12px]">PNG, JPG GIF up to 5MB</p>
                                                            </div>
                                                        </label>
                                                    </div>
                                                )}

                                                {/* Image Preview - Only shown when image is selected */}
                                                {selectedImage && imagePreview && (
                                                    <div className="w-full border border-gray-600 rounded p-2 mt-2">
                                                        <h1 className="text-gray-500 text-sm">Image Preview</h1>

                                                        <div className="w-full mt-2 h-96 rounded relative overflow-hidden">
                                                            <Image
                                                                src={imagePreview}
                                                                alt="Selected cover"
                                                                fill
                                                                className="object-cover object-center"
                                                            />
                                                        </div>

                                                        <div className="w-full mt-2">
                                                            <button 
                                                                type="button"
                                                                onClick={handleRemoveImage}
                                                                className="flex items-center justify-start gap-2 p-2 rounded border bg-candy hover:bg-red-600 border-candy transition-colors"
                                                            >
                                                                <DeleteRoundedIcon className='text-white'/>
                                                                <p className="text-white">Remove Image</p>
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
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

            {/* Add animation for the alert */}
            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(-10px) translateX(-50%);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) translateX(-50%);
                    }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
            `}</style>
        </>
    )
}