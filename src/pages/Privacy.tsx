import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
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
                Privacy Policy
              </h1>
              <p className="text-xl text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8 space-y-12">
              <section>
                <h2 className="text-2xl font-semibold mb-6 text-primary">1. Data Controller</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p className="text-lg"><strong className="text-foreground">NaturePort GmbH</strong></p>
                  <p>Musterstraße 123</p>
                  <p>10115 Berlin, Germany</p>
                  <p><strong className="text-foreground">Email:</strong> privacy@natureport.eu</p>
                  <p><strong className="text-foreground">Data Protection Officer:</strong> dpo@natureport.eu</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-primary">2. Data We Collect</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-3">Information You Provide</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Contact information (name, email address, phone number)</li>
                      <li>Company information (company name, address, VAT number)</li>
                      <li>Project data and documentation</li>
                      <li>Communication records</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-3">Information We Collect Automatically</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Website usage data (pages visited, time spent, clicks)</li>
                      <li>Technical information (IP address, browser type, device information)</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-primary">3. How We Use Your Data</h2>
                <div className="space-y-3">
                  <p className="text-muted-foreground">We process your personal data for the following purposes:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Providing our ecosystem services platform</li>
                    <li>Verifying and tokenizing environmental projects</li>
                    <li>Communicating with you about our services</li>
                    <li>Improving our website and services</li>
                    <li>Complying with legal obligations</li>
                    <li>Preventing fraud and ensuring security</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-primary">4. Legal Basis for Processing</h2>
                <div className="space-y-3">
                  <p className="text-muted-foreground">We process your data based on:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">Consent:</strong> Where you have given explicit consent</li>
                    <li><strong className="text-foreground">Contract:</strong> To fulfill our contractual obligations</li>
                    <li><strong className="text-foreground">Legitimate Interest:</strong> For business operations and service improvement</li>
                    <li><strong className="text-foreground">Legal Obligation:</strong> To comply with applicable laws</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-primary">5. Data Sharing</h2>
                <div className="space-y-3">
                  <p className="text-muted-foreground">We may share your data with:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Service providers and business partners</li>
                    <li>Regulatory authorities when required by law</li>
                    <li>Verification partners for ecosystem service validation</li>
                    <li>Blockchain networks for certificate tokenization</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">We do not sell your personal data to third parties.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-primary">6. Data Retention</h2>
                <div className="space-y-3">
                  <p className="text-muted-foreground">We retain your personal data only as long as necessary for the purposes outlined in this policy:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Account data: Until account deletion</li>
                    <li>Project data: 10 years for verification purposes</li>
                    <li>Communication records: 3 years</li>
                    <li>Website analytics: 2 years</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-primary">7. Your Rights</h2>
                <div className="space-y-3">
                  <p className="text-muted-foreground">Under GDPR, you have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Access your personal data</li>
                    <li>Rectify inaccurate data</li>
                    <li>Erase your data ("right to be forgotten")</li>
                    <li>Restrict processing</li>
                    <li>Data portability</li>
                    <li>Object to processing</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    To exercise these rights, contact us at <strong className="text-foreground">privacy@natureport.eu</strong>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-primary">8. Contact & Complaints</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>For privacy-related inquiries, contact:</p>
                  <p><strong className="text-foreground">Email:</strong> privacy@natureport.eu</p>
                  <p><strong className="text-foreground">Data Protection Officer:</strong> dpo@natureport.eu</p>
                  <p className="mt-4">You have the right to lodge a complaint with the supervisory authority:</p>
                  <p><strong className="text-foreground">Berlin Commissioner for Data Protection and Freedom of Information</strong></p>
                  <p>Friedrichstr. 219, 10969 Berlin, Germany</p>
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

export default Privacy;