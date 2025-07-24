import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { HeroSection } from "@/components/HeroSection";
import { ContentSection } from "@/components/ContentSection";

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-background theme-transition">
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      <HeroSection />
      <ContentSection />
    </div>
  );
};

export default Index;