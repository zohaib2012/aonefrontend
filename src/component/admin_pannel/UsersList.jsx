


import { Clipboard, Edit2 } from 'lucide-react';
import { Link} from 'react-router-dom';
import { useUsersListQuery } from '../../redux/Comonapi';

export const UsersList = () => {
    const { data, error, isLoading, isError } = useUsersListQuery();
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
        databaseId: account._id,
        country: account.country,
        email: account.email
    })) || [];

    return (
        <div className="bg-[#23282B] min-h-screen py-8 px-4">
            <div className="max-w-6xl mx-auto text-white font-sans">
                {/* <div className="flex items-center mb-6">
                    <button className="px-4 py-2 text-white border-2 border-gray-600 bg-[#2C3235]">
                        Trading Accounts
                    </button>
                    <div className="ml-auto">
                        <Link to="/profile/open/new/account">
                            <button className="hover:bg-[#253333] text-[#00B894] px-4 py-2 rounded flex items-center">
                                + Create New Account
                            </button>
                        </Link>
                    </div>
                </div> */}
                <h1 className='bg-gray-700 boder-1 p-2 border-gray-950 my-2 h-14 text-center font-semibold  text-3xl text-white'>User List</h1>
                
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-[#2C3235] border-2 border-gray-600 text-gray-400 text-sm">
                            <tr>
                                <th className="p-3">UserId</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">country</th>
                                <th className="p-3">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accounts.map((account, index) => (
                                <tr key={index} className="border-b border-gray-600 bg-[#2C3235] hover:bg-[#3a3a3a]">
                                  
                                    <td className="p-3">{account.databaseId}</td>
                                    <td className="p-3 text-sm text-gray-400">
                                        {account.email}
                                    </td>
                                    <td className="p-3">
                                        {account.country}
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

