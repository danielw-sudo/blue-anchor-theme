import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, ExternalLink, Star } from "lucide-react";
import { Seo } from "@/components/seo/Seo";
import { useThemeSync } from "@/hooks/useThemeSync";
import { useTool } from "@/hooks/useTools";
import type { ToolData } from "@/types";

const ToolDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { isDark, toggle } = useThemeSync();

  const { 
    data: toolResponse, 
    isLoading, 
    error 
  } = useTool(id || '');

  const tool = toolResponse?.data;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header isDark={isDark} onToggle={toggle} />
        <main className="pt-20 px-6">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-8 w-32 mb-6" />
            <div className="space-y-6">
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-32 w-full rounded-lg" />
              <Skeleton className="h-24 w-full rounded-lg" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !tool) {
    return (
      <div className="min-h-screen bg-background">
        <Header isDark={isDark} onToggle={toggle} />
        <main className="pt-20 px-6">
          <div className="max-w-4xl mx-auto text-center py-16">
            <Alert className="max-w-md mx-auto">
              <AlertDescription>
                {error ? 'Failed to load tool details.' : 'Tool not found.'}
              </AlertDescription>
            </Alert>
            <Button asChild className="mt-6">
              <Link to="/tools">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Tools
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Seo 
        title={`${tool.name} | AI Tool Details`}
        description={tool.description}
        canonicalPath={`/tools/${id}`}
      />
      <Header isDark={isDark} onToggle={toggle} />
      
      <main className="pt-20" role="main" aria-labelledby="tool-title">
        {/* Breadcrumb */}
        <section className="py-6 px-6 border-b border-border/50">
          <div className="max-w-6xl mx-auto">
            <Link to="/tools" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tools
            </Link>
          </div>
        </section>

        {/* Hero Card Section */}
        <section className="py-8 px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border border-border/50">
              {/* Tool Header Card */}
              <div className="bg-gradient-to-br from-muted/30 to-muted/10 p-8">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-card rounded-2xl flex items-center justify-center text-4xl font-bold border border-border/20 shadow-sm">
                    {tool.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h1 id="tool-title" className="text-2xl md:text-3xl font-bold">{tool.name}</h1>
                      {tool.featured && (
                        <Badge className="bg-accent/10 text-accent border-accent/20">Featured</Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground text-lg mb-4">{tool.description}</p>
                    
                    {/* Stats Row */}
                    <div className="flex flex-wrap items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{tool.rating || '4.8'}</span>
                        <span className="text-muted-foreground">rating</span>
                      </div>
                      <Badge 
                        variant="outline"
                        className={
                          tool.pricing === 'Free' 
                            ? 'border-green-500/50 text-green-600 dark:text-green-400' 
                            : tool.pricing === 'Freemium'
                            ? 'border-blue-500/50 text-blue-600 dark:text-blue-400'
                            : 'border-orange-500/50 text-orange-600 dark:text-orange-400'
                        }
                      >
                        {tool.pricing}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-8 py-6 border-t border-border/50 bg-card">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Button size="lg" className="hover:scale-105 transition-transform">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Website
                    </Button>
                    <Button variant="outline" size="lg" aria-label="Add to favorites">
                      <Star className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {tool.category}
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Tool Details */}
        <section className="py-8 px-6">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>About {tool.name}</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p className="text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  This powerful AI tool is designed to enhance productivity and streamline workflows. 
                  It leverages advanced machine learning algorithms to provide intelligent automation 
                  and insights for modern businesses and developers.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ToolDetail;