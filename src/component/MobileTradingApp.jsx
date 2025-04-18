// import React from 'react';
import { Star } from "lucide-react";
import QRScan from "../assets/images/download.png";

const MobileTradingApp = () => {
  return (
    <div className="bg-black min-h-fit my-20 max-w-7xl flex items-center justify-center p-4 relative">
      {/* Main Container */}
      <div className="flex w-full max-w-6xl items-center">
        {/* Left Side - Download Section */}
        <div className="w-1/3 ml-28">
          {/* App Store Badges */}
          <div className="space-y-4  ">
            <div className="flex items-center  rounded-lg ">
              <img
                src="https://direct-website.azureedge.net/assets/img/svelte-home/platforms/apple-t.svg"
                alt="Apple Store"
                className="w-32 h-10 rounded-lg border-2 bg-white "
              />
            </div>
            <div className="flex items-center  rounded-lg ">
              <img
                src="https://direct-website.azureedge.net/assets/img/svelte-home/platforms/android-t.svg"
                alt="Google Play"
                className="w-32 h-10 rounded-lg border-2 bg-white "
              />
            </div>
          </div>

          {/* QR Code */}

          {/* Scan to Download Text */}
          <p className="text-gray-400 text-sm m-3">
            Scan to Download <br /> Aone Pro Trading App
          </p>
          <img className="w-32 h-32" src={QRScan} alt="QR code" />
        </div>

        {/* Middle - Phone Mockup */}
        <div className="w-1/3 relative z-10">
          <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border-8 border-black relative">
            <img
              src="https://direct-website.azureedge.net/assets/img/svelte-home/platforms/trade-on-mobile-new/trade-on-mobile.webp"
              alt=""
            />
          </div>
        </div>

        {/* Right Side - Description */}
        <div className="w-1/3 pl-8 text-white">
          <h2 className="text-4xl font-bold mb-4">Trade on Mobile</h2>
          <p className="mb-4 text-gray-300">
            Trade the CFD market on the go with our mobile application and
            benefit from ultra-low latency trading infrastructure, award-winning
            order execution and deep liquidity.
          </p>

          {/* App Stats */}
          <div className="flex items-center space-x-8">
            {/* Rating */}
            <div className="flex items-center">
              <span className="text-4xl font-bold mr-2">4.7</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>

            {/* Downloads */}
            <div>
              <span className="text-4xl font-bold block">15M</span>
              <span className="text-gray-300">
                More than 15 million downloads
              </span>
            </div>
          </div>

          {/* Platforms */}
          <div className="mt-4">
            <p className="text-gray-300">
              Available on iOS and Android devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTradingApp;
