import MarketTickers from "./MarketTickers";

const TradingFeatures = () => {
  const features = [
    {
      title: "TIGHT SPREADS",
      subtitle: "From 0",
      description:
        "Your trading costs stay predictable and low, even in high-volatility markets.",
    },
    {
      title: "HIGH LEVERAGE",
      subtitle: "1:Unlimited",
      description:
        "Flexible leverage to suit any trading style, from low-risk to high-reward strategies.",
      highlight: true,
    },
    {
      title: "ACCESS",
      subtitle: "2100+ Assets",
      description:
        "Trade any instrument you want! Missing something? Let us know, and we'll add it.",
    },
    {
      title: "DEDICATED SUPPORT",
      subtitle: "24/5",
      description: "We are here for guidance and support whenever you need it.",
    },
    {
      title: "TRADING APP",
      subtitle: "5* Rated",
      description:
        "Trade on the go with an intuitive award-winning app packed with features.",
    },
    {
      title: "TRADING COMPETITION",
      subtitle: "$10,000",
      description:
        "Join our Exclusive Promo. Get a Credit Bonus, Trade & Win Big!",
    },
  ];

  return (
    <div>
      <MarketTickers />

      <div className="container mx-auto max-w-7xl mt-20 px-4 py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
              border rounded-lg p-6 relative overflow-hidden group
              transition-all duration-300 
              ${
                feature.highlight ? "border-Blue bg-blue-50" : "border-gray-200"
              }
            `}
            >
              {/* Hover effect blue line */}
              <div
                className="absolute top-0 left-0 w-10 h-1 bg-Blue 
              group-hover:w-[150px] transition-all duration-500 ease-in-out"
              ></div>

              {feature.highlight && (
                <span className="absolute top-2 right-2 bg-Blue text-white px-2 py-1 rounded-full text-xs">
                  New Offering
                </span>
              )}
              <h3 className="text-md font-semibold text-black mb-2 uppercase tracking-wider">
                {feature.title}
              </h3>
              <h2 className="text-3xl font-bold mb-4">{feature.subtitle}</h2>
              <h5 className="text-black text-sm font-normal">
                {feature.description}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradingFeatures;
