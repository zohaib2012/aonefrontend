

import { useState } from 'react';
import { useDisplaymessagesQuery } from '../../redux/messagesapi';

export const Displaymessages = () => {

    const { data, error, isLoading, isError } = useDisplaymessagesQuery();

    const [selectedImage, setSelectedImage] = useState(0);
    
    console.log("one")
console.log(data)
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

    console.log(data)
    // Extract accounts from the API response
    const accounts = data?.data?.map(account => ({
        name: account.name,
        email: account.email,
      message: account.message,
        phone:account.phone
    })) || [];

    return (
        <div className="bg-[#23282B] min-h-screen py-8 px-4">
            <div className="max-w-6xl mx-auto text-white font-sans">
        
                <h1 className='bg-gray-700 boder-1 p-2 border-gray-950 my-2 h-14 text-center font-semibold  text-3xl text-white'>User Queries</h1>
                
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-[#2C3235] border-2 border-gray-600 text-gray-400 text-sm">
                            <tr>
                                <th className="p-3">Name</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Message</th>
                                <th className="p-3">Phone</th>
                                <th className="p-3">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accounts.map((account, index) => (
                                <tr key={index} className="border-b border-gray-600 bg-[#2C3235] hover:bg-[#3a3a3a]">
                                  
                                    <td className="p-3">{account.name}</td>
                                    <td className="p-3 text-sm text-gray-400">
                                        {account.email}
                                    </td>
                                    <td className="p-3">
                                        {account.message}
                                    </td>
                                    <td className="p-3">
                                        {account.phone}
                                    </td>
                                  
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

