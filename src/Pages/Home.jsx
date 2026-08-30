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
      try {
        setLoading(true);

        // Search results
        if (isSearching && searchedNews !== null) {
          setNews(searchedNews);
          return;
        }

        // Category / General news
        let data;

        if (category === "general") {
          data = await getTopHeadLines();
        } else {
          data = await getCategoryNews(category);
        }

        setNews(data || []);
      } catch (error) {
        console.error("Failed to fetch news:", error);
        toast.error("Something went wrong :(");
        setNews([]);
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
        <section className="bg-[#0f172a] px-4 sm:px-6 py-6 sm:py-8">

          <div
            className="relative overflow-hidden rounded-[30px]
                       bg-gradient-to-r from-[#ef0000] via-[#d90012] to-[#a90012]
                       min-h-[300px]
                       flex items-center justify-center
                       text-center shadow-xl"
          >

            {/* Top Right Circle */}
            <div
              className="absolute -top-24 -right-20
                         w-64 h-64 rounded-full bg-black/10"
            />

            {/* Bottom Left Circle */}
            <div
              className="absolute -bottom-28 -left-20
                         w-64 h-64 rounded-full bg-black/10"
            />

            {/* Hero Content */}
            <div className="relative z-10 px-5">

              <h1
                className="text-4xl sm:text-5xl md:text-6xl
                           font-extrabold text-white
                           tracking-tight"
              >
                Welcome To NewsHub
              </h1>

              <p
                className="mt-5 text-lg sm:text-xl md:text-2xl
                           font-medium text-white/95"
              >
                Read the latest news from around the world.
              </p>

              <button
                onClick={() => {
                  document
                    .getElementById("news-section")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="mt-10 bg-white text-[#ed0000]
                           font-bold text-lg
                           px-10 py-5
                           rounded-full
                           shadow-lg
                           hover:bg-gray-100
                           hover:scale-105
                           transition-all duration-300"
              >
                Explore News ↓
              </button>

            </div>
          </div>

        </section>
      )}

      {/* Heading */}
      <div
        id="news-section"
        className="max-w-7xl mx-auto px-4 pt-8"
      >

        <div
          className="flex flex-col sm:flex-row
                     justify-between items-center gap-4"
        >

          <h2 className="text-2xl font-bold capitalize">

            {isSearching
              ? `Search Results for "${search}"`
              : `${category} News`}

          </h2>

          {isSearching && (
            <button
              onClick={clearSearch}
              className="text-sm text-red-600
                         hover:underline font-medium"
            >
              ← Back to {category} news
            </button>
          )}

        </div>

      </div>

      {/* News Grid */}
      <div
        className="max-w-7xl mx-auto px-4 py-8
                   grid md:grid-cols-2 lg:grid-cols-3
                   gap-x-10 gap-y-12"
      >

        {news.length > 0 ? (
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