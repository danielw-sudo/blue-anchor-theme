import { ContentCard } from "./ContentCard";

export const ContentSection = () => {
  return (
    <section className="py-20 px-6 bg-background theme-transition" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-accent animate-fade-in-up opacity-0">
            Powerful Features That Drive Results
          </h2>
          <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto animate-fade-in-up opacity-0 animate-delay-100">
            Discover our comprehensive suite of cutting-edge tools designed to streamline your workflow, 
            boost productivity, and deliver measurable business outcomes that exceed expectations.
          </p>
          
          {/* Image Placeholder */}
          <div className="w-full max-w-4xl mx-auto mt-12 animate-fade-in-up opacity-0 animate-delay-200">
            <div className="aspect-video bg-accent/10 rounded-xl border border-accent/20 flex items-center justify-center">
              <span className="text-accent font-medium">[Hero Feature Demo Image Placeholder]</span>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          <ContentCard
            title="Advanced Analytics & Insights"
            content="Unlock powerful data visualization and real-time analytics that transform raw information into actionable insights. Our sophisticated dashboard provides comprehensive metrics, trend analysis, and predictive modeling to help you make informed decisions that drive business growth and optimize performance across all operational areas."
            note="Pro Feature: Advanced machine learning algorithms provide predictive analytics and automated recommendations based on your usage patterns and industry benchmarks."
            delay="animate-delay-300"
          />
          
          <ContentCard
            title="Seamless Integration Ecosystem"
            content="Connect effortlessly with over 100+ popular tools and platforms through our robust API infrastructure. Whether you're using CRM systems, project management tools, or communication platforms, our universal integration layer ensures smooth data flow and synchronized workflows across your entire tech stack without any technical complexity."
            note="Enterprise Ready: SSO authentication, advanced security protocols, and dedicated support ensure enterprise-grade reliability and compliance with industry standards."
            delay="animate-delay-400"
          />
        </div>
      </div>
    </section>
  );
};