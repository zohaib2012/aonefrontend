import { useState } from "react";

const ContactDetail = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    streetAddress: "",
    postalCode: "",
    city: "",
    Number: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-transparent">
        <h2 className="text-white text-2xl font-semibold text-center py-4">
          Contact Details
        </h2>

        {/* Number */}
        <div className="mb-4">
          <input
            type="text"
            name="Number"
            value={formData.Number}
            onChange={handleChange}
            placeholder="Enter Number"
            className="w-full text-sm bg-[#1E1E1E] border-2 border-[#3C3C3C] text-white p-2.5 rounded-sm placeholder-gray-500 focus:outline-none focus:border-blue-400"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className="w-full text-sm bg-[#1E1E1E] border-2 border-[#3C3C3C] text-white p-2.5 rounded-sm placeholder-gray-500 focus:outline-none focus:border-blue-400"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-44 rounded-xl bg-gray-800 text-white p-2 hover:bg-gray-700 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactDetail;
