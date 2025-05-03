
import { useState, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
const secretKey = "aone-junaid";

const ConfirmationModel = ({ show, onCompleteProfile }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
        <h2 className="text-xl font-bold mb-4 text-center">
          Profile Incomplete
        </h2>
        <p className="text-center mb-6">
          Please complete your profile to access this section.
        </p>
        <div className="text-center">
          <button
            onClick={onCompleteProfile}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            Complete Profile
          </button>
        </div>
      </div>
    </div>
  );
};

const RequireIncompleteProfile = () => {
  const encryptedUser = localStorage.getItem("user");
  const decryptedUser = JSON.parse(
    CryptoJS.AES.decrypt(encryptedUser, secretKey).toString(CryptoJS.enc.Utf8)
  );

  const complete = decryptedUser?.complete_profile;

  if (!decryptedUser || complete == "1") {
    return <Navigate to="/profile" replace />;
  }

  return <Outlet />;
};

const RequireCompleteProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const encryptedUser = localStorage.getItem("user");
    const decryptedUser = JSON.parse(
      CryptoJS.AES.decrypt(encryptedUser, secretKey).toString(CryptoJS.enc.Utf8)
    );

    const complete = decryptedUser?.complete_profile;
    if (complete != "1") {
      setShowModal(true);
    }
  }, []);

  const handleCompleteProfile = () => {
    setShowModal(false);
    navigate("/profile/personalDetail");
  };

  return (
    <>
      <Outlet />
      <ConfirmationModel
        show={showModal}
        onCompleteProfile={handleCompleteProfile}
      />
    </>
  );
};

export { RequireCompleteProfile, RequireIncompleteProfile };