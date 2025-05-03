// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSendCodeMutation } from "../../redux/emailverification";
// const EmailVerification = () => {
//   const [sendCode, { isError, isLoading, error, isSuccess }] =
//     useSendCodeMutation();
//   const [formData, setFormData] = useState({
//     email: "",
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
//       await sendCode(formData).unwrap();
//       console.log(formData);
//       if (!isError) {
//         setFormData({
//           email: "",
//         });
//       }

//       localStorage.setItem("verificationEmail", formData.email);
//       navigate("/profile/code/verification");
//     } catch (err) {
//       console.error("Failed to send verification email:", err);
//       //   console.log(error)
//     }
//   };

//   return (
//     <div className="bg-[#23282B] lg:min-h-screen flex items-center justify-center py-40 lg:p-4">
//       <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-[#23282B]">
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
//           Email verification
//         </h2>

//         {/* Email Input */}
//         <div className="px-4 pb-4">
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//             className="w-full bg-[#1E1E1E] text-white p-3 rounded border-1 hover:border-blue-500 border-gray-700 pr-10"
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="px-4 w-full pb-4 flex justify-center">
//           <button
//             type="submit"
//             className={`${
//               isLoading
//                 ? "bg-gray-500  w-full  text-white p-3 rounded hover:bg-gray-700 transition duration-300"
//                 : "w-full bg-gray-600 text-white p-3 rounded hover:bg-gray-700 transition duration-300"
//             }`}
//             disabled={isLoading}
//           >
//             {isLoading ? "Submitting" : "Submit"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EmailVerification;

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSendCodeMutation } from "../../redux/emailverification";

import CryptoJS from "crypto-js";
const secretKey = "aone-junaid";

const EmailVerification = () => {
  const location = useLocation();
  const personalDetailData = location.state;
  const [sendCode, { isError, isLoading, error, isSuccess }] =
    useSendCodeMutation();
  const encryptedUser = localStorage.getItem("user");
  const decryptedUser = JSON.parse(
    CryptoJS.AES.decrypt(encryptedUser, secretKey).toString(CryptoJS.enc.Utf8)
  );
  const user_mail = decryptedUser.email;

  const [formData, setFormData] = useState({
    email: user_mail,
  });

  const navigate = useNavigate();
  const [hasNavigated, setHasNavigated] = useState(false);
  useEffect(() => {
    if (!personalDetailData) {
      alert("Please fill in your personal data first!");
      navigate("/profile");
      setHasNavigated(true);
    }
  }, [personalDetailData]);

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
      await sendCode(formData).unwrap();
      console.log(formData);
      if (!isError) {
        setFormData({
          email: "",
        });
      }

      localStorage.setItem("verificationEmail", formData.email);
      navigate("/profile/code/verification", { state: personalDetailData });
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
          Email verification
        </h2>

        {/* Email Input */}
        <div className="px-4 pb-4">
          <input
            type="email"
            name="email"
            value={user_mail}
            placeholder="Email"
            className="w-full bg-[#1E1E1E] text-white p-3 rounded border-1 hover:border-blue-500 border-gray-700 pr-10"
            required
            readOnly
          />
        </div>

        {/* Submit Button */}
        <div className="px-4 w-full pb-4 flex justify-center">
          <button
            type="submit"
            className={`${
              isLoading
                ? "bg-gray-500  w-full  text-white p-3 rounded hover:bg-gray-700 transition duration-300"
                : "w-full bg-gray-600 text-white p-3 rounded hover:bg-gray-700 transition duration-300"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Submitting" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailVerification;