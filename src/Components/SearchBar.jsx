import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ search, setSearch, handleSearch }) => {
  return (
    <form
      onSubmit={handleSearch}
      className="relative w-full max-w-md"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search news..."
        className="w-full h-11 pl-5 pr-12
        text-gray-800
        bg-gray-100
        border border-gray-300
        rounded-full
        outline-none
        focus:bg-white
        focus:border-red-500
        focus:ring-2
        focus:ring-red-200
        transition-all"
      />

      <button
        type="submit"
        aria-label="Search"
        className="absolute right-1 top-1/2
        -translate-y-1/2
        w-9 h-9
        flex items-center justify-center
        rounded-full
        text-gray-600
        hover:text-red-600
        hover:bg-red-50
        transition-all"
      >
        <CiSearch className="w-6 h-6" />
      </button>
    </form>
  );
};

export default SearchBar;