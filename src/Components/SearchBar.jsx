import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ search, setSearch, handleSearch }) => {
  return (
    <form
      onSubmit={handleSearch}
      className="relative w-full"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search latest News"
        className="w-full h-12 pl-6 pr-16 text-gray-800 bg-gray-100 border border-gray-300 rounded-full outline-none focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
      />

      <button
        type="submit"
        aria-label="Search"
        className="absolute right-0 top-0 h-12 w-16 flex items-center justify-center bg-red-600 text-white rounded-r-full hover:bg-red-700 transition"
      >
        <CiSearch size={27} color="white" />
      </button>
    </form>
  );
};

export default SearchBar;