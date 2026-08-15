import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  getCategoryNews,
  getTopHeadLines,
} from "../services/apiService";

import Loader from "../Components/Loader";
import NewsCard from "../Components/NewsCard";

const Home = ({
  category = "general",
  searchedNews,
  isSearching,
  search,
  clearSearch,
}) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      // Search results already available
      if (isSearching && searchedNews !== null) {
        setNews(searchedNews);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        let data;

        if (category === "general") {
          data = await getTopHeadLines();
        } else {
          data = await getCategoryNews(category);
        }

        setNews(data);
      } catch (error) {
        console.error("Failed to fetch news:", error);
        toast.error("Something went wrong :(");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, searchedNews, isSearching]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>

      {/* Hero Banner */}
      {!isSearching && (
        <section className="mx-4 mt-6 bg-red-600 rounded-2xl h-[310px] flex flex-col justify-center items-center text-center shadow-lg">

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Welcome To NewsHub
          </h1>

          <p className="font-bold text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl">
            Read the latest news from around the world.
          </p>

          <button
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight * 0.7,
                behavior: "smooth",
              });
            }}
            className="bg-white text-red-600 font-bold text-lg px-8 py-5 rounded-full shadow-md hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            Explore News ↓
          </button>

        </section>
      )}

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 pt-8">

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

          <h2 className="text-2xl font-bold capitalize">
            {isSearching
              ? `Search Results for "${search}"`
              : `${category} News`}
          </h2>

          {isSearching && (
            <button
              onClick={clearSearch}
              className="text-sm text-red-600 hover:underline font-medium"
            >
              ← Back to {category} news
            </button>
          )}

        </div>

      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 py-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {news && news.length > 0 ? (
          news.map((n, index) => (
            <NewsCard
              key={n.url || index}
              news={n}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No news articles available.
          </p>
        )}

      </div>

    </div>
  );
};

export default Home;