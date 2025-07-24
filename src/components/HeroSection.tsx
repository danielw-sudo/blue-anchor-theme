import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center px-6 theme-transition">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold text-primary animate-fade-in-up opacity-0">
          Beautiful Blue
          <span className="block text-accent">Design System</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto leading-relaxed animate-fade-in-up opacity-0 animate-delay-100">
          Experience the perfect harmony of light and dark themes with our sophisticated blue palette. 
          Modern design meets exceptional user experience.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 animate-delay-200">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg hover:scale-105 theme-transition shadow-lg"
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-4 text-lg hover:scale-105 theme-transition"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};