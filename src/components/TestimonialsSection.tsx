interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  delay?: string;
}

const TestimonialCard = ({ quote, author, role, company, delay = "" }: TestimonialCardProps) => {
  return (
    <div className={`glass-enhanced rounded-xl p-8 theme-transition hover:scale-105 shadow-lg hover:shadow-xl animate-fade-in-scale opacity-0 ${delay}`}>
      <div className="flex items-start space-x-4">
        {/* Avatar Placeholder */}
        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
          <span className="text-accent font-semibold text-lg">
            {author.charAt(0)}
          </span>
        </div>
        
        <div className="flex-1">
          <blockquote className="text-foreground leading-relaxed mb-4 italic">
            "{quote}"
          </blockquote>
          
          <div className="space-y-1">
            <p className="text-accent font-semibold">{author}</p>
            <p className="text-secondary text-sm">{role}</p>
            <p className="text-secondary text-sm font-medium">{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "This platform has completely revolutionized how we approach our daily workflows. The intuitive design and powerful features have increased our productivity by 300% in just three months.",
      author: "Sarah Chen",
      role: "Product Manager",
      company: "TechForward Inc."
    },
    {
      quote: "The seamless integration and exceptional user experience make this the best investment we've made this year. Our team adopted it instantly, and the results speak for themselves.",
      author: "Michael Rodriguez",
      role: "VP of Operations",
      company: "Innovation Labs"
    },
    {
      quote: "Outstanding support, incredible features, and a design that actually makes work enjoyable. I can't imagine going back to our old systems after experiencing this level of excellence.",
      author: "Emily Thompson",
      role: "Lead Designer",
      company: "Creative Studio Co."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background theme-transition">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-accent animate-fade-in-up opacity-0">
            What Our Users Say
          </h2>
          <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto animate-fade-in-up opacity-0 animate-delay-100">
            Don't just take our word for it. Here's what real users have to say about their experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              delay={`animate-delay-${(index + 2) * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};