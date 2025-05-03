import { useState } from "react";
import { AiFillBank } from "react-icons/ai";
import { BiSolidCreditCardAlt } from "react-icons/bi";
import { Copy } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { IoLogoUsd } from "react-icons/io5";
import { FaEthereum } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import Ethrium from "../../../assets/images/eth_orbital-dark.png";
import USDT from "../../../assets/images/usdt_orbital-dark.png";
import Binance from "../../../assets/images/binance-dark.png";
import Creditcard from "../../../assets/images/mastercard-dark.png";
import Localbank from "../../../assets/images/local-bank-dark.png";
import QRCode from "../../../assets/images/qrcode.jpeg"; // You'll need to add this image

const USDTtest = () => {
  const [copied, setCopied] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("usdt");

  const handleCopyAll = () => {
    const textToCopy = `USDT Address (TRC20): TPYvs3aeeCbKZNKHwWTHSijxZhxRi1Z9rF
Network: TRC20
Note: Send only USDT tokens on TRC20 network`;

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
      <div className="w-full max-w-4xl border-2 border-gray-600 flex flex-col lg:flex-row overflow-hidden">
        {/* Deposit Methods Column (hidden on mobile, shown as tabbar) */}
        <div className="hidden lg:block w-1/3 border-r border-gray-600">
          <div className="p-2 border-b border-gray-600">
            <h2 className="text-xl font-bold">Deposit</h2>
          </div>
          <div className="divide-y divide-gray-600">
            <div
              className={`p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C] ${
                selectedMethod === "usdt" ? "bg-[#1E1E1E]" : ""
              }`}
              onClick={() => setSelectedMethod("usdt")}
            >
              <img src={USDT} alt="aone" className="w-6 h-6 mr-3" />
              <span>USDT</span>
            </div>
            <div
              className={`p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C] ${
                selectedMethod === "bank" ? "bg-[#1E1E1E]" : ""
              }`}
              onClick={() => setSelectedMethod("bank")}
            >
              <img src={Localbank} alt="aone" className="w-6 h-6 mr-3" />
              <span>Local Bank Transfer</span>
            </div>
            <div
              className={`p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C] ${
                selectedMethod === "card" ? "bg-[#1E1E1E]" : ""
              }`}
              onClick={() => setSelectedMethod("card")}
            >
              <img src={Creditcard} alt="aone" className="w-6 h-6 mr-3" />
              <span>Credit/Debit Card</span>
            </div>
            <div
              className={`p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C] ${
                selectedMethod === "crypto" ? "bg-[#1E1E1E]" : ""
              }`}
              onClick={() => setSelectedMethod("crypto")}
            >
              <img src={Binance} alt="aone" className="w-6 h-6 mr-3" />
              <span>Crypto Payment</span>
            </div>
            <div
              className={`p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C] ${
                selectedMethod === "eth" ? "bg-[#1E1E1E]" : ""
              }`}
              onClick={() => setSelectedMethod("eth")}
            >
              <img src={Ethrium} alt="aone" className="w-6 h-6 mr-3" />
              <span>Ethereum</span>
            </div>
          </div>
          <button
            onClick={handleback}
            className="bg-gray-700 hover:bg-gray-500 text-blue-400 px-4 py-2 mt-80 mx-1 rounded-lg transition"
          >
            Back
          </button>
        </div>

        {/* USDT Deposit Instructions Column */}
        <div className="w-full lg:w-2/3 p-6">
          <div className="w-full max-w-md rounded-lg mx-2 space-y-1">
            {/* 1. USDT Wallet Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">
                1. Aone Pro USDT wallet address
              </h2>
              <div className="bg-[#3C3C3C] border-2 border-gray-600 rounded-lg p-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">USDT Address (TRC20)</span>
                  <span className="break-all">TPYvs3aeeCbKZNKHwWTHSijxZhxRi1Z9rF</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Network</span>
                  <span>TRC20</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Note</span>
                  <span>Send only USDT tokens on TRC20 network</span>
                </div>
                
                {/* QR Code */}
                <div className="flex justify-center py-2">
                  <img src={QRCode} alt="USDT Wallet QR Code" className="w-48 h-48" />
                </div>
              </div>
              <button
                onClick={handleCopyAll}
                className="w-full bg-blue-600 text-white h-10 rounded-lg flex items-center justify-center hover:bg-blue-700 transition"
              >
                <Copy className="mr-2" />
                {copied ? "Copied!" : "Copy address"}
              </button>
            </div>

            {/* 2. Make a payment */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">
                2. Send USDT using your crypto wallet
              </h2>
              <div className="bg-yellow-600/20 text-yellow-400 p-3 rounded-lg text-sm">
                <p>
                  • Please use ONLY the TRC20 network for your transfer. Other networks are not supported.
                </p>
                <p className="mt-2">
                  • Double-check the address before sending. Wrong addresses cannot be recovered.
                </p>
                <p className="mt-2">
                  • Minimum deposit amount: 10 USDT
                </p>
              </div>
            </div>

            {/* 3. Confirm Payment */}
            <div className="space-y-4">
              <h2 className="text-xl my-2 font-semibold">
                3. Have you sent USDT? Then confirm it
              </h2>
              <Link to="/profile/wallet/deposit/money">
                <button className="w-full h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Yes, I sent USDT
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
          className="flex flex-col items-center text-blue-400"
        >
          <IoLogoUsd className="w-6 h-6 mb-1" />
          USDT
        </button>
        <button
          onClick={() => setSelectedMethod("bank")}
          className="flex flex-col items-center text-gray-300"
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
      </div>
    </div>
  );
};

export default USDTtest;