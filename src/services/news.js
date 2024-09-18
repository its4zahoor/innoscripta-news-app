import axios from "axios";
import {
  nytQueryParams,
  newsOrgQueryParams,
  guardianQueryParams,
} from "../utils/helpers";

export const getNewsArticles = async (...args) => {
  const apiKey = import.meta.env.VITE_NEWSORG_KEY;
  const queryProp = newsOrgQueryParams(...args);
  const url = `https://newsapi.org/v2/everything?${queryProp}&apiKey=${apiKey}&pageSize=5`;

  try {
    const response = await axios.get(url);
    return response.data?.articles || [];
  } catch (error) {
    console.error("Error fetching news from NewsAPI", error);
    return [];
  }
};

export const getGuardianArticles = async (...args) => {
  const apiKey = import.meta.env.VITE_GUARDIAN_KEY;
  const queryProp = guardianQueryParams(...args);
  const url = `https://content.guardianapis.com/search?${queryProp}&api-key=${apiKey}`;

  try {
    const response = await axios.get(url);
    return (response.data?.response?.results || []).map((article) => ({
      title: article.webTitle,
      publishedAt: article.webPublicationDate,
      url: article.webUrl,
      urlToImage: "",
      description: "",
    }));
  } catch (error) {
    console.error("Error fetching news from The Guardian", error);
    return [];
  }
};

export const getNYTArticles = async (...args) => {
  const apiKey = import.meta.env.VITE_NYT_KEY;
  const queryProp = nytQueryParams(...args);
  const url = `https://api.nytimes.com/svc/${queryProp}&api-key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (url.includes("topstories")) {
      return (response.data?.results || []).map((article) => ({
        title: article.title,
        publishedAt: article.published_date,
        url: article.url,
        description: article.abstract,
        urlToImage: article.multimedia?.[0]?.url,
      }));
    }

    return (response.data?.response?.docs || []).map((article) => ({
      title: article.headline.main,
      publishedAt: article.pub_date,
      url: article.web_url,
      description: article.abstract,
      urlToImage:
        article.multimedia.length > 0
          ? `https://www.nytimes.com/${article.multimedia?.[0]?.url}`
          : "",
    }));
  } catch (error) {
    console.error("Error fetching news from New York Times", error);
    return [];
  }
};

export const getBBCArticles = async (...args) => {
  const apiKey = import.meta.env.VITE_NEWSORG_KEY;
  const queryProp = newsOrgQueryParams(...args);
  const url = `https://newsapi.org/v2/everything?domains=bbc.co.uk&${queryProp}&apiKey=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data?.articles || [];
  } catch (error) {
    console.error("Error fetching news from BBC", error);
    return [];
  }
};

export const getNewsSources = async (...args) => {
  const allNews = await Promise.all([
    getNYTArticles(args),
    getGuardianArticles(args),
    // getBBCArticles(args),
    // getNewsArticles(args),
  ]);
  return allNews.flat();
};
