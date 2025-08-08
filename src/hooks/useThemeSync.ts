import { useEffect, useState } from "react";

// Simple hook to synchronize a local dark mode state with the document root
// Ensures pages respect the global theme across route changes
export function useThemeSync() {
  const [isDark, setIsDark] = useState(false);

  // Initialize from current document theme
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  // Sync the root theme class with local state
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [isDark]);

  const toggle = () => setIsDark((prev) => !prev);

  return { isDark, setIsDark, toggle } as const;
}
