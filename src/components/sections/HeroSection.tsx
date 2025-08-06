import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center px-6 theme-transition pt-20">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary animate-fade-in-up opacity-0 leading-tight">
          Discover the Best
          <span className="block text-accent">AI Tools</span>
          <span className="block text-primary">All in One Place</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in-up opacity-0 animate-delay-100">
          Explore our comprehensive directory of cutting-edge AI tools designed to enhance productivity, 
          creativity, and innovation. From content creation to business automation, find the perfect AI 
          solution for your needs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 animate-delay-200">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg hover:scale-105 theme-transition shadow-lg hover:shadow-xl focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
          >
            Explore Tools
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-4 text-lg hover:scale-105 theme-transition focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
          >
            Submit Tool
          </Button>
        </div>
        
        <p className="text-sm text-secondary animate-fade-in-up opacity-0 animate-delay-300">
          Join 50,000+ professionals discovering AI tools daily
        </p>
      </div>
    </section>
  );
};