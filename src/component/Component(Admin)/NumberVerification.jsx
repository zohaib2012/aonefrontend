import  { useState } from 'react';
import { Link } from 'react-router-dom';

const NumberVerification = () => {
  const [formData, setFormData] = useState({
    firstName: '',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-[#23282B] min-h-screen flex items-center justify-center p-4">
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-4xl bg-[#23282B] "
      >
        <h2 className="text-white text-2xl font-semibold text-center py-4">Number verification</h2>
        
        {/* First Name */}
        <div className="px-4 pb-4">
          <input 
            type="Number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Number"
            className="w-full bg-[#1E1E1E] text-white p-3 rounded border-1 hover:border-blue-500 border-gray-700 pr-10"
            
            required
          />

        </div>

       


        {/* Submit Button */}
        <div>
            <Link to={"/profile/uploaddocunment"}>
           
        <div className="px-4 pb-4 flex justify-center">
          <button 
            type="submit"
            className="w-full bg-gray-600 text-white p-3 rounded hover:bg-gray-700 transition duration-300"
          >
            Verify Now
          </button>
        </div>
        </Link>
        </div>

      </form>
    </div>
  );
};

export default NumberVerification;