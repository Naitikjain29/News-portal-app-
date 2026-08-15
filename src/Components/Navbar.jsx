import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";

const Navbar = ({ search, setSearch, handleSearch }) => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between gap-6">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src={logo}
              alt="NewsHub Logo"
              className="w-10 h-10 object-contain"
            />

            <span className="text-2xl font-bold text-gray-800">
              NewsHub
            </span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 justify-center max-w-xl">
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
              className="font-medium text-gray-700 hover:text-red-600 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="font-medium text-gray-700 hover:text-red-600 transition"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="font-medium text-gray-700 hover:text-red-600 transition"
            >
              Contact
            </Link>
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