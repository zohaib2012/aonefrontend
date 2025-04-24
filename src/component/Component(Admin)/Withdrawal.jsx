// import { ChevronDown} from 'lucide-react';
import { useState } from "react";
import { AiFillBank } from "react-icons/ai";
import { BiSolidCreditCardAlt } from "react-icons/bi";
import { Copy } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { IoLogoUsd } from "react-icons/io5";
import { FaEthereum } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
// import EasyPaisa from "../../assets/images/Easypaisa-logo.png";
// import Jazzcash from "../../assets/images/jazzcash-logo.jpeg";

const Withdrawal = () => {
  const [copied, setCopied] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("bank");

  const navigate = useNavigate();
  const handleback = () => {
    navigate(-1);
  };

  return (
    <div className="lg:min-h-screen p-4 text-white flex flex-col lg:flex-row items-center justify-center">
      <div className="w-full max-w-4xl border-2 border-gray-600 flex flex-col lg:flex-row overflow-hidden">
        {/* Deposit Methods Column (hidden on mobile, shown as tabbar) */}
        <div className="hidden lg:block w-1/3 border-r border-gray-600">
          <div className="p-2 border-b border-gray-600">
            <h2 className="text-xl font-bold">Withdraw</h2>
          </div>
          <div className="divide-y divide-gray-600">
                     <div
                       className={`p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C] ${
                         selectedMethod === "usdt" ? "bg-[#1E1E1E]" : ""
                       }`}
                       onClick={() => setSelectedMethod("usdt")}
                     >
                       <IoLogoUsd className="w-6 h-6 mr-3" />
                       <span>USDT</span>
                     </div>
                     <div
                       className={`p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C] ${
                         selectedMethod === "bank" ? "bg-[#1E1E1E]" : ""
                       }`}
                       onClick={() => setSelectedMethod("bank")}
                     >
                       <AiFillBank className="w-6 h-6 mr-3" />
                       <span>Local Bank Transfer</span>
                     </div>
                     <div
                       className={`p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C] ${
                         selectedMethod === "card" ? "bg-[#1E1E1E]" : ""
                       }`}
                       onClick={() => setSelectedMethod("card")}
                     >
                       <BiSolidCreditCardAlt className="w-6 h-6 mr-3" />
                       <span>Credit/Debit Card</span>
                     </div>
                     <div
                       className={`p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C] ${
                         selectedMethod === "crypto" ? "bg-[#1E1E1E]" : ""
                       }`}
                       onClick={() => setSelectedMethod("crypto")}
                     >
                       <RiSecurePaymentFill className="w-6 h-6 mr-3" />
                       <span>Crypto Payment</span>
                     </div>
                     <div
                       className={`p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C] ${
                         selectedMethod === "eth" ? "bg-[#1E1E1E]" : ""
                       }`}
                       onClick={() => setSelectedMethod("eth")}
                     >
                       <FaEthereum className="w-6 h-6 mr-3" />
                       <span>Ethereum</span>
                     </div>

                    {/* <div
                       className={`p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C] ${
                         selectedMethod === "ep" ? "bg-[#1E1E1E]" : ""
                       }`}
                       onClick={() => setSelectedMethod("ep")}
                     >
                       <img
                         src={EasyPaisa}
                         alt="easypaisa-logo"
                         className="w-6 h-6 mr-3"
                       />
                       <span>Easypaisa</span>
                     </div>
                    <div
                       className={`p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C] ${
                         selectedMethod === "jz" ? "bg-[#1E1E1E]" : ""
                       }`}
                       onClick={() => setSelectedMethod("jz")}
                     >
                       <img
                         src={Jazzcash}
                         alt="jazzcash-logo"
                         className="w-6 h-6 mr-3"
                       />
                       <span>Jazzcash</span>
                     </div> */}

                   </div>

        </div>

        {/* Deposit Instructions Column */}
        <div className="w-full lg:w-2/3 p-6">
          <div className="w-full max-w-md bg-[#2C2C2C] rounded-lg mx-2 space-y-1">
            {/* 2. Make a payment */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">
                How to Make a Withdrawal Using Bank Transfer
              </h2>
              <div className="bg-yellow-600/20 text-yellow-400 p-3 rounded-lg text-sm">
                <p>•Click Continue to enter bank details for withdrawal..</p>
                <p className="mt-2">
                  • Open your online banking in a new tab and initiate a
                  transfer to your registered bank account.
                </p>
                <p className="mt-2">
                  • Ensure you use ONLY the provided bank details. Aone is not
                  responsible for funds sent to the wrong account.
                </p>
              </div>
            </div>

            <div className="flex justify-between gap-1 py-2">
              <button
                type="button"
                onClick={handleback}
                className="w-1/2 sm:w-auto bg-gray-700 hover:bg-gray-600 text-blue-400 px-4 py-2 rounded-lg transition"
              >
                Back
              </button>
              <Link to={"/profile/withdrawal/form"}>
                <button className="bg-gray-700 flex hover:bg-gray-500 text-blue-400 px-4 py-2   mx-1 rounded-lg transition">
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tab Bar for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#1E1E1E] border-t border-[#3C3C3C] flex justify-around py-2 text-xs">
        <button
          onClick={() => setSelectedMethod("usdt")}
          className="flex flex-col items-center text-gray-300"
        >
          <IoLogoUsd className="w-6 h-6 mb-1" />
          USDT
        </button>
        <button
          onClick={() => setSelectedMethod("bank")}
          className="flex flex-col items-center text-blue-400"
        >
          <AiFillBank className="w-6 h-6 mb-1" />
          Bank
        </button>
        <button
          onClick={() => setSelectedMethod("card")}
          className="flex flex-col items-center text-gray-300"
        >
          <BiSolidCreditCardAlt className="w-6 h-6 mb-1" />
          Card
        </button>
        <button
          onClick={() => setSelectedMethod("crypto")}
          className="flex flex-col items-center text-gray-300"
        >
          <RiSecurePaymentFill className="w-6 h-6 mb-1" />
          BNB
        </button>
        <button
          onClick={() => setSelectedMethod("eth")}
          className="flex flex-col items-center text-gray-300"
        >
          <FaEthereum className="w-6 h-6 mb-1" />
          ETH
        </button>

        {/* <button
          onClick={() => setSelectedMethod("jz")}
          className="flex flex-col items-center text-gray-300"
        >
          <img src={Jazzcash} className="w-6 h-6 mb-1" />
          Jazzcash
        </button>
        <button
          onClick={() => setSelectedMethod("ep")}
          className="flex flex-col items-center text-gray-300"
        >
          <img src={EasyPaisa} className="w-6 h-6 mb-1" />
          Easypaisa
        </button> */}

      </div>
    </div>
  );
};

export default Withdrawal;
