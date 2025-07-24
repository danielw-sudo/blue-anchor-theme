import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

interface HeaderProps {
  isDark: boolean;
  onToggle: () => void;
}

export const Header = ({ isDark, onToggle }: HeaderProps) => {
  const navItems = ["Features", "Pricing", "About", "Contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header backdrop-blur-md border-b border-border/20 theme-transition">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-accent hover:scale-105 theme-transition cursor-pointer">
              BlueWave
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Theme Toggle */}
          <ThemeToggle isDark={isDark} onToggle={onToggle} />
        </div>
      </div>
    </header>
  );
};