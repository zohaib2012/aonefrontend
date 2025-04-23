import { ChevronRight, Lock, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { AiOutlineUsergroupAdd, AiTwotoneFund } from "react-icons/ai";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDisplaynamedataMutation } from "../redux/p.detailapi";
import { useDisplaybalanceMutation, useDisplayloginIdMutation } from "../redux/Depositmoney";

const buttonData = [
  {
    to: "/profile/wallet/deposit/method",
    icon: <AiTwotoneFund className="inline w-5 mr-2" />,
    label: "Fund",
  },
  {
    to: "/profile/wallet/transfer",
    icon: <FaMoneyBillTransfer className="inline w-5 mr-2" />,
    label: "Transfer",
  },
  {
    to: "/profile/withdrawal",
    icon: <BiMoneyWithdraw className="inline w-5 mr-2" />,
    label: "Withdraw",
  },
  {
    to: "/profile/trade",
    icon: <BiMoneyWithdraw className="inline w-5 mr-2" />,
    label: "Trade",
  },
];

export default function Home() {

  const [names, setName] = useState([])
  const [balance, setBalance] = useState([])
  const [loginId, setLoginId] = useState([])

  const [displaynamedata] = useDisplaynamedataMutation()
  const [displaybalance] = useDisplaybalanceMutation()
  const [displayloginId] = useDisplayloginIdMutation()

  const userdetail = JSON.parse(localStorage.getItem("user"))
  const userId = userdetail._id || ""

  useEffect(() => {
    const handledisplayname = async () => {
      try {
        if (!userId) return
        var result = await displaynamedata({ user: userId }).unwrap()

        const extractednames = result?.data?.map(item => item.name);
        setName(extractednames || [])

      } catch (error) {
        console.log(error)
      }
    }
    handledisplayname()
  }, [displaynamedata, userId])


  useEffect(() => {
    const handledisplaybalance = async () => {
      try {
        if (!userId) return
        var data = await displaybalance({ user: userId }).unwrap()

        const userbalance = data?.data?.map(detail => detail.balance)
        setBalance(userbalance || [])

      } catch (error) {
        console.log(error)
      }
    }
    handledisplaybalance()
  }, [displaybalance, userId])

  useEffect(() => {
    const handledisplayL_id = async () => {
      try {
        if (!userId) return

        const result = await displayloginId({ user: userId }).unwrap()
        const extractedLoginId = await result?.data?.map(detail => detail.currentloginId)
        setLoginId(extractedLoginId || [])

      } catch (error) {
        console.log(error)
      }
    }
    handledisplayL_id()
  }, [displayloginId, userId])

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 max-w-7xl mx-auto ">
      {/* Top Notification Banner */}
      <div className="bg-[#23282B] border border-gray-700 text-white p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between rounded-xl mb-6 gap-4">
        <div className="flex items-start sm:items-center gap-3">
          <Lock className="shrink-0 mt-1" />
          <div>
            <h1 className="font-semibold text-lg sm:text-xl">
              Unlock full access:
            </h1>
            <p className="text-sm sm:text-base">
              To activate withdrawals and deposits to enjoy full access
            </p>
          </div>
        </div>
        <Link to="/profile/personalDetail">
          <button
            className='text-base bg-Blue hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center transition-all'>

            Complete profile <ChevronRight className="ml-2 w-5" />
          </button>
        </Link>
      </div>

      {/* Partner Invite Banner */}
      <div className="bg-green-600/20 border border-gray-700 text-white p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between rounded-xl mb-6 gap-4">
        <div className="flex items-start gap-3">
          <AiOutlineUsergroupAdd className="w-10 h-10 sm:w-12 sm:h-12" />
          <div>
            <h2 className="font-bold text-xl sm:text-2xl">Become a partner</h2>
            <p className="text-sm sm:text-base">
              Invite a friend and earn up to 50% of our revenue
            </p>
          </div>
        </div>
        <Link to={"/profile/joinus"}>
          <button className="text-base bg-[#23282B] hover:scale-105 text-white border px-4 py-2 rounded flex items-center transition-all">
            Join <ChevronRight className="ml-2 w-5" />
          </button>
        </Link>
      </div>

      {/* My Account Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-white p-4 mb-6 rounded">
        <h2 className="font-bold text-3xl sm:text-4xl">My Account</h2>
        <Link to="/profile/open/new/account">
          <button className="flex justify-center items-center gap-2 mt-4 sm:mt-0 bg-Blue text-white px-4 py-2 rounded hover:brightness-110 transition-all">
            <Plus className="w-4" /> Create New Account
          </button>
        </Link>
      </div>

      {/* Wallet Card */}
      <div className="bg-[#23282B] border border-gray-700 rounded-xl p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-6">
          {/* Wallet Info */}
          <div className="p-4 bg-[#1C1F22] rounded-lg w-full max-w-xs">
            <div className="text-sm text-gray-400 mb-1">
              AONE Trade Virtual wallet
            </div>
            <div className="font-bold text-lg text-white">W05175554USD</div>


            {names?.map((name, index) => (
              <div key={index} className="text-white p-2">
                <td className="px-2 text-xl font-medium">{name}</td>
              </div>
            ))}


          </div>

          {/* Balance Info */}
          <div className="flex justify-center lg:justify-end w-full">
            <div className="text-center lg:text-right">
              <div className="text-gray-400 mb-2">Your wallet</div>

              {balance?.map((balance, index) => (
                <div key={index} className="text-white p-2">
                </div>
              ))}

              <div className="text-3xl font-bold text-white">{balance} USD</div>
              <div className="text-sm text-gray-400 mt-2">
                Virtual wallet number
              </div>
              <div className="text-sm text-white">W05175554USD</div>

            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {buttonData.map(({ to, icon, label }, index) => (
            <Link key={index} to={to}>
              <button className="w-full rounded-3xl bg-[#1E1E1E] text-white p-3 hover:bg-blue-500 border-2  border-[#0d6efd] transition-all">
                {icon}
                {label}
              </button>
            </Link>
          ))}
        </div>

        {/* Server Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-white mt-4">
          <div className="flex gap-2">
            <span className="text-gray-400">Server:</span>
            <span>Aone Mt5</span>
          </div>
          <div className="flex gap-2">

            {loginId?.map((L_Id, index) => (
              <div key={index} className="text-white p-2">
                <span className="text-gray-400">Login:</span>
                <span>
                  <td className="px-2">{L_Id}</td>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transactions History */}
      <div className="mt-6 bg-[#23282B] border border-gray-700 p-4 sm:p-6 rounded-xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h3 className="text-lg sm:text-xl font-bold text-white">
            Transactions History
          </h3>
          <button className="mt-2 sm:mt-0 text-Blue flex items-center hover:underline">
            Show details <ChevronRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}


