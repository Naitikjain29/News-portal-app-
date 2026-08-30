import Axios from "axios";

// General News
export const getTopHeadLines = async () => {
  try {
    const res = await Axios.get("/api/news", {
      params: {
        category: "general",
      },
    });

    return Array.isArray(res.data)
      ? res.data
      : res.data.articles || [];
  } catch (error) {
    console.log(error, "Error found");
    return [];
  }
};

// Category News
export const getCategoryNews = async (category) => {
  try {
    const res = await Axios.get("/api/news", {
      params: {
        category: category,
      },
    });

    return Array.isArray(res.data)
      ? res.data
      : res.data.articles || [];
  } catch (error) {
    console.log(error, "Error in Fetching Category News");
    return [];
  }
};

// Search News
export const searchNews = async (query) => {
  try {
    const res = await Axios.get("/api/news", {
      params: {
        q: query,
      },
    });

    return Array.isArray(res.data)
      ? res.data
      : res.data.articles || [];
  } catch (error) {
    console.log(error, "Error in Searching News");
    return [];
  }
};