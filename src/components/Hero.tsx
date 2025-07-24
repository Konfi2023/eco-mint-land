import { Button } from "@/components/ui/button";
import { ArrowRight, Satellite, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Environmental technology" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Satellite className="w-4 h-4 text-tech-blue" />
              <span>Satellite Verified</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-primary" />
              <span>Blockchain Secured</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="w-4 h-4 text-success" />
              <span>Auto-Tokenized</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground/90 relative">
            <span className="block bg-background text-transparent bg-clip-text shadow-[inset_0_4px_8px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(255,255,255,0.1)] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] font-black tracking-tight" 
                  style={{
                    textShadow: 'inset 0 3px 6px rgba(0,0,0,0.4), inset 0 -1px 2px rgba(255,255,255,0.1)',
                    WebkitTextStroke: '1px rgba(0,0,0,0.1)',
                    color: 'transparent',
                    background: 'linear-gradient(145deg, #e2e8f0 0%, #cbd5e1 50%, #94a3b8 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text'
                  }}>
              We create Trust in
            </span>
            <span className="block bg-background text-transparent bg-clip-text shadow-[inset_0_4px_8px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(255,255,255,0.1)] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] font-black tracking-tight" 
                  style={{
                    textShadow: 'inset 0 3px 6px rgba(0,0,0,0.4), inset 0 -1px 2px rgba(255,255,255,0.1)',
                    WebkitTextStroke: '1px rgba(0,0,0,0.1)',
                    color: 'transparent',
                    background: 'linear-gradient(145deg, #e2e8f0 0%, #cbd5e1 50%, #94a3b8 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text'
                  }}>
              Ecosystem Services
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            The world's first marketplace for ecosystem services powered by blockchain and satellite technology.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Register projects, trade verified certificates, and create real environmental impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={() => {
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-hero" size="xl">
              Get Updates
            </Button>
          </div>

        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-tech-blue/10 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;