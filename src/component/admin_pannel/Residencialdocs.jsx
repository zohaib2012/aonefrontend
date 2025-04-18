

import { useState } from 'react';
import { useGetallresidencialdocsQuery } from '../../redux/residenceapi';
// import { useGetallresidencialdocsQuery } from '../../redux/residenceapi';

export const Residencialdocs = () => {
    const { data, error, isLoading, isError } =useGetallresidencialdocsQuery();
      const [selectedImage, setSelectedImage] = useState(0);

    console.log("one");
    console.log(data);
    
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
                Error loading account details: {error.message}
            </div>
        );
    }

    console.log(data);
    // Extract accounts from the API response
    const accounts = data?.data?.map(account => ({
        user: account.user,
        residencedocument: account.residencedocument,
    createdAt: account.createdAt,
    })) || [];

    return (
        <div className="bg-[#23282B] min-h-screen py-8 px-4">
            <div className="max-w-6xl mx-auto text-white font-sans">
        
                <h1 className='bg-gray-700 border-1 p-2 border-gray-950 my-2 h-14 text-center font-semibold text-3xl text-white'>Residencial documents</h1>
                
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-[#2C3235] border-2 border-gray-600 text-gray-400 text-sm">
                            <tr>
                                <th className="p-3">UserId</th>
                                <th className="p-3">Residence document</th>
                                <th className="p-3">created At</th>
                                <th className="p-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accounts.map((account, index) => (
                                <tr key={index} className="border-b border-gray-600 bg-[#2C3235] hover:bg-[#3a3a3a]">
                                    <td className="p-3">{account.user}</td>
                                    <td className="p-3 text-xl font-normal">

                                    <div className="mb-4 border rounded-lg overflow-hidden">
     
        <img
        src={account.residencedocument}
        alt={`residencedocument ${selectedImage}`}
        className='w-96 h-fit object-contain'
        />
      </div>


                                    </td>
                                    <td className="p-3">{account.createdAt}</td>
                                    
                                    <td className="p-3">
                                        <div className="flex space-x-2">
                                            <button className="bg-gray-800 text-[#00B894] px-3 py-1 rounded text-sm">
                                                Register
                                            </button>
                                            <button className="bg-gray-800 text-[#00B894] px-3 py-1 rounded text-sm">
                                                Trade
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};