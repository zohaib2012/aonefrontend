

import { useState } from "react";
import { useUsesProfilesQuery } from "../../redux/Comonapi";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import { Search } from "lucide-react";

export const AllDocuments = () => {
    const navigate = useNavigate();
    const { data, error, isLoading, isError } = useUsesProfilesQuery();
    const [selectedImage, setSelectedImage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-[#23282B]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00B894]"></div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex justify-center items-center h-screen bg-[#23282B] text-red-500">
                Failed to fetch data
            </div>
        );
    }

    // Extract profiles from the API response
    const profiles = data?.data?.map(profile => ({
        email: profile.email,
        Wallet_no: profile.wallet_no,
        name: profile.name,
        documentType: profile.documentType,
        createdAt: profile.createdAt,
        document: profile.document || [], // Ensure document is always an array
        mailVerificationCode: profile.mailVerificationCode,
        residencedocument: profile.residencedocument,
        country: profile.country,
        dob: profile.dob,
        lastname: profile.lastname,
        address: profile.address,
        complete_profile: profile.complete_profile,
        userId: profile._id,
    })) || [];

    // Filter profiles based on search term
    const filteredProfiles = profiles.filter(profile =>
        profile.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.Wallet_no?.toString().includes(searchTerm.toString())
    );

    const handleBack = () => {
        navigate(-1); // go back to the previous page
    };

    return (
        <div className="bg-[#23282B] min-h-screen py-8 px-4">
            <div className="max-w-6xl mx-auto text-white font-sans">

                <h1 className='bg-gray-700 p-2 my-10 border border-gray-950 text-center font-semibold text-white text-xl sm:text-2xl md:text-3xl h-auto sm:h-14 flex items-center justify-center'>
                    Users profile
                </h1>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                    <button
                        onClick={handleBack}
                        className="bg-gray-700 hover:bg-gray-500 text-blue-400 px-4 py-2 w-28 rounded-lg transition mb-4 sm:mb-0"
                    >
                        <FaChevronLeft className='inline-block text-lg mr-2' />
                        Back
                    </button>

                    <div className="relative w-full sm:w-64">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Search className="text-gray-400 w-4 h-4" />
                        </div>
                        <input
                            type="text"
                            className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-[#00B894] focus:border-[#00B894] block w-full pl-10 p-2.5 "
                            placeholder="Search by name, email or wallet..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-[#2C3235] border-2 border-gray-600 text-gray-400 text-sm">
                            <tr>
                                <th className="p-2 md:p-3">Name</th>
                                <th className="p-2 md:p-3">Email</th>
                                <th className="p-2 md:p-3">Wallet_no</th>
                                <th className="p-2 md:p-3">Documents</th>
                                <th className="p-2 md:p-3">Type</th>
                                <th className="p-2 md:p-3">Time</th>
                                <th className="p-2 md:p-3">Country</th>
                                <th className="p-2 md:p-3">Verification code</th>
                                <th className="p-2 md:p-3">Residencial documents</th>
                                <th className="p-2 md:p-3">Date of birth</th>
                                <th className="p-2 md:p-3">Last name</th>
                                <th className="p-2 md:p-3">User Id</th>
                                <th className="p-2 md:p-3">Address</th>
                                <th className="p-2 md:p-3">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProfiles.length > 0 ? (
                                filteredProfiles.map((profile, index) => (
                                    <tr key={index} className="border-b border-gray-600 bg-[#2C3235] hover:bg-[#3a3a3a]">
                                        <td className="p-2 md:p-3 text-sm md:text-lg">{profile.name}</td>
                                        <td className="p-2 md:p-3 text-sm md:text-lg">{profile.email}</td>
                                        <td className="p-2 md:p-3 text-sm md:text-lg">{profile.Wallet_no}</td>
                                        <td className="p-2 md:p-3 w-60">
                                            <div className="max-w-60 overflow-x-hidden mx-4">
                                                {Array.isArray(profile.document) && profile.document.length > 0 ? (
                                                    <div className="grid grid-cols-1 gap-2">
                                                        {profile.document.slice(0, 2).map((img, imgIndex) => (
                                                            <div key={imgIndex} className="border rounded-lg overflow-hidden h-20 w-60">
                                                                <img
                                                                    src={img}
                                                                    alt={`Document image ${imgIndex + 1}`}
                                                                    className="w-full h-full object-contain"
                                                                />
                                                            </div>
                                                        ))}
                                                        {profile.document.length > 2 && (
                                                            <div className="text-gray-400 text-sm text-center mt-1">
                                                                +{profile.document.length - 2} more images
                                                            </div>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <div className="h-20 w-60 flex items-center justify-center text-gray-500 border rounded-lg">
                                                        Document not available
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="p-2 md:p-3 text-sm md:text-lg">{profile.documentType}</td>
                                        <td className="p-2 md:p-3 text-sm md:text-base">{profile.createdAt}</td>
                                        <td className="p-2 md:p-3 text-sm md:text-base">{profile.country}</td>
                                        <td className="p-2 md:p-3 text-sm md:text-base">{profile.mailVerificationCode}</td>
                                        <td className="p-2 md:p-3 w-60">
                                            <div className="max-w-60 overflow-x-hidden mx-4">
                                                {Array.isArray(profile.residencedocument) && profile.residencedocument.length > 0 ? (
                                                    <div className="grid grid-cols-1 gap-2">
                                                        {profile.residencedocument.slice(0, 2).map((img, imgIndex) => (
                                                            <div key={imgIndex} className="border rounded-lg overflow-hidden h-20 w-60">
                                                                <img
                                                                    src={img}
                                                                    alt={`Document image ${imgIndex + 1}`}
                                                                    className="w-full h-full object-contain"
                                                                />
                                                            </div>
                                                        ))}
                                                        {profile.residencedocument.length > 2 && (
                                                            <div className="text-gray-400 text-sm text-center mt-1">
                                                                +{profile.residencedocument.length - 2} more images
                                                            </div>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <div className="h-20 w-60 flex items-center justify-center text-gray-500 border rounded-lg">
                                                        Document not available
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="p-2 md:p-3 text-sm md:text-base">{profile.dob}</td>
                                        <td className="p-2 md:p-3 text-sm md:text-base">{profile.lastname}</td>
                                        <td className="p-2 md:p-3 text-sm md:text-base">{profile.userId}</td>
                                        <td className="p-2 md:p-3 text-sm md:text-base">{profile.address}</td>
                                        <td className="p-2 md:p-3">
                                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                                                <button className="bg-gray-800 text-[#00B894] px-2 py-1 rounded text-xs sm:text-sm">
                                                    Register
                                                </button>
                                                <button className="bg-gray-800 text-[#00B894] px-2 py-1 rounded text-xs sm:text-sm">
                                                    Trade
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr className="border-b border-gray-600 bg-[#2C3235]">
                                    <td colSpan="14" className="p-3 text-center text-gray-400">
                                        No matching records found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};