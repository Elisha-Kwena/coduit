// src/components/theme/ThemeToggle.tsx
"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/* ───────────────────────────────
   1. Manual Toggle (Light ↔ Dark only)
   ─────────────────────────────── */
export function ManualThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9 animate-pulse rounded-full bg-gray-200 dark:bg-black" />;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`p-3 rounded-xl transition-all duration-300 flex items-center justify-center
        ${isDark 
          ? "bg-gray-900 text-purple-400 hover:bg-gray-800 shadow-lg" 
          : "bg-white text-yellow-500 hover:bg-gray-100 shadow-lg"
        }`}
      aria-label="Toggle light/dark mode"
    >
      {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );
}

/* ───────────────────────────────
   2. System Theme Button (sets to system)
   ─────────────────────────────── */
export function SystemThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9 animate-pulse rounded-full bg-gray-200 dark:bg-gray-800" />;

  const isSystem = theme === "system";

  return (
    <button
      onClick={() => setTheme("system")}
      className={`p-3 rounded-xl transition-all duration-300 flex items-center justify-center
        ${isSystem
          ? "bg-blue-600 text-white shadow-lg ring-4 ring-blue-600/30"
          : "bg-gray-200 dark:bg-black text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
        }`}
      aria-label="Use system theme"
      title="Follow system preference"
    >
      <Monitor className="w-5 h-5" />
    </button>
  );
}

/* ───────────────────────────────
   Optional: Combined version (if you want both in one component)
   ─────────────────────────────── */
export default function ThemeToggle() {
  return (
    <div className="flex items-center gap-3 bg-gray-200 dark:bg-gray-800 p-1.5 rounded-2xl shadow-inner">
      <ManualThemeToggle />
      <SystemThemeButton />
    </div>
  );
}