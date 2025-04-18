import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useVerifyCodeMutation } from "../../redux/emailverification";
const CodeVerification = () => {
  const [sendCode, { isError, isLoading, error, isSuccess }] =
    useVerifyCodeMutation();
  const [formData, setFormData] = useState({
    code: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      await sendCode(formData).unwrap();
      console.log(formData);
      if (!isError) {
        setFormData({
          code: "",
        });
      }

      //   localStorage.setItem('verificationEmail', formData.email);
      navigate("/profile/uploaddocunment");
    } catch (err) {
      console.error("Failed to send verification email:", err);
      //   console.log(error)
    }
  };

  return (
    <div className="bg-[#23282B] lg:min-h-screen flex items-center justify-center py-40 lg:p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-[#23282B]">
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
        <h2 className="text-white text-2xl font-semibold text-center py-4">
          Code verification
        </h2>

        {/* Email Input */}
        <div className="px-4 pb-4">
          <input
            type="number"
            name="code"
            value={formData.code}
            onChange={handleChange}
            placeholder="Verify OTP"
            className="w-full bg-[#1E1E1E] text-white p-3 rounded border-1 hover:border-blue-500 border-gray-700 pr-10"
            required
          />
        </div>

        {/* Submit Button */}
        {/* <Link to={"/profile/number/verification"}> */}
        <div className="px-4 w-full pb-4 flex justify-center">
          <button
            type="submit"
            className={`${
              isLoading
                ? "bg-gray-500 w-full  text-white p-3 rounded hover:bg-gray-700 transition duration-300"
                : "w-full bg-gray-600 text-white p-3 rounded hover:bg-gray-700 transition duration-300"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Verifing" : "Verify"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CodeVerification;
