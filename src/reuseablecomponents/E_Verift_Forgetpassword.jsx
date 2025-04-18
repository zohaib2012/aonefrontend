import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSendCodeMutation } from "../redux/Comonapi";

const E_Verify_ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const [sendCode, { isLoading, isSuccess, isError, error }] =
    useSendCodeMutation();
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!email) errors.email = "This field is mandatory";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await sendCode({ email }).unwrap();

      navigate("/verify/code");
    } catch (err) {
      console.error("Failed to send verification email:", err);
      setFormErrors({
        ...formErrors,
        general:
          err.data?.message ||
          "Failed to send verification code. Please try again.",
      });
    }
  };

  return (
    <div className="m-3 flex container max-w-4xl mx-auto md:flex-row w-full h-auto">
      {/* Responsive Right Section */}
      <div className="my-16 w-full lg:w-max-w-7xl flex items-center justify-center relative p-4 md:p-0">
        <div className="border-2 border-black p-3 w-full max-w-md px-4 md:px-8">
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-red-500 mb-2">
              Aone
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold">
              Email Verification
            </h2>
          </div>

          {isError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <p>
                {error?.data?.message ||
                  "Failed to send verification code. Please try again."}
              </p>
            </div>
          )}

          {formErrors.general && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <p>{formErrors.general}</p>
            </div>
          )}

          {isSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              <p>Verification code sent successfully! Redirecting you...</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border-b border-gray-300 
                  focus:outline-none focus:border-blue-500 
                  text-sm md:text-base"
                disabled={isLoading}
              />
              {formErrors.email && (
                <p className="text-red-500 text-xs md:text-sm mt-1">
                  {formErrors.email}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white 
                py-3 rounded-lg hover:bg-blue-600 
                transition-colors text-sm md:text-base"
              disabled={isLoading}
            >
              {isLoading ? "Sending code..." : "Send Verification Code"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default E_Verify_ForgetPassword;
