import React, { useState } from 'react'
import { ClipboardCopy } from 'lucide-react';
import TRCcode from "../../../assets/images/Trcbarcode.jpeg"
const USDTdeposit = () => {

    const [copied, setCopied] = useState(false);
  
    const handleCopyAll = () => {
      const textToCopy = `TUHcjoxUL9rnUmZC8tuuCmGotJDDheTNzG`;
  
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    };
  return (
    <div className=" text-white p-6 rounded-md w-full max-w-xl space-y-6">
    {/* Wallet Address Box */}
    <img src={TRCcode} alt="Aone" className='w-48 h-48  mx-auto' />
    <div>
      <label className="text-sm text-gray-400 mb-1 block">USDT Wallet Address</label>
      <div className="flex items-center justify-between border-2 border-dashed border-blue-400 bg-[#2C2C2E] rounded px-4 py-3 text-sm font-mono">
        <span className="break-all" onClick={handleCopyAll}>TUHcjoxUL9rnUmZC8tuuCmGotJDDheTNzG</span>
        <button className="text-blue-400 hover:text-blue-500 ml-4">
          <ClipboardCopy className="w-5 h-5" />
        </button>
      </div>
    </div>

    <hr className="border-gray-600" />

    {/* Warnings */}
    <div className="space-y-3 text-sm text-gray-300">
      <div className="flex items-start space-x-2">
        <span className="text-yellow-400">⚠️</span>
        <span>Only send USDT to this address & network</span>
      </div>
      <div className="flex items-start space-x-2">
        <span className="text-gray-400">⏳</span>
        <span>Deposit processing time may vary depending on the blockchain confirmation</span>
      </div>
      <div className="flex items-start space-x-2">
        <span className="text-gray-300">🔄</span>
        <span>You can reuse this Wallet address and network for future deposits to your Aone Wallet</span>
      </div>
    </div>
  </div>
        
  )
}

export default USDTdeposit





