import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";
import Career from "./Pages/Career";
import NotFound from "./Pages/NotFound";

import Navbar from "./Components/Navbar";
import Category from "./Components/Category";
import Footer from "./Components/Footer";

import { searchNews } from "./services/apiService";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get category from URL
  const getCategoryFromPath = () => {
    if (location.pathname.startsWith("/category/")) {
      return location.pathname.split("/")[2] || "general";
    }

    return "general";
  };

  const [category, setCategory] = useState(getCategoryFromPath());

  // Search states
  const [search, setSearch] = useState("");
  const [searchedNews, setSearchedNews] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  // Dark Mode
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Update category when URL changes
  useEffect(() => {
    const currentCategory = getCategoryFromPath();

    if (currentCategory !== category) {
      setCategory(currentCategory);
    }
  }, [location.pathname]);

  // Handle category change
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);

    // Clear search when changing category
    setSearch("");
    setSearchedNews(null);
    setIsSearching(false);

    if (newCategory === "general") {
      navigate("/");
    } else {
      navigate(`/category/${newCategory}`);
    }
  };

  // Apply Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

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
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white transition-colors duration-300">

      {/* Navbar */}
      <Navbar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Category Navigation */}
      <Category
        category={category}
        setCategory={handleCategoryChange}
      />

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={
              <Home
                category="general"
                searchedNews={searchedNews}
                isSearching={isSearching}
                search={search}
                clearSearch={clearSearch}
              />
            }
          />

          {/* Category Pages */}
          <Route
            path="/category/:categoryName"
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

          {/* About */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* Privacy Policy */}
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />

          {/* Terms & Conditions */}
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />

          {/* Career */}
          <Route
            path="/career"
            element={<Career />}
          />

          {/* 404 */}
          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>
      </main>

      {/* Footer */}
      <Footer setCategory={handleCategoryChange} />

      {/* Toast */}
      <ToastContainer />
    </div>
  );
};

export default App;