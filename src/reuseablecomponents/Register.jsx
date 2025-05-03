import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRegisterUserMutation } from "../redux/Comonapi";
import { Link, useNavigate } from "react-router-dom";

const city = [
  { code: "Afghanistan", name: "Afghanistan" },
  { code: "Albania", name: "Albania" },
  { code: "Algeria", name: "Algeria" },
  { code: "Andorra", name: "Andorra" },
  { code: "Angola", name: "Angola" },
  { code: "Antigua and Barbuda", name: "Antigua and Barbuda" },
  { code: "Argentina", name: "Argentina" },
  { code: "Armenia", name: "Armenia" },
  { code: "Australia", name: "Australia" },
  { code: "Austria", name: "Austria" },
  { code: "Azerbaijan", name: "Azerbaijan" },
  { code: "Bahamas", name: "Bahamas" },
  { code: "Bahrain", name: "Bahrain" },
  { code: "Bangladesh", name: "Bangladesh" },
  { code: "Barbados", name: "Barbados" },
  { code: "Belarus", name: "Belarus" },
  { code: "Belgium", name: "Belgium" },
  { code: "Belize", name: "Belize" },
  { code: "Benin", name: "Benin" },
  { code: "Bhutan", name: "Bhutan" },
  { code: "Bolivia", name: "Bolivia" },
  { code: "Bosnia and Herzegovina", name: "Bosnia and Herzegovina" },
  { code: "Botswana", name: "Botswana" },
  { code: "Brazil", name: "Brazil" },
  { code: "Brunei", name: "Brunei" },
  { code: "Bulgaria", name: "Bulgaria" },
  { code: "Burkina Faso", name: "Burkina Faso" },
  { code: "Burundi", name: "Burundi" },
  { code: "Cabo Verde", name: "Cabo Verde" },
  { code: "Cambodia", name: "Cambodia" },
  { code: "Cameroon", name: "Cameroon" },
  { code: "Canada", name: "Canada" },
  { code: "Central African Republic", name: "Central African Republic" },
  { code: "Chad", name: "Chad" },
  { code: "Chile", name: "Chile" },
  { code: "China", name: "China" },
  { code: "Colombia", name: "Colombia" },
  { code: "Comoros", name: "Comoros" },
  { code: "Congo (Brazzaville)", name: "Congo (Brazzaville)" },
  { code: "Congo (Kinshasa)", name: "Congo (Kinshasa)" },
  { code: "Costa Rica", name: "Costa Rica" },
  { code: "Croatia", name: "Croatia" },
  { code: "Cuba", name: "Cuba" },
  { code: "Cyprus", name: "Cyprus" },
  { code: "Czech Republic", name: "Czech Republic" },
  { code: "Denmark", name: "Denmark" },
  { code: "Djibouti", name: "Djibouti" },
  { code: "Dominica", name: "Dominica" },
  { code: "Dominican Republic", name: "Dominican Republic" },
  { code: "Ecuador", name: "Ecuador" },
  { code: "Egypt", name: "Egypt" },
  { code: "El Salvador", name: "El Salvador" },
  { code: "Equatorial Guinea", name: "Equatorial Guinea" },
  { code: "Eritrea", name: "Eritrea" },
  { code: "Estonia", name: "Estonia" },
  { code: "Eswatini", name: "Eswatini" },
  { code: "Ethiopia", name: "Ethiopia" },
  { code: "Fiji", name: "Fiji" },
  { code: "Finland", name: "Finland" },
  { code: "France", name: "France" },
  { code: "Gabon", name: "Gabon" },
  { code: "Gambia", name: "Gambia" },
  { code: "Georgia", name: "Georgia" },
  { code: "Germany", name: "Germany" },
  { code: "Ghana", name: "Ghana" },
  { code: "Greece", name: "Greece" },
  { code: "Grenada", name: "Grenada" },
  { code: "Guatemala", name: "Guatemala" },
  { code: "Guinea", name: "Guinea" },
  { code: "Guinea-Bissau", name: "Guinea-Bissau" },
  { code: "Guyana", name: "Guyana" },
  { code: "Haiti", name: "Haiti" },
  { code: "Honduras", name: "Honduras" },
  { code: "Hungary", name: "Hungary" },
  { code: "Iceland", name: "Iceland" },
  { code: "India", name: "India" },
  { code: "Indonesia", name: "Indonesia" },
  { code: "Iran", name: "Iran" },
  { code: "Iraq", name: "Iraq" },
  { code: "Ireland", name: "Ireland" },
  { code: "Israel", name: "Israel" },
  { code: "Italy", name: "Italy" },
  { code: "Jamaica", name: "Jamaica" },
  { code: "Japan", name: "Japan" },
  { code: "Jordan", name: "Jordan" },
  { code: "Kazakhstan", name: "Kazakhstan" },
  { code: "Kenya", name: "Kenya" },
  { code: "Kiribati", name: "Kiribati" },
  { code: "Kuwait", name: "Kuwait" },
  { code: "Kyrgyzstan", name: "Kyrgyzstan" },
  { code: "Laos", name: "Laos" },
  { code: "Latvia", name: "Latvia" },
  { code: "Lebanon", name: "Lebanon" },
  { code: "Lesotho", name: "Lesotho" },
  { code: "Liberia", name: "Liberia" },
  { code: "Libya", name: "Libya" },
  { code: "Liechtenstein", name: "Liechtenstein" },
  { code: "Lithuania", name: "Lithuania" },
  { code: "Luxembourg", name: "Luxembourg" },
  { code: "Madagascar", name: "Madagascar" },
  { code: "Malawi", name: "Malawi" },
  { code: "Malaysia", name: "Malaysia" },
  { code: "Maldives", name: "Maldives" },
  { code: "Mali", name: "Mali" },
  { code: "Malta", name: "Malta" },
  { code: "Marshall Islands", name: "Marshall Islands" },
  { code: "Mauritania", name: "Mauritania" },
  { code: "Mauritius", name: "Mauritius" },
  { code: "Mexico", name: "Mexico" },
  { code: "Micronesia", name: "Micronesia" },
  { code: "Moldova", name: "Moldova" },
  { code: "Monaco", name: "Monaco" },
  { code: "Mongolia", name: "Mongolia" },
  { code: "Montenegro", name: "Montenegro" },
  { code: "Morocco", name: "Morocco" },
  { code: "Mozambique", name: "Mozambique" },
  { code: "Myanmar", name: "Myanmar" },
  { code: "Namibia", name: "Namibia" },
  { code: "Nauru", name: "Nauru" },
  { code: "Nepal", name: "Nepal" },
  { code: "Netherlands", name: "Netherlands" },
  { code: "New Zealand", name: "New Zealand" },
  { code: "Nicaragua", name: "Nicaragua" },
  { code: "Niger", name: "Niger" },
  { code: "Nigeria", name: "Nigeria" },
  { code: "North Korea", name: "North Korea" },
  { code: "North Macedonia", name: "North Macedonia" },
  { code: "Norway", name: "Norway" },
  { code: "Oman", name: "Oman" },
  { code: "Pakistan", name: "Pakistan" },
  { code: "Palau", name: "Palau" },
  { code: "Palestine", name: "Palestine" },
  { code: "Panama", name: "Panama" },
  { code: "Papua New Guinea", name: "Papua New Guinea" },
  { code: "Paraguay", name: "Paraguay" },
  { code: "Peru", name: "Peru" },
  { code: "Philippines", name: "Philippines" },
  { code: "Poland", name: "Poland" },
  { code: "Portugal", name: "Portugal" },
  { code: "Qatar", name: "Qatar" },
  { code: "Romania", name: "Romania" },
  { code: "USA", name: "United States" },
  { code: "UK", name: "United Kingdom" },
  { code: "UAE", name: "United Arab Emirates" }
]
 

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
