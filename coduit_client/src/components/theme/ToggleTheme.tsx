// src/components/theme/ThemeToggle.tsx
"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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

