import { ContentCard } from "./ContentCard";

export const ContentSection = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-background theme-transition">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            Exceptional Features
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Our template showcases the perfect balance between aesthetics and functionality, 
            delivering an outstanding user experience across all devices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <ContentCard
            title="Dynamic Theme System"
            content="Seamlessly switch between light and dark modes with our sophisticated blue palette. Each theme maintains perfect contrast and readability while preserving the shared accent color for visual continuity."
            note="The transition effects create a smooth, delightful user experience that enhances engagement and accessibility."
            delay="animate-delay-100"
          />
          
          <ContentCard
            title="Modern Glass Design"
            content="Experience the elegance of frosted glass effects that adapt intelligently to your current theme. The subtle backdrop blur and transparency create depth and visual interest without compromising content clarity."
            note="Advanced CSS techniques ensure optimal performance while delivering stunning visual effects across all modern browsers."
            delay="animate-delay-200"
          />
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8 lg:gap-12">
          <ContentCard
            title="Responsive Excellence"
            content="Built with mobile-first principles and powered by Tailwind CSS, our template ensures pixel-perfect rendering across all devices. From phones to large displays, every element scales beautifully."
            note="Comprehensive breakpoint system guarantees optimal user experience regardless of screen size or device orientation."
            delay="animate-delay-300"
          />
          
          <ContentCard
            title="Performance Optimized"
            content="Crafted with React best practices and modern web standards. Lightweight animations, efficient CSS transitions, and optimized component architecture deliver exceptional performance metrics."
            note="Core Web Vitals optimization ensures fast loading times and smooth interactions for superior user satisfaction."
            delay="animate-delay-200"
          />
        </div>
      </div>
    </section>
  );
};