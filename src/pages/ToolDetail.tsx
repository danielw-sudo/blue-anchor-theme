import { } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  ExternalLink, 
  Star, 
  Users, 
  Calendar,
  Tag,
  DollarSign,
  Shield,
  Zap,
  Award
} from "lucide-react";
import { 
  makingMoneyTools, 
  masteringTools, 
  contentCreationTools, 
  productivityTools, 
  lifestyleTools 
} from "@/data/toolsData";
import { useThemeSync } from "@/hooks/useThemeSync";
import { Seo } from "@/components/seo/Seo";

const allTools = [
  ...makingMoneyTools,
  ...masteringTools,
  ...contentCreationTools,
  ...productivityTools,
  ...lifestyleTools
];

// Mock detailed data for tools
const getToolDetails = (toolId: string) => {
  const baseTool = allTools.find(tool => tool.id === toolId);
  if (!baseTool) return null;

  return {
    ...baseTool,
    originalPricing: baseTool.pricing, // Keep original pricing for display
    website: `https://${baseTool.name.toLowerCase().replace(/\s+/g, '')}.com`,
    screenshots: [
      "/api/placeholder/800/450",
      "/api/placeholder/800/450",
      "/api/placeholder/800/450"
    ],
    features: [
      "Advanced AI algorithms",
      "Real-time collaboration",
      "Cloud-based processing",
      "API integration",
      "Custom workflows"
    ],
    useCases: [
      "Content marketing",
      "Social media management", 
      "Email campaigns",
      "SEO optimization"
    ],
    pros: [
      "Easy to use interface",
      "Powerful AI capabilities",
      "Great customer support",
      "Regular updates"
    ],
    cons: [
      "Learning curve for beginners",
      "Premium features are expensive",
      "Limited free tier"
    ],
    pricingPlans: {
      free: baseTool.pricing === "Free" || baseTool.pricing === "Freemium",
      plans: [
        { name: "Free", price: "$0", features: ["Basic features", "5 projects", "Community support"] },
        { name: "Pro", price: "$29", features: ["All features", "Unlimited projects", "Priority support"] },
        { name: "Enterprise", price: "$99", features: ["Custom features", "Team collaboration", "Dedicated support"] }
      ]
    },
    company: {
      founded: "2020",
      employees: "50-200",
      headquarters: "San Francisco, CA"
    }
  };
};

const ToolDetail = () => {
  const { isDark, toggle } = useThemeSync();
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <Navigate to="/tools" replace />;
  }

  const tool = getToolDetails(id);

  if (!tool) {
    return (
      <div className="min-h-screen bg-background">
        <Header isDark={isDark} onToggle={toggle} />
        <main className="pt-20 px-6" role="main">
          <div className="max-w-4xl mx-auto text-center py-16">
            <h1 className="text-3xl font-bold mb-4">Tool Not Found</h1>
            <p className="text-muted-foreground mb-6">The tool you're looking for doesn't exist.</p>
            <Link to="/tools">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Tools
              </Button>
            </Link>
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
                      {tool.rating && (
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium">1.2k</span>
                          <span className="text-muted-foreground">users</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{tool.rating || '4.8'}</span>
                        <span className="text-muted-foreground">rating</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{tool.company.founded}</span>
                      </div>
                      <Badge 
                        variant="outline"
                        className={
                          tool.originalPricing === 'Free' 
                            ? 'border-green-500/50 text-green-600 dark:text-green-400' 
                            : tool.originalPricing === 'Freemium'
                            ? 'border-blue-500/50 text-blue-600 dark:text-blue-400'
                            : 'border-orange-500/50 text-orange-600 dark:text-orange-400'
                        }
                      >
                        {tool.originalPricing}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-8 py-6 border-t border-border/50 bg-card">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Button size="lg" className="hover:scale-105 transition-transform" asChild>
                      <a href={tool.website} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${tool.name} website`}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Website
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" aria-label="Add to favorites">
                      <Star className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    <Tag className="w-3 h-3 mr-1" />
                    {tool.category}
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Project Description */}
        <section className="py-8 px-6">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Project Description
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Updated: {tool.company.founded}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <h3 className="text-xl font-semibold mb-4">What It Does</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {tool.name} is a powerful AI tool designed to enhance productivity and streamline workflows. 
                  It leverages advanced machine learning algorithms to provide intelligent automation and insights 
                  for modern businesses and developers.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Why It's Cool</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {tool.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mb-4 mt-8">How to Get Started</h3>
                <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
                  <code className="text-sm">
                    1. Visit the official website<br/>
                    2. Create your free account<br/>
                    3. Follow the setup guide<br/>
                    4. Start building with {tool.name}
                  </code>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features & Analysis */}
        <section className="py-8 px-6 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Zap className="w-5 h-5" />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {tool.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 py-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Use Cases */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="w-5 h-5" />
                    Best For
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {tool.useCases.map((useCase, index) => (
                      <div key={index} className="flex items-start gap-3 py-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pros & Cons */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <Card className="border-green-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-green-600 dark:text-green-400">
                    <Award className="w-5 h-5" />
                    Strengths
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {tool.pros.map((pro, index) => (
                      <div key={index} className="flex items-start gap-3 py-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{pro}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-orange-600 dark:text-orange-400">
                    <Shield className="w-5 h-5" />
                    Considerations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {tool.cons.map((con, index) => (
                      <div key={index} className="flex items-start gap-3 py-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{con}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-8 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tool.pricingPlans.plans.map((plan, index) => (
                <Card key={index} className={`relative ${index === 1 ? 'border-accent ring-2 ring-accent/20' : 'border-border/50'}`}>
                  {index === 1 && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-accent text-accent-foreground shadow-sm">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    <div className="text-2xl font-bold">
                      {plan.price}
                      <span className="text-sm text-muted-foreground font-normal">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 text-sm">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full" 
                      variant={index === 1 ? "default" : "outline"}
                      size="sm"
                    >
                      {plan.price === "$0" ? "Get Started" : "Choose Plan"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ToolDetail;