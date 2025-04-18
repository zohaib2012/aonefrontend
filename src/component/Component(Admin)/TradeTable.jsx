import { Clipboard, Edit2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDetailUserMutation } from "../../redux/createaccountapi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const TradeTable = () => {
  const [detailUser] = useDetailUserMutation();
  const [accounts, setAccounts] = useState([]);

  const navigate = useNavigate();


  const userDetail = JSON.parse(localStorage.getItem("user"));
  const userId = userDetail?._id || "";

  useEffect(() => {
    const fetchUserDetail = async () => {
      if (!userId) return;
      try {
        const result = await detailUser({ user: userId }).unwrap();
        console.log("==========",result)
        if (result?.Accounts?.length > 0) {
          const formattedAccounts = result.Accounts.map((account) => ({
            accountNumber: account.accountType || "Standard",
            accountId: `${account._id.slice(-8)} / Real`,
            LoginId: account._id.slice(-4),
            leverage: account.leverage,
            balance: "0.00",
            freeMargin: "0.00",
            currency: account.currency,
            accountType: account.accountType,
          }));
          setAccounts(formattedAccounts);
        } else {
          setAccounts([]);
        }
      } catch (err) {
        toast.error(err?.data?.message || "Failed to fetch user details");
      }
    };

    fetchUserDetail();
  }, [detailUser, userId]);

  return (
    <div className="bg-[#23282B] min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto text-white font-sans">
        <div className="flex flex-col sm:flex-row items-center mb-6 gap-4 sm:gap-0">
          <button className="px-4 py-2 text-white border-2 border-gray-600 bg-[#2C3235]">
            Trading Accounts
          </button>
          <div className="sm:ml-auto w-full sm:w-auto">
            <Link to="/profile/open/new/account">
              <button className="w-full sm:w-auto hover:bg-[#253333] text-[#00B894] px-4 py-2 rounded flex justify-center items-center">
                + Create New Account
              </button>
            </Link>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="overflow-x-auto hidden md:block">
          <table className="min-w-full text-left">
            <thead className="bg-[#2C3235] border-2 border-gray-600 text-gray-400 text-sm">
              <tr>
                <th className="p-3 whitespace-nowrap">ACCOUNT#</th>
                <th className="p-3 whitespace-nowrap">LEVERAGE</th>
                <th className="p-3 whitespace-nowrap">BALANCE</th>
                <th className="p-3 whitespace-nowrap">CURRENCY</th>
                <th className="p-3 whitespace-nowrap">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {accounts.length > 0 ? (
                accounts.map((account, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-600 bg-[#2C3235] hover:bg-[#3a3a3a] transition-colors"
                  >
                    <td className="p-3 flex flex-col sm:flex-row sm:items-center gap-1">
                      <span className="font-medium">
                        {account.accountNumber}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {account.accountId}
                      </span>
                      <Clipboard className="text-gray-500 w-4 h-4 cursor-pointer sm:ml-2" />
                    </td>
                    <td className="p-3 whitespace-nowrap">
                      {account.leverage}
                      <Edit2 className="inline-block ml-2 w-4 h-4 text-gray-500 cursor-pointer" />
                    </td>
                    <td className="p-3 whitespace-nowrap">{account.balance}</td>
                    <td className="p-3 whitespace-nowrap">
                      {account.currency}
                    </td>
                    <td className="p-3 whitespace-nowrap">
                      <div className="flex flex-col sm:flex-row gap-2">
                        <button onClick={() => navigate("/profile/wallet/deposit/method")} className="bg-[#253333] text-[#00B894] px-3 py-1 rounded text-sm w-full sm:w-auto">
                          Fund
                        </button>
                       
                        <button onClick={() => navigate("/profile/trade")} className="bg-[#253333] text-[#00B894] px-3 py-1 rounded text-sm w-full sm:w-auto">
                          Trade
                        </button>
                       
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center text-gray-400 py-6 bg-[#2C3235]"
                  >
                    No trading accounts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {accounts.length > 0 ? (
            accounts.map((account, index) => (
              <div
                key={index}
                className="bg-[#2C3235] rounded-lg shadow p-4 text-sm text-white space-y-2"
              >
                <div className="flex justify-between border-b border-gray-600 pb-1">
                  <span className="font-semibold">ACCOUNT#</span>
                  <span className="flex items-center gap-1">
                    {account.accountNumber}
                    <Clipboard className="w-4 h-4 text-gray-400 cursor-pointer" />
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-600 pb-1">
                  <span className="font-semibold">LEVERAGE</span>
                  <span className="flex items-center gap-1">
                    {account.leverage}
                    <Edit2 className="w-4 h-4 text-gray-400 cursor-pointer" />
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-600 pb-1">
                  <span className="font-semibold">BALANCE</span>
                  <span>{account.balance}</span>
                </div>
                <div className="flex justify-between border-b border-gray-600 pb-1">
                  <span className="font-semibold">CURRENCY</span>
                  <span>{account.currency}</span>
                </div>
                <div className="flex gap-2 pt-2">
                  <button onClick={() => navigate("/profile/wallet/deposit/method")} className="bg-[#253333] text-[#00B894] px-3 py-1 rounded w-full">
                    Fund
                  </button>
                  <button onClick={() => navigate("/profile/trade")}  className="bg-[#253333] text-[#00B894] px-3 py-1 rounded w-full">
                    Trade
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-[#2C3235] text-center text-gray-400 py-6 rounded-lg">
              No trading accounts found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
