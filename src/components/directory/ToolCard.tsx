import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star } from "lucide-react";
import { Link } from "react-router-dom";

export interface ToolData {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  pricing: "Free" | "Freemium" | "Paid";
  rating?: number;
  featured?: boolean;
}

interface ToolCardProps {
  tool: ToolData;
  className?: string;
}

export const ToolCard = ({ tool, className = "" }: ToolCardProps) => {
  return (
    <Card role="article" tabIndex={0} className={`glass-light backdrop-blur-sm hover:glass-enhanced card-interactive group cursor-pointer rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent text-2xl font-bold">
              {tool.icon}
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                {tool.name}
              </CardTitle>
              {tool.rating && (
                <div className="flex items-center space-x-1 mt-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-muted-foreground">{tool.rating}</span>
                </div>
              )}
            </div>
          </div>
          {tool.featured && (
            <Badge variant="secondary">
              Featured
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="pb-4">
        <p className="text-secondary text-sm leading-relaxed line-clamp-3">
          {tool.description}
        </p>
        
        <div className="flex items-center justify-between mt-4">
          <Badge 
            variant="outline" 
            className={`text-xs ${
              tool.pricing === 'Free' 
                ? 'border-green-500/50 text-green-600 dark:text-green-400' 
                : tool.pricing === 'Freemium'
                ? 'border-blue-500/50 text-blue-600 dark:text-blue-400'
                : 'border-orange-500/50 text-orange-600 dark:text-orange-400'
            }`}
          >
            {tool.pricing}
          </Badge>
          <span className="text-xs text-muted-foreground">{tool.category}</span>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button 
          variant="outline" 
          className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-200 border-accent/20 hover:border-accent"
          asChild
        >
          <Link to={`/tools/${tool.id}`} aria-label={`Learn more about ${tool.name}`}>
            <ExternalLink className="w-4 h-4 mr-2" />
            Learn More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};