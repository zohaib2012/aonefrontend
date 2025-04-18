// import React from 'react';
import { Lock, CreditCard, FileText, ChevronRight, Settings } from 'lucide-react';

import { AiOutlineUsergroupAdd, AiTwotoneFund } from 'react-icons/ai';
import { BiMoneyWithdraw, BiSupport } from 'react-icons/bi';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { MdLanguage, MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useLogoutMutation } from '../../redux/Comonapi';

const Dashboard = () => {

  const [logout, { isLoading }] = useLogoutMutation();
  const token = localStorage.getItem('auth token')
  const handleLogout = async () => {
    try {
      const response = await logout().unwrap();
      const token = localStorage.getItem("auth token")
      if (token) {
        localStorage.removeItem("auth token")
        console.log("token removed")
      } else {
        console.log("Token not found")
      }

      console.log(response)
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };
  return (
    <div>


      <div className='bg-[#2C3235]  items-center  w-full h-14 border-1 border-[#3C3C3C] flex justify-between '>
        <img className='w-10 ml-9 h-10 ' src="public/A-One - Logo-02.svg" alt="Aone pro" />

        <div className='flex space-x-8 items-center justify-center'>
          <div className='text-gray-400 hover:text-red-600   hover:scale-110 hover: rounded-md text-md flex justify-center items-center'><MdLanguage className='w-6 h-6' />English</div>
          <Link to={"/profile/support"}>
            <div className='text-gray-400 hover:text-red-600  hover:scale-110 text-md flex justify-center items-center'><BiSupport className='w-5 h-5' />Support</div>
          </Link>
          <div className='text-gray-400 hover:text-red-600 hover:scale-110 text-md flex justify-center items-center'><IoIosNotificationsOutline className='w-6 h-6' />Notifications</div>
          <Link to={"/profile/password"}>
            <div className='text-gray-400 hover:text-red-600 hover:scale-110 text-md'><Settings /></div>
          </Link>
          {token ? (<button
            onClick={handleLogout}
            disabled={isLoading}
            className="py-2 px-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition"
          >
            {isLoading ? 'Logging out...' : <div className=' text-gray-700 scale-150 hover:text-red-600  text-md'>
              <Link to={"/"}><MdLogout /></Link> </div>}
          </button>) : ("")}





          <img className='hover:scale-110 w-10 h-10 mx-4 ' src="/download__1_-removebg-preview.png" alt="Aone pro" />
        </div>

      </div>
      <div className="flex h-full w-full bg-[#23282B] text-white">


        {/* Sidebar */}
        <div className="  bg-[#2C3235]   border-r border-[#3C3C3C]">

          <div className="space-y-6 p w-52 y-4 p-2 ">
            {/* Sidebar Menu Items */}
            <div className="space-y-2 ">
              <div className="my-2 flex text-md hover:text-red-600 items-center ml-3 text-gray-400 bg-[#3C3C3C] p-2 rounded">
                {/* <CreditCard className="mr-2" /> */}
                <span>A Wallet</span>
              </div>

              <Link to={"/wallet/deposit/method"}>
                <div className="flex my-2 items-center hover:text-red-600 ml-3 text-gray-400 hover:bg-[#3C3C3C] p-2 rounded">

                  <span>Deposit</span>

                </div>
              </Link>
              <Link to={"/profile/personalDetail"}>
                <div className="flex my-2 items-center hover:text-red-600 ml-3 text-gray-400 hover:bg-[#3C3C3C] p-2 rounded">

                  <span>Withdrawl</span>
                </div>

              </Link>
              <Link to={"/profile/personalDetail"}>
                <div className="flex my-2 items-center hover:text-red-600 ml-3 text-gray-400 hover:bg-[#3C3C3C] p-2 rounded">
                  <span>Trade</span>
                </div>
              </Link>

              <Link to={"/Trading/Account/Table"}>
                <div className="flex my-2 items-center hover:text-red-600 ml-3 text-gray-400 hover:bg-[#3C3C3C] p-2 rounded">
                  <span>Accounts</span>
                </div>
              </Link>
              {/* <Link to={"/data"}>
                <div className="flex my-2 items-center hover:text-red-600 ml-3 text-gray-400 hover:bg-[#3C3C3C] p-2 rounded">
                  <span>Accounts</span>
                </div>
              </Link> */}

            </div>
          </div>


        </div>

        {/* Main Content */}
        <div className="flex-1 w-full px-40 py-6  ">
          <div className=' container w-full'>


            {/* Top Notification Banner */}

            <div className="bg-[#23282B] border-3 w-full border-gray-700 text-white p-3 flex items-center justify-between rounded mb-6">
              <div className="flex items-center">
                <Lock className="mr-2" />


                <div className='flex items-center'>

                  <h1 className='font-semibold text-xl '>Unlock full accesss :</h1>
                  <div> To activate withrawals and deposit to enjoy full access</div>
                </div>
              </div>
              <Link to={"/profile/personalDetail"}>

                <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
                  Complete profile <ChevronRight className="ml-2" />
                </button>
              </Link>
            </div>

            <div className="bg-green-600/20 border-3 border-gray-700 text-white p-3 flex items-center justify-between rounded mb-6">
              <div className="flex items-center">
                <AiOutlineUsergroupAdd className="mx-2 w-12 h-12" />


                <div className=''>
                  <div className='font-bold text-2xl '>Become a partner </div>
                  <div> Invite a friend and earn upto 50% of  our revenue</div>
                </div>
              </div>
              <Link to={"/profile/joinus"}>

                <button className="bg-gray-600 hover:scale-105 text-white border px-4  py-2 rounded flex items-center">
                  Join <ChevronRight className="ml-2" />
                </button>
              </Link>

            </div>
            <div className=" text-white p-3 flex items-center justify-between rounded mb-6">
              <div className="flex items-center">


                <div className='font-bold text-4xl '>My Account </div>

              </div>
              <Link to={"/profile/open/new/account"}>
                <button className="bg-[#253333] text-[#00B894] px-4 py-2 rounded flex items-center">
                  + Create New Account
                </button>
              </Link>

            </div>


            {/* Wallet Card */}
            {/* border-[#3C3C3C] */}

            <div className="bg-[#23282B] border-3 border-gray-700 rounded-lg p-6  container mx-auto">
              <div className="flex justify-between items-start mb-6">
                {/* Virtual Wallet Card */}
                <div className="  float-right p-4 rounded-lg w-72  my-2">
                  <div className="text-sm mb-2">FxPro Virtual wallet</div>
                  <div className="font-bold">W05175554USD</div>
                  <div className="mt-4">Junaid Khalid</div>
                </div>

                {/* Wallet Balance */}
                <div className="text-right">
                  <div className="text-gray-400 mb-2">Your wallet</div>
                  <div className="text-3xl font-bold">0.00 USD</div>
                  <div className="text-sm text-gray-400 mt-2">Virtual wallet number</div>
                  <div className="text-sm">W05175554USD</div>
                </div>
              </div>





              {/* Action Buttons */}
              <div className="flex justify-between ">
                <div className="px-4 pb-4 flex justify-center">
                  <Link to={"/wallet/deposit/method"}>
                    <button
                      type="submit"
                      className="w-56 rounded-3xl  bg-[#1E1E1E] text-white p-2 hover:bg-blue-500 focus:outline-none border-2  border-[#0d6efd]"
                    >

                      <AiTwotoneFund className='w-6 h-6 inline mx-2' />
                      Fund
                    </button>
                  </Link>
                </div>
                <div className="px-4 pb-4 flex justify-center">
                  <Link to={"/wallet/transfer"}>
                    <button
                      type="submit"
                      className="w-56 rounded-3xl     bg-[#1E1E1E] text-white p-2 hover:bg-blue-500 focus:outline-none border-2  border-[#0d6efd]"
                    >
                      <FaMoneyBillTransfer className='w-6 h-6 inline mx-2' />
                      Transfer
                    </button>
                  </Link>
                </div>
                <div className="px-4 pb-4 flex justify-center">
                  <Link to={"/profile/withdrawal"}>
                    <button
                      type="submit"
                      className="w-56 rounded-3xl   bg-[#1E1E1E] text-white p-2 hover:bg-blue-500 focus:outline-none border-2  border-[#0d6efd]"
                    >
                      <BiMoneyWithdraw className='w-6 h-6 inline mx-2' />
                      Withdraw
                    </button>
                  </Link>
                </div>
                <div className="px-4 pb-4 flex justify-center">
                  <Link to={"/profile/trade"}>
                    <button
                      type="submit"
                      className="w-56 rounded-3xl   bg-[#1E1E1E] text-white p-2 hover:bg-blue-500 focus:outline-none border-2  border-[#0d6efd]"
                    >
                      <BiMoneyWithdraw className='w-6 h-6 inline mx-2' />
                      Trade
                    </button>
                  </Link>
                </div>
              </div>

              {/* <div className='flex justify-center space-x-4'> */}
              <div className='flex m-2 space-x-4'>
                <div className='text-gray-400'>Server:</div>
                <div className='text-white'>Aone Mt5</div>
                <div className='text-gray-400'>Login:</div>
                <div className='text-white'>766636</div>
              </div>



            </div>
            {/* Transactions History */}
            <div className="mt-6 bg-[23282B] border-3  border-gray-700 p-2 rounded">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">Transactions History</h3>
                <button className="text-blue-500 flex items-center">
                  Show details <ChevronRight className="ml-2" />
                </button>
              </div>
            </div>


          </div>


        </div>
      </div>
    </div>
  );
};

export default Dashboard;