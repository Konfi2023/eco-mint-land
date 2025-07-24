import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section id="cta" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-primary/5 via-tech-blue/5 to-success/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider whitespace-nowrap">Stay Connected</span>
            <Sparkles className="w-5 h-5 text-tech-blue flex-shrink-0" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-tech-blue bg-clip-text text-transparent leading-tight px-4">
            Stay Updated on Our Progress
          </h2>
          
          <div className="max-w-3xl mx-auto mb-12 px-4">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              We're building the future of ecosystem services. Join our community to get updates 
              on our development progress and be the first to know when we launch.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 px-4">
            <Button variant="hero" size="xl" className="group w-full sm:w-auto min-w-[200px]">
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-2" />
            </Button>
            <Button variant="outline-hero" size="xl" className="w-full sm:w-auto min-w-[200px]">
              Subscribe for Updates
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-8 text-sm text-muted-foreground px-4">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span>Coming Soon</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <div className="w-2 h-2 rounded-full bg-tech-blue flex-shrink-0" />
              <span>Early Access Available</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <div className="w-2 h-2 rounded-full bg-success flex-shrink-0" />
              <span>Join Our Community</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-tech-blue/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-success/5 rounded-full blur-3xl" />
    </section>
  );
};

export default CTA;