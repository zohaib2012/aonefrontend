import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../redux/Comonapi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Get the mutation hook from RTK Query
  const [loginUser, { isLoading, isSuccess, isError, error }] =
    useLoginUserMutation();
  const navigate = useNavigate();

  // Reset form and redirect after successful login
  useEffect(() => {
    if (isSuccess) {
      // You might need to save token or user data to localStorage here
      // For example: localStorage.setItem('token', response.token);
      setEmail("");
      setPassword("");
      setFormErrors({});
    }
  }, [isSuccess, navigate]);

  const validateForm = () => {
    const errors = {};
    if (!email) errors.email = "This field is mandatory";
    if (!password) errors.password = "Password is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!validateForm()) return;
    
    try {
   
    
      // Call the RTK Query mutation with the form data
      const response = await loginUser({ email, password }).unwrap();

      console.log("Login successful:", response);

      const token = response.logintoken;
      const userDetail = response.user;
      console.log(token);
      localStorage.setItem("auth token", token);
      localStorage.setItem("user", JSON.stringify(userDetail));

      // navigate("/profile")

      if (email === "zk43260139@gmail.com" && password === "aone012345") {
        navigate("/data");
      } else {
        navigate("/profile");
      }
    } catch (err) {
      console.error("Failed to login:", err);
      setFormErrors({
        ...formErrors,
        general:
          err.data?.message || "Login failed. Please check your credentials.",
      });
    }
  };

  return (
    <div className="m-3  flex container max-w-4xl mx-auto  md:flex-row w-full h-auto">
      {/* Responsive Right Section */}
      <div className="my-16 w-full  lg:w-max-w-7xl flex items-center justify-center relative p-4 md:p-0">
        <div className="border-2 border-black p-3 w-full max-w-md px-4 md:px-8">
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-red-500 mb-2">
              Aone
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold">
              Login to your Account
            </h2>
          </div>

          {isError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <p>
                {error?.data?.message ||
                  "Login failed. Please check your credentials."}
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
              <p>Login successful! Redirecting you...</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Enter your e-mail"
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

            {/* Password Input */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border-b border-gray-300 
                  focus:outline-none focus:border-blue-500 
                  pr-10 text-sm md:text-base"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2 -translate-y-1/2 px-3"
                disabled={isLoading}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
             {formErrors.password && (
                <p className="text-red-500 text-xs md:text-sm mt-1">
                  {formErrors.password}
                </p>
              )}
            </div>
            <div className="text-gray-700 text-xs">Password must be at least 8 characters, include uppercase, lowercase, number and special character</div>
              

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white 
                py-3 rounded-lg hover:bg-blue-600 
                transition-colors text-sm md:text-base"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Log In"}
            </button>

            {/* Register Link */}
            <div className="text-center mt-4 text-sm md:text-base">
              <span>Don't have an account? </span>
              <Link to="/register" className="text-blue-500 hover:underline">
                Register
              </Link>
            </div>

            <div className="text-center">
              <Link to="/verify/email" className="text-red-500 hover:underline">
                Forget password
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
