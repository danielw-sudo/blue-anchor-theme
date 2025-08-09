import { ToolCard } from "./ToolCard";
import type { ToolData } from "@/types";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface DirectorySectionProps {
  title: string;
  description: string;
  tools: ToolData[];
  viewAllHref?: string;
  className?: string;
}

export const DirectorySection = ({ 
  title, 
  description, 
  tools, 
  viewAllHref = "#",
  className = "" 
}: DirectorySectionProps) => {
  return (
    <section className={`py-16 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            {title}
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-100">
            {description}
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {tools.map((tool, index) => (
            <div 
              key={tool.id} 
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center animate-fade-in-up opacity-0 animate-delay-500">
          <Button 
            variant="outline" 
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-3 hover:scale-105 theme-transition group"
          >
            View All {title}
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};