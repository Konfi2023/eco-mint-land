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
    <section className="py-16 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Trusted by Leading Organizations
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
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {partner.logo}
              </div>
              <span className="text-xs text-muted-foreground text-center font-medium">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            * Partner logos are placeholders. We're actively building strategic partnerships.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;