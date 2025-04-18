import { Check } from "lucide-react";
import { AiFillBank } from "react-icons/ai";
import { BiSolidCreditCardAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoLogoUsd } from "react-icons/io5";
import { FaEthereum } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
// import EasyPaisa from "../../assets/images/Easypaisa-logo.png";
// import Jazzcash from "../../assets/images/jazzcash-logo.jpeg";

const DepositPaymentmethod = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("bank");

  const handleback = () => {
    navigate(-1);
  };
  

  return (
    <div className="lg:min-h-screen p-4 text-white flex flex-col lg:flex-row items-center justify-center">
      <div className="w-full max-w-4xl border-2 border-[#2C2C2C] bg-[#2C2C2C] flex flex-col lg:flex-row overflow-hidden">
        {/* Deposit Methods Column (hidden on mobile, shown as tabbar) */}
        <div className="hidden lg:block w-1/3 border-r border-[#3C3C3C]">
          <div className="p-2 border-b border-[#3C3C3C]">
            <h2 className="text-xl font-bold ">Deposit</h2>
          </div>

   <div className="divide-y divide-[#3C3C3C]">
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

          <button
            onClick={handleback}
            className="bg-gray-700 hover:bg-gray-500 text-blue-400 px-4 py-2 mt-52 mx-1 rounded-lg transition"
          >
            Back
          </button>
        </div>

        {/* Deposit Instructions Column */}
        <div className="w-full lg:w-2/3 p-6">
          <div className="bg-green-600/20 text-green-400 p-3 rounded-lg mb-4 flex items-center">
            <Check className="mr-2" />
            <span>The connection is secured</span>
          </div>

          <h3 className="text-xl font-bold mb-4">
            How to make a deposit using bank transfer
          </h3>

          <ol className="space-y-3 mb-6 text-gray-300">
            <li>1. Click continue to view our beneficiary bank details</li>
            <li>
              2. Open your online banking in a new tab and initiate a transfer
              using the provided credentials
            </li>
            <li>
              3. Use ONLY the provided bank details. Aone is not responsible if
              funds are sent to the wrong account
            </li>
          </ol>

          <p className="text-sm text-gray-400 mb-4">
            You may also complete the transfer via a local bank branch or ATM.
          </p>

          <div className="mb-4 text-sm text-gray-400">
            <p>Average deposit processing time:</p>
            <p className="text-white">2 hours (up to 3 working days)</p>
          </div>

          <Link to={"/profile/wallet/deposit/account"}>
            <button className="w-full h-12 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Continue 
            </button>
          </Link>

          <div className="text-center text-sm text-gray-400 mt-2">
            Your bank may apply an administrative fee. Aone commission fee - 0%
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

export default DepositPaymentmethod;
