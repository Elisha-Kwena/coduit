"use client"

import { useEffect } from 'react';
import {createContext,ReactNode,useContext,useState} from 'react'

interface SidebarContextProps{
    isOpen:boolean;
    toggleSidebar:() => void
}

const SidebarContext = createContext<SidebarContextProps>({
    isOpen:true,
    toggleSidebar:() => {}
})

interface SidebarProviderProps {
  children: ReactNode;
}

export function SidebarProvider({children}:SidebarProviderProps){
    const [isOpen, setIsOpen] = useState<boolean>(true)


    

    // Set initial value based on screen size (only runs on client)
    useEffect(() => {
      const checkScreenSize = () => {
        setIsOpen(window.innerWidth >= 768); // md breakpoint in Tailwind
      };
    
      // Set initial value
      checkScreenSize();
    
      // Update on resize (optional but nice for responsiveness)
      window.addEventListener('resize', checkScreenSize);
    
      return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    const toggleSidebar = () => {
        setIsOpen((prev ) => !prev)
        console.log("sidebar closed")
    }

    return (
        <SidebarContext.Provider value={{isOpen, toggleSidebar}}>
            {children}
        </SidebarContext.Provider>
    )
}

export function useSidebar(): SidebarContextProps {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}