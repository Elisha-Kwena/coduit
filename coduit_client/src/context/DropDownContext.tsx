import { createContext, useContext, useState, useRef, useEffect } from "react";

interface DropdownContextType {
    openDropdownId: string | null;
    setOpenDropdownId: (id: string | null) => void;
    registerDropdown: (id: string, element: HTMLElement) => void;
    unregisterDropdown: (id: string) => void;
}

const DropDownContext = createContext<DropdownContextType | undefined>(undefined);

export function DropdownProvider({ children }: { children: React.ReactNode }) {
    const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
    const dropdownRefs = useRef<Map<string, HTMLElement>>(new Map());

    // Function to register a dropdown element
    const registerDropdown = (id: string, element: HTMLElement) => {
        dropdownRefs.current.set(id, element);
    };

    // Function to unregister a dropdown element
    const unregisterDropdown = (id: string) => {
        dropdownRefs.current.delete(id);
    };

    // Handle click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!openDropdownId) return;

            const dropdownElement = dropdownRefs.current.get(openDropdownId);
            
            // If clicked outside the open dropdown, close it
            if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
                setOpenDropdownId(null);
            }
        };

        // Handle Escape key press
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && openDropdownId) {
                setOpenDropdownId(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [openDropdownId]);

    return (
        <DropDownContext.Provider value={{ 
            openDropdownId, 
            setOpenDropdownId,
            registerDropdown,
            unregisterDropdown
        }}>
            {children}
        </DropDownContext.Provider>
    );
}

export function useDropdown() {
    const context = useContext(DropDownContext);
    if (!context) {
        throw new Error('useDropdown must be used within a DropdownProvider');
    }
    return context;
}