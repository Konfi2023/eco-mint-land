import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, TreePine, Building2, BarChart3, Zap } from "lucide-react";

const Benefits = () => {
  return (
    <section id="benefits" className="min-h-screen flex items-center py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for <span className="bg-gradient-to-r from-primary to-tech-blue bg-clip-text text-transparent">Everyone</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're developing environmental projects or seeking to offset your carbon footprint, 
            our platform provides the tools you need to make a real impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Developers Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                  <TreePine className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold">For Project Developers</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Transform your environmental initiatives into verified, tradeable assets
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Simple Registration Process</h4>
                  <p className="text-muted-foreground">Register your projects in minutes with our streamlined onboarding system</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Automatic Tokenization</h4>
                  <p className="text-muted-foreground">Blockchain technology converts your verified impact into valuable digital certificates</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Real-time Income Tracking</h4>
                  <p className="text-muted-foreground">Monitor revenue streams and project performance with comprehensive analytics</p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg" className="group">
              Register Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Companies Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-tech-blue to-tech-blue/80 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-tech-blue-foreground" />
                </div>
                <h3 className="text-3xl font-bold">For Companies</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Achieve your sustainability goals with verified, high-quality carbon credits
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-tech-blue mt-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Browse Verified Certificates</h4>
                  <p className="text-muted-foreground">Access CO2 certificates, biodiversity credits, and more from trusted projects worldwide</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-tech-blue mt-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Create Compensation Projects</h4>
                  <p className="text-muted-foreground">Define your offsetting goals and assign tokens to specific compensation initiatives</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-tech-blue mt-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Internationally Recognized</h4>
                  <p className="text-muted-foreground">Generate compensation certificates accepted by international auditors</p>
                </div>
              </div>
            </div>

            <Button variant="tech" size="lg" className="group">
              Browse Certificates
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <Card className="text-center bg-gradient-to-br from-card to-accent/10 border-0 shadow-[var(--shadow-soft)]">
            <CardHeader>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <CardTitle>Instant Verification</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                Satellite monitoring and blockchain technology provide real-time verification of environmental impact
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center bg-gradient-to-br from-card to-accent/10 border-0 shadow-[var(--shadow-soft)]">
            <CardHeader>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-tech-blue/20 to-tech-blue/10 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-tech-blue" />
              </div>
              <CardTitle>Transparent Trading</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                All transactions are recorded on blockchain, ensuring complete transparency and traceability
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center bg-gradient-to-br from-card to-accent/10 border-0 shadow-[var(--shadow-soft)]">
            <CardHeader>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-success/20 to-success/10 flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-success" />
              </div>
              <CardTitle>Real Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                Every certificate represents genuine environmental benefit, verified by advanced monitoring systems
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Benefits;