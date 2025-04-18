

// import { useState } from 'react';
// import { useDisplayMoneyQuery } from '../../redux/Depositmoney';
// import { Images } from 'lucide-react';

// export const Depositmoney = () => {

//     const { data, error, isLoading, isError } = useDisplayMoneyQuery();

//     const [selectedImage, setSelectedImage] = useState(0);

//     console.log("one")
//     console.log(data)
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
//                 Error loading account details: {error.message}
//             </div>
//         );
//     }

//     console.log(data)
//     // Extract accounts from the API response
//     const accounts = data?.data?.map(account => ({
//         Transaction: account._id,
//         date: account.date,
//         createdAt: account.createdAt,
//         amount: account.amount,
//         images: account.images
//     })) || [];

//     return (
//         <div className="bg-[#23282B] min-h-screen py-8 px-4">
//             <div className="max-w-6xl mx-auto text-white font-sans">

//                 <h1 className='bg-gray-700 boder-1 p-2 border-gray-950 my-2 h-14 text-center font-semibold  text-3xl text-white'>Deposit Money Transactions</h1>

//                 <div className="overflow-x-auto">
//                     <table className="w-full text-left">
//                         <thead className="bg-[#2C3235] border-2 border-gray-600 text-gray-400 text-sm">
//                             <tr>
//                                 <th className="p-3">TransactionId</th>
//                                 <th className="p-3">Date</th>
//                                 <th className="p-3">Time</th>
//                                 <th className="p-3">Amount</th>
//                                 <th className="p-3">Images</th>
//                                 <th className="p-3">ACTIONS</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {accounts.map((account, index) => (
//                                 <tr key={index} className="border-b border-gray-600 bg-[#2C3235] hover:bg-[#3a3a3a]">

//                                     <td className="p-3">{account.Transaction}</td>
//                                     <td className="p-3 text-sm text-gray-400">
//                                         {account.date}
//                                     </td>
//                                     <td className="p-3">
//                                         {account.createdAt}
//                                     </td>
//                                     <td className="p-3">
//                                         {account.amount}
//                                     </td>
//                                     <td className="p-3">
//                                         <div className="mb-4 border rounded-lg overflow-hidden">
//                                             <img
//                                                 src={account.images[selectedImage]}
//                                                 alt={`Product image ${selectedImage + 1}`}
//                                                 className="w-full fit object-contain"
//                                             />
//                                         </div>



//                                     </td>
//                                     <td className="p-3">
//                                         <form>

//                                             <div className="flex space-x-2">
//                                                 <input type="Number"
//                                                     placeholder='Add balance'
//                                                     name='amount'
//                                                     className='bg-gray-800 border-2 border-gray-700'

//                                                 />
//                                                 <button className="bg-gray-800 text-[#00B894] px-3 py-1 rounded text-sm">
//                                                     balance
//                                                 </button>
//                                             </div>
//                                         </form>


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
import { useAddbalanceMutation, useDisplayMoneyQuery } from '../../redux/Depositmoney';

// import { Images } from 'lucide-react';
import { toast } from 'react-toastify'; // Optional for notifications

export const Depositmoney = () => {
    const { data, error, isLoading, isError } = useDisplayMoneyQuery();
    const [addBalance, { isLoading: isUpdating }] = useAddbalanceMutation()
    
    const [selectedImage, setSelectedImage] = useState(0);
    const [balanceInputs, setBalanceInputs] = useState({});
    
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

    // Extract accounts from the API response
    const accounts = data?.data?.map(account => ({
        Transaction: account._id,
        date: account.date,
        createdAt: account.createdAt,
        amount: account.amount,
        images: account.images,
        balance: account.balance,
        userId: account.user // Make sure the API returns user ID
    })) || [];
    
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

    return (
        <div className="bg-[#23282B] min-h-screen py-8 px-4">
            <div className="max-w-6xl mx-auto text-white font-sans">
                <h1 className='bg-gray-700 p-2 border-gray-950 my-2 h-14 text-center font-semibold text-3xl text-white'>
                    Deposit Money Transactions
                </h1>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-[#2C3235] border-2 border-gray-600 text-gray-400 text-sm">
                            <tr>
                                <th className="p-3">UserId</th>
                                <th className="p-3">Date</th>
                                <th className="p-3">Time</th>
                                <th className="p-3">Amount</th>
                                <th className="p-3">Images</th>
                                <th className="p-3">ACTIONS</th>
                                <th className="p-3">Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accounts.map((account, index) => (
                                <tr key={index} className="border-b border-gray-600 bg-[#2C3235] hover:bg-[#3a3a3a]">
                                    <td className="p-3">{account.userId}</td>
                                    <td className="p-3 text-sm text-gray-400">
                                        {account.date}
                                    </td>
                                    <td className="p-3">
                                        {account.createdAt}
                                    </td>
                                    <td className="p-3">
                                        {account.amount}
                                    </td>
                                    <td className="p-3">
                                        <div className="mb-4 border rounded-lg overflow-hidden">
                                            {account.images && account.images.length > 0 ? (
                                                <img
                                                    src={account.images[selectedImage]}
                                                    alt={`Transaction image ${selectedImage + 1}`}
                                                    className="w-full fit object-contain h-20"
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
                                                    className={`bg-gray-800 text-[#00B894] px-3 py-1 rounded text-sm ${
                                                        isUpdating ? 'opacity-50 cursor-not-allowed' : ''
                                                    }`}
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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};