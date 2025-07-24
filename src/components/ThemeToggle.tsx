import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => {
  return (
    <Button
      onClick={onToggle}
      variant="outline"
      size="lg"
      className="theme-transition bg-card/80 backdrop-blur-sm border-border/50 hover:bg-accent hover:text-accent-foreground hover:scale-105 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background pulse-glow"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Sun className="h-5 w-5 mr-2" />
      ) : (
        <Moon className="h-5 w-5 mr-2" />
      )}
      {isDark ? "Light" : "Dark"}
    </Button>
  );
};