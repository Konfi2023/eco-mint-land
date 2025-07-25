import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Imprint = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold mb-4">Imprint (Impressum)</h1>
            <p className="text-muted-foreground">Legal information according to § 5 TMG</p>
          </div>

          <div className="space-y-8 text-sm">
            <section>
              <h2 className="text-xl font-semibold mb-4">Company Information</h2>
              <div className="space-y-2">
                <p><strong>NaturePort GmbH</strong></p>
                <p>Musterstraße 123</p>
                <p>10115 Berlin, Germany</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Contact</h2>
              <div className="space-y-2">
                <p><strong>Phone:</strong> +49 (0) 30 123 456 789</p>
                <p><strong>Email:</strong> info@natureport.eu</p>
                <p><strong>Website:</strong> www.natureport.eu</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Legal Representatives</h2>
              <div className="space-y-2">
                <p><strong>Managing Directors:</strong> Dr. Maria Schmidt, Thomas Weber</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Register Information</h2>
              <div className="space-y-2">
                <p><strong>Commercial Register:</strong> Amtsgericht Charlottenburg</p>
                <p><strong>Register Number:</strong> HRB 12345 B</p>
                <p><strong>VAT ID:</strong> DE123456789</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Responsible for Content</h2>
              <div className="space-y-2">
                <p>According to § 55 Abs. 2 RStV:</p>
                <p><strong>Dr. Maria Schmidt</strong></p>
                <p>NaturePort GmbH</p>
                <p>Musterstraße 123</p>
                <p>10115 Berlin, Germany</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Data Protection Officer</h2>
              <div className="space-y-2">
                <p><strong>Email:</strong> dpo@natureport.eu</p>
                <p><strong>Phone:</strong> +49 (0) 30 123 456 790</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Disclaimer</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-base font-medium text-foreground">Liability for Content</h3>
                <p>
                  As service providers, we are liable for our own content of these websites according to Sec. 7, para. 1 German Telemedia Act (TMG). However, according to Sec. 8 to 10 German Telemedia Act (TMG), service providers are not under obligation to permanently monitor submitted or stored information or to search for evidences that indicate illegal activities.
                </p>

                <h3 className="text-base font-medium text-foreground">Liability for Links</h3>
                <p>
                  Our offer includes links to external third party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents.
                </p>

                <h3 className="text-base font-medium text-foreground">Copyright</h3>
                <p>
                  Contents and compilations published on these websites by the providers are subject to German copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or originator.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imprint;