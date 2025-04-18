import { useState, useEffect, memo, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Avatar from "../assets/images/avatar.png";
import Logo from "../assets/images/logo-bg-removed.png";

const Navbar = () => {
  const token = localStorage.getItem("auth token");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false); // Track avatar dropdown state
  const location = useLocation();
  const isVisible = location.pathname.startsWith("/profile");

  const navbarLinks = [
    { name: "Home", path: "/" },
    { name: "Trading", path: "/" },
    { name: "Contact Us", path: "/contactus" },
  ];

  const authLinks = [
    {
      name: "Sign Up",
      path: "/register",
      className:
        "bg-Blue text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-HoverColor",
    },
    {
      name: "Login",
      path: "/login",
      className:
        "text-Blue hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium",
    },
  ];

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const toggleAvatarMenu = () => {
    setIsAvatarMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={
        isVisible
          ? "hidden"
          : `fixed top-0 w-full bg-white px-4 lg:px-8 xl:px-16 py-2 z-50 transition duration-300 ${
              isScrolled ? "shadow-md" : ""
            }`
      }
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center">
            <img src={Logo} height="50" width="50" alt="Website Logo" />
          </Link>

          {/* Navbar links */}
          <div className="hidden md:flex space-x-6">
            {navbarLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="relative text-black hover:text-btn-hover transition group hover:text-HoverColor"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Auth links or avatar */}
        <div className="flex items-center space-x-4">
          {token ? (
            // Show avatar and dropdown for large screens
            <div className="relative">
              <button
                onClick={toggleAvatarMenu}
                className="py-2 px-4 inline-flex items-center"
              >
                <img
                  src={Avatar}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <svg
                  className="fill-current h-4 w-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              {/* Avatar dropdown menu */}
              {isAvatarMenuOpen && (
                <ul className="absolute bg-white text-black pt-1 right-0 mt-1 shadow-lg rounded-md z-10">
                  <li>
                    <Link
                      className="rounded-t hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      to="/profile"
                    >
                      Dashboard
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            // Show "Sign Up" and "Login" links when not logged in
            authLinks.map((item, index) => (
              <Link key={index} to={item.path} className={item.className}>
                {item.name}
              </Link>
            ))
          )}
          {/* Mobile menu toggle button */}
          <button
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
            className="md:hidden text-primary focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-Blue" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 shadow-md p-4 rounded">
          <div className="flex flex-col space-y-2">
            {navbarLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default memo(Navbar);
