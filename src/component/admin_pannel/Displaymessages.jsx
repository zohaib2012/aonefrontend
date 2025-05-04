


// import { useState } from 'react';
// import { useDisplaymessagesQuery } from '../../redux/messagesapi';
// import { useNavigate } from 'react-router-dom';
// import { FaChevronLeft } from 'react-icons/fa6';
// import { Search } from 'lucide-react';

// export const Displaymessages = () => {
//     const navigate = useNavigate();
//     const { data, error, isLoading, isError } = useDisplaymessagesQuery();

//     const [searchTerm, setSearchTerm] = useState('');
//     const [selectedImage, setSelectedImage] = useState(0);

//     if (isLoading) {
//         return (
//             <div className="flex justify-center items-center h-screen bg-[#23282B]">
//                 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00B894]"></div>
//             </div>
//         );
//     }

//     if (isError) {
//         return (
//             <div className="flex justify-center items-center h-screen bg-[#23282B] text-red-500">
//                 Failed to fetch data
//             </div>
//         );
//     }

//     // Extract accounts from the API response
//     const accounts = data?.data?.map(account => ({
//         name: account.name,
//         email: account.email,
//         message: account.message,
//         phone: account.phone
//     })) || [];

    
//     // Filter accounts based on search term
//     const filteredAccounts = accounts.filter(account => 
//         account.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//         account.email.toLowerCase().includes(searchTerm.toLowerCase())||
//         account.phone.toString().includes(searchTerm.toString())
        
//     );

//     const handleBack = () => {
//         navigate(-1); // go back to the previous page
//     };

//     return (
//         <div className="bg-[#23282B] min-h-screen py-8 px-4">
            
//             <div className="max-w-6xl mx-auto text-white font-sans">

//                 <h1 className='bg-gray-700 p-2 my-10 border border-gray-950 text-center font-semibold text-white text-xl sm:text-2xl md:text-3xl h-auto sm:h-14 flex items-center justify-center'>
//                     User query
//                 </h1>

//                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
//                     <button
//                         onClick={handleBack}
//                         className="bg-gray-700 hover:bg-gray-500 text-blue-400 px-4 py-2 w-28 rounded-lg transition mb-4 sm:mb-0"
//                     >
//                         <FaChevronLeft className='inline-block text-lg mr-2' />
//                         Back
//                     </button>

//                     <div className="relative w-full sm:w-64">
//                         <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                             <Search className="text-gray-400 w-4 h-4" />
//                         </div>
//                         <input
//                             type="text"
//                             className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-[#00B894] focus:border-[#00B894] block w-full pl-10 p-2.5"
//                             placeholder="Search by name ,email or ..."
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                         />
//                     </div>


//                 </div>

//                 <div className="overflow-x-auto">
//                     <table className="w-full text-left">
//                         <thead className="bg-[#2C3235] border-2 border-gray-600 text-gray-400 text-sm">
//                             <tr>
//                                 <th className="p-3">Name</th>
//                                 <th className="p-3">Email</th>
//                                 <th className="p-3">Message</th>
//                                 <th className="p-3">Phone</th>
//                                 <th className="p-3">ACTIONS</th>
//                             </tr>
//                         </thead>

//                         <tbody>
//                             {filteredAccounts.length > 0 ? (
//                                 filteredAccounts.map((account, index) => (
//                                     <tr key={index} className="border-b border-gray-600 bg-[#2C3235] hover:bg-[#3a3a3a]">
//                                         <td className="p-3">{account.name}</td>
//                                         <td className="p-3 text-sm text-gray-400">
//                                             {account.email}
//                                         </td>
//                                         <td className="p-3">
//                                             {account.message}
//                                         </td>
//                                         <td className="p-3">
//                                             {account.phone}
//                                         </td>
//                                         <td className="p-3">
//                                             <div className="flex space-x-2">
//                                                 <button className="bg-gray-800 text-[#00B894] px-3 py-1 rounded text-sm">
//                                                     Register
//                                                 </button>
//                                                 <button className="bg-gray-800 text-[#00B894] px-3 py-1 rounded text-sm">
//                                                     Trade
//                                                 </button>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr className="border-b border-gray-600 bg-[#2C3235]">
//                                     <td colSpan="5" className="p-3 text-center text-gray-400">
//                                         No matching records found
//                                     </td>
//                                 </tr>
//                             )}
//                         </tbody>

//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };


import { useState, useEffect } from 'react';
import { useDisplaymessagesQuery } from '../../redux/messagesapi';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa6';
import { Search } from 'lucide-react';

export const Displaymessages = () => {
    const navigate = useNavigate();
    const { data, error, isLoading, isError } = useDisplaymessagesQuery();

    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 1000);

        return () => clearTimeout(handler);
    }, [searchTerm]);

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

    const accounts = data?.data?.map(account => ({
        name: account.name,
        email: account.email,
        message: account.message,
        phone: account.phone
    })) || [];

    const filteredAccounts = accounts.filter(account =>
        account.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        account.email.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        account.phone.toString().includes(debouncedSearchTerm.toString())
    );

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="bg-[#23282B] min-h-screen py-8 px-4">
            <div className="max-w-6xl mx-auto text-white font-sans">
                <h1 className='bg-gray-700 p-2 my-10 border border-gray-950 text-center font-semibold text-white text-xl sm:text-2xl md:text-3xl h-auto sm:h-14 flex items-center justify-center'>
                    User query
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
                            className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-[#00B894] focus:border-[#00B894] block w-full pl-10 p-2.5"
                            placeholder="Search by name ,email or ..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

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
                            {filteredAccounts.length > 0 ? (
                                filteredAccounts.map((account, index) => (
                                    <tr key={index} className="border-b border-gray-600 bg-[#2C3235] hover:bg-[#3a3a3a]">
                                        <td className="p-3">{account.name}</td>
                                        <td className="p-3 text-sm text-gray-400">{account.email}</td>
                                        <td className="p-3">{account.message}</td>
                                        <td className="p-3">{account.phone}</td>
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
                                ))
                            ) : (
                                <tr className="border-b border-gray-600 bg-[#2C3235]">
                                    <td colSpan="5" className="p-3 text-center text-gray-400">
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
