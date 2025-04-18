import { Copy } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Joinus = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAll = () => {
    const textToCopy = `https://one.AoneTrade.org/a/88cn3enm4c`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative bg-[#23282B] min-h-screen flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Invite friends and earn money
          </h2>
        </div>

        {/* Referral Link Section */}
        <div className="p-6 bg-amber-50 mx-4 mt-4 rounded-xl text-center">
          <p className="text-gray-800 break-all text-sm sm:text-base mb-3">
            https://one.AoneTrade.org/a/88cn3enm4c
          </p>
          <button
            onClick={handleCopyAll}
            className="text-blue-600 hover:text-blue-800 font-medium transition"
          >
            {copied ? "Copied!" : "Copy link"}
          </button>
        </div>

        {/* How it Works */}
        <div className="px-6 py-6">
          <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-6">
            How it works?
          </h3>
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-4">
            {/* Step 1 */}
            <div className="flex flex-col items-center w-full sm:w-1/3">
              <div className="bg-[#253333] text-white h-14 w-14 flex items-center justify-center rounded-full mb-2">
                <Copy size={20} />
              </div>
              <p className="text-center text-sm text-gray-700">
                Share your unique link with friends
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center w-full sm:w-1/3">
              <div className="bg-[#253333] text-white h-14 w-14 flex items-center justify-center rounded-full mb-2">
                <div className="text-white font-bold -rotate-12 transform">
                  \\\
                </div>
              </div>
              <p className="text-center text-sm text-gray-700">
                Your friends become traders
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center w-full sm:w-1/3">
              <div className="bg-[#253333] h-14 w-14 rounded-full p-2 flex flex-col items-center justify-center mb-2">
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full" />
                  ))}
                </div>
                <div className="h-1 w-full bg-white mt-1 rounded-full" />
              </div>
              <p className="text-center text-sm text-gray-700">
                You get rewarded for every trade
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 text-center border-t">
          <Link to="/">
            <button className="text-blue-600 hover:text-blue-800 font-medium transition">
              Join Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
