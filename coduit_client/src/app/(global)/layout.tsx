import { ReactNode } from 'react';
import { SidebarProvider, useSidebar } from '@/context/SidebarContext';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
interface FeedsLayoutProps {
  children: ReactNode;
}

export default function FeedsLayout({ children }: FeedsLayoutProps) {
  return (
    <div className="max-h-screen flex items-center justify-center">
      <SidebarProvider>
        <div className="w-full">
          <Navbar/>
<div className="flex flex-1 overflow-hidden relative">
          {/* Sidebar – fixed width on desktop, slides in/out on mobile */}
          <Sidebar /> {/* already has w-72, fixed, left-0 or -left-72, z-50 */}

          {/* Main content – takes remaining space */}
          <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-black">
            {children}
          </main>

          {/* Optional: dark backdrop on mobile when sidebar is open */}
          {/* {isOpen && (
            <div
              onClick={() => useSidebar().toggleSidebar()}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
          )} */}
        </div>
        </div>
      </SidebarProvider>
      
    </div>
  );
}
