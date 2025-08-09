import { Seo } from "@/components/seo/Seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ToolCard } from "@/components/directory/ToolCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Search, Filter } from "lucide-react";
import { useThemeSync } from "@/hooks/useThemeSync";
import { useTools, useCategories } from "@/hooks/useTools";
import { useUrlString } from "@/hooks/useUrlState";
import type { ToolData } from "@/types";

const ToolsList = () => {
  const { isDark, toggle } = useThemeSync();
  
  // URL-based state management
  const [searchTerm, setSearchTerm] = useUrlString("q");
  const [selectedCategory, setSelectedCategory] = useUrlString("category", "all");
  const [selectedPricing, setSelectedPricing] = useUrlString("pricing", "all");

  // Fetch data with React Query
  const { 
    data: toolsResponse, 
    isLoading: toolsLoading, 
    error: toolsError 
  } = useTools({
    query: searchTerm || undefined,
    category: selectedCategory !== "all" ? selectedCategory : undefined,
    pricing: selectedPricing !== "all" ? selectedPricing : undefined,
  });

  const { 
    data: categoriesResponse, 
    isLoading: categoriesLoading 
  } = useCategories();

  const tools = toolsResponse?.data || [];
  const categories = categoriesResponse?.data || [];

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedPricing("all");
  };

  const isLoading = toolsLoading || categoriesLoading;
  const hasError = toolsError;

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
                <div className="flex flex-wrap gap-4 items-center">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  
                  {/* Category Filter */}
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-48" aria-label="Filter by category">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map(category => (
                        <SelectItem key={category.id} value={category.name}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {/* Pricing Filter */}
                  <Select value={selectedPricing} onValueChange={setSelectedPricing}>
                    <SelectTrigger className="w-40" aria-label="Filter by pricing">
                      <SelectValue placeholder="All Pricing" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Pricing</SelectItem>
                      <SelectItem value="Free">Free</SelectItem>
                      <SelectItem value="Freemium">Freemium</SelectItem>
                      <SelectItem value="Paid">Paid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Results Count */}
              {!isLoading && (
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Showing {tools.length} tools
                    {(searchTerm || selectedCategory !== "all" || selectedPricing !== "all") && (
                      <Badge variant="secondary" className="ml-2">
                        Filtered
                      </Badge>
                    )}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Tools Grid */}
          <section className="py-12 px-6">
            <div className="max-w-7xl mx-auto">
              {/* Loading State */}
              {isLoading && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="space-y-4">
                      <Skeleton className="h-48 w-full rounded-lg" />
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                    </div>
                  ))}
                </div>
              )}

              {/* Error State */}
              {hasError && (
                <Alert className="max-w-2xl mx-auto">
                  <AlertDescription>
                    Failed to load tools. Please try again later.
                  </AlertDescription>
                </Alert>
              )}

              {/* Tools Grid */}
              {!isLoading && !hasError && tools.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {tools.map((tool, index) => (
                    <div
                      key={tool.id}
                      className="animate-fade-in-up opacity-0"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <ToolCard tool={tool} />
                    </div>
                  ))}
                </div>
              )}

              {/* No Results Message */}
              {!isLoading && !hasError && tools.length === 0 && (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-semibold mb-4">No tools found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search terms or filters
                  </p>
                  <Button onClick={clearFilters} variant="outline">
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