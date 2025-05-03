import React from 'react'
import { Link} from "react-router-dom";
const Binancedeposit = () => {
    return (
        <>
            <h3 className="text-xl font-bold mb-4">
                How to make a deposit using bank transfer
            </h3>

            <ol className="space-y-3 mb-6 text-gray-300">
                <li>1. Click continue to view our beneficiary bank details</li>
                <li>
                    2. Open your online banking in a new tab and initiate a transfer using
                    the provided credentials
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

            <Link to="/profile/wallet/deposit/localbank/account">
                <button className="w-full h-12 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                    Continue
                </button>
            </Link>

            <div className="text-center text-sm text-gray-400 mt-2">
                Your bank may apply an administrative fee. Aone commission fee - 0%
            </div>
        </>
    )
}

export default Binancedeposit