



import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DocumentUploadForm = () => {
  const [documentType, setDocumentType] = useState("");
  const [documents, setDocuments] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const checkState = location.state;

  const navigate = useNavigate();
  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    if (checkState !== true) {
      alert("Something Went Wrong. Please try again. ");
      navigate("/profile/personalDetail");
      setHasNavigated(true);
    }
  }, [checkState, navigate, hasNavigated]);

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      setDocuments((prevDocs) => {
        const updatedDocs = [...prevDocs];
        updatedDocs[index] = file;
        return updatedDocs;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!documentType.trim()) {
      setErrorMessage("Please enter the document type.");
      return;
    }

    const filteredDocuments = documents.filter(Boolean);

    if (filteredDocuments.length === 0) {
      setErrorMessage("Please upload at least one document image.");
      return;
    }

    navigate("/profile/verifyresidence", {
      state: {
        documentType,
        documents: filteredDocuments,
      },
    });
  };

  const isFormValid = documentType.trim() && documents.some(Boolean);

  return (
    <div className="bg-[#23282B] w-full flex items-center min-h-screen">
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
                onChange={(e) => handleFileChange(e, 0)}
                accept="image/*"
                className="hidden"
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
                onChange={(e) => handleFileChange(e, 1)}
                accept="image/*"
                className="hidden"
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

          {errorMessage && (
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
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            className={`w-full py-3 text-white font-medium rounded-lg flex justify-center items-center transition ${
              isFormValid
                ? "bg-gray-600 hover:bg-gray-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isFormValid}
          >
            Submit Documents
          </button>
        </form>
      </div>
    </div>
  );
};

export default DocumentUploadForm;