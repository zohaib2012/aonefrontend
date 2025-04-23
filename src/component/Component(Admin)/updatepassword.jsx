import { useState } from "react";
import { useUpdatePasswordMutation } from "../../redux/Comonapi";

const updatepassword = () => {
  const userdetail= JSON.parse(localStorage.getItem("user"))
  const user= userdetail._id

  const [formdata, setformData] = useState({
    password: "",
    updatedPassword: "",
    user:user
  });

  const [updatePassword, { isError, isSuccess, isLoading, error }] =
    useUpdatePasswordMutation();

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformData((state) => ({
      ...state,
      [name]: value,
    }));
  };



  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updatePassword(formdata).unwrap();
      console.log(response);
      
      if (!isError) {
        setformData({
          password: "",
          updatedPassword: "",
          user:user
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-lg px-6 md:px-14 py-6 bg-[#2C3235] rounded-xl">
        <h2 className="text-white text-2xl font-bold mb-4 text-center">
          Change password
        </h2>
        <p className="text-gray-400 text-sm mb-6 text-center">
          Please note that after changing your password, you will be
          automatically logged out of all devices
        </p>

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

        <form onSubmit={handlesubmit} className="space-y-4">
          <div className="relative">
            <input
              name="password"
              type="password"
              value={formdata.password}
              onChange={handlechange}
              placeholder="Current Password"
              className="w-full bg-[#1E1E1E] text-white p-3 rounded border-1 hover:border-blue-500 border-gray-700 pr-10"
              required
            />
          </div>

          <div className="relative">
            <input
              value={formdata.updatedPassword}
              name="updatedPassword"
              type="password"
              onChange={handlechange}
              placeholder="New Password"
              className="w-full bg-[#1E1E1E] text-white p-3 rounded border-1 hover:border-blue-500 border-gray-700 pr-10"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-600 text-white p-3 rounded hover:bg-gray-700 transition duration-300"
          >
            {isLoading ? "Changing Password" : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default updatepassword;

// import { useState } from 'react';
// import { useUpdatePasswordMutation } from '../../redux/Comonapi';

// const UpdatePassword = () => {
//   const [formData, setFormData] = useState({
//     password: '',
//     updatedPassword: ''
//   });

//   const [updatePassword, { isError, isSuccess, isLoading, error }] = useUpdatePasswordMutation();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(state => ({
//       ...state,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await updatePassword(formData).unwrap();
//       console.log(response);

//       if (!isError) {
//         setFormData({
//           password: '',
//           updatedPassword: ''
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="m-3 flex container max-w-4xl mx-auto md:flex-row w-full bg-gray-100 h-auto">
//       <div className="w-full lg:w-max-w-7xl flex items-center justify-center relative p-4 md:p-0">
//         <div className="border-2 border-black p-3 w-full max-w-md px-4 md:px-8">
//           <div className="mb-8 text-center md:text-left">
//             <h1 className="text-2xl md:text-3xl font-bold text-red-500 mb-2">Change Password</h1>
//             <p className="text-sm text-gray-600">
//               Please note that after changing your password, you will be automatically logged out of all devices
//             </p>
//           </div>

//           {isError && (
//             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//               <p>{error?.data?.message || 'Failed to verify code. Please try again.'}</p>
//             </div>
//           )}

//           {isSuccess && (
//             <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
//               <p>Password updated successfully!</p>
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Current Password"
//                 className="w-full p-3 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-sm md:text-base"
//               />
//             </div>

//             <div>
//               <input
//                 type="password"
//                 name="updatedPassword"
//                 value={formData.updatedPassword}
//                 onChange={handleChange}
//                 placeholder="New Password"
//                 className="w-full p-3 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-sm md:text-base"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors text-sm md:text-base"
//               disabled={isLoading}
//             >
//               {isLoading ? "Changing Password" : "Change Password"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default UpdatePassword;
