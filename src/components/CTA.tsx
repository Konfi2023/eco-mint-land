import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section id="cta" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-primary/5 via-tech-blue/5 to-success/5 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Stay Connected</span>
            <Sparkles className="w-6 h-6 text-tech-blue" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-tech-blue to-success bg-clip-text text-transparent">
            Stay Updated on Our Progress
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            We're building the future of ecosystem services. Join our community to get updates 
            on our development progress and be the first to know when we launch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="group">
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-hero" size="xl">
              Subscribe for Updates
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Coming Soon</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-tech-blue" />
              <span>Early Access Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
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