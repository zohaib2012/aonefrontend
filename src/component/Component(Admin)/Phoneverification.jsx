import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSendPhoneCodeMutation } from "../../redux/smsverification";
import CryptoJS from "crypto-js";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "../../index.css";

const secretKey = "aone-junaid";

const PhoneVerification = () => {
  const [sendPhoneCode, { isError, isLoading, error, isSuccess }] =
    useSendPhoneCodeMutation();

  const navigate = useNavigate();
  const location = useLocation();
  const checkState = location.state;

  const encryptedUser = localStorage.getItem("user");
  const decryptedUser = encryptedUser
    ? JSON.parse(
        CryptoJS.AES.decrypt(encryptedUser, secretKey).toString(
          CryptoJS.enc.Utf8
        )
      )
    : null;
  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    if (checkState !== true) {
      alert("Something Went Wrong. Please try again. ");
      navigate("/profile/personalDetail");
      setHasNavigated(true);
    }
  }, [checkState, navigate, hasNavigated]);
  const userId = decryptedUser?._id || "";
  const [formData, setFormData] = useState({
    userId: userId,
    phone_number: "",
  });

  const handleChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      phone_number: value,
    }));
  };

  useEffect(() => {
    const input = document.querySelector('input[type="tel"]');
    if (input) {
      input.classList.add("custom-tel-input");
    }
  }, []);
  const isFormValid = (formData.phone_number || "").trim() !== "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await sendPhoneCode(formData).unwrap();
      navigate("/profile/sms/verification", { state: { formData } });
    } catch (err) {
      console.error("Failed to send verification code:", err);
    }
  };

  return (
    <div className="bg-[#23282B] lg:min-h-screen flex items-center justify-center py-40 lg:p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-[#23282B]">
        {isSuccess && (
          <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            Verification code sent successfully!
          </div>
        )}
        {isError && (
          <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            Error: {error?.data?.message || "Failed to send verification code."}
          </div>
        )}
        <h2 className="text-white text-2xl font-semibold text-center py-4">
          Phone Verification
        </h2>

        <div className="px-4 pb-4">
          <PhoneInput
            international
            defaultCountry="PK"
            value={formData.phone_number}
            onChange={handleChange}
            className="w-full rounded p-3 bg-[#1E1E1E]"
            placeholder="Enter Phone Number"
            required
          />
        </div>

        <div className="px-4 w-full pb-4 flex justify-center">
          <button
            type="submit"
            disabled={!isFormValid || isLoading}
            className={`w-full ${
              !isFormValid || isLoading
                ? "bg-gray-500 text-white p-3 rounded cursor-not-allowed"
                : "bg-gray-600 text-white p-3 rounded hover:bg-gray-700 transition duration-300"
            }`}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PhoneVerification;
