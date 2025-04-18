

import React, { useState } from "react";
import { useUploadDocumentMutation } from "../../redux/documentapi";
import { useNavigate } from "react-router-dom";

const DocumentUploadForm = () => {
  const userDetail = JSON.parse(localStorage.getItem("user"));
  const user = userDetail._id;
  const [documentType, setDocumentType] = useState("");
  const [documents, setDocuments] = useState([]);
  const [uploadDocument, { isLoading, isSuccess, error }] =
    useUploadDocumentMutation();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setDocuments((prevDocs) => [...prevDocs, ...files]);
  };

  const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user", user);
    formData.append("documentType", documentType);
    documents.forEach((doc) => {
      formData.append("document", doc);
    });

   const response= await uploadDocument(formData);
  console.log(response)
  navigate("/profile/trade/verifyresidence")
  };

  return (
    <div className="bg-[#23282B] w-full flex items-center">
      <div className="max-w-md mx-auto p-6 bg-[#2C3235] rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Document Upload
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h3 className="text-lg text-white font-semibold mb-4">
              Document Type
            </h3>
            <input
              type="text"
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value)}
              className="w-full px-4 py-3 bg-[#23282B] border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. CNIC, Passport, License"
              required
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg text-white font-semibold mb-4">
              Upload Document Images
            </h3>

            {/* First Document Upload */}
            <div>
              <input
                type="file"
                id="firstDocumentInput"
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
                required
              />
              <div
                onClick={() =>
                  document.getElementById("firstDocumentInput").click()
                }
                className="border-2 border-dashed border-gray-600 rounded-lg h-40 flex flex-col items-center justify-center cursor-pointer hover:bg-[#23282B] transition"
              >
                {documents[0] ? (
                  <img
                    src={URL.createObjectURL(documents[0])}
                    alt="First Document"
                    className="h-full w-full object-cover rounded-lg"
                  />
                ) : (
                  <>
                    <div className="text-4xl text-gray-400 mb-2">+</div>
                    <p className="text-sm text-gray-400">
                      Click to upload first image
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Second Document Upload */}
            <div>
              <input
                type="file"
                id="secondDocumentInput"
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
                required
              />
              <div
                onClick={() =>
                  document.getElementById("secondDocumentInput").click()
                }
                className="border-2 border-dashed border-gray-600 rounded-lg h-40 flex flex-col items-center justify-center cursor-pointer hover:bg-[#23282B] transition"
              >
                {documents[1] ? (
                  <img
                    src={URL.createObjectURL(documents[1])}
                    alt="Second Document"
                    className="h-full w-full object-cover rounded-lg"
                  />
                ) : (
                  <>
                    <div className="text-4xl text-gray-400 mb-2">+</div>
                    <p className="text-sm text-gray-400">
                      Click to upload second image
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition flex justify-center items-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Uploading...
              </>
            ) : (
              "Submit Documents"
            )}
          </button>

          {isSuccess && (
            <div className="p-3 mt-4 text-sm text-green-400 bg-green-900 bg-opacity-30 rounded-lg flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Documents uploaded successfully!
            </div>
          )}

          {error && (
            <div className="p-3 mt-4 text-sm text-red-400 bg-red-900 bg-opacity-30 rounded-lg flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Error uploading documents. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default DocumentUploadForm;
