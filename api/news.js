export default async function handler(req, res) {
  try {
    const { category = "general", q } = req.query;

    const API_KEY = process.env.GNEWS_API_KEY;

    if (!API_KEY) {
      return res.status(500).json({
        message: "GNEWS_API_KEY is missing",
      });
    }

    let url;

    if (q) {
      url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(
        q
      )}&lang=en&max=9&apikey=${API_KEY}`;
    } else {
      url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&max=9&apikey=${API_KEY}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    return res.status(200).json(data.articles || []);
  } catch (error) {
    console.error("GNews API Error:", error);

    return res.status(500).json({
      message: "Failed to fetch news",
    });
  }
}