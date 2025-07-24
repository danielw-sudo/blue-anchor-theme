import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center px-6 theme-transition pt-20">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary animate-fade-in-up opacity-0 leading-tight">
          Transform Your
          <span className="block text-accent">Digital Experience</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in-up opacity-0 animate-delay-100">
          Discover the perfect harmony of innovation and elegance with our cutting-edge platform. 
          Experience seamless workflows, intelligent automation, and exceptional user experience 
          designed to accelerate your success in the digital landscape.
        </p>
        
        {/* Image Placeholder */}
        <div className="w-full max-w-4xl mx-auto animate-fade-in-up opacity-0 animate-delay-150">
          <div className="aspect-video bg-accent/10 rounded-2xl border border-accent/20 flex items-center justify-center glass-light backdrop-blur-sm">
            <span className="text-accent font-medium text-lg">[Hero Product Demo Image Placeholder]</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 animate-delay-200">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg hover:scale-105 theme-transition shadow-lg hover:shadow-xl focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
          >
            Start Free Trial
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-4 text-lg hover:scale-105 theme-transition focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
          >
            Watch Demo
          </Button>
        </div>
        
        <p className="text-sm text-secondary animate-fade-in-up opacity-0 animate-delay-300">
          Join 50,000+ professionals already transforming their workflows
        </p>
      </div>
    </section>
  );
};