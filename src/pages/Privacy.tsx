import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
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
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-8 text-sm">
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Data Controller</h2>
              <div className="space-y-2">
                <p><strong>NaturePort GmbH</strong></p>
                <p>Musterstraße 123</p>
                <p>10115 Berlin, Germany</p>
                <p><strong>Email:</strong> privacy@natureport.eu</p>
                <p><strong>Data Protection Officer:</strong> dpo@natureport.eu</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. Data We Collect</h2>
              <div className="space-y-4">
                <h3 className="text-base font-medium">Information You Provide</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Company information (company name, address, VAT number)</li>
                  <li>Project data and documentation</li>
                  <li>Communication records</li>
                </ul>

                <h3 className="text-base font-medium">Information We Collect Automatically</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Website usage data (pages visited, time spent, clicks)</li>
                  <li>Technical information (IP address, browser type, device information)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. How We Use Your Data</h2>
              <div className="space-y-2">
                <p>We process your personal data for the following purposes:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-2">
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
              <h2 className="text-xl font-semibold mb-4">4. Legal Basis for Processing</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>We process your data based on:</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li><strong>Consent:</strong> Where you have given explicit consent</li>
                  <li><strong>Contract:</strong> To fulfill our contractual obligations</li>
                  <li><strong>Legitimate Interest:</strong> For business operations and service improvement</li>
                  <li><strong>Legal Obligation:</strong> To comply with applicable laws</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Data Sharing</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>We may share your data with:</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Service providers and business partners</li>
                  <li>Regulatory authorities when required by law</li>
                  <li>Verification partners for ecosystem service validation</li>
                  <li>Blockchain networks for certificate tokenization</li>
                </ul>
                <p className="mt-3">We do not sell your personal data to third parties.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Data Retention</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>We retain your personal data only as long as necessary for the purposes outlined in this policy:</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Account data: Until account deletion</li>
                  <li>Project data: 10 years for verification purposes</li>
                  <li>Communication records: 3 years</li>
                  <li>Website analytics: 2 years</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">7. Your Rights</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>Under GDPR, you have the right to:</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Access your personal data</li>
                  <li>Rectify inaccurate data</li>
                  <li>Erase your data ("right to be forgotten")</li>
                  <li>Restrict processing</li>
                  <li>Data portability</li>
                  <li>Object to processing</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="mt-3">To exercise these rights, contact us at <strong>privacy@natureport.eu</strong></p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">8. Cookies</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>We use cookies to:</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Remember your preferences</li>
                  <li>Analyze website traffic</li>
                  <li>Improve user experience</li>
                  <li>Ensure website security</li>
                </ul>
                <p className="mt-3">You can manage cookie preferences in your browser settings.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">9. International Transfers</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  Your data may be transferred to countries outside the EU/EEA. We ensure adequate protection through:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>EU Commission adequacy decisions</li>
                  <li>Standard Contractual Clauses</li>
                  <li>Binding Corporate Rules</li>
                  <li>Certification schemes</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">10. Contact & Complaints</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>For privacy-related inquiries, contact:</p>
                <p><strong>Email:</strong> privacy@natureport.eu</p>
                <p><strong>Data Protection Officer:</strong> dpo@natureport.eu</p>
                <p className="mt-3">
                  You have the right to lodge a complaint with the supervisory authority:
                </p>
                <p><strong>Berlin Commissioner for Data Protection and Freedom of Information</strong></p>
                <p>Friedrichstr. 219, 10969 Berlin, Germany</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">11. Updates</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  material changes by posting the new Privacy Policy on this page and updating 
                  the "Last updated" date.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;