import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ToolCard } from "@/components/directory/ToolCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import { 
  makingMoneyTools, 
  masteringTools, 
  contentCreationTools, 
  productivityTools, 
  lifestyleTools 
} from "@/data/toolsData";
import { Seo } from "@/components/seo/Seo";
import { useThemeSync } from "@/hooks/useThemeSync";

const allTools = [
  ...makingMoneyTools,
  ...masteringTools,
  ...contentCreationTools,
  ...productivityTools,
  ...lifestyleTools
];

const categories = [
  "All",
  "Copywriting",
  "Content Creation",
  "SEO",
  "Advertising",
  "AI Assistant",
  "Research",
  "Development",
  "Image Generation",
  "Video",
  "Audio",
  "Productivity",
  "Writing",
  "Meetings",
  "Scheduling",
  "Health",
  "Wellness",
  "Education",
  "Entertainment"
];

const ToolsList = () => {
  const { isDark, toggle } = useThemeSync();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPricing, setSelectedPricing] = useState("All");

  const filteredTools = allTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;
    const matchesPricing = selectedPricing === "All" || tool.pricing === selectedPricing;
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  return (
    <>
      <Seo 
        title="AI Tools Directory | Browse Top AI Tools"
        description="Explore AI tools for productivity, content creation, SEO, and more. Filter and discover the best tools for your workflow."
        canonicalPath="/tools"
      />
      <div className="min-h-screen bg-background">
      <Header isDark={isDark} onToggle={toggle} />
      
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 px-6 border-b border-border/50">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              AI Tools Directory
            </h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-100">
              Discover and explore the most powerful AI tools to transform your workflow, boost productivity, and unlock new possibilities.
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search tools..."
                  aria-label="Search tools"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2 items-center">
                <Filter className="w-4 h-4 text-muted-foreground" />
                
                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  aria-label="Filter by category"
                  className="px-3 py-2 rounded-md border border-input bg-background text-sm"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                {/* Pricing Filter */}
                <select
                  value={selectedPricing}
                  onChange={(e) => setSelectedPricing(e.target.value)}
                  aria-label="Filter by pricing"
                  className="px-3 py-2 rounded-md border border-input bg-background text-sm"
                >
                  <option value="All">All Pricing</option>
                  <option value="Free">Free</option>
                  <option value="Freemium">Freemium</option>
                  <option value="Paid">Paid</option>
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-muted-foreground">
              Showing {filteredTools.length} of {allTools.length} tools
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            {filteredTools.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredTools.map((tool, index) => (
                  <Link key={tool.id} to={`/tools/${tool.id}`}>
                    <div 
                      className="animate-fade-in-up opacity-0"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <ToolCard tool={tool} />
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold mb-4">No tools found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or filters
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                    setSelectedPricing("All");
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
};

export default ToolsList;