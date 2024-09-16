import axios from "axios";

const API_KEY = "VoC2bi2vGP5n9aTlJUJTW0QQefDK3CXVVvSteQx0";
const BASE_URL = "https://newsapi.org/v2";

export const getArticles = async (query, category, source, from, to) => {
  try {
    const response = await axios.get(`${BASE_URL}/everything`, {
      params: {
        q: query,
        from,
        to,
        category,
        sources: source,
        apiKey: API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching articles from NewsAPI:", error);
    return [];
  }
};
