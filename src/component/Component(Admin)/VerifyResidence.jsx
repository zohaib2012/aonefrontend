
import { useState } from 'react';
import { useUploadresidencedocMutation } from '../../redux/residenceapi';
import { useNavigate } from 'react-router-dom';

const VerifyResidence = ({ onClose }) => {

  const userdetail =JSON.parse(localStorage.getItem("user"))
  const user = userdetail._id
  console.log(user)
  const [residencedocument, setresidenceDocument] = useState([]);
  const [uploadresidencedoc, { isLoading, isSuccess, error }] = useUploadresidencedocMutation();

  const navigate = useNavigate()
  const handleFileChange = (e) => {
    setresidenceDocument(Array.from(e.target.files)); // convert FileList to array
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("user", user)
    console.log(user)

    residencedocument.forEach((doc) => {
      formData.append('residencedocument', doc); // same field name for multiple
    });

    const result = await uploadresidencedoc(formData);
    console.log(result)
    navigate("/profile")

  };


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#23282B] z-50">
      <div className="bg-[#2C3235] rounded-md w-full max-w-lg shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-medium text-lg text-white">Verify residence</h2>
          <button onClick={onClose} className="bg-[#2C3235] hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-4">
          {/* Info box */}
          <div className="bg-blue-50 border border-blue-100 rounded-md p-3 mb-4 flex">
            <div className="flex-shrink-0 mt-0.5 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-gray-700">
              The document provided for Proof of Residence must not be the same as the one used for Proof of Identity.
            </p>
          </div>

          <p className="text-sm font-medium mb-3 text-white">
            Please upload only one of the following Proof of Residence documents:
          </p>

          {/* Document options */}
          <div className="space-y-2 mb-6">



            <div className="flex items-start">
              <div className="flex-shrink-0 mt-0.5 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <label className="text-sm text-white">Bank / card statement (issued in the last 6 months)</label>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-0.5 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <label className="text-sm text-white">Utility bill (gas, phone, gas, water, electric, mobile phone, internet, or cable bill) issued in the last 3 months</label>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-0.5 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <label className="text-sm text-white">Tax return certificate from the Federal Board of Revenue (FBR)</label>
            </div>
          </div>

          <p className="text-sm font-medium mb-3 text-white">Take a photo of your chosen document</p>

          {/* Photo instructions */}
          <div className="bg-blue-50 border border-blue-100 rounded-md p-3 mb-4 flex">
            <div className="flex-shrink-0 mt-0.5 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-gray-700">
              Make sure the document shows your full name, full address.
            </p>
          </div>



          <form onSubmit={handleSubmit} className="space-y-4">



            <div>
              <label className="block text-sm font-medium">Upload Documents (2 or more)</label>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="mt-1 w-full border p-2 rounded"
                accept="image/*,application/pdf"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Uploading...' : 'Submit'}
            </button>

            {isSuccess && <p className="text-green-600 mt-2">Document uploaded successfully!</p>}
            {error && <p className="text-red-600 mt-2">Error uploading document</p>}
          </form>

        </div>
      </div>
    </div>
  );
};

export default VerifyResidence;



