import { useEffect, useState } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Wallet,
  CreditCard,
  HandCoins,
  ChartCandlestick,
  SquareUser,
  Settings,
} from "lucide-react";
import Avatar from "../assets/images/avatar.png";
import Logo from "../assets/images/white-logo-transparent.png";
import { useLogoutMutation } from "../redux/Comonapi";
import { BiSupport } from "react-icons/bi";

import { IoIosNotificationsOutline } from "react-icons/io";
import { MdLanguage, MdLogout } from "react-icons/md";

const navItems = [
  { to: "/profile", icon: Wallet, label: "A Wallet" },
  { to: "/profile/wallet/deposit/method", icon: CreditCard, label: "Deposit" },
  { to: "/profile/withdrawal", icon: HandCoins, label: "Withdraw" },
  { to: "/profile/trade", icon: ChartCandlestick, label: "Trade" },
  { to: "/profile/Trading/Account/Table", icon: SquareUser, label: "Account" },
];

const dropdownItems = [
  {
    label: "Notification",
    to: "#",
    type: "link",
    icon: IoIosNotificationsOutline,
  },
  { label: "Support", to: "/profile/support", type: "link", icon: BiSupport },
  {
    label: "Change Password",
    to: "/profile/password",
    type: "link",
    icon: Settings,
  },
  { label: "Logout", onClick: "logout", type: "button", icon: MdLogout },
];

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  console.log("cookie====", document.cookie);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const [logout, { isLoading }] = useLogoutMutation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const authToken = localStorage.getItem("auth token");

    if (!authToken) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const response = await logout().unwrap();
      localStorage.removeItem("auth token");
      localStorage.removeItem("userId");
      navigate("/");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return (
    <div className="flex bg-[#23282B]">
      <div
        className={`fixed inset-y-0 left-0 z-40 w-60 bg-[#2c3235] border-r border-[#3C3C3C] transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex md:flex-col ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-12  my-2 mx-8">
          <img src={Logo} alt="Logo" className="w-full h-full " />
        </div>
        <nav className="flex-1 px-2 py-4 overflow-y-auto">
          {navItems.map(({ to, icon: Icon, label }, index) => (
            <Link
              key={index}
              to={to}
              className={`flex items-center px-4 py-2 mt-2 text-white hover:text-red-600 ${
                location.pathname === to ? "bg-Blue  rounded-md" : ""
              }`}
            >
              <Icon className="w-5 mr-2" />
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between h-16 bg-[#2d3438] border-b border-[#2c3134] px-4">
          <button className="text-gray-500 md:hidden" onClick={toggleSidebar}>
            {sidebarOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          <div className="relative ml-auto py-2 flex gap-4">
            <div className="flex items-center gap-2 text-white text-sm">
              <MdLanguage className="text-xl" />
              English
            </div>
            <div className="hidden lg:flex items-center gap-2 text-white text-sm">
              {dropdownItems.map((item, idx) => {
                const Icon = item.icon;
                const isIconOnly =
                  item.label === "Change Password" || item.label === "Logout";

                if (item.type === "link") {
                  return (
                    <Link
                      key={idx}
                      to={item.to}
                      className={`flex items-center gap-2 px-4 py-2 text-sm text-white ${
                        isIconOnly ? "px-2 py-2" : ""
                      }`}
                    >
                      <Icon
                        className={`text-xl transition-colors ${
                          item.label === "Logout"
                            ? "bg-red-600 p-2 rounded text-white hover:text-red-600"
                            : "hover:text-red-600"
                        }`}
                      />
                      {!isIconOnly && (
                        <span className="transition-colors hover:text-red-600">
                          {item.label}
                        </span>
                      )}
                    </Link>
                  );
                } else if (item.type === "button") {
                  return (
                    <button
                      key={idx}
                      onClick={handleLogout}
                      className={`flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-white hover:text-red-600 ${
                        isIconOnly ? "px-2 py-2" : ""
                      }`}
                      disabled={isLoading}
                    >
                      <Icon className="text-xl text-white transition-colors hover:text-red-600" />
                      {!isIconOnly && (
                        <span className="transition-colors hover:text-red-600">
                          {isLoading ? "Logging out..." : item.label}
                        </span>
                      )}
                    </button>
                  );
                }

                return null;
              })}
            </div>

            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <img src={Avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
              <ChevronDown className="w-4 h-4 text-gray-600 lg:hidden" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-10 w-40 bg-white rounded-md shadow-lg z-50 lg:hidden">
                {dropdownItems.map((item, idx) =>
                  item.type === "link" ? (
                    <Link
                      key={idx}
                      to={item.to}
                      onClick={() => setDropdownOpen(false)} // Close dropdown on click
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.label}
                    </Link>
                  ) : item.type === "button" ? (
                    <button
                      key={idx}
                      onClick={() => {
                        handleLogout();
                        setDropdownOpen(false); // Close dropdown after logout
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      disabled={isLoading}
                    >
                      {isLoading ? "Logging out..." : item.label}
                    </button>
                  ) : null
                )}
              </div>
            )}
          </div>
        </div>

        <main className="p-4">
          <Outlet />
        </main>

        <footer className="p-4">
          <hr className="border-t border-gray-600 mb-4" />
          <span className="text-lg text-white text-center block">
            © 2025 AONE Trade. All Rights Reserved.
          </span>
        </footer>
        
      </div>
    </div>
  );
}
