
import { useState } from 'react';
import { useAddbalanceMutation, useDisplayMoneyQuery, useUpdateloginIdMutation } from '../../redux/Depositmoney';

// import { Images } from 'lucide-react';
import { toast } from 'react-toastify'; // Optional for notifications

export const Depositmoney = () => {
    const { data, error, isLoading, isError } = useDisplayMoneyQuery();
    const [addBalance, { isLoading: isUpdating }] = useAddbalanceMutation()

    const [updateloginId, { isLoading: isupdatingL_id }] = useUpdateloginIdMutation()

    const [selectedImage, setSelectedImage] = useState(0);
    const [balanceInputs, setBalanceInputs] = useState({});

    const [loginIdinput, setloginIdinput] = useState({});


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
        loginId: account.loginId,
        currentloginId: account.currentloginId,
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
    return (
        <div className="bg-[#23282B] min-h-screen py-8 px-4">
            <div className="max-w-6xl mx-auto text-white font-sans">
               
                <h1 className='bg-gray-700 p-2 my-10 border border-gray-950  text-center font-semibold text-white text-xl sm:text-2xl md:text-3xl h-auto sm:h-14 flex items-center justify-center'>
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
                                <th className="p-3">LoginId</th>
                                <th className="p-3">Images</th>
                                <th className="p-3">ACTIONS</th>
                                <th className="p-3">Balance</th>
                                <th className="p-3">ACTIONS</th>
                                <th className="p-3">CurrentloginId</th>
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
                                        {account.loginId}
                                    </td>
                                    <td className="p-3">
                                        <div className="mb-4 border rounded-lg w-60  overflow-hidden">
                                            {account.images && account.images.length > 0 ? (
                                                <img
                                                    src={account.images[selectedImage]}
                                                    alt={`Transaction image ${selectedImage + 1}`}
                                                    className="w-full h-fit object-contain "
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
                                                    className={`bg-gray-800 text-[#00B894] px-3 py-1 rounded text-sm ${isUpdating ? 'opacity-50 cursor-not-allowed' : ''
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
                                    <td className="p-3">
                                        <form onSubmit={(e) => handleL_idSubmit(e, account.userId, account.Transaction)}>
                                            <div className="flex space-x-2">
                                                <input
                                                    type="number"
                                                    placeholder='Add Id'
                                                    name='loginId'
                                                    value={loginIdinput[account.Transaction] || ''}
                                                    onChange={(e) => handleL_IdChange(account.Transaction, e.target.value)}
                                                    className='bg-gray-800 border-2 border-gray-700 px-2 py-1 w-24 text-white'
                                                />
                                                <button
                                                    type="submit"
                                                    className={`bg-gray-800 text-[#00B894] px-3 py-1 rounded text-sm ${isUpdating ? 'opacity-50 cursor-not-allowed' : ''
                                                        }`}
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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};