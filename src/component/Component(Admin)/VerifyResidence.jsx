
// import { useState } from 'react';
// import { useUploadresidencedocMutation } from '../../redux/residenceapi';
// import { useNavigate } from 'react-router-dom';

// const VerifyResidence = ({ onClose }) => {

//   const userdetail =JSON.parse(localStorage.getItem("user"))
//   const user = userdetail._id
//   console.log(user)
//   const [residencedocument, setresidenceDocument] = useState([]);
//   const [uploadresidencedoc, { isLoading, isSuccess, error }] = useUploadresidencedocMutation();

//   const navigate = useNavigate()
//   const handleFileChange = (e) => {
//     setresidenceDocument(Array.from(e.target.files)); // convert FileList to array
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();

//     formData.append("user", user)
//     console.log(user)

//     residencedocument.forEach((doc) => {
//       formData.append('residencedocument', doc); // same field name for multiple
//     });

//     const result = await uploadresidencedoc(formData);
//     console.log(result)
//     navigate("/profile")

//   };


//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-[#23282B] z-50">
//       <div className="bg-[#2C3235] rounded-md w-full max-w-lg shadow-lg">
//         {/* Header */}
//         <div className="flex items-center justify-between p-4 border-b">
//           <h2 className="font-medium text-lg text-white">Verify residence</h2>
//           <button onClick={onClose} className="bg-[#2C3235] hover:text-gray-700">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         {/* Body */}
//         <div className="p-4">
//           {/* Info box */}
//           <div className="bg-blue-50 border border-blue-100 rounded-md p-3 mb-4 flex">
//             <div className="flex-shrink-0 mt-0.5 mr-2">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//             </div>
//             <p className="text-sm text-gray-700">
//               The document provided for Proof of Residence must not be the same as the one used for Proof of Identity.
//             </p>
//           </div>

//           <p className="text-sm font-medium mb-3 text-white">
//             Please upload only one of the following Proof of Residence documents:
//           </p>

//           {/* Document options */}
//           <div className="space-y-2 mb-6">



//             <div className="flex items-start">
//               <div className="flex-shrink-0 mt-0.5 mr-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <label className="text-sm text-white">Bank / card statement (issued in the last 6 months)</label>
//             </div>
//             <div className="flex items-start">
//               <div className="flex-shrink-0 mt-0.5 mr-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <label className="text-sm text-white">Utility bill (gas, phone, gas, water, electric, mobile phone, internet, or cable bill) issued in the last 3 months</label>
//             </div>
//             <div className="flex items-start">
//               <div className="flex-shrink-0 mt-0.5 mr-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <label className="text-sm text-white">Tax return certificate from the Federal Board of Revenue (FBR)</label>
//             </div>
//           </div>

//           <p className="text-sm font-medium mb-3 text-white">Take a photo of your chosen document</p>

//           {/* Photo instructions */}
//           <div className="bg-blue-50 border border-blue-100 rounded-md p-3 mb-4 flex">
//             <div className="flex-shrink-0 mt-0.5 mr-2">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//             </div>
//             <p className="text-sm text-gray-700">
//               Make sure the document shows your full name, full address.
//             </p>
//           </div>



//           <form onSubmit={handleSubmit} className="space-y-4">



//             <div>
//               <label className="block text-sm font-medium">Upload Documents (2 or more)</label>
//               <input
//                 type="file"
//                 multiple
//                 onChange={handleFileChange}
//                 className="mt-1 w-full border p-2 rounded"
//                 accept="image/*,application/pdf"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
//               disabled={isLoading}
//             >
//               {isLoading ? 'Uploading...' : 'Submit'}
//             </button>

//             {isSuccess && <p className="text-green-600 mt-2">Document uploaded successfully!</p>}
//             {error && <p className="text-red-600 mt-2">Error uploading document</p>}
//           </form>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerifyResidence;




// import { useEffect, useState } from "react";
// import { useUploadresidencedocMutation } from "../../redux/residenceapi";
// import { useLocation, useNavigate } from "react-router-dom";
// import CryptoJS from "crypto-js";

// const secretKey = "aone-junaid";

// const VerifyResidence = ({ onClose }) => {
//   const encryptedUser = localStorage.getItem("user");
//   const decryptedUser = JSON.parse(
//     CryptoJS.AES.decrypt(encryptedUser, secretKey).toString(CryptoJS.enc.Utf8)
//   );
//   const user = decryptedUser._id;
//   const location = useLocation();
//   const { documentType, documents } = location.state || {};

//   const [hasNavigated, setHasNavigated] = useState(false);

//   const [residencedocument, setResidenceDocument] = useState([]);
//   const [uploadresidencedoc, { isLoading, isSuccess, error }] =
//     useUploadresidencedocMutation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!documentType) {
//       alert("Something Went Wrong. Please try again. ");
//       navigate("/profile/personalDetail");
//       setHasNavigated(true);
//     }
//   }, [documentType, navigate, hasNavigated]);
//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     setResidenceDocument(selectedFiles);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append("userId", user);
//       formData.append("documentType", documentType);

//       documents.forEach((doc) => {
//         formData.append("document", doc);
//       });

//       residencedocument.forEach((doc) => {
//         formData.append("residencedocument", doc);
//       });

//       const result = await uploadresidencedoc(formData).unwrap();

//       if (result?.data) {
//         // Get the new updated user data from backend
//         const updatedUserData = result.data;

//         // Encrypt the updated user data
//         const updatedEncryptedUser = CryptoJS.AES.encrypt(
//           JSON.stringify(updatedUserData),
//           secretKey
//         ).toString();

//         localStorage.setItem("user", updatedEncryptedUser);

//         navigate("/profile");
//       } else {
//         console.error("No updated user data received from backend");
//       }
//     } catch (error) {
//       console.error("Failed to upload documents:", error);
//     }
//   };

//   const isFormValid = residencedocument.length > 0;

//   return (
//     <div className="relative flex items-center justify-center bg-[#23282B] z-50 min-h-screen">
//       <div className="bg-[#2C3235] rounded-md w-full max-w-lg shadow-lg">
//         {/* Header */}
//         <div className="flex items-center justify-between p-4 border-b">
//           <h2 className="font-medium text-lg text-white">Verify Residence</h2>
//         </div>

//         {/* Body */}
//         <div className="p-4">
//           {/* Info Box */}
//           <div className="bg-blue-50 border border-blue-100 rounded-md p-3 mb-4 flex">
//             <div className="flex-shrink-0 mt-0.5 mr-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 text-blue-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//             </div>
//             <p className="text-sm text-gray-700">
//               The document provided for Proof of Residence must not be the same
//               as the one used for Proof of Identity.
//             </p>
//           </div>

//           {/* Instructions */}
//           <p className="text-sm font-medium mb-3 text-white">
//             Please upload only one of the following Proof of Residence
//             documents:
//           </p>

//           <ul className="space-y-2 mb-6">
//             <li className="flex items-start text-sm text-white">
//               <span className="mr-2">•</span> Bank / card statement (issued in
//               the last 6 months)
//             </li>
//             <li className="flex items-start text-sm text-white">
//               <span className="mr-2">•</span> Utility bill (gas, phone, water,
//               electric, mobile phone, internet, cable)
//             </li>
//             <li className="flex items-start text-sm text-white">
//               <span className="mr-2">•</span> Tax return certificate from the
//               Federal Board of Revenue (FBR)
//             </li>
//           </ul>

//           <p className="text-sm font-medium mb-3 text-white">
//             Take a photo of your chosen document
//           </p>

//           <div className="bg-blue-50 border border-blue-100 rounded-md p-3 mb-4 flex">
//             <div className="flex-shrink-0 mt-0.5 mr-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 text-blue-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//             </div>
//             <p className="text-sm text-gray-700">
//               Make sure the document shows your full name and full address
//               clearly.
//             </p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-white mb-1">
//                 Upload Residence Documents
//               </label>
//               <input
//                 type="file"
//                 multiple
//                 onChange={handleFileChange}
//                 className="mt-1 w-full border p-2 rounded bg-[#23282B] text-white"
//                 accept="image/*,application/pdf"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={!isFormValid || isLoading}
//               className={`w-full py-3 text-white font-semibold rounded-lg flex justify-center items-center transition ${
//                 isFormValid
//                   ? "bg-blue-600 hover:bg-blue-700"
//                   : "bg-gray-400 cursor-not-allowed"
//               }`}
//             >
//               {isLoading ? "Uploading..." : "Submit"}
//             </button>

//             {isSuccess && (
//               <p className="text-green-500 text-center mt-2">
//                 Documents uploaded successfully!
//               </p>
//             )}
//             {error && (
//               <p className="text-red-500 text-center mt-2">
//                 Error uploading documents. Please try again.
//               </p>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerifyResidence;

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import { useUploadresidencedocMutation } from "../../redux/residenceapi";

const secretKey = "aone-junaid";

const VerifyResidence = ({ onClose }) => {
  const encryptedUser = localStorage.getItem("user");
  const decryptedUser = JSON.parse(
    CryptoJS.AES.decrypt(encryptedUser, secretKey).toString(CryptoJS.enc.Utf8)
  );
  const user = decryptedUser._id;
  const location = useLocation();
  const { documentType, documents } = location.state || {};

  const [hasNavigated, setHasNavigated] = useState(false);

  const [residencedocument, setResidenceDocument] = useState([]);
  const [uploadresidencedoc, { isLoading, isSuccess, error }] =
    useUploadresidencedocMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!documentType) {
      alert("Something Went Wrong. Please try again. ");
      navigate("/profile/personalDetail");
      setHasNavigated(true);
    }
  }, [documentType, navigate, hasNavigated]);
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setResidenceDocument(selectedFiles);
  };

  const handleSubmit = async (e) => {
    console.log("1")
    e.preventDefault();
    
    try {
      const formData = new FormData();
      console.log("2")
      formData.append("userId", user);
      console.log("3")
      formData.append("documentType", documentType);
      
      console.log("4")
      documents.forEach((doc) => {
        formData.append("document", doc);
      });
      console.log("5")
      
      residencedocument.forEach((doc) => {
        formData.append("residencedocument", doc);
      });
      
      console.log("6")
      console.log(formData)
      const result = await uploadresidencedoc(formData).unwrap();
      console.log("7")
      console.log(result)

      if (result?.data) {
        // Get the new updated user data from backend
        const updatedUserData = result.data;
        
        // Encrypt the updated user data
        const updatedEncryptedUser = CryptoJS.AES.encrypt(
          JSON.stringify(updatedUserData),
          secretKey
        ).toString();
        console.log("8")

        localStorage.setItem("user", updatedEncryptedUser);

        navigate("/profile");
      } else {
        console.error("No updated user data received from backend");
      }
    } catch (error) {
      console.error("Failed to upload documents:", error);
    }
  };

  const isFormValid = residencedocument.length > 0;

  return (
    <div className="relative flex items-center justify-center bg-[#23282B] z-50 min-h-screen">
      <div className="bg-[#2C3235] rounded-md w-full max-w-lg shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-medium text-lg text-white">Verify Residence</h2>
        </div>

        {/* Body */}
        <div className="p-4">
          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-100 rounded-md p-3 mb-4 flex">
            <div className="flex-shrink-0 mt-0.5 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-sm text-gray-700">
              The document provided for Proof of Residence must not be the same
              as the one used for Proof of Identity.
            </p>
          </div>

          {/* Instructions */}
          <p className="text-sm font-medium mb-3 text-white">
            Please upload only one of the following Proof of Residence
            documents:
          </p>

          <ul className="space-y-2 mb-6">
            <li className="flex items-start text-sm text-white">
              <span className="mr-2">•</span> Bank / card statement (issued in
              the last 6 months)
            </li>
            <li className="flex items-start text-sm text-white">
              <span className="mr-2">•</span> Utility bill (gas, phone, water,
              electric, mobile phone, internet, cable)
            </li>
            <li className="flex items-start text-sm text-white">
              <span className="mr-2">•</span> Tax return certificate from the
              Federal Board of Revenue (FBR)
            </li>
          </ul>

          <p className="text-sm font-medium mb-3 text-white">
            Take a photo of your chosen document
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-md p-3 mb-4 flex">
            <div className="flex-shrink-0 mt-0.5 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-sm text-gray-700">
              Make sure the document shows your full name and full address
              clearly.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Upload Residence Documents
              </label>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="mt-1 w-full border p-2 rounded bg-[#23282B] text-white"
                accept="image/*,application/pdf"
                required
              />
            </div>

            <button
              type="submit"
              disabled={!isFormValid || isLoading}
              className={`w-full py-3 text-white font-semibold rounded-lg flex justify-center items-center transition ${
                isFormValid
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {isLoading ? "Uploading..." : "Submit"}
            </button>

            {isSuccess && (
              <p className="text-green-500 text-center mt-2">
                Documents uploaded successfully!
              </p>
            )}
            {error && (
              <p className="text-red-500 text-center mt-2">
                Error uploading documents. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyResidence;