import { useState } from "react";
import { Check, Eye, EyeOff } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateAccountMutation } from "../../redux/createaccountapi";
import { useNavigate } from "react-router-dom";

const OpenNewAccountType = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    user: user._id,
    accountType: "standard",
    leverage: "1:2",
    currency: "USD",
    password: "",
  });

  const navigate = useNavigate();
  const handleback = () => {
    navigate(-1);
  };

  const [showPassword, setShowPassword] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState("standard");
  const [createAccount, { isLoading }] = useCreateAccountMutation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAccountSelect = (accountType) => {
    setSelectedAccount(accountType);
    setFormData((prevState) => ({
      ...prevState,
      accountType,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formData.password) {
        toast.error("Please enter a password");
        return;
      }
      console.log("formdata===", formData);

      const result = await createAccount(formData).unwrap();
      toast.success("Account created successfully!");
      setFormData({
        accountType: "standard",
        leverage: "1:2",
        currency: "USD",
        password: "",
        user: user._id
      });
    } catch (error) {
      toast.error(error?.data?.message || "Failed to create account");
    }
  };

  const leverageOptions = [
    "1:2",
    "1:20",
    "1:50",
    "1:100",
    "1:200",
    "1:400",
    "1:500",
    "1:600",
    "1:800",
    "1:1100",
    "1:1200",
    "1:unlimited",
  ];

  const currencies = ["PKR", "USD", "Riyal"];

  const accountTypes = [
    {
      key: "standard",
      label: "Standard Account",
      badge: "Recommended",
      badgeColor: "bg-[#00B894]",
      desc: "Most popular! A great account for all types of traders",
      minDeposit: "10 USD",
      spread: "From 0.20",
      commission: "No commission",
    },
    {
      key: "pro",
      label: "Pro",
      badge: "Instant or market execution",
      badgeColor: "bg-gray-500",
      desc: "Zero commission and low spreads with both instant or market execution.",
      minDeposit: "500 USD",
      spread: "From 0.10",
      commission: "No commission",
    },
    {
      key: "rawSpread",
      label: "Raw spread",
      badge: "Professional",
      badgeColor: "bg-red-500",
      desc: "Low raw spreads and a low fixed commission",
      minDeposit: "500 USD",
      spread: "From 0.00",
      commission: "To 3.50 USD",
    },
    {
      key: "zero",
      label: "Zero",
      badge: "Professional",
      badgeColor: "bg-red-500",
      desc: "Get 0 spreads for 95% of the day on 30 pairs",
      minDeposit: "500USD",
      spread: "From 0.00",
      commission: "0.05 USD",
    },
    {
      key: "standardCent",
      label: "Standard Cent",
      badge: "Best",
      badgeColor: "bg-blue-500",
      desc: "Standard account with micro lots instead",
      minDeposit: "10 USD",
      spread: "From 0.30",
      commission: "From",
    },
  ];

  return (
    <div className="min-h-screen bg-[#23282B] px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button onClick={handleback} className="text-white text-2xl">
              ←
            </button>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Open New Account
            </h1>
          </div>
          <div>
            <select className="border rounded px-3 py-2 text-white bg-[#1E1E1E] border-gray-600">
              <option>MT5</option>
            </select>
          </div>
        </div>

        {/* Account Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
          {accountTypes.map((account) => (
            <div
              key={account.key}
              onClick={() => handleAccountSelect(account.key)}
              className={`
                border rounded-lg p-4 cursor-pointer relative bg-[#2C3235] transition
                ${
                  selectedAccount === account.key
                    ? "border-blue-500 ring-2 ring-blue-300"
                    : "border-gray-600"
                }
              `}
            >
              <div
                className={`absolute top-0 ${account.badgeColor} text-xs px-2 py-1 text-white rounded-br-lg`}
              >
                {account.badge}
              </div>
              <h2 className="text-xl font-bold text-center text-white mb-2">
                {account.label}
              </h2>
              <p className="text-sm text-white text-center mb-4 min-h-[48px]">
                {account.desc}
              </p>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-t border-b border-gray-500 py-1">
                  <span className="text-gray-400">Minimum deposit</span>
                  <span className="text-white">{account.minDeposit}</span>
                </div>
                <div className="flex justify-between border-b border-gray-500 py-1">
                  <span className="text-gray-400">Spread</span>
                  <span className="text-white">{account.spread}</span>
                </div>
                <div className="flex justify-between border-b border-gray-500 py-1">
                  <span className="text-gray-400">Commission</span>
                  <span className="text-white">{account.commission}</span>
                </div>
              </div>

              {selectedAccount === account.key && (
                <div className="absolute bottom-2 right-2 text-blue-500">
                  <Check size={20} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white mb-2 text-lg">
              Max leverage <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full p-2 text-white bg-[#1E1E1E] border-2 border-gray-600 rounded"
              name="leverage"
              value={formData.leverage}
              onChange={handleChange}
            >
              {leverageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-white mb-2 text-lg">
              Currency <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full p-2 text-white bg-[#1E1E1E] border-2 border-gray-600 rounded"
              name="currency"
              value={formData.currency}
              onChange={handleChange}
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-white mb-2 text-lg">
              Create a password for the account
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                name="password"
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full p-2 border-2 text-white border-gray-600 bg-[#1E1E1E] rounded"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            
            </div>
              <div className="text-gray-400 text-sm">Password must be at least 8 characters, include uppercase, lowercase, number and special character</div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full text-xl font-semibold border-2 rounded-lg px-4 py-2 transition 
              ${
                isLoading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-[#F19e03] hover:text-white"
              } 
              text-[#F19e03] border-[#F19e03] bg-[#23282B]`}
          >
            {isLoading ? "Creating account..." : "Create an account"}
          </button>
          
        </form>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
        />
      </div>
    </div>
  );
};

export default OpenNewAccountType;
