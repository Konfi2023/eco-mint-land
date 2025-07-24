import { Separator } from "@/components/ui/separator";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-tech-blue rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-primary to-tech-blue bg-clip-text text-transparent">
                NaturePort
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your gateway to verified ecosystem services. Building trust through 
              blockchain technology and satellite monitoring.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Berlin, Germany</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@natureport.eu</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+49 (0) 30 123 456 789</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#partners" className="text-muted-foreground hover:text-primary transition-colors">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Legal & Compliance</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/imprint" className="text-muted-foreground hover:text-primary transition-colors">
                  Imprint (Impressum)
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/gdpr" className="text-muted-foreground hover:text-primary transition-colors">
                  GDPR Compliance
                </a>
              </li>
              <li>
                <a href="/data-protection" className="text-muted-foreground hover:text-primary transition-colors">
                  Data Protection
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} NaturePort GmbH. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <span className="text-muted-foreground">
              EU VAT ID: DE123456789
            </span>
            <span className="text-muted-foreground">
              HRB 12345 B
            </span>
            <div className="flex items-center gap-1">
              <span className="text-muted-foreground">Made with</span>
              <span className="text-primary">♥</span>
              <span className="text-muted-foreground">in Berlin</span>
            </div>
          </div>
        </div>

        {/* EU Compliance Notice */}
        <div className="mt-6 pt-6 border-t border-border/50">
          <div className="text-xs text-muted-foreground text-center max-w-4xl mx-auto">
            <p>
              This website complies with EU regulations including GDPR, ePrivacy Directive, and Digital Services Act. 
              We are committed to protecting your privacy and ensuring transparent data processing. 
              For questions regarding data protection, please contact our Data Protection Officer at 
              <a href="mailto:dpo@natureport.eu" className="text-primary hover:underline ml-1">
                dpo@natureport.eu
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;