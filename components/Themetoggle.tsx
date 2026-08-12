"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="overflow-hidden opacity-85 mr-2 bg-muted dark:bg-card border border-gray-300 dark:border-card-border cursor-pointer  p-2 rounded-full transition-colors hover:scale-105 active:scale-95 dark:text-muted"
    >
      {theme === "dark" ? (
        <IoSunny size={18} className="active:animate-theme-toggle-rotate" />
      ) : (
        <IoMoon size={18} className="active:animate-theme-toggle-rotate" />
      )}
    </button>
  );
}
