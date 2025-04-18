// import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SharesTradingInterface = () => {
  const navigationItems = [
    'Forex', 'Metals', 'Crypto', 'Indices', 
    'Shares', 'Energy', 'ETFs'
  ];

  return (
    <div className="min-h-screen container mx-auto flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-center space-x-4 p-4 border-b">
        {navigationItems.map((item) => (
          <a 
            key={item} 
            href="/register" 
            className={`
              text-sm font-medium px-3 py-2 transition-colors duration-300
              ${item === 'Shares' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-blue-600'}
            `}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">Shares</h1>
          <p className="text-gray-600 mb-6">
            Thousands of public companies from the US, UK & EU available to trade.
          </p>
          <Link to={"/register"}>
          <button 
            className="
            bg-blue-500 text-white px-6 py-3 rounded-lg 
            flex items-center justify-center space-x-2
            hover:bg-blue-600 transition-colors duration-300
            w-full md:w-auto
            "
            >

            <span>Trade Shares</span>
            <ChevronRight size={20} />
          </button>
            </Link>
        </div>

        {/* Right Section - Decorative Stock Certificates */}
        <div className="w-full md:w-1/2 relative hidden md:flex items-center justify-center p-8">
          <div className="flex space-x-4">
            <div 
              className="
                transform rotate-[-15deg] shadow-lg 
                transition-all duration-300 hover:rotate-[-10deg] hover:scale-105
                w-48 h-72 bg-red-100 border border-red-200 
                rounded-lg flex items-center justify-center
              "
            >
              <span className="text-red-800 font-bold text-4xl opacity-20">100</span>
            </div>
            <div 
              className="
                transform rotate-[5deg] shadow-lg 
                transition-all duration-300 hover:rotate-[0deg] hover:scale-105
                w-48 h-72 bg-green-100 border border-green-200 
                rounded-lg flex items-center justify-center
              "
            >
              <span className="text-green-800 font-bold text-4xl opacity-20">100</span>
            </div>
            <div 
              className="
                transform rotate-[-5deg] shadow-lg 
                transition-all duration-300 hover:rotate-[0deg] hover:scale-105
                w-48 h-72 bg-blue-100 border border-blue-200 
                rounded-lg flex items-center justify-center
              "
            >
              <span className="text-blue-800 font-bold text-4xl opacity-20">100</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharesTradingInterface;