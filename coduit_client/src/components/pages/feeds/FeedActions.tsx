"use client"

import { useState, useRef, useEffect } from 'react';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ReplyAllRoundedIcon from '@mui/icons-material/ReplyAllRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import BlockRoundedIcon from '@mui/icons-material/BlockRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import PersonOffRoundedIcon from '@mui/icons-material/PersonOffRounded';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import PersonRemoveRoundedIcon from '@mui/icons-material/PersonRemoveRounded';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import ReportGmailerrorredRoundedIcon from '@mui/icons-material/ReportGmailerrorredRounded';

interface FeedActionsProps{
    feedId?:number;
    author:string;
    group_name:string;
}

// Global state to track the currently open menu
let currentOpenMenuId: string | null = null;

// Function to close all open menus
export const closeAllFeedActions = () => {
    if (currentOpenMenuId) {
        document.dispatchEvent(new CustomEvent(`close-feed-actions-${currentOpenMenuId}`));
        currentOpenMenuId = null;
    }
};

export default function FeedActions({feedId,author,group_name}:FeedActionsProps){
    const actionsRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    // Generate a unique ID for this menu instance
    const menuId = useRef(`feed-menu-${feedId || Date.now()}-${Math.random().toString(36).substr(2, 9)}`);
    
    const [openActions, setOpenActions] = useState(false);
    
    const toggleActions = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        
        if (!openActions) {
            // Close any other open menu first
            closeAllFeedActions();
            
            // Then open this one
            currentOpenMenuId = menuId.current;
            setOpenActions(true);
        } else {
            currentOpenMenuId = null;
            setOpenActions(false);
        }
    };
    
    // Listen for close events from other components
    useEffect(() => {
        const handleCloseEvent = () => {
            setOpenActions(false);
            if (currentOpenMenuId === menuId.current) {
                currentOpenMenuId = null;
            }
        };
        
        const eventName = `close-feed-actions-${menuId.current}`;
        document.addEventListener(eventName, handleCloseEvent);
        
        return () => {
            document.removeEventListener(eventName, handleCloseEvent);
        };
    }, []);
    
    // Handle clicks outside the dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                openActions &&
                actionsRef.current && 
                !actionsRef.current.contains(event.target as Node) &&
                buttonRef.current && 
                !buttonRef.current.contains(event.target as Node)
            ) {
                setOpenActions(false);
                currentOpenMenuId = null;
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openActions]);
    
    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && openActions) {
                setOpenActions(false);
                currentOpenMenuId = null;
            }
        };
        
        if (openActions) {
            document.addEventListener('keydown', handleEscape);
        }
        
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [openActions]);

    return(
        <div className="relative">
            <button 
                ref={buttonRef}
                onClick={toggleActions}
                className="flex items-center group justify-center focus:outline-none"
                aria-label="More actions"
                aria-expanded={openActions}
                aria-haspopup="true"
            >
                <MoreHorizIcon className={`transition-all duration-200 ease-in-out ${openActions ? 'text-sapphire scale-110' : 'hover:text-sapphire'}`}/>
            </button>

            <div 
                ref={actionsRef} 
                className={`absolute md:w-52 w-64 shadow bg-white dark:bg-dark900 rounded border border-gray-200 dark:border-gray-500 p-1 right-0 z-[100] transition-all duration-200 ${openActions ? "block opacity-100 translate-y-0" : "hidden opacity-0 -translate-y-2"}`}
                role="menu"
                aria-orientation="vertical"
            >
                <div className="w-full flex flex-col gap-1">
                    <button 
                        className="w-full flex items-center justify-start gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-dark800 transition-colors duration-150"
                        role="menuitem"
                    >
                        <span className="flex items-center justify-center text-gray-600 dark:text-gray-300">
                            <ReplyAllRoundedIcon fontSize="small"/>
                        </span>
                        <p className="text-gray-900 dark:text-white text-[12px]">Share with</p>
                    </button>
                    
                    <button 
                        className="w-full flex items-center justify-start gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-dark800 transition-colors duration-150"
                        role="menuitem"
                    >
                        <span className="flex items-center justify-center text-gray-600 dark:text-gray-300">
                            <VisibilityOffRoundedIcon fontSize="small"/>
                        </span>
                        <p className="text-gray-900 dark:text-white text-[12px]">Hide</p>
                    </button>
                    
                    <button 
                        className="w-full flex items-center justify-start gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-dark800 transition-colors duration-150"
                        role="menuitem"
                    >
                        <span className="flex items-center justify-center text-gray-600 dark:text-gray-300">
                            <PersonOffRoundedIcon fontSize="small"/>
                        </span>
                        <p className="text-gray-900 dark:text-white text-[12px]">Block {author}</p>
                    </button>
                    
                    <button 
                        className="w-full flex items-center justify-start gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-dark800 transition-colors duration-150"
                        role="menuitem"
                    >
                        <span className="flex items-center justify-center text-gray-600 dark:text-gray-300">
                            <Groups2RoundedIcon fontSize="small"/>
                        </span>
                        <p className="text-gray-900 dark:text-white text-[12px]">Join {group_name}</p>
                    </button>
                    
                    <button 
                        className="w-full flex items-center justify-start gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-dark800 transition-colors duration-150"
                        role="menuitem"
                    >
                        <span className="flex items-center justify-center text-gray-600 dark:text-gray-300">
                            <PersonAddRoundedIcon fontSize="small"/>
                        </span>
                        <p className="text-gray-900 dark:text-white text-[12px]">Follow {author}</p>
                    </button>
                    
                    <button 
                        className="w-full flex items-center justify-start gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-dark800 transition-colors duration-150"
                        role="menuitem"
                    >
                        <span className="flex items-center justify-center text-gray-600 dark:text-gray-300">
                            <PersonRemoveRoundedIcon fontSize="small"/>
                        </span>
                        <p className="text-gray-900 dark:text-white text-[12px]">Unfollow {author}</p>
                    </button>
                    
                    <button 
                        className="w-full flex items-center justify-start gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-dark800 transition-colors duration-150"
                        role="menuitem"
                    >
                        <span className="flex items-center justify-center text-gray-600 dark:text-gray-300">
                            <ControlPointRoundedIcon fontSize="small"/>
                        </span>
                        <p className="text-gray-900 dark:text-white text-[12px]">Interested</p>
                    </button>
                    
                    <button 
                        className="w-full flex items-center justify-start gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-dark800 transition-colors duration-150"
                        role="menuitem"
                    >
                        <span className="flex items-center justify-center text-gray-600 dark:text-gray-300">
                            <RemoveCircleOutlineRoundedIcon fontSize="small"/>
                        </span>
                        <p className="text-gray-900 dark:text-white text-[12px]">Uninterested</p>
                    </button>
                    
                    <div className="w-full h-px bg-gray-200 dark:bg-gray-700 my-1"></div>
                    
                    <button 
                        className="w-full flex items-center justify-start gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-dark800 transition-colors duration-150 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
                        role="menuitem"
                    >
                        <span className="flex items-center justify-center">
                            <ReportGmailerrorredRoundedIcon fontSize="small"/>
                        </span>
                        <p className="text-[12px]">Report</p>
                    </button>
                </div>
            </div>
        </div>
    )
}