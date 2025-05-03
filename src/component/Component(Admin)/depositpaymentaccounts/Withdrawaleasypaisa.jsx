

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Withdrawaleasypaisa = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="w-full lg:w-full p-6 ">
        <div className="w-full max-w-md bg-[#2C2C2C] rounded-lg mx-2 space-y-6">
          {/* 2. Make a payment */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">
              How to Make a Withdrawal Using Bank Transfer
            </h2>
            <div className="bg-yellow-600/20 text-yellow-400 p-3 rounded-lg text-sm">
              <p>• Click Continue to enter bank details for withdrawal.</p>
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

          <div className="flex justify-between gap-2 py-2">
            <button
              type="button"
              onClick={handleBack}
              className="w-1/2 bg-gray-700 hover:bg-gray-600 text-blue-400 px-4 py-2 rounded-lg transition"
            >
              Back
            </button>
            <Link to="/profile/withdrawal/easypaisa/account" className="w-1/2">
              <button className="w-full bg-gray-700 hover:bg-gray-500 text-blue-400 px-4 py-2 rounded-lg transition">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdrawaleasypaisa;
