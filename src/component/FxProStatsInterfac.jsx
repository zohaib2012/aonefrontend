const AoneStatsInterface = () => {
  const stats = [
    {
      title: "11,200+",
      subtitle: "Client accounts",
      description:
        "Aone has been providing online trading services to clients since 1999 and it currently serves 173 countries worldwide.",
    },
    {
      title: "123+",
      subtitle: "Awards",
      description:
        "Aone has received constant recognition in the industry, winning over 123 international awards to date for the quality of its services.",
    },
    {
      title: "5-star",
      subtitle: "Customer service",
      description:
        "Our dedicated, multilingual customer service team works 24/5 to provide you with an exceptional level of support.",
    },
    {
      title: "5",
      subtitle: "Industry regulation",
      description:
        "Aone operates under strict regulatory oversight across multiple jurisdictions, including authorisation by the FCA in the UK.",
    },
  ];

  return (
    <div>
      <div className="relative container mx-auto max-w-7xl my-10 overflow-hidden rounded-lg">
        {/* Main Content Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 p-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative cursor-pointer overflow-hidden bg-white px-6 py-8 shadow-xl ring-1 ring-gray-900/5 rounded-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              <span className="absolute top-10 z-0 h-2 w-24 rounded-full"></span>
              <div className="relative z-10 text-center">
                <span className="text-2xl font-semibold grid h-16 w-48 mx-auto place-items-center rounded bg-Blue text-white">
                  {stat.title}
                </span>
                <div className="space-y-4 pt-4 text-base leading-7 text-gray-700">
                  <p className="font-semibold text-Blue text-xl">
                    {stat.subtitle}
                  </p>
                  <p>{stat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AoneStatsInterface;
