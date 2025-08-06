import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Twitter, Linkedin, Github, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "AI Tools", href: "#tools" },
        { name: "Categories", href: "#categories" },
        { name: "Featured", href: "#featured" },
        { name: "New Releases", href: "#new" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Tutorials", href: "#tutorials" },
        { name: "Blog", href: "#blog" },
        { name: "Documentation", href: "#docs" },
        { name: "API", href: "#api" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Contact", href: "#contact" },
        { name: "Careers", href: "#careers" },
        { name: "Press", href: "#press" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Cookie Policy", href: "#cookies" },
        { name: "GDPR", href: "#gdpr" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/20 theme-transition">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-accent mb-4">AI Tools Hub</h3>
              <p className="text-secondary leading-relaxed">
                Your comprehensive directory for discovering and exploring the best AI tools. 
                Stay ahead of the curve with curated collections and expert insights.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Stay Updated</h4>
              <p className="text-sm text-secondary mb-4">
                Get weekly updates on new AI tools and tutorials.
              </p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-background/50 border-border/50 focus:ring-2 focus:ring-accent focus:border-accent"
                />
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-secondary hover:text-accent transition-colors duration-200 text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-md"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8 bg-border/50" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-secondary">
            <span>© 2023 AI Tools Hub. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for the AI community.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-secondary hover:text-accent transition-colors duration-200 p-2 rounded-md hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};