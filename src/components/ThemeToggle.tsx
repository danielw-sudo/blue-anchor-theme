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
      className="theme-transition fixed top-6 right-6 z-50 bg-card/80 backdrop-blur-sm border-border/50 hover:bg-accent hover:scale-105 shadow-lg"
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