import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForgetPasswordMutation } from "../redux/Comonapi";

const Forgetpasword = () => {
  const [formdata, setFormdata] = useState({
    email: "",
    newPassword: "",
  });

  const [forgetPassword, { isLoading, isSuccess, isError, error }] =
    useForgetPasswordMutation();
  const navigate = useNavigate();

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormdata((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await forgetPassword(formdata).unwrap();
      console.log(response);
      if (!isError) {
        setFormdata({
          email: "",
          newPassword: "",
        });
      }
      navigate("/login");
    } catch (err) {
      console.error("Failed to verify code:", err);
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
              Update Password
            </h2>
          </div>

          {isError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <p>
                {error?.data?.message ||
                  "Failed to verify code. Please try again."}
              </p>
            </div>
          )}

          {isSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              <p>password updating sucessfully</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Code Input */}
            <div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formdata.email}
                onChange={handlechange}
                className="w-full p-3 border-b border-gray-300 
                  focus:outline-none focus:border-blue-500 
                  text-sm md:text-base"
                disabled={isLoading}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter new password"
                name="newPassword"
                value={formdata.newPassword}
                onChange={handlechange}
                className="w-full p-3 border-b border-gray-300 
                  focus:outline-none focus:border-blue-500 
                  text-sm md:text-base"
                disabled={isLoading}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white 
                py-3 rounded-lg hover:bg-blue-600 
                transition-colors text-sm md:text-base"
              disabled={isLoading}
            >
              {isLoading ? "Submiting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgetpasword;
