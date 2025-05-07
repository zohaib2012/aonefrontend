import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useVerifyPhoneCodeMutation } from "../../redux/smsverification";

const CodeVerification = () => {
  const location = useLocation();
  const phoneDetailData = location.state;
  const { userId, phone_number } = phoneDetailData.formData;
  const navigate = useNavigate();
  const [hasNavigated, setHasNavigated] = useState(false);
  useEffect(() => {
    if (!phoneDetailData) {
      alert("Please fill in your personal data first!");
      navigate("/profile");
      setHasNavigated(true);
    }
  }, [phoneDetailData]);

  const [formData, setFormData] = useState({ otp: "" });
  const [otpError, setOtpError] = useState("");

  const [verifyCode, { isError, isLoading, error, isSuccess }] =
    useVerifyPhoneCodeMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setOtpError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.otp.trim().length !== 6) {
      setOtpError("OTP must be exactly 6 digits.");
      return;
    }

    const requestData = {
      userId,
      phone_number,
      otp: formData.otp,
    };

    try {
      await verifyCode(requestData).unwrap();
      setFormData({ otp: "" });
      navigate("/profile/uploaddocunment", { state: true });
    } catch (err) {
      console.error("Failed to verify OTP:", err);
    }
  };

  return (
    <div className="bg-[#23282B] lg:min-h-screen flex items-center justify-center py-40 lg:p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-[#23282B]">
        {isSuccess && (
          <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            Code verified successfully!
          </div>
        )}

        {isError && (
          <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            Error: {error?.data?.message || "Verification failed"}
          </div>
        )}

        <h2 className="text-white text-2xl font-semibold text-center py-4">
          Code Verification
        </h2>

        <div className="px-4 pb-2">
          <input
            type="number"
            name="otp"
            value={formData.otp}
            onChange={handleChange}
            placeholder="Enter 6-digit OTP"
            className="w-full bg-[#1E1E1E] text-white p-3 rounded border hover:border-blue-500 border-gray-700"
            required
          />
          {otpError && <p className="text-red-500 text-sm mt-2">{otpError}</p>}
        </div>

        <div className="px-4 w-full pb-4 flex justify-center">
          <button
            type="submit"
            className="w-full bg-gray-600 text-white p-3 rounded hover:bg-gray-700 transition duration-300"
          >
            {isLoading ? "Verifying..." : "Verify"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CodeVerification;
