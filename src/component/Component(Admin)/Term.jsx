import { useState, createRef } from "react";
import { AiFillBank } from "react-icons/ai";
import { BiSolidCreditCardAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useSendMoneyMutation } from "../../redux/Transactionapi";
// import { useSendMoneyMutation } from '../../redux/Transactionapi';

const Term = () => {
  // Form state
  const fileInput = createRef();
  const [formData, setFormData] = useState({
    amount: "",
    date: "",
    file: null,
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
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= 10 * 1024 * 1024) {
      setFormData((prev) => ({
        ...prev,
        file: selectedFile,
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
    console.log(formData.file);
    submitData.append("amount", formData.amount);
    submitData.append("date", formData.date);
    if (formData.file) {
      submitData.append("image", formData.file);
    }

    try {
      await sendMoney(submitData).unwrap();
      // Reset form on success if needed

      if (isSuccess) {
        setFormData({
          amount: "",
          date: "",
          file: null,
        });
      }
      navigate("");
    } catch (err) {
      console.error("Failed to submit transaction:", err);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen p-4 bg-[#1E1E1E] text-white flex items-center justify-center ">
      <div className="w-full max-w-4xl border-2 border-[#2C2C2C] flex bg-[#2C2C2C] rounded-lg overflow-hidden shadow-lg">
        {/* Deposit Methods Column */}
        <div className="w-1/3 border-2 p-2 border-r border-[#3C3C3C]">
          <div className="p-4 border-b border-[#3C3C3C]">
            <h2 className="text-xl font-bold">Deposit</h2>
          </div>

          <div className="divide-y divide-[#3C3C3C]">
            {/* USDT Method */}
            <div className="p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C]">
              <IoLogoUsd className="w-6 h-6 mr-3" />
              <span>USDT</span>
            </div>

            {/* Local Bank Transfer Method */}
            <div className="p-2 flex items-center cursor-pointer bg-[#1E1E1E]">
              <AiFillBank className="w-6 h-6 mr-3 rounded-full" />
              <span>Local Bank Transfer</span>
            </div>

            {/* Credit/Debit Card Method */}
            <div className="p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C]">
              <div className="flex mr-3">
                <BiSolidCreditCardAlt className="w-6 h-6" />
              </div>
              <span>Credit/Debit Card</span>
            </div>

            {/* Crypto Payment Method */}
            <div className="p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C]">
              <div className="flex mr-3">
                <img
                  src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png"
                  alt="Binance icon"
                  className="w-6 h-6 -mr-1 rounded-full"
                />
              </div>
              <span>Crypto Payment</span>
            </div>

            {/* Ethereum Method */}
            <div className="p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C]">
              <FaEthereum className="w-6 h-6 mb-1" />
              <span>Ethereum</span>
            </div>
          </div>
        </div>

        <div className="w-2/3 px-10 py-3">
          <form
            onSubmit={handleSubmit}
            className="bg-[#2C2C2C] rounded-lg shadow-lg w-full max-w-md p-6"
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

            <div className="flex justify-center space-x-5">
              <div className="mb-4">
                <label className="text-gray-300 text-sm mb-2 block">
                  Exact deposit amount
                </label>
                <div className="flex">
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    min="17000"
                    max="3000000"
                    className="w-52 bg-[#1E1E1E] text-white p-3 rounded-lg border-1 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter amount"
                    required
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Within 17000 - 3000000 range
                </p>
              </div>

              <div className="mb-4">
                <label className="text-gray-300 text-sm mb-2 block">
                  Date of transaction
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-[#1E1E1E] text-white p-3 rounded-lg border-1 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-gray-300 text-sm mb-2 block">
                Attach proof of transactions (receipt, statement or screenshot)
              </label>
              <div className="border-2 border-dashed hover:bg-gray-900 border-blue-400 rounded-lg p-6 text-center">
                <input
                  type="file"
                  id="file-upload"
                  name="file"
                  ref={fileInput}
                  onChange={handleFileChange}
                  accept=".pdf,.jpeg,.jpg,.png"
                  className="hidden"
                  required
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <div className="text-gray-400 mb-2">📁</div>
                  <p className="text-gray-400">
                    Drop your files here to upload
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Support PDF, JPEG or PNG files. Maximum file size 10 MB.
                  </p>
                  <button
                    type="button"
                    className="mt-4 bg-blue-600 hover:bg-gray-950 hover:text-white text-white px-4 py-2 rounded-lg transition"
                  >
                    Choose File
                  </button>
                </label>
                {formData.file && (
                  <div className="mt-4 text-white">
                    Selected file: {formData.file.name}
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={handleBack}
                className="bg-gray-700 hover:bg-gray-500 text-blue-400 px-4 py-2 rounded-lg transition"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className={`${
                  isLoading ? "bg-gray-600" : "bg-blue-600 hover:bg-blue-700"
                } text-white px-6 py-2 rounded-full transition`}
              >
                {isLoading ? "Processing..." : "Confirm transaction"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Term;
