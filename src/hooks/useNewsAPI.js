import { useState, useEffect } from "react";
import { getNewsSources } from "../services/news";
import useNewsContext from "./useNewsContext";

const useApi = (query) => {
  const [data, setData] = useState([]);
  const { preferences, filters } = useNewsContext();
  const _filterStr = JSON.stringify(filters);
  const _prefStr = JSON.stringify(preferences);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNewsSources(query, preferences, filters);
        data.sort((a, b) => b.description.length - a.description.length);
        setData(data);
      } catch (error) {
        console.error("Error fetching news:", error);
        return [];
      }
    };
    fetchNews();
  }, [query, _filterStr, _prefStr]);

  return [data];
};

export default useApi;
