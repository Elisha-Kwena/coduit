import { createContext,useContext,useState } from "react";

interface DropdownContextType {
    openDropdownId :string |null;
    setOpenDropdownId:(id:string|null) =>void;
}

const DropDownContext = createContext <DropdownContextType | undefined>(undefined);

export function DropdownProvider({children}:{children:React.ReactNode}){
    const [openDropdownId, setOpenDropdownId] = useState<string | null>(null)

    return (
        <DropDownContext.Provider value={{openDropdownId,setOpenDropdownId}}>
            {children}
        </DropDownContext.Provider>
    )
}

export function useDropdown() {
  const context = useContext(DropDownContext);
  if (!context) {
    throw new Error('useDropdown must be used within a DropdownProvider');
  }
  return context;
}