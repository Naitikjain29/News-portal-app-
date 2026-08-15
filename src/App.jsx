import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Footer from "./Components/Footer";

import { searchNews } from "./services/apiService";

const App = () => {
  const [category, setCategory] = useState("general");

  // Search states
  const [search, setSearch] = useState("");
  const [searchedNews, setSearchedNews] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  // Search function
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!search.trim()) {
      toast.error("Please enter something to search");
      return;
    }

    try {
      const data = await searchNews(search);

      setSearchedNews(data);
      setIsSearching(true);
    } catch (error) {
      console.error("Search failed:", error);
      toast.error("Search failed");
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearch("");
    setSearchedNews(null);
    setIsSearching(false);
  };

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      {/* ONLY ONE CATEGORY */}
      <Category
        category={category}
        setCategory={setCategory}
      />

      <main className="flex-grow">
        <Routes>

          <Route
            path="/"
            element={
              <Home
                category={category}
                searchedNews={searchedNews}
                isSearching={isSearching}
                search={search}
                clearSearch={clearSearch}
              />
            }
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>
      </main>

      <Footer />

      <ToastContainer />

    </div>
  );
};

export default App;