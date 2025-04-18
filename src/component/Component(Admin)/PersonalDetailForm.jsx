import { useState } from "react";
import { useSenddetailsMutation } from "../../redux/p.detailapi";
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';

const PersonalDetailsForm = () => {
  const userdetail= JSON.parse(localStorage.getItem("user"))
  const user =userdetail._id

  const [Senddetails, { isSuccess, isError, error, isLoading }] =
    useSenddetailsMutation();
  const [formData, setFormData] = useState({
    user:user,
    name: "",
    lastname: "",
    dob: "",
    address: "",
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
      await Senddetails(formData).unwrap();

      if (!isError) {
        setFormData({
          name: "",
          lastname: "",
          dob: "",
          address: "",
        });
      }

      navigate("/profile/email/verification");

      console.log(formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#23282B]  flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-[#23282B] ">
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
          {/* <p className="text-red-600 text-xs mt-1">This field is mandatory.</p> */}
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
          {/* <p className="text-[#4e4e4e] text-xs mt-1">This field is mandatory.</p> */}
        </div>

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
          />
        </div>

        <div className="px-4 pb-4">
          <label className="text-sm text-gray-400 mb-1 block">address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full h-14 bg-[#1E1E1E] text-white p-3 rounded border-1 hover:border-blue-500 border-gray-700 pr-10"
          />
        </div>

        <div className="px-4 pb-4 flex justify-center w-full">
          <button
            type="submit"
            disabled={isLoading}
            className={`${
              isLoading ? "bg-gray-500" : "bg-gray-900 w-full hover:bg-gray-800"
            } text-white py-3 rounded-lg transition`}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;
