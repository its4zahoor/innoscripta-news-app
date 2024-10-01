import { useState, useEffect } from "react";
import { getNewsSources } from "../services/news";
import useNewsContext from "./useNewsContext";

const useNewsAPI = (query, pollingInterval = 300000) => {
  const [data, setData] = useState(null);
  const { preferences, filters } = useNewsContext();

  useEffect(() => {
    let isMounted = true;

    const fetchNews = async () => {
      try {
        const fetchedData = await getNewsSources(query, preferences, filters);
        // News with the longest description will be shown as "News of the day"
        fetchedData.sort((a, b) => b.description.length - a.description.length);
        if (isMounted) {
          setData(fetchedData);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        if (isMounted) {
          setData([]);
        }
      }
    };

    fetchNews();

    const interval = setInterval(() => {
      fetchNews();
    }, pollingInterval);

    return () => {
      clearInterval(interval);
      isMounted = false;
    };
  }, [query, filters, preferences, pollingInterval]);

  return [data];
};

export default useNewsAPI;
