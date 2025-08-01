const Partners = () => {
  // Placeholder partner logos - these would be replaced with actual partner logos
  const partners = [
    { name: "EcoTech Solutions", logo: "🌱" },
    { name: "Green Blockchain", logo: "🔗" },
    { name: "Satellite Earth", logo: "🛰️" },
    { name: "Carbon Trust", logo: "🌍" },
    { name: "Climate Partners", logo: "🌿" },
    { name: "Earth Monitor", logo: "📡" },
    { name: "Eco Verify", logo: "✅" },
    { name: "Green Finance", logo: "💚" }
  ];

  return (
    <section id="partners" className="min-h-screen flex items-center py-16 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-tech-blue bg-clip-text text-transparent">
            Our Partners & Supporters
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're building partnerships with industry leaders, research institutions, 
            and environmental organizations to create the most trusted ecosystem services marketplace.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-card/50 border border-border/50 hover:border-border transition-colors group"
            >
              <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">
                {partner.logo}
              </div>
              <span className="text-xs text-muted-foreground text-center font-medium">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;