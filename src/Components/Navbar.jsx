import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";

const Navbar = ({
  search,
  setSearch,
  handleSearch,
  darkMode,
  setDarkMode,
}) => {
  return (
    <nav className="bg-white dark:bg-[#111827] shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="w-full px-6 py-3">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 shrink-0">
            <img
              src={logo}
              alt="NewsHub Logo"
              className="w-10 h-10 object-contain"
            />

            <span className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">
              NewsHub
            </span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[40%]">
            <SearchBar
              search={search}
              setSearch={setSearch}
              handleSearch={handleSearch}
            />
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-6 shrink-0">

            <Link
              to="/"
              className="font-medium text-gray-700 dark:text-gray-200 hover:text-red-600 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="font-medium text-gray-700 dark:text-gray-200 hover:text-red-600 transition"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="font-medium text-gray-700 dark:text-gray-200 hover:text-red-600 transition"
            >
              Contact
            </Link>

            {/* Dark Mode Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-10 h-10 flex items-center justify-center
                         rounded-full
                         bg-gray-100 dark:bg-gray-700
                         hover:bg-gray-200 dark:hover:bg-gray-600
                         transition-all duration-300
                         hover:scale-110"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-4 md:hidden">
          <SearchBar
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;