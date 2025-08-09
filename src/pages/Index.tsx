import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { DirectorySection } from "@/components/directory/DirectorySection";
import { TutorialSection } from "@/components/sections/TutorialSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/CTASection";
import { Skeleton } from "@/components/ui/skeleton";
import { useThemeSync } from "@/hooks/useThemeSync";
import { useToolsByCategory } from "@/hooks/useTools";
import type { ToolData } from "@/types";

// Helper component for loading state
const DirectorySectionSkeleton = ({ title, className }: { title: string; className?: string }) => (
  <section className={`py-16 px-6 ${className}`}>
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
        <Skeleton className="h-6 w-96 mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-64 w-full rounded-lg" />
        ))}
      </div>
    </div>
  </section>
);

const Index = () => {
  const { isDark, toggle } = useThemeSync();

  // Fetch featured tools from different categories
  const { data: makingMoneyResponse, isLoading: makingMoneyLoading } = useToolsByCategory('making-money');
  const { data: masteringResponse, isLoading: masteringLoading } = useToolsByCategory('mastering');
  const { data: contentResponse, isLoading: contentLoading } = useToolsByCategory('content-creation');
  const { data: productivityResponse, isLoading: productivityLoading } = useToolsByCategory('productivity');
  const { data: lifestyleResponse, isLoading: lifestyleLoading } = useToolsByCategory('lifestyle');

  const makingMoneyTools = makingMoneyResponse?.data || [];
  const masteringTools = masteringResponse?.data || [];
  const contentCreationTools = contentResponse?.data || [];
  const productivityTools = productivityResponse?.data || [];
  const lifestyleTools = lifestyleResponse?.data || [];

  return (
    <div className="min-h-screen bg-background theme-transition">
      <Header isDark={isDark} onToggle={toggle} />
      <main>
        <HeroSection />
        
        {makingMoneyLoading ? (
          <DirectorySectionSkeleton title="Making Money with AI" className="bg-muted/20" />
        ) : (
          <DirectorySection
            title="Making Money with AI"
            description="Discover AI tools that can help you generate income, create content that converts, and grow your business revenue."
            tools={makingMoneyTools}
            className="bg-muted/20"
          />
        )}
        
        {masteringLoading ? (
          <DirectorySectionSkeleton title="Mastering AI Tools" />
        ) : (
          <DirectorySection
            title="Mastering AI Tools"
            description="Advanced AI assistants and platforms for complex problem-solving, research, and professional development."
            tools={masteringTools}
          />
        )}
        
        {contentLoading ? (
          <DirectorySectionSkeleton title="AI Content & Art Creation" className="bg-muted/20" />
        ) : (
          <DirectorySection
            title="AI Content & Art Creation"
            description="Creative AI tools for generating stunning visuals, videos, audio, and multimedia content."
            tools={contentCreationTools}
            className="bg-muted/20"
          />
        )}
        
        {productivityLoading ? (
          <DirectorySectionSkeleton title="Productivity Tools" />
        ) : (
          <DirectorySection
            title="Productivity Tools"
            description="AI-powered tools to streamline your workflow, enhance productivity, and automate daily tasks."
            tools={productivityTools}
          />
        )}
        
        {lifestyleLoading ? (
          <DirectorySectionSkeleton title="Lifestyle Tools" className="bg-muted/20" />
        ) : (
          <DirectorySection
            title="Lifestyle Tools"
            description="AI applications for health, wellness, education, and entertainment to enhance your daily life."
            tools={lifestyleTools}
            className="bg-muted/20"
          />
        )}
        
        <TutorialSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;