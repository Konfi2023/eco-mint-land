import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Imprint = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-tech-blue/5 to-success/5" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <Link to="/">
                <Button variant="outline" className="mb-8">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-tech-blue bg-clip-text text-transparent">
                Imprint
              </h1>
              <p className="text-xl text-muted-foreground">Legal information according to § 5 TMG</p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8 space-y-12">
              <section>
                <h2 className="text-2xl font-semibold mb-6 text-primary">Company Information</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p className="text-lg"><strong className="text-foreground">NaturePort GmbH</strong></p>
                  <p>Musterstraße 123</p>
                  <p>10115 Berlin, Germany</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-primary">Contact</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong className="text-foreground">Phone:</strong> +49 (0) 30 123 456 789</p>
                  <p><strong className="text-foreground">Email:</strong> info@natureport.eu</p>
                  <p><strong className="text-foreground">Website:</strong> www.natureport.eu</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-primary">Legal Representatives</h2>
                <div className="text-muted-foreground">
                  <p><strong className="text-foreground">Managing Directors:</strong> Dr. Maria Schmidt, Thomas Weber</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-primary">Register Information</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong className="text-foreground">Commercial Register:</strong> Amtsgericht Charlottenburg</p>
                  <p><strong className="text-foreground">Register Number:</strong> HRB 12345 B</p>
                  <p><strong className="text-foreground">VAT ID:</strong> DE123456789</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-primary">Responsible for Content</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>According to § 55 Abs. 2 RStV:</p>
                  <p><strong className="text-foreground">Dr. Maria Schmidt</strong></p>
                  <p>NaturePort GmbH</p>
                  <p>Musterstraße 123</p>
                  <p>10115 Berlin, Germany</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-primary">Data Protection Officer</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong className="text-foreground">Email:</strong> dpo@natureport.eu</p>
                  <p><strong className="text-foreground">Phone:</strong> +49 (0) 30 123 456 790</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-primary">Disclaimer</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-3">Liability for Content</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      As service providers, we are liable for our own content of these websites according to Sec. 7, para. 1 German Telemedia Act (TMG). However, according to Sec. 8 to 10 German Telemedia Act (TMG), service providers are not under obligation to permanently monitor submitted or stored information or to search for evidences that indicate illegal activities.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-3">Liability for Links</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our offer includes links to external third party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-3">Copyright</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Contents and compilations published on these websites by the providers are subject to German copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or originator.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-tech-blue/10 rounded-full blur-3xl" />
      </section>
      <Footer />
    </div>
  );
};

export default Imprint;