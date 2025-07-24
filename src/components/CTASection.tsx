import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 px-6 cta-gradient theme-transition">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-accent animate-fade-in-up opacity-0 animate-delay-100">
          Ready to Transform Your Experience?
        </h2>
        
        <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up opacity-0 animate-delay-200">
          Join thousands of satisfied users who have already discovered the power of our innovative solution. 
          Start your journey today with our comprehensive platform designed to exceed your expectations and deliver 
          exceptional results that drive real business growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 animate-delay-300">
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
            Schedule Demo
          </Button>
        </div>
        
        <p className="text-sm text-secondary animate-fade-in-up opacity-0 animate-delay-400">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};