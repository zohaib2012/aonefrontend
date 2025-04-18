import { useState } from "react";
import { Link } from "react-router-dom";

const AccountTypes = () => {
  const [hoveredAccount, setHoveredAccount] = useState(null);

  const accounts = [
    {
      name: "Standard",
      description: "",
      hoverDescription:
        "A great account for all types of traders, with floating Aone Spreads from 1.2 pips via MT4/MT5 and micro lot trading available.",
      buttonText: "Open Account",
    },
    {
      name: "Raw+",
      description:
        "Get VIP treatment with ZERO spreads (for 90%+ of the trading day) + low commission (max 3.5 USD per lot per side) MT4/MT5",
      hoverDescription:
        "Advanced account with tight spreads and low commissions",
      buttonText: "Open Account",
    },
    {
      name: "Elite",
      description: "",
      hoverDescription:
        "Why be VIP when you can be ELITE? Just like Raw+, you will benefit from ZERO spreads (for 90%+ of the trading day) + low commission (max 3.5 USD per lot per side) and earn rebates of up to 21% of your commissions! MT4/MT5",
      buttonText: "Open Account",
    },
    {
      name: "cTrader",
      description: "",
      hoverDescription:
        "Use the cTrader platform range and get ultra-low spreads from 0.2 with a competitive commission of $35 per $1million traded.",
      buttonText: "Open Account",
    },
  ];

  return (
    <div className=" container flex mx-auto max-w-7xl h-96 border border-red-500">
      {accounts.map((account, index) => (
        <div
          key={index}
          className={`
            relative flex-1 p-4 transition-all duration-300 
            ${
              hoveredAccount === account.name
                ? "flex-grow-[2] bg-white shadow-lg"
                : "flex-grow hover:bg-gray-50"
            }
          `}
          onMouseEnter={() => setHoveredAccount(account.name)}
          onMouseLeave={() => setHoveredAccount(null)}
        >
          {/* Account Name */}
          <div
            className={`
              text-lg lg:text-[50px] font-bold writing-vertical rotate-90 
              absolute left-4 top-1/2 -translate-y-1/2
              ${
                hoveredAccount === account.name
                  ? "text-white hidden"
                  : "text-black"
              }
            `}
          >
            {account.name} <h5 className="text-[20px]">Account</h5>
          </div>

          {/* Hover Content */}
          {hoveredAccount === account.name && (
            <div className="ml-16 mt-10">
              <h2 className="text-3xl font-bold text-black mb-4">
                {account.name}
                <h5 className="text-[20px]">Account</h5>
              </h2>
              {account.description && (
                <p className="text-gray-600 mb-4">{account.description}</p>
              )}
              <p className="text-gray-500 mb-6">{account.hoverDescription}</p>
              <Link to={"/register"}>
                <button className="bg-Blue h-14 w-48  text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                  {account.buttonText}
                </button>
              </Link>
            </div>
          )}

          {/* Arrow */}
          <div
            className={`
              absolute right-4 bottom-4 w-8 h-8 border-r-2 border-b-2 
              border-gray-300 rotate-[-45deg] transition-colors
              ${hoveredAccount === account.name ? "border-Blue" : ""}
            `}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default AccountTypes;
