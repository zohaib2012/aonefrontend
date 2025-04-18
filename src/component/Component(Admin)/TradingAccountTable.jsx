// import React from 'react';
import { Clipboard, Edit2 } from 'lucide-react';
import { Link } from 'react-router-dom';
// import { useAccountsdetailQuery } from '../../redux/createaccountapi';

// const { data, error, isLoading, isError } = useAccountsdetailQuery();
    
// console.log(data)


const TradingAccountsTable = () => {
  // const []=useAccountsdetailQuery()
  const accounts = [
    {
      accountNumber: 'MT5 Promo',
      accountId: '512493328 / Real',
      LoginId: '8987',
      leverage: '1:500',
      balance: '0.00',
      freeMargin: '0.00',
      currency: 'USD'
    }
  ];

  return (
    <div className='flex bg-[#23282B] h-screen justify-center space-y-72 items-baseline my-auto'>
      
<div className=''>
  <h1>.</h1>
</div>

    <div className=" text-white font-sans">
      <div className="flex ">
        <button className="px-4 py-2 text-white border-2 border-gray-600 bg-[#2C3235] ">
          Trading Accounts
        </button>
 
        <div className="ml-auto p-2">
<Link to={"/profile/open/new/account"}>
        <button className="hover:bg-[#253333] text-[#00B894] px-4 py-2 rounded flex items-center">
                + Create New Account 
              </button>
</Link>

        </div>
      </div>
      
      <table className="w-full text-left">
        <thead className="bg-[#2C3235] border-2 border-gray-600 text-gray-400 text-sm">
          <tr>
            <th className="p-3">ACCOUNT#</th>
            <th className="p-3">Login Id</th>
            <th className="p-3">LEVERAGE</th>
            <th className="p-3">BALANCE</th>
            {/* <th className="p-3">FREE MARGIN</th> */}
            <th className="p-3">CURRENCY</th>
            <th className="p-3"></th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => (
            <tr key={index} className="border-b border-gray-600 bg-[#2C3235] border-2  hover:bg-[#2a2a2a]">
              <td className="p-3 flex items-center space-x-20">
                <span>{account.accountNumber}</span>
                <span className="text-gray-500 ml-2 text-sm">{account.accountId}</span>
                <Clipboard className="ml-2 text-gray-500 w-4 h-4" />
              </td>
              <td className="p-3 text-yellow-500">{account.LoginId}</td>
              <td className="p-3">
                {account.leverage}
                <Edit2 className="inline-block ml-2 w-4 h-4 text-gray-500" />
              </td>
              <td className="p-3">{account.balance}</td>
              {/* <td className="p-3">{account.freeMargin}</td> */}
              <td className="p-3">{account.currency}</td>
              <td className="p-3">
                <div className="flex space-x-2">
                  <button className="bg-gray-700 text-[#00B894]  px-3 py-1 rounded">
                    Fund
                  </button>
                  <button className="bg-gray-700 text-[#00B894]  px-3 py-1 rounded">
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


  );

};

export default TradingAccountsTable;

