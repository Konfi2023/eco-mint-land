import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Leaf, 
  DollarSign, 
  Globe, 
  Shield, 
  Satellite, 
  Coins,
  TrendingUp,
  CheckCircle,
  Users
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Marketplace",
      description: "Access a worldwide marketplace of verified CO2 certificates, biodiversity credits, and other ecosystem services.",
      color: "text-primary"
    },
    {
      icon: Satellite,
      title: "Satellite Monitoring",
      description: "Real-time satellite verification ensures the authenticity and progress of all registered environmental projects.",
      color: "text-tech-blue"
    },
    {
      icon: CheckCircle,
      title: "Verified Compensation",
      description: "Generate internationally recognized compensation certificates by burning tokens assigned to your projects.",
      color: "text-tech-blue"
    },
    {
      icon: Leaf,
      title: "Project Registration",
      description: "Register your environmental projects with ease. Our platform automatically validates and tokenizes your ecosystem services.",
      color: "text-primary"
    },
    {
      icon: DollarSign,
      title: "Income Tracking",
      description: "Monitor your revenue streams in real-time with comprehensive analytics and automated payment processing.",
      color: "text-tech-blue"
    },
    {
      icon: Coins,
      title: "Auto-Tokenization",
      description: "Blockchain technology automatically converts verified environmental benefits into tradeable digital certificates.",
      color: "text-success"
    }
  ];

  return (
    <section id="features" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-tech-blue bg-clip-text text-transparent">
            Powered by Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform combines cutting-edge blockchain technology with satellite monitoring 
            to create the most trusted ecosystem services marketplace in the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-to-br from-card to-accent/20 border-0 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-strong)] transition-all duration-300 hover:scale-105 group">
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-background to-accent mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;