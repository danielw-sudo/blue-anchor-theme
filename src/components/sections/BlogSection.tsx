import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, User } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  featured?: boolean;
}

interface BlogSectionProps {
  className?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of AI in Content Creation: What to Expect in 2024",
    excerpt: "Explore the latest trends and predictions for AI-powered content creation tools, and how they're reshaping the creative industry.",
    author: "Sarah Johnson",
    publishDate: "Dec 15, 2023",
    readTime: "6 min read",
    category: "Industry Insights",
    featured: true
  },
  {
    id: "2",
    title: "10 AI Tools Every Small Business Should Know About",
    excerpt: "Discover essential AI tools that can help small businesses automate tasks, improve efficiency, and compete with larger companies.",
    author: "Mike Chen",
    publishDate: "Dec 12, 2023",
    readTime: "8 min read",
    category: "Business"
  },
  {
    id: "3",
    title: "Ethical AI: Building Responsible AI Tools for the Future",
    excerpt: "Learn about the importance of ethical considerations in AI development and how companies are addressing bias and fairness.",
    author: "Dr. Emily Rodriguez",
    publishDate: "Dec 10, 2023",
    readTime: "12 min read",
    category: "Ethics"
  }
];

const BlogCard = ({ post, featured = false }: { post: BlogPost; featured?: boolean }) => (
  <Card className={`glass-light backdrop-blur-sm hover:glass-enhanced group hover:scale-105 theme-transition cursor-pointer ${featured ? 'lg:col-span-2' : ''}`}>
    <CardHeader className="pb-4">
      <div className="flex items-center justify-between mb-3">
        <Badge variant="outline" className="text-xs border-accent/20 text-accent">
          {post.category}
        </Badge>
        {post.featured && (
          <Badge className="bg-accent/10 text-accent border-accent/20">
            Featured
          </Badge>
        )}
      </div>
      
      <CardTitle className={`font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2 ${featured ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
        {post.title}
      </CardTitle>
    </CardHeader>

    <CardContent className="pb-4">
      <p className={`text-secondary leading-relaxed line-clamp-3 mb-4 ${featured ? 'text-base' : 'text-sm'}`}>
        {post.excerpt}
      </p>
      
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <User className="w-3 h-3" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="w-3 h-3" />
            <span>{post.publishDate}</span>
          </div>
        </div>
        <span className="text-accent font-medium">{post.readTime}</span>
      </div>
    </CardContent>

    <CardFooter className="pt-0">
      <Button 
        variant="ghost" 
        className="w-full justify-between group-hover:bg-accent/10 group-hover:text-accent transition-all duration-200 p-0 h-auto py-3"
      >
        <span className="font-medium">Read Full Article</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </CardFooter>
  </Card>
);

export const BlogSection = ({ className = "" }: BlogSectionProps) => {
  return (
    <section className={`py-16 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4 animate-fade-in-up">
            Latest Insights
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-100">
            Stay updated with the latest trends, insights, and news in the AI world. 
            Expert analysis and practical guides for AI enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id} 
              className={`animate-fade-in-up opacity-0 ${index === 0 ? 'lg:col-span-2' : ''}`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <BlogCard post={post} featured={index === 0} />
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up opacity-0 animate-delay-500">
          <Button 
            variant="outline" 
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-3 hover:scale-105 theme-transition"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};