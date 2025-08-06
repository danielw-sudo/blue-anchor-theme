import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { DirectorySection } from "@/components/directory/DirectorySection";
import { TutorialSection } from "@/components/sections/TutorialSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/CTASection";
import { 
  makingMoneyTools, 
  masteringTools, 
  contentCreationTools, 
  productivityTools, 
  lifestyleTools 
} from "@/data/toolsData";

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
      <Header isDark={isDark} onToggle={toggleTheme} />
      <main>
        <HeroSection />
        
        <DirectorySection
          title="Making Money with AI"
          description="Discover AI tools that can help you generate income, create content that converts, and grow your business revenue."
          tools={makingMoneyTools}
          className="bg-muted/20"
        />
        
        <DirectorySection
          title="Mastering AI Tools"
          description="Advanced AI assistants and platforms for complex problem-solving, research, and professional development."
          tools={masteringTools}
        />
        
        <DirectorySection
          title="AI Content & Art Creation"
          description="Creative AI tools for generating stunning visuals, videos, audio, and multimedia content."
          tools={contentCreationTools}
          className="bg-muted/20"
        />
        
        <DirectorySection
          title="Productivity Tools"
          description="AI-powered tools to streamline your workflow, enhance productivity, and automate daily tasks."
          tools={productivityTools}
        />
        
        <DirectorySection
          title="Lifestyle Tools"
          description="AI applications for health, wellness, education, and entertainment to enhance your daily life."
          tools={lifestyleTools}
          className="bg-muted/20"
        />
        
        <TutorialSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;