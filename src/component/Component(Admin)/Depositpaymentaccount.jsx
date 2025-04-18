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

const Depositpaymentaccount = () => {
  const [copied, setCopied] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("bank");

  const handleCopyAll = () => {
    const textToCopy = `A/c no: 13347900396403
  Branch: HABIB BANK LTD. (HBL)
  Name: Shafi Trader
  Payment Reference: Others or Miscellaneous;`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const navigate = useNavigate();
  const handleback = () => {
    navigate(-1);
  };

  return (
    <div className="lg:min-h-screen p-4 text-white flex flex-col lg:flex-row items-center justify-center">
      <div className="w-full max-w-4xl border-2 border-[#2C2C2C] bg-[#2C2C2C] flex flex-col lg:flex-row overflow-hidden">
        {/* Deposit Methods Column (hidden on mobile, shown as tabbar) */}
        <div className="hidden lg:block w-1/3 border-r border-[#3C3C3C]">
          <div className="p-2 border-b border-[#3C3C3C]">
            <h2 className="text-xl font-bold">Deposit</h2>
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
          <div className="w-full max-w-md  rounded-lg mx-2 space-y-1">
            {/* 1. FxPro Partner's Account Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">
                1. Aone Pro partner's account information
              </h2>
              <div className="bg-[#3C3C3C] rounded-lg p-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">A/c no</span>
                  <span>13347900396403</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Branch</span>
                  <span>HABIB BANK LTD. (HBL)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Name</span>
                  <span>Shafi Trader</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Payment Reference</span>
                  <span>Others or Miscellaneous</span>
                </div>
              </div>
              <button
                onClick={handleCopyAll}
                className="w-full bg-blue-600 text-white h-10 rounded-lg flex items-center justify-center hover:bg-blue-700 transition"
              >
                <Copy className="mr-2" />
                {copied ? "Copied!" : "Copy all"}
              </button>
            </div>

            {/* 2. Make a payment */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">
                2. Make a payment using your banking app or ATM
              </h2>
              <div className="bg-yellow-600/20 text-yellow-400 p-3 rounded-lg text-sm">
                <p>
                  • Please carefully note the Bank and Payment Reference in your
                  transfer as this will help ensure your funds are correctly
                  allocated.
                </p>
                <p className="mt-2">
                  • If the details provided are incorrect, your deposit may be
                  delayed or rejected. Aone Pro reserves the right to ask
                  additional information and/or supporting documentation.
                </p>
              </div>
            </div>

            {/* 3. Confirm Payment */}
            <div className="space-y-4">
              <h2 className="text-xl my-2 font-semibold">
                3. Have you made a payment? Then confirm it
              </h2>
              <Link to={"/profile/wallet/deposit/money"}>
                <button className="w-full h-10 bg-blue-600 text-white  rounded-lg hover:bg-blue-700 transition">
                  Yes, I made a payment
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

export default Depositpaymentaccount;
