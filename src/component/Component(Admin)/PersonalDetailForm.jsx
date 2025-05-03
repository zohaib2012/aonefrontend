// import { useState } from "react";
// import { useSenddetailsMutation } from "../../redux/p.detailapi";
// import { useNavigate } from "react-router-dom";
// // import { Link } from 'react-router-dom';

// const PersonalDetailsForm = () => {
//   const userdetail= JSON.parse(localStorage.getItem("user"))
//   const user =userdetail._id

//   const [Senddetails, { isSuccess, isError, error, isLoading }] =
//     useSenddetailsMutation();
//   const [formData, setFormData] = useState({
//     user:user,
//     name: "",
//     lastname: "",
//     dob: "",
//     address: "",
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target; 
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log(formData);
//       await Senddetails(formData).unwrap();

//       if (!isError) {
//         setFormData({
//           name: "",
//           lastname: "",
//           dob: "",
//           address: "",
//         });
//       }

//       navigate("/profile/email/verification");

//       console.log(formData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="bg-[#23282B]  flex items-center justify-center p-4">
//       <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-[#23282B] ">
//         {isSuccess && (
//           <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
//             Message sent successfully!
//           </div>
//         )}
//         {isError && (
//           <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//             Error: {error?.data?.message || "Failed to send message"}
//           </div>
//         )}
//         <h2 className="text-white text-2xl font-semibold text-center py-4">
//           Edit Personal Details
//         </h2>

//         {/* First Name */}
//         <div className="px-4 pb-4">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="First name"
//             className="w-full h-14 bg-[#1E1E1E] text-white p-3 rounded border-1 hover:border-blue-500 border-gray-700 pr-10"
//             required
//           />
//           {/* <p className="text-red-600 text-xs mt-1">This field is mandatory.</p> */}
//         </div>

//         {/* Last Name */}
//         <div className="px-4 pb-4">
//           <input
//             type="text"
//             name="lastname"
//             value={formData.lastname}
//             onChange={handleChange}
//             placeholder="Last name"
//             className="w-full h-14 bg-[#1E1E1E] text-white p-3 rounded border-1 hover:border-blue-500 border-gray-700 pr-10"
//             required
//           />
//           {/* <p className="text-[#4e4e4e] text-xs mt-1">This field is mandatory.</p> */}
//         </div>

//         <div className="px-4 pb-4">
//           <label className="text-sm text-gray-400 mb-1 block">
//             Date of Birth
//           </label>
//           <input
//             type="date"
//             name="dob"
//             value={formData.dob}
//             onChange={handleChange}
//             className="w-full h-14 bg-[#1E1E1E] text-white p-3 rounded border-1 hover:border-blue-500 border-gray-700 pr-10 appearance-none"
//           />
//         </div>

//         <div className="px-4 pb-4">
//           <label className="text-sm text-gray-400 mb-1 block">address</label>
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             className="w-full h-14 bg-[#1E1E1E] text-white p-3 rounded border-1 hover:border-blue-500 border-gray-700 pr-10"
//           />
//         </div>

//         <div className="px-4 pb-4 flex justify-center w-full">
//           <button
//             type="submit"
//             disabled={isLoading}
//             className={`${
//               isLoading ? "bg-gray-500" : "bg-gray-900 w-full hover:bg-gray-800"
//             } text-white py-3 rounded-lg transition`}
//           >
//             {isLoading ? "Sending..." : "Send Message"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PersonalDetailsForm;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
const secretKey = "aone-junaid";

const PersonalDetailsForm = () => {
  const encryptedUser = localStorage.getItem("user");
  console.log("encrypt user===", encryptedUser)
  const decryptedUser = JSON.parse(
    CryptoJS.AES.decrypt(encryptedUser, secretKey).toString(CryptoJS.enc.Utf8)
  );

  console.log("dexrpy===", decryptedUser)

  const user = decryptedUser._id;

  // Set up form state
  const [formData, setFormData] = useState({
    userId: user,
    name: "",
    lastname: "",
    dob: "",
    address: "",
  });
  const isFormValid =
    formData.name && formData.lastname && formData.dob && formData.address;

  const [isLoading, setIsLoading] = useState(false); // For loading state
  const [isSuccess, setIsSuccess] = useState(false); // For success message
  const [isError, setIsError] = useState(false); // For error message
  const [error, setError] = useState(null); // For detailed error message

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if necessary fields are filled
    if (
      !formData.name ||
      !formData.lastname ||
      !formData.dob ||
      !formData.address
    ) {
      setIsError(true);
      setError({ message: "All fields are required" });
      return;
    }

    setIsLoading(true); // Set loading state

    try {
      console.log("Sending form data:", formData);

      // Simulate an API call with a delay (replace this with actual API call)
      setTimeout(() => {
        // Here you would send the form data to the API
        setIsLoading(false); // Stop loading state

        // Navigate to the next page
        navigate("/profile/email/verification", { state: formData });

        setIsSuccess(true); // Show success message
        setIsError(false); // Hide error message
      }, 1500); // Simulated delay
    } catch (error) {
      console.log("Error:", error);
      setIsLoading(false);
      setIsError(true);
      setError({ message: "Failed to submit form data" });
    }
  };

  return (
    <div className="bg-[#23282B] flex items-center justify-center p-4 min-h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-[#23282B] ">
        {/* Success Message */}
        {isSuccess && (
          <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            Message sent successfully!
          </div>
        )}

        {/* Error Message */}
        {isError && (
          <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            Error: {error?.message || "Failed to send message"}
          </div>
        )}

        <h2 className="text-white text-2xl font-semibold text-center py-4">
          Edit Personal Details
        </h2>

        {/* First Name */}
        <div className="px-4 pb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="First name"
            className="w-full h-14 bg-[#1E1E1E] text-white p-3 rounded border-1 hover:border-blue-500 border-gray-700 pr-10"
            required
          />
        </div>

        {/* Last Name */}
        <div className="px-4 pb-4">
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Last name"
            className="w-full h-14 bg-[#1E1E1E] text-white p-3 rounded border-1 hover:border-blue-500 border-gray-700 pr-10"
            required
          />
        </div>

        {/* Date of Birth */}
        <div className="px-4 pb-4">
          <label className="text-sm text-gray-400 mb-1 block">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full h-14 bg-[#1E1E1E] text-white p-3 rounded border-1 hover:border-blue-500 border-gray-700 pr-10 appearance-none"
            required
          />
        </div>

        {/* Address */}
        <div className="px-4 pb-4">
          <label className="text-sm text-gray-400 mb-1 block">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full h-14 bg-[#1E1E1E] text-white p-3 rounded border-1 hover:border-blue-500 border-gray-700 pr-10"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="px-4 pb-4 flex justify-center w-full">
          <button
            type="submit"
            disabled={isLoading || !isFormValid}
            className={`${isLoading || !isFormValid
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gray-900 w-full hover:bg-gray-800"
              } text-white py-3 rounded-lg transition w-full`}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;