import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Input } from "@/components/ui/input";
import { Search, Menu, X, Twitter, Linkedin } from "lucide-react";

interface HeaderProps {
  isDark: boolean;
  onToggle: () => void;
}

export const Header = ({ isDark, onToggle }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Tools", href: "#tools" },
    { name: "Tutorials", href: "#tutorials" },
    { name: "Blog", href: "#blog" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header backdrop-blur-md border-b border-border/20 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl font-bold text-accent hover:scale-105 theme-transition cursor-pointer">
              AI Tools Hub
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center relative max-w-md w-full mx-8">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search AI tools..."
              className="pl-10 bg-card/50 backdrop-blur-sm border-border/50 focus:ring-2 focus:ring-accent focus:border-accent"
            />
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Links */}
            <div className="flex items-center space-x-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-accent transition-colors duration-200 p-2 rounded-md hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* Theme Toggle */}
            <ThemeToggle isDark={isDark} onToggle={onToggle} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle isDark={isDark} onToggle={onToggle} />
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/20 py-4 space-y-4 glass-light backdrop-blur-md">
            {/* Mobile Search */}
            <div className="relative px-4">
              <Search className="absolute left-7 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search AI tools..."
                className="pl-10 bg-card/50 backdrop-blur-sm border-border/50 focus:ring-2 focus:ring-accent focus:border-accent w-full"
              />
            </div>

            {/* Mobile Navigation */}
            <nav className="px-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-foreground hover:text-accent transition-colors duration-200 font-medium py-2 px-3 rounded-md hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Mobile Social Links */}
            <div className="px-4 flex items-center space-x-4 pt-2 border-t border-border/20">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-accent transition-colors duration-200 p-2 rounded-md hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};