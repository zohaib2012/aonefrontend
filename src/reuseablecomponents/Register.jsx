import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRegisterUserMutation } from "../redux/Comonapi";
import { Link, useNavigate } from "react-router-dom";

const city = [
  { code: "PK", name: "Pakistan" },
  { code: "IN", name: "India" },
  { code: "CN", name: "China" },
  { code: "RU", name: "Russia" },
  { code: "US", name: "United States" },
  { code: "UK", name: "United Kingdom" },
];

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Get the mutation hook from RTK Query
  const [registerUser, { isLoading, isSuccess, isError, error }] =
    useRegisterUserMutation();

  // Reset form after successful registration
  useEffect(() => {
    if (isSuccess) {
      setEmail("");
      setPassword("");
      setCountry("");
      setFormErrors({});
    }
  }, [isSuccess]);

  const validateForm = () => {
    const errors = {};
    if (!country) errors.country = "Please select a country";
    if (!email) errors.email = "This field is mandatory";
    if (!password) errors.password = "Password is required";
    if (password && password.length < 8)
      errors.password = "Password must be at least 8 characters";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      // Call the RTK Query mutation with the form data
      await registerUser({ country, email, password }).unwrap();
      console.log("Registration request sent");
      navigate("/login");
    } catch (err) {
      console.error("Failed to register:", err);
    }
  };

  return (
    <div className="m-3  flex container max-w-4xl mx-auto  md:flex-row w-full  h-auto">
      {/* Responsive Right Section */}
      <div className=" my-16 w-full  lg:w-max-w-7xl flex items-center justify-center relative p-4 md:p-0">
        <div className="border-2 border-black p-3 w-full max-w-md px-4 md:px-8">
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-red-500 mb-2">
              Aone
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold">
              Create Your Profile
            </h2>
          </div>

          {isError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <p>
                {error?.data?.message ||
                  "Registration failed. Please try again."}
              </p>
            </div>
          )}

          {isSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              <p>Registration successful! You can now log in.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Country Dropdown */}
            <div>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full p-3 border-b border-gray-300 
                  focus:outline-none focus:border-blue-500 
                  text-sm md:text-base appearance-none"
                disabled={isLoading}
              >
                <option value="" disabled>
                  Select Your Country
                </option>
                {city.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.name}
                  </option>
                ))}
              </select>
              {formErrors.country && (
                <p className="text-red-500 text-xs md:text-sm mt-1">
                  {formErrors.country}
                </p>
              )}
            </div>

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
                placeholder="Create Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border-b border-gray-300 
                  focus:outline-none focus:border-blue-500 
                  pr-10 text-sm md:text-base"
                minLength={8}
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

            {formErrors.terms && (
              <p className="text-red-500 text-xs md:text-sm mt-1">
                {formErrors.terms}
              </p>
            )}
   <div className="text-gray-700 text-xs">Password must be at least 8 characters, include uppercase, lowercase, number and special character</div>
              
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white 
                py-3 rounded-lg hover:bg-blue-600 
                transition-colors text-sm md:text-base"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>

            {/* Login Link */}
            <div className="text-center mt-4 text-sm md:text-base">
              <span>Already have an account? </span>
              <Link to={"/login"} className="text-blue-500 hover:underline">
                Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
