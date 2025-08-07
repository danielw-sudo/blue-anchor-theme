import { useState } from "react";
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
  const [isDark, setIsDark] = useState(false);
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <Navigate to="/tools" replace />;
  }

  const tool = getToolDetails(id);

  if (!tool) {
    return (
      <div className="min-h-screen bg-background">
        <Header isDark={isDark} onToggle={() => setIsDark(!isDark)} />
        <main className="pt-20 px-6">
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
      <Header isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="py-6 px-6 border-b border-border/50">
          <div className="max-w-6xl mx-auto">
            <Link to="/tools" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tools
            </Link>
          </div>
        </section>

        {/* Tool Header */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Tool Info */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-3xl font-bold">
                    {tool.icon}
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold">{tool.name}</h1>
                    <div className="flex items-center gap-4 mt-2">
                      {tool.rating && (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{tool.rating}</span>
                          <span className="text-muted-foreground text-sm">(234 reviews)</span>
                        </div>
                      )}
                      <Badge variant="outline">{tool.category}</Badge>
                      {tool.featured && (
                        <Badge variant="secondary">Featured</Badge>
                      )}
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-secondary leading-relaxed mb-6">
                  {tool.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button size="lg" className="hover:scale-105 transition-transform">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Website
                  </Button>
                  <Button variant="outline" size="lg">
                    <Star className="w-4 h-4 mr-2" />
                    Add to Favorites
                  </Button>
                </div>
              </div>

              {/* Quick Stats */}
              <Card className="w-full lg:w-80">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Pricing
                    </span>
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
                  
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Company Size
                    </span>
                    <span className="text-sm">{tool.company.employees}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Founded
                    </span>
                    <span className="text-sm">{tool.company.founded}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      Category
                    </span>
                    <span className="text-sm">{tool.category}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="py-12 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tool.screenshots.map((screenshot, index) => (
                <div key={index} className="rounded-lg overflow-hidden bg-muted">
                  <img 
                    src={screenshot} 
                    alt={`${tool.name} screenshot ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features & Details */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tool.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Use Cases */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Use Cases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tool.useCases.map((useCase, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Pros & Cons */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <Award className="w-5 h-5" />
                    Pros
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tool.pros.map((pro, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                    <Award className="w-5 h-5" />
                    Cons
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tool.cons.map((con, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-12 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tool.pricingPlans.plans.map((plan, index) => (
                <Card key={index} className={`relative ${index === 1 ? 'border-accent scale-105' : ''}`}>
                  {index === 1 && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-accent text-accent-foreground">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle>{plan.name}</CardTitle>
                    <div className="text-3xl font-bold">{plan.price}<span className="text-lg text-muted-foreground">/month</span></div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
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