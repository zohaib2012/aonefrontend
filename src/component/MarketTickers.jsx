import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import "../index.css";

const MarketTickers = () => {
  const categories = [
    { label: "Popular" },
    { label: "Forex" },
    { label: "Crypto CFDs" },
    { label: "Metals" },
    { label: "Futures" },
    { label: "Energy" },
    { label: "Shares" },
    { label: "Energy" },
    { label: "ETFs", highlight: true },
  ];

  const sliderData = [
    { name: "Gold", price: "1.268758/1.268858", up: false },
    { name: "Oil", price: "71.54/71.68", up: true },
    { name: "BTC/USD", price: "42,587.00/42,650.00", up: false },
    { name: "ETH/USD", price: "3,258.75/3,260.00", up: true },
    { name: "Silver", price: "25.60/25.65", up: false },
    { name: "Apple", price: "192.33/192.50", up: true },
  ];

  return (
    <div className="bottom-0 left-0 w-full bg-black px-4 py-4 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Category Buttons with Horizontal Scrolling on Small Screens */}
        <div className="w-full overflow-x-auto mb-8 pb-2">
          <div className="flex gap-2 min-w-max lg:justify-center">
            {categories.map((category, idx) => (
              <button
                key={idx}
                className={`rounded-xl px-4 h-8 whitespace-nowrap transition-colors duration-300
                ${
                  idx === 0
                    ? "border border-Blue text-white hover:bg-Blue hover:border-blue-700"
                    : category.highlight
                    ? "text-green-500 hover:text-white hover:bg-blue-600 hover:border-blue-700"
                    : "text-white hover:bg-Blue hover:border-Blue"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Marquee Container */}
        <div className="overflow-hidden w-full relative">
          <div className="animate-marquee whitespace-nowrap flex gap-16">
            {[...sliderData, ...sliderData].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-2 gap-2 rounded-3xl bg-[#1a1a1a] h-16 p-2"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    item.up ? "bg-green-500" : "bg-red-700"
                  }`}
                >
                  {item.up ? <ArrowBigUp /> : <ArrowBigDown />}
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm text-left">
                    {item.name}
                  </span>
                  <span className="text-white text-xs">{item.price}</span>
                </div>
                <button className="custom-blue text-white px-3 py-1 h-10 rounded-full text-xs font-semibold hover:bg-Blue transition-colors duration-300">
                  Trade
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketTickers;
