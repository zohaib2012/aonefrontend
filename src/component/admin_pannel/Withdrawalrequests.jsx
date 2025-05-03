



// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaChevronLeft } from 'react-icons/fa6';
// import { useWithdrawalrequestsQuery } from '../../redux/withdrawapi';

// export const Withdrawalrequests = () => {
//     const navigate = useNavigate()
//     const { data, error, isLoading, isError } = useWithdrawalrequestsQuery();

   

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
//     const details = data?.data?.map(account => ({
//         user: account.user,
//         UserEmail: account.userEmail,
//         Account: account.account,
//         AccountNo: account.accountno,
//         Bank: account.bank,
//         Amount: account.amount,
//         Currency: account.currency
//     })) || [];

//     const handleBack = () => {
//         navigate(-1); // go back to the previous page
//     };

//     return (
//         <div className="bg-[#23282B] min-h-screen py-8 px-4">
            
//             <div className="max-w-6xl mx-auto text-white font-sans">

//                 <h1 className='bg-gray-700 p-2 my-10 border border-gray-950  text-center font-semibold text-white text-xl sm:text-2xl md:text-3xl h-auto sm:h-14 flex items-center justify-center'>
//                     With drawal requests
//                 </h1>

//                 <button
//                     onClick={handleBack}
//                     className="bg-gray-700 -mt-3  hover:bg-gray-500 text-blue-400 px-4 py-2 w-28  mx-1 rounded-lg transition"
//                 >
//                     <FaChevronLeft className='inline-block text-lg space-x-3 ' />


//                     Back

//                 </button>
//                 <div className="overflow-x-auto">
//                     <table className="w-full text-left">
//                         <thead className="bg-[#2C3235] border-2 border-gray-600 text-gray-400 text-sm">
//                             <tr>
//                                 <th className="p-3">Email</th>
//                                 <th className="p-3">Amount</th>
//                                 <th className="p-3">Accout</th>
//                                 <th className="p-3">Accout No</th>
//                                 <th className="p-3">Bank</th>
//                                 <th className="p-3">Currency</th>
//                                 <th className="p-3">UserId</th>
//                                 <th className="p-3">ACTIONS</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {details.map((account, index) => (
//                                 <tr key={index} className="border-b border-gray-600 bg-[#2C3235] hover:bg-[#3a3a3a]">

//                                     <td className="p-3">{account.UserEmail}</td>
//                                     <td className="p-3 text-sm text-gray-400">
//                                         {account.Amount}
//                                     </td>
//                                     <td className="p-3">
//                                         {account.Account}
//                                     </td>
//                                     <td className="p-3">
//                                         {account.AccountNo}
//                                     </td>
//                                     <td className="p-3">
//                                         {account.Bank}
//                                     </td>
//                                     <td className="p-3">
//                                         {account.Currency}
//                                     </td>
//                                     <td className="p-3">
//                                         {account.user}
//                                     </td>

//                                     <td className="p-3">

//                                         <div className="flex space-x-2">
//                                             <button className="bg-gray-800 text-[#00B894] px-3 py-1 rounded text-sm">
//                                                 Register
//                                             </button>
//                                             <button className="bg-gray-800 text-[#00B894] px-3 py-1 rounded text-sm">
//                                                 Trade
//                                             </button>
//                                         </div>


//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa6';
import { Search } from 'lucide-react';
import { useWithdrawalrequestsQuery } from '../../redux/withdrawapi';

export const Withdrawalrequests = () => {
    const navigate = useNavigate();
    const { data, error, isLoading, isError } = useWithdrawalrequestsQuery();

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

    const details = data?.data?.map(account => ({
        user: account.user,
        UserEmail: account.userEmail,
        Account: account.account,
        AccountNo: account.accountno,
        Bank: account.bank,
        Amount: account.amount,
        Currency: account.currency
    })) || [];

    const filteredDetails = details.filter(account =>
        account.UserEmail?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        account.Account?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        account.Amount?.toString().includes(searchTerm)
    );

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="bg-[#23282B] min-h-screen py-8 px-4">
            <div className="max-w-6xl mx-auto text-white font-sans">

                <h1 className='bg-gray-700 p-2 my-10 border border-gray-950 text-center font-semibold text-white text-xl sm:text-2xl md:text-3xl h-auto sm:h-14 flex items-center justify-center'>
                    Withdrawal Requests
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
                            placeholder="Search by email, account, or amount"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-[#2C3235] border-2 border-gray-600 text-gray-400 text-sm">
                            <tr>
                                <th className="p-3">Email</th>
                                <th className="p-3">Amount</th>
                                <th className="p-3">Account</th>
                                <th className="p-3">Account No</th>
                                <th className="p-3">Bank</th>
                                <th className="p-3">Currency</th>
                                <th className="p-3">UserId</th>
                                <th className="p-3">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredDetails.length > 0 ? (
                                filteredDetails.map((account, index) => (
                                    <tr key={index} className="border-b border-gray-600 bg-[#2C3235] hover:bg-[#3a3a3a]">
                                        <td className="p-3">{account.UserEmail}</td>
                                        <td className="p-3 text-sm text-gray-400">{account.Amount}</td>
                                        <td className="p-3">{account.Account}</td>
                                        <td className="p-3">{account.AccountNo}</td>
                                        <td className="p-3">{account.Bank}</td>
                                        <td className="p-3">{account.Currency}</td>
                                        <td className="p-3">{account.user}</td>
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
                                    <td colSpan="8" className="p-3 text-center text-gray-400">
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
