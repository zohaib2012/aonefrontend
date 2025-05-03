
import { useState } from "react";
import { AiFillBank } from "react-icons/ai";
import { BiSolidCreditCardAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useSendMoneyMutation } from "../../redux/Depositmoney";
import { IoLogoUsd } from "react-icons/io5";
import { FaEthereum } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
// import EasyPaisa from "../../assets/images/Easypaisa-logo.png";
// import Jazzcash from "../../assets/images/jazzcash-logo.jpeg";

const TransactionConfirmationForm = () => {
  
  // const userDetail = JSON.parse(localStorage.getItem("user"));
  // const user = userDetail._id;


  const [selectedMethod, setSelectedMethod] = useState("bank");

  const [formData, setFormData] = useState({
    user: user,
    amount: "",
    date: "",
    images: null,
  });

  // API mutation hook
  const [sendMoney, { isLoading, isSuccess, isError, error }] =
    useSendMoneyMutation();

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const selectedimage = e.target.files[0];
    if (selectedimage && selectedimage.size <= 10 * 1024 * 1024) {
      setFormData((prev) => ({
        ...prev,
        images: selectedimage,
      }));
    } else {
      alert("File size must be max 10 MB");
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object for file upload
    const submitData = new FormData();
    submitData.append("user", formData.user);
    submitData.append("amount", formData.amount);
    submitData.append("date", formData.date);
    if (formData.images) {
      submitData.append("images", formData.images);
    } else {
      console.log("formdata is not a file");
    }

    try {
      await sendMoney(submitData).unwrap();
      // Reset form on success if needed

      if (isSuccess) {
        setFormData({
          amount: "",
          date: "",
          images: null,
        });
      }
    } catch (err) {
      console.error("Failed to submit transaction:", err);
    }
  };

  const handleBack = () => {
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
          {/* <div className="divide-y divide-[#3C3C3C]">
            <div className="p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C]">
              <IoLogoUsd className="w-6 h-6 mr-3" />
              <span>USDT</span>
            </div>
            <div className="p-2 flex items-center cursor-pointer bg-[#1E1E1E]">
              <AiFillBank className="w-6 h-6 mr-3" />
              <span>Local Bank Transfer</span>
            </div>
            <div className="p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C]">
              <BiSolidCreditCardAlt className="w-6 h-6 mr-3" />
              <span>Credit/Debit Card</span>
            </div>
            <div className="p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C]">
              <RiSecurePaymentFill className="w-6 h-6 mr-3" />
              <span>Crypto Payment</span>
            </div>
            <div className="p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C]">
              <FaEthereum className="w-6 h-6 mr-3" />
              <span>Ethereum</span>
            </div>
            <div className="p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C]">
              <img
                src={EasyPaisa}
                alt="easypaisa-logo"
                className="w-6 h-6 mr-3"
              />
              <span>Easypaisa</span>
            </div>
            <div className="p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C]">
              <img
                src={Jazzcash}
                alt="jazzcash-logo"
                className="w-6 h-6 mr-3"
              />
              <span>Jazzcash</span>
            </div>
          </div> */}
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

          <button
            onClick={handleBack}
            className="bg-gray-700 hover:bg-gray-500 text-blue-400 px-4 py-2 mt-52 mx-1 rounded-lg transition"
          >
            Back
          </button>
        </div>

        {/* Deposit Instructions Column */}
        <div className="w-full lg:w-2/3 ">
          <form
            onSubmit={handleSubmit}
            className=" w-full max-w-md mx-auto p-4"
          >
            <h2 className="text-white text-xl font-semibold mb-6">
              Transaction confirmation
            </h2>

            {/* Success message */}
            {isSuccess && (
              <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                Transaction submitted successfully!
              </div>
            )}

            {/* Error message */}
            {isError && (
              <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                Error: {error?.data?.message || "Failed to submit transaction"}
              </div>
            )}

            {/* Amount & Date side by side on larger screens */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              {/* Amount */}
              <div className="mb-4 w-full">
                <label className="text-gray-300 text-sm mb-2 block">
                  Exact deposit amount
                </label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="w-full h-12 bg-[#1E1E1E] text-white px-4 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter amount"
                  required
                />
                <p className="text-xs text-gray-400 mt-1">
                  Within 17000 - 3000000 range
                </p>
              </div>

              {/* Date */}
              <div className="mb-4 w-full">
                <label className="text-gray-300 text-sm mb-2 block">
                  Date of transaction
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full h-12 bg-[#1E1E1E] text-white px-4 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                  required
                />
              </div>
            </div>

            {/* File Upload */}
            <div className="mb-4">
              <label className="text-gray-300 text-sm mb-2 block">
                Attach proof of transaction (receipt, statement or screenshot)
              </label>
              <div className="border-2 border-dashed border-blue-400 hover:bg-gray-900 rounded-lg p-6 text-center">
                <input
                  type="file"
                  id="file-upload"
                  name="images"
                  onChange={handleFileChange}
                  accept="image/*,application/pdf"
                  className="hidden"
                  required
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <div className="text-gray-400 mb-2 text-2xl">📁</div>
                  <p className="text-gray-400">
                    Drop your files here to upload
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Supports PDF, JPEG or PNG files. Max size 10 MB.
                  </p>
                  <div
                    type="button"
                    className="mt-4 bg-blue-600 hover:bg-gray-950 hover:text-white text-white px-4 py-2 rounded-lg transition h-12"
                  >
                    Choose File
                  </div>
                </label>
                {formData.images && (
                  <div className="mt-4 text-white text-sm">
                    Selected file: {formData.images.name}
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                disabled={isLoading}
                className={`${
                  isLoading ? "bg-gray-600" : "bg-blue-600 hover:bg-blue-700"
                } text-white px-6 h-12 rounded-full transition w-full sm:w-auto`}
              >
                {isLoading ? "Processing..." : "Confirm transaction"}
              </button>
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

export default TransactionConfirmationForm;

