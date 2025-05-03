
// import { useState } from 'react';
// import { useAddbalanceMutation, useDisplayMoneyQuery, useUpdateloginIdMutation } from '../../redux/Depositmoney';

// // import { Images } from 'lucide-react';
// import { toast } from 'react-toastify'; // Optional for notifications
// import { useNavigate } from 'react-router-dom';
// import { FaChevronLeft } from 'react-icons/fa6';


// export const Depositmoney = () => {
//     const navigate = useNavigate();
   
//     const { data, error, isLoading, isError } = useDisplayMoneyQuery();
//     const [addBalance, { isLoading: isUpdating }] = useAddbalanceMutation()

//     const [updateloginId, { isLoading: isupdatingL_id }] = useUpdateloginIdMutation()

//     const [selectedImage, setSelectedImage] = useState(0);
//     const [balanceInputs, setBalanceInputs] = useState({});

//     const [loginIdinput, setloginIdinput] = useState({});


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
//         Transaction: account._id,
//         email: account.email,
//         date: account.date,
//         createdAt: account.createdAt,
//         amount: account.amount,
//         images: account.images,
//         balance: account.balance,
//         loginId: account.loginId,
//         currentloginId: account.currentloginId,
//         userId: account.user // Make sure the API returns user ID
//     })) || [];

//     // Handle balance input change
//     const handleBalanceChange = (transactionId, value) => {
//         setBalanceInputs({
//             ...balanceInputs,
//             [transactionId]: value
//         });
//     };

//     // Handle form submission
//     const handleBalanceSubmit = async (e, userId, transactionId) => {
//         e.preventDefault();

//         const amount = balanceInputs[transactionId];
//         if (!amount) {
//             toast?.error("Please enter an amount") || alert("Please enter an amount");
//             return;
//         }

//         try {
//             const result = await addBalance({
//                 amount: Number(amount),
//                 user: userId
//             }).unwrap();
//             console.log(result)
//             toast?.success("Balance updated successfully") || alert("Balance updated successfully");

//             // Clear the input after successful update
//             setBalanceInputs({
//                 ...balanceInputs,
//                 [transactionId]: ''
//             });
//         } catch (error) {
//             console.error("Failed to update balance:", error);
//             toast?.error(error.data?.message || "Failed to update balance") ||
//                 alert(error.data?.message || "Failed to update balance");
//         }
//     };


//     // Handle loginId input change
//     const handleL_IdChange = (transactionId, value) => {
//         setloginIdinput({
//             ...loginIdinput,
//             [transactionId]: value
//         });
//     };

//     // Handle form submission
//     const handleL_idSubmit = async (e, userId, transactionId) => {
//         e.preventDefault();

//         const loginId = loginIdinput[transactionId];
//         if (!loginId) {
//             toast?.error("Please enter an LoginId") || alert("Please enter an LoginId");
//             return;
//         }

//         try {
//             const result = await updateloginId({
//                 loginId,
//                 user: userId
//             }).unwrap();
//             console.log(result)
//             toast?.success("loginId updated successfully") || alert("LoginId updated successfully");

//             // Clear the input after successful update
//             setloginIdinput({
//                 ...loginIdinput,
//                 [transactionId]: ''
//             });
//         } catch (error) {
//             console.error("Failed to update balance:", error);
//             toast?.error(error.data?.message || "Failed to update balance") ||
//                 alert(error.data?.message || "Failed to update balance");
//         }
//     };



//     const handleBack = () => {
//         navigate(-1); // go back to the previous page
//     };


//     return (
//         <div className="bg-[#23282B] min-h-screen py-8 px-4">
//             <div className="max-w-6xl mx-auto text-white font-sans">

//                 <h1 className='bg-gray-700 p-2 my-10 border border-gray-950  text-center font-semibold text-white text-xl sm:text-2xl md:text-3xl h-auto sm:h-14 flex items-center justify-center'>

//                     Deposit Money Transactions
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
//                                 <th className="p-3">UserId</th>
//                                 <th className="p-3">Email</th>
//                                 <th className="p-3">Amount</th>
//                                 <th className="p-3">LoginId</th>
//                                 <th className="p-3">Images</th>
//                                 <th className="p-3">ACTIONS</th>
//                                 <th className="p-3">Balance</th>
//                                 <th className="p-3">ACTIONS</th>
//                                 <th className="p-3">CurrentloginId</th>
//                                 <th className="p-3">Date</th>
//                                 <th className="p-3">Time</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {accounts.map((account, index) => (
//                                 <tr key={index} className="border-b border-gray-600 bg-[#2C3235] hover:bg-[#3a3a3a]">
//                                     <td className="p-3">{account.userId}</td>

//                                     <td className="p-3 text-sm text-gray-400">
//                                         {account.email}
//                                     </td>
//                                     <td className="p-3">
//                                         {account.amount}
//                                     </td>
//                                     <td className="p-3">
//                                         {account.loginId}
//                                     </td>
//                                     <td className="p-3">
//                                         <div className="mb-4 border rounded-lg w-60  overflow-hidden">
//                                             {account.images && account.images.length > 0 ? (
//                                                 <img
//                                                     src={account.images[selectedImage]}
//                                                     alt={`Transaction image ${selectedImage + 1}`}
//                                                     className="w-full h-fit object-contain "
//                                                 />
//                                             ) : (
//                                                 <div className="h-20 flex items-center justify-center text-gray-500">
//                                                     No image available
//                                                 </div>
//                                             )}
//                                         </div>
//                                     </td>
//                                     <td className="p-3">
//                                         <form onSubmit={(e) => handleBalanceSubmit(e, account.userId, account.Transaction)}>
//                                             <div className="flex space-x-2">
//                                                 <input
//                                                     type="number"
//                                                     placeholder='Add balance'
//                                                     name='amount'
//                                                     value={balanceInputs[account.Transaction] || ''}
//                                                     onChange={(e) => handleBalanceChange(account.Transaction, e.target.value)}
//                                                     className='bg-gray-800 border-2 border-gray-700 px-2 py-1 w-24 text-white'
//                                                 />
//                                                 <button
//                                                     type="submit"
//                                                     className={`bg-gray-800 text-[#00B894] px-3 py-1 rounded text-sm ${isUpdating ? 'opacity-50 cursor-not-allowed' : ''
//                                                         }`}
//                                                     disabled={isUpdating}
//                                                 >
//                                                     {isUpdating ? 'Updating...' : 'Update'}
//                                                 </button>

//                                             </div>
//                                         </form>
//                                     </td>
//                                     <td className="p-3">
//                                         {account.balance}
//                                     </td>
//                                     <td className="p-3">
//                                         <form onSubmit={(e) => handleL_idSubmit(e, account.userId, account.Transaction)}>
//                                             <div className="flex space-x-2">
//                                                 <input
//                                                     type="text"
//                                                     placeholder='Add Id'
//                                                     name='loginId'
//                                                     value={loginIdinput[account.Transaction] || ''}
//                                                     onChange={(e) => handleL_IdChange(account.Transaction, e.target.value)}
//                                                     className='bg-gray-800 border-2 border-gray-700 px-2 py-1 w-24 text-white'
//                                                 />
//                                                 <button
//                                                     type="submit"
//                                                     className={`bg-gray-800 text-[#00B894] px-3 py-1 rounded text-sm ${isUpdating ? 'opacity-50 cursor-not-allowed' : ''
//                                                         }`}
//                                                     disabled={isupdatingL_id}
//                                                 >
//                                                     {isupdatingL_id ? 'Updating...' : 'Update'}
//                                                 </button>

//                                             </div>
//                                         </form>
//                                     </td>
//                                     <td className="p-3">
//                                         {account.currentloginId}
//                                     </td>
//                                     <td className="p-3 text-sm text-gray-400">
//                                         {account.date}
//                                     </td>
//                                     <td className="p-3">
//                                         {account.createdAt}
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
import { useAddbalanceMutation, useDisplayMoneyQuery, useUpdateloginIdMutation } from '../../redux/Depositmoney';
import { toast } from 'react-toastify'; // Optional for notifications
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa6';
import { Search } from 'lucide-react';

export const Depositmoney = () => {
    const navigate = useNavigate();
    const { data, error, isLoading, isError } = useDisplayMoneyQuery();
    const [addBalance, { isLoading: isUpdating }] = useAddbalanceMutation();
    const [updateloginId, { isLoading: isupdatingL_id }] = useUpdateloginIdMutation();

    const [selectedImage, setSelectedImage] = useState(0);
    const [balanceInputs, setBalanceInputs] = useState({});
    const [loginIdinput, setloginIdinput] = useState({});
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

    // Extract accounts from the API response
    const accounts = data?.data?.map(account => ({
        Transaction: account._id,
        email: account.email,
        date: account.date,
        createdAt: account.createdAt,
        amount: account.amount,
        images: account.images,
        balance: account.balance,
        loginId: account.loginId,
        currentloginId: account.currentloginId,
        userId: account.user // Make sure the API returns user ID
    })) || [];

    // Filter accounts based on search term
    const filteredAccounts = accounts.filter(account => 
        (account.email && account.email.toLowerCase().includes(searchTerm.toLowerCase())) || 
        (account.userId && account.userId.toString().includes(searchTerm)) ||
        (account.amount && account.amount.toString().includes(searchTerm)) ||
        (account.loginId && account.loginId.toString().includes(searchTerm)) ||
        (account.currentloginId && account.currentloginId.toString().includes(searchTerm))
    );

    // Handle balance input change
    const handleBalanceChange = (transactionId, value) => {
        setBalanceInputs({
            ...balanceInputs,
            [transactionId]: value
        });
    };

    // Handle form submission
    const handleBalanceSubmit = async (e, userId, transactionId) => {
        e.preventDefault();

        const amount = balanceInputs[transactionId];
        if (!amount) {
            toast?.error("Please enter an amount") || alert("Please enter an amount");
            return;
        }

        try {
            const result = await addBalance({
                amount: Number(amount),
                user: userId
            }).unwrap();
            console.log(result)
            toast?.success("Balance updated successfully") || alert("Balance updated successfully");

            // Clear the input after successful update
            setBalanceInputs({
                ...balanceInputs,
                [transactionId]: ''
            });
        } catch (error) {
            console.error("Failed to update balance:", error);
            toast?.error(error.data?.message || "Failed to update balance") ||
                alert(error.data?.message || "Failed to update balance");
        }
    };

    // Handle loginId input change
    const handleL_IdChange = (transactionId, value) => {
        setloginIdinput({
            ...loginIdinput,
            [transactionId]: value
        });
    };

    // Handle form submission
    const handleL_idSubmit = async (e, userId, transactionId) => {
        e.preventDefault();

        const loginId = loginIdinput[transactionId];
        if (!loginId) {
            toast?.error("Please enter an LoginId") || alert("Please enter an LoginId");
            return;
        }

        try {
            const result = await updateloginId({
                loginId,
                user: userId
            }).unwrap();
            console.log(result)
            toast?.success("loginId updated successfully") || alert("LoginId updated successfully");

            // Clear the input after successful update
            setloginIdinput({
                ...loginIdinput,
                [transactionId]: ''
            });
        } catch (error) {
            console.error("Failed to update balance:", error);
            toast?.error(error.data?.message || "Failed to update balance") ||
                alert(error.data?.message || "Failed to update balance");
        }
    };

    const handleBack = () => {
        navigate(-1); // go back to the previous page
    };

    return (
        <div className="bg-[#23282B] min-h-screen py-8 px-4">
            <div className="max-w-6xl mx-auto text-white font-sans">

                <h1 className='bg-gray-700 p-2 my-10 border border-gray-950 text-center font-semibold text-white text-xl sm:text-2xl md:text-3xl h-auto sm:h-14 flex items-center justify-center'>
                    Deposit Money Transactions
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
                            placeholder="Search by email, user ID, login ID..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-[#2C3235] border-2 border-gray-600 text-gray-400 text-sm">
                            <tr>
                                <th className="p-3">UserId</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Amount</th>
                                <th className="p-3">LoginId</th>
                                <th className="p-3">Images</th>
                                <th className="p-3">ACTIONS</th>
                                <th className="p-3">Balance</th>
                                <th className="p-3">ACTIONS</th>
                                <th className="p-3">CurrentloginId</th>
                                <th className="p-3">Date</th>
                                <th className="p-3">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredAccounts.length > 0 ? (
                                filteredAccounts.map((account, index) => (
                                    <tr key={index} className="border-b border-gray-600 bg-[#2C3235] hover:bg-[#3a3a3a]">
                                        <td className="p-3">{account.userId}</td>
                                        <td className="p-3 text-sm text-gray-400">
                                            {account.email}
                                        </td>
                                        <td className="p-3">
                                            {account.amount}
                                        </td>
                                        <td className="p-3">
                                            {account.loginId}
                                        </td>
                                        <td className="p-3">
                                            <div className="mb-4 border rounded-lg w-60 overflow-hidden">
                                                {account.images && account.images.length > 0 ? (
                                                    <img
                                                        src={account.images[selectedImage]}
                                                        alt={`Transaction image ${selectedImage + 1}`}
                                                        className="w-full h-fit object-contain"
                                                    />
                                                ) : (
                                                    <div className="h-20 flex items-center justify-center text-gray-500">
                                                        No image available
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="p-3">
                                            <form onSubmit={(e) => handleBalanceSubmit(e, account.userId, account.Transaction)}>
                                                <div className="flex space-x-2">
                                                    <input
                                                        type="number"
                                                        placeholder='Add balance'
                                                        name='amount'
                                                        value={balanceInputs[account.Transaction] || ''}
                                                        onChange={(e) => handleBalanceChange(account.Transaction, e.target.value)}
                                                        className='bg-gray-800 border-2 border-gray-700 px-2 py-1 w-24 text-white'
                                                    />
                                                    <button
                                                        type="submit"
                                                        className={`bg-gray-800 text-[#00B894] px-3 py-1 rounded text-sm ${isUpdating ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                        disabled={isUpdating}
                                                    >
                                                        {isUpdating ? 'Updating...' : 'Update'}
                                                    </button>
                                                </div>
                                            </form>
                                        </td>
                                        <td className="p-3">
                                            {account.balance}
                                        </td>
                                        <td className="p-3">
                                            <form onSubmit={(e) => handleL_idSubmit(e, account.userId, account.Transaction)}>
                                                <div className="flex space-x-2">
                                                    <input
                                                        type="text"
                                                        placeholder='Add Id'
                                                        name='loginId'
                                                        value={loginIdinput[account.Transaction] || ''}
                                                        onChange={(e) => handleL_IdChange(account.Transaction, e.target.value)}
                                                        className='bg-gray-800 border-2 border-gray-700 px-2 py-1 w-24 text-white'
                                                    />
                                                    <button
                                                        type="submit"
                                                        className={`bg-gray-800 text-[#00B894] px-3 py-1 rounded text-sm ${isupdatingL_id ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                        disabled={isupdatingL_id}
                                                    >
                                                        {isupdatingL_id ? 'Updating...' : 'Update'}
                                                    </button>
                                                </div>
                                            </form>
                                        </td>
                                        <td className="p-3">
                                            {account.currentloginId}
                                        </td>
                                        <td className="p-3 text-sm text-gray-400">
                                            {account.date}
                                        </td>
                                        <td className="p-3">
                                            {account.createdAt}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr className="border-b border-gray-600 bg-[#2C3235]">
                                    <td colSpan="11" className="p-3 text-center text-gray-400">
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