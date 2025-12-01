import { ReactNode } from 'react';

interface MailLayoutProps {
  children: ReactNode;
}

export default function MailLayout({ children }: MailLayoutProps) {
  return (
    <div className="min-h-scree flex items-center justify-center">
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}
