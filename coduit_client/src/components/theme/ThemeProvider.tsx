// src/components/theme/ThemeProvider.tsx
"use client";

import { ThemeProvider } from "next-themes";

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"           // ← CHANGED: Now defaults to system
      enableSystem={true}             // ← CHANGED: Enables system detection
      storageKey="coduit-theme"       // ← Still saves manual choice forever
      disableTransitionOnChange       // ← No flash on load
    >
      {children}
    </ThemeProvider>
  );
}