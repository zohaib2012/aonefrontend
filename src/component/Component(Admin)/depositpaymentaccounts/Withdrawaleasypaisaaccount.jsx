import { useState } from "react";
import { AiFillBank } from "react-icons/ai";
import { BiSolidCreditCardAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { IoLogoUsd } from "react-icons/io5";
import { FaEthereum } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { useWithdrawamountMutation } from "../../../redux/withdrawapi";

import CryptoJS from "crypto-js";
const secretKey = "aone-junaid";
const Withdrawaleasypaisaaccount = () => {

  // const userdetail = JSON.parse(localStorage.getItem("user"))



  const encryptedUser = localStorage.getItem("user");
  const decryptedUser = JSON.parse(
    CryptoJS.AES.decrypt(encryptedUser, secretKey).toString(CryptoJS.enc.Utf8)
  );
  const user = decryptedUser._id;
  const userEmail = decryptedUser.email;

  const [formdata, setFormData] = useState({
    user: user,
    userEmail:userEmail,
    bank: "easypaisa",
    currency: '',
    amount: '',
    account: '',
    accountno: ''

  })
  const [withdrawamount, { isLoading, isError, error, isSuccess }] = useWithdrawamountMutation()
  const [selectedMethod, setSelectedMethod] = useState("allied");

  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();
  const handleback = () => {
    navigate(-1);
  };

  const banks = [
    { "value": "easypaise", "label": "EasyPaisa" },
  ]

  const handlechange = (e) => {
    const { name, value } = e.target

    setFormData((state) => (
      {
        ...state, [name]: value
      }
    ))
  }


  const handlesubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(formdata.bank ,formdata.currency  ,formdata.amount, formdata.user, formdata.account, formdata.accountno);
    
      console.log(formdata.bank)
      const result = await withdrawamount(formdata).unwrap()
      console.log("response_______", result)

  

      if (!isError) {
        setFormData({
          bank: "",
          amount: '',
          currency: '',
          account: '',
          accountno: '',
          user: user
        })
      }
      navigate("/profile/withdrawal")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="lg:min-h-screen text-white flex flex-col lg:flex-row items-center justify-center">
      <div className="w-full max-w-4xl  flex flex-col lg:flex-row overflow-hidden">
        {/* Deposit Methods Column (hidden on mobile, shown as tabbar) */}
     
        {/* Deposit Instructions Column */}
        <div className="w-full lg:w-full">
          <form onSubmit={handlesubmit}>
            {isSuccess && (
              <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                Message sent successfully!
              </div>
            )}
            {isError && (
              <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                Error: {error?.data?.message || "Failed to send message"}
              </div>
            )}

            <div className="max-w-2xl mx-auto p-4  rounded-lg shadow-md">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-white">Withdrawal</h1>
                <a href="#" className="text-sm text-blue-500">
                  See all payment methods
                </a>
              </div>

              {/* Payment Method & Currency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-white mb-1">
                    Payment method
                  </label>
                  <div className="relative">
                    <select
                      name="bank"
                      value={formdata.bank} // Make sure this is set
                      onChange={handlechange}
                      className="w-full h-12 px-3 border-2 bg-[#1E1E1E] text-gray-300 border-gray-600 rounded appearance-none pr-8"
                    >
                      {banks.map((bank) => (
                        <option key={bank.value} value={bank.value}>
                          {bank.label}
                        </option>
                      ))}
                    </select>

                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-white mb-1">
                    Currency
                  </label>
                  <div className="relative">

                    <select
                      name="currency"
                      onChange={handlechange}
                      value={formdata.currency}
                      className="w-full h-12 px-3 border-2 bg-[#1E1E1E] text-gray-300 border-gray-600 rounded appearance-none pr-8"
                    >
                      <option value="selectcurrency">Select currency</option>
                      <option value="USD">USD</option>
                      <option value="PKR">PKR</option>
                      <option value="SAR">Riyal</option>
                    </select>

                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Banner */}
              <div className="bg-[#1E1E1E] border-dashed border-2 border-blue-400 p-4 rounded mb-6">
                <p className="font-medium text-base text-gray-400">
                  Transactions will take longer on weekends and holidays
                </p>
                <p className="text-sm text-gray-400">
                  It may take up to 2 days for the funds to arrive in your account
                  due to delays on the provider's side.
                </p>
              </div>


              {/* from account */}
              <div className="mb-6">
                <label className="block text-sm text-white mb-1">From Account</label>
                <div className="relative">
                  <input
                    type="text"
                    onChange={handlechange}
                    className="w-full h-12 px-4 border-2 border-gray-600 bg-[#1E1E1E] rounded text-white text-lg"
                    name="account"
                    value={formdata.account}
                    placeholder="Wallet/login Id"
                  />
                </div>
              </div>


              {/* account no */}
              <div className="mb-6">
                <label className="block text-sm text-white mb-1">Account No</label>
                <div className="relative">
                  <input
                    type="text"
                    onChange={handlechange}
                    className="w-full h-12 px-4 border-2 border-gray-600 bg-[#1E1E1E] rounded text-white text-lg"
                    name="accountno"
                    value={formdata.accountno}
                    placeholder="Account No"
                  />
                </div>
              </div>


              {/* Amount */}
              <div className="mb-6">
                <label className="block text-sm text-white mb-1">Amount</label>
                <div className="relative">
                  <input
                    type="Number"
                    onChange={handlechange}
                    className="w-full h-12 px-4 border-2 border-gray-600 bg-[#1E1E1E] rounded text-white text-lg"
                    name="amount"
                    value={formdata.amount}
                    placeholder="Enter amount"
                  />

                </div>
                <div className="text-xs text-gray-400 mt-1">
                  35.00 - 2,800.00
                </div>
              </div>

              {/* Summary */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm text-white">To be withdrawn</span>
              </div>

              {/* Buttons */}
              <div className="flex justify-between gap-1 ">
                <button
                  type="button"
                  onClick={handleback}
                  className="w-1/2 sm:w-auto bg-gray-700 hover:bg-gray-600 text-blue-400 px-4 py-2 rounded-lg transition"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-6 py-2 rounded ${isLoading
                    ? "bg-blue-500 cursor-not-allowed"
                    : "w-1/2 sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                    }`}
                >
                  {isLoading ? "Processing..." : "Withdraw"}
                
                
                </button>
              </div>
            </div>

          </form>

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

export default Withdrawaleasypaisaaccount;
