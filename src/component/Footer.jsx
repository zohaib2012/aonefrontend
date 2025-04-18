import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Logo from "../assets/images/logo-bg-removed.png";

const Footer = () => {
  const location = useLocation();
  const isVisible = location.pathname.startsWith("/profile");

  return (
    <footer className={isVisible ? " hidden" : "w-full pb-8"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="flex justify-center ">
            <img src={Logo} className="w-12 h-12" alt="Logo" />
          </Link>
          <ul className="text-lg flex items-center justify-center flex-row gap-4 md:gap-12 transition-all duration-500 py-3 mb-4 border-b border-gray-200">
            <li>
              <Link to="#" className="text-sm text-gray-800 hover:text-Blue">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm text-gray-800 hover:text-Blue">
                Terms & Conditions
              </Link>
            </li>
          </ul>
          <div className="flex space-x-10 justify-center items-center mb-4">
            <Link
              to="#"
              className="block text-gray-900 transition-all duration-500 hover:text-Blue "
            >
              <Facebook className="w-10" />
            </Link>
            <Link
              to="#"
              className="block text-gray-900 transition-all duration-500 hover:text-Blue "
            >
              <Instagram className="w-10" />
            </Link>
            <Link
              to="#"
              className="block text-gray-900 transition-all duration-500 hover:text-Blue "
            >
              <Twitter className="w-10" />
            </Link>
          </div>
          <span className="text-md text-gray-500 text-center block">
            © 2025 AONE Trade. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
