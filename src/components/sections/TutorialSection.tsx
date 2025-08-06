import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Users, ExternalLink } from "lucide-react";

interface TutorialData {
  id: string;
  title: string;
  description: string;
  type: "Video" | "Article" | "Course";
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  thumbnail: string;
  author: string;
  views?: string;
}

interface TutorialSectionProps {
  className?: string;
}

const tutorialData: TutorialData[] = [
  {
    id: "1",
    title: "Getting Started with ChatGPT for Business",
    description: "Learn how to leverage ChatGPT to streamline your business operations and improve productivity.",
    type: "Video",
    duration: "15 min",
    difficulty: "Beginner",
    thumbnail: "🎬",
    author: "AI Expert",
    views: "12.5K"
  },
  {
    id: "2",
    title: "Advanced Prompt Engineering Techniques",
    description: "Master the art of crafting effective prompts to get better results from AI language models.",
    type: "Article",
    duration: "8 min read",
    difficulty: "Intermediate",
    thumbnail: "📝",
    author: "Tech Writer",
    views: "8.2K"
  },
  {
    id: "3",
    title: "Building AI-Powered Workflows",
    description: "Complete course on integrating AI tools into your daily workflow for maximum efficiency.",
    type: "Course",
    duration: "2.5 hours",
    difficulty: "Advanced",
    thumbnail: "🎓",
    author: "AI Specialist",
    views: "15.8K"
  },
  {
    id: "4",
    title: "AI Art Generation Masterclass",
    description: "Create stunning visuals using AI art generators like Midjourney, DALL-E, and Stable Diffusion.",
    type: "Video",
    duration: "25 min",
    difficulty: "Intermediate",
    thumbnail: "🎨",
    author: "Creative Director",
    views: "20.1K"
  }
];

const TutorialCard = ({ tutorial }: { tutorial: TutorialData }) => (
  <Card className="glass-light backdrop-blur-sm hover:glass-enhanced group hover:scale-105 theme-transition cursor-pointer">
    <CardHeader className="pb-4">
      <div className="flex items-center justify-between mb-3">
        <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center text-accent text-2xl">
          {tutorial.thumbnail}
        </div>
        <div className="flex items-center space-x-2">
          {tutorial.type === "Video" && <Play className="w-4 h-4 text-accent" />}
          <Badge variant="outline" className="text-xs border-accent/20 text-accent">
            {tutorial.type}
          </Badge>
        </div>
      </div>
      
      <CardTitle className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
        {tutorial.title}
      </CardTitle>
    </CardHeader>

    <CardContent className="pb-4">
      <p className="text-secondary text-sm leading-relaxed line-clamp-3 mb-4">
        {tutorial.description}
      </p>
      
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>{tutorial.duration}</span>
          </div>
          {tutorial.views && (
            <div className="flex items-center space-x-1">
              <Users className="w-3 h-3" />
              <span>{tutorial.views}</span>
            </div>
          )}
        </div>
        <Badge 
          variant="outline" 
          className={`text-xs ${
            tutorial.difficulty === 'Beginner' 
              ? 'border-green-500/50 text-green-600 dark:text-green-400' 
              : tutorial.difficulty === 'Intermediate'
              ? 'border-yellow-500/50 text-yellow-600 dark:text-yellow-400'
              : 'border-red-500/50 text-red-600 dark:text-red-400'
          }`}
        >
          {tutorial.difficulty}
        </Badge>
      </div>
      
      <div className="mt-3 pt-3 border-t border-border/50">
        <span className="text-xs text-muted-foreground">by {tutorial.author}</span>
      </div>
    </CardContent>

    <CardFooter className="pt-0">
      <Button 
        variant="outline" 
        className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-200 border-accent/20 hover:border-accent"
      >
        <ExternalLink className="w-4 h-4 mr-2" />
        {tutorial.type === "Video" ? "Watch Now" : tutorial.type === "Article" ? "Read Article" : "Start Course"}
      </Button>
    </CardFooter>
  </Card>
);

export const TutorialSection = ({ className = "" }: TutorialSectionProps) => {
  return (
    <section className={`py-16 px-6 bg-muted/30 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4 animate-fade-in-up">
            Learning Resources
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-100">
            Master AI tools with our comprehensive tutorials, guides, and courses. 
            From beginner basics to advanced techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {tutorialData.map((tutorial, index) => (
            <div 
              key={tutorial.id} 
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <TutorialCard tutorial={tutorial} />
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up opacity-0 animate-delay-500">
          <Button 
            variant="outline" 
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-3 hover:scale-105 theme-transition"
          >
            View All Tutorials
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};