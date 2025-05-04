

// import { useState } from "react";
// import {  BiMoneyWithdraw } from "react-icons/bi";
// import { FaUser  } from "react-icons/fa6";
// import { MdAccountBox } from "react-icons/md";
// import { Link, Outlet } from "react-router-dom";

// // Data Component
// export const Sidebar = () => {
//   const [analyticsOpen, setAnalyticsOpen] = useState(true);
//   const [teamOpen, setTeamOpen] = useState(false);

//   return (
//     <div className="flex overflow-hidden">
//       <div className="w-64 bg-[#2C3235]   text-white min-h-screen border-2 border-gray-600">
//         <div className="p-4 border-b border-gray-800">
//           <div className="flex items-center justify-between">
//             <span className="text-xl font-bold"></span>
//           </div>
//         </div>

//         {/* Search Bar */}
//         {/* <div className="p-1">
//           <div className="relative">
//             <input
//               type="text"
//               className="w-full bg-gray-800 text-white rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Search..."
//             />
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <svg
//                 className="h-5 w-5 text-gray-500"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </div>
//           </div>
//         </div> */}

//         <nav className="mt-5 px-2">
//           {/* Main Navigation */}
//           <div className="space-y-4">

//             <Link
//               to={"/$2b$10$BMiX4WDJ/dBNxQuQArG6G.p2SJp4lrNuHB/BSjqfAt$BMiX4WDJ/dBNxQuQArG6G.p2SJ/G6G.p2SJp4lrN/all/documents"}
//               className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg bg-gray-800 text-white group transition-all duration-200 hover:bg-gray-700"
//             >
//               <svg
//                 className="h-5 w-5 mr-3"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//                 />
//               </svg>
//               Dashboard
//             </Link>

//             {/* Analytics Dropdown */}
//             <div className="space-y-1">
//               <button
//                 className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none"
//                 aria-expanded={analyticsOpen}
//                 onClick={() => setAnalyticsOpen(!analyticsOpen)}
//               >
//                 <div className="flex items-center">
//                   <svg
//                     className="h-5 w-5 mr-3"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//                     />
//                   </svg>
//                   Analytics
//                 </div>
//                 <svg
//                   className={`ml-2 h-5 w-5 transform transition-transform duration-200 ${analyticsOpen ? "rotate-180" : ""
//                     }`}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//               <div className={`space-y-1 pl-11 ${!analyticsOpen && "hidden"}`}>
//                 <Link
//                   to={"/$2b$10$BMiX4WDJ/dBNxQuQArG6G.p2SJp4lrNuHB/BSjqfAt$BMiX4WDJ/dBNxQuQArG6G.p2SJ/G6G.p2SJp4lrN/messages"}
//                   className="group flex items-center px-4 py-2 text-sm text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
//                 >
//                   Messages
//                 </Link>
//               </div>
//             </div>

//             {/* Projects */}
//             <Link
//               to={"/$2b$10$BMiX4WDJ/dBNxQuQArG6G.p2SJp4lrNuHB/BSjqfAt$BMiX4WDJ/dBNxQuQArG6G.p2SJ/G6G.p2SJp4lrN/money/deposited"}
           
//               className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white group transition-all duration-200"
//             >
//                 <BiMoneyWithdraw className="w-5 h-5 mr-3" />
//               Deposited Money
//             </Link>
//             <Link
//               to={"/$2b$10$BMiX4WDJ/dBNxQuQArG6G.p2SJp4lrNuHB/BSjqfAt$BMiX4WDJ/dBNxQuQArG6G.p2SJ/G6G.p2SJp4lrN/opened/accounts"}
//               className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white group transition-all duration-200"
//             >
             
//               <MdAccountBox className="h-5 w-5 mr-3"/>
//               Opened Accounts
//             </Link>
//             <Link
//               to={"/$2b$10$BMiX4WDJ/dBNxQuQArG6G.p2SJp4lrNuHB/BSjqfAt$BMiX4WDJ/dBNxQuQArG6G.p2SJ/G6G.p2SJp4lrN/withdrawal/requests"}
//               className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white group transition-all duration-200"
//             >
//          <svg
//                 className="h-5 w-5 mr-3"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
//                 />
//               </svg>
//              Withdrawal requests
//             </Link>

//             <Link
//             to={"/$2b$10$BMiX4WDJ/dBNxQuQArG6G.p2SJp4lrNuHB/BSjqfAt$BMiX4WDJ/dBNxQuQArG6G.p2SJ/G6G.p2SJp4lrN/all/documents"}
//             className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white group transition-all duration-200"
//           >
//             <FaUser className="h-4 w-4 mr-3" />
           
//             Users_profile
//           </Link>
//           </div>

//           {/* Team Dropdown */}
//           <div className="space-y-1">
//             <button
//               className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none"
//               aria-expanded={teamOpen}
//               onClick={() => setTeamOpen(!teamOpen)}
//             >
//               <div className="flex items-center my-2">
//                 <svg
//                   className="h-5 w-5 mr-3"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
//                   />
//                 </svg>
//                 Team
//               </div>
//               <svg
//                 className={`ml-2 h-5 w-5 transform transition-transform duration-200 ${teamOpen ? "rotate-180" : ""
//                   }`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//             <div className={`space-y-1 pl-11 ${!teamOpen && "hidden"}`}>
//               <Link
//                 to={"#"}
//                 className="group flex items-center px-4 py-2 text-sm text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
//               >
//                 Settings
//               </Link>
//             </div>
//           </div>
//         </nav>

//         {/* User Profile */}
//         <div className="mt-auto p-4 border-t border-gray-800">
//           <div className="flex items-center">
//             <img
//               className="h-12 w-10 rounded-3xl"
//               src="https://avatars.mds.yandex.net/i?id=1c93819f16737df8532e053f3acbcdd7331fc389-3518654-images-thumbs&n=13"
//               alt="User profile"
//             />
//             <div className="ml-3">
//               <p className="text-sm font-medium text-white">Trade</p>
//               <p className="text-xs text-gray-400">Like a pro</p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Main Content Area - This is where the red bordered div will now appear */}
//       <div className="flex-1 ">
    
//         {/* The Outlet for nested routes */}
//         <Outlet />
//       </div>
//     </div>
//   );
// };


import { useState, useEffect } from "react";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
import { MdAccountBox } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, Outlet, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const [analyticsOpen, setAnalyticsOpen] = useState(true);
  const [teamOpen, setTeamOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Close sidebar on mobile when route changes
  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarOpen && window.innerWidth < 768) {
        const sidebar = document.getElementById("sidebar");
        const hamburger = document.getElementById("hamburger-menu");
        
        if (sidebar && !sidebar.contains(event.target) && 
            hamburger && !hamburger.contains(event.target)) {
          setSidebarOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [sidebarOpen]);

  return (
    <div className="flex overflow-hidden relative">
      {/* Hamburger Menu for Mobile */}
      <div 
        id="hamburger-menu"
        className="md:hidden fixed top-20 left-4 z-50 p-2 bg-gray-800 rounded-md cursor-pointer"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? (
          <AiOutlineClose className="w-6 h-6 text-white" />
        ) : (
          <GiHamburgerMenu className="w-6 h-6 text-white" />
        )}
      </div>

      {/* Sidebar */}
      <div 
        id="sidebar"
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } fixed md:relative z-40 w-64 bg-[#2C3235] text-white border-r-2 border-gray-600 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 border-b border-gray-800 ">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">TradeApp</span>
            <button 
              className="md:hidden text-white" 
              onClick={() => setSidebarOpen(false)}
            >
              <AiOutlineClose className="w-5 h-5" />
            </button>
          </div>
        </div>

        <nav className="mt-5 px-2 h-full overflow-y-auto pb-20">
          {/* Main Navigation */}
          <div className="space-y-4">
            <Link
              to={"/$2b$10$BMiX4WDJ/dBNxQuQArG6G.p2SJp4lrNuHB/BSjqfAt$BMiX4WDJ/dBNxQuQArG6G.p2SJ/G6G.p2SJp4lrN/all/documents"}
              className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg bg-gray-800 text-white group transition-all duration-200 hover:bg-gray-700"
            >
              <svg
                className="h-5 w-5 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Dashboard
            </Link>

            {/* Analytics Dropdown */}
            <div className="space-y-1">
              <button
                className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none"
                aria-expanded={analyticsOpen}
                onClick={() => setAnalyticsOpen(!analyticsOpen)}
              >
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Analytics
                </div>
                <svg
                  className={`ml-2 h-5 w-5 transform transition-transform duration-200 ${analyticsOpen ? "rotate-180" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className={`space-y-1 pl-11 ${!analyticsOpen && "hidden"}`}>
                <Link
                  to={"/$2b$10$BMiX4WDJ/dBNxQuQArG6G.p2SJp4lrNuHB/BSjqfAt$BMiX4WDJ/dBNxQuQArG6G.p2SJ/G6G.p2SJp4lrN/messages"}
                  className="group flex items-center px-4 py-2 text-sm text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Messages
                </Link>
              </div>
            </div>

            {/* Projects */}
            <Link
              to={"/$2b$10$BMiX4WDJ/dBNxQuQArG6G.p2SJp4lrNuHB/BSjqfAt$BMiX4WDJ/dBNxQuQArG6G.p2SJ/G6G.p2SJp4lrN/money/deposited"}
              className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white group transition-all duration-200"
            >
              <BiMoneyWithdraw className="w-5 h-5 mr-3" />
              Deposited Money
            </Link>
            <Link
              to={"/$2b$10$BMiX4WDJ/dBNxQuQArG6G.p2SJp4lrNuHB/BSjqfAt$BMiX4WDJ/dBNxQuQArG6G.p2SJ/G6G.p2SJp4lrN/opened/accounts"}
              className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white group transition-all duration-200"
            >
              <MdAccountBox className="h-5 w-5 mr-3" />
              Opened Accounts
            </Link>
            <Link
              to={"/$2b$10$BMiX4WDJ/dBNxQuQArG6G.p2SJp4lrNuHB/BSjqfAt$BMiX4WDJ/dBNxQuQArG6G.p2SJ/G6G.p2SJp4lrN/withdrawal/requests"}
              className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white group transition-all duration-200"
            >
              <svg
                className="h-5 w-5 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
              Withdrawal requests
            </Link>

            <Link
              to={"/$2b$10$BMiX4WDJ/dBNxQuQArG6G.p2SJp4lrNuHB/BSjqfAt$BMiX4WDJ/dBNxQuQArG6G.p2SJ/G6G.p2SJp4lrN/all/documents"}
              className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white group transition-all duration-200"
            >
              <FaUser className="h-4 w-4 mr-3" />
              Users_profile
            </Link>
          </div>

          {/* Team Dropdown */}
          <div className="space-y-1 mt-4">
            <button
              className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none"
              aria-expanded={teamOpen}
              onClick={() => setTeamOpen(!teamOpen)}
            >
              <div className="flex items-center my-2">
                <svg
                  className="h-5 w-5 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                Team
              </div>
              <svg
                className={`ml-2 h-5 w-5 transform transition-transform duration-200 ${teamOpen ? "rotate-180" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className={`space-y-1 pl-11 ${!teamOpen && "hidden"}`}>
              <Link
                to={"#"}
                className="group flex items-center px-4 py-2 text-sm text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
              >
                Settings
              </Link>
            
              </div>
        </div>
        </nav>
      

        {/* User Profile
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800 bg-[#2C3235]">
          <div className="flex items-center">
            <img
              className="h-10 w-10 rounded-full"
              src="https://avatars.mds.yandex.net/i?id=1c93819f16737df8532e053f3acbcdd7331fc389-3518654-images-thumbs&n=13"
              alt="User profile"
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-white">Trade</p>
              <p className="text-xs text-gray-400">Like a pro</p>
            </div>
          </div>
        </div> */}
        
      

      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Main Content Area */}
      <div className="flex-1 p-0 md:p-0 ml-0 md:ml-0 transition-all duration-300">
        {/* The Outlet for nested routes */}
        <Outlet />
      </div>
    </div>
  );
};