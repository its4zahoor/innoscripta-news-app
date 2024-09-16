import { createContext, useState } from "react";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [preferences, setPreferences] = useState({
    sources: [],
    categories: [],
    authors: [],
  });

  const updatePreferences = (newPreferences) => {
    setPreferences(newPreferences);
  };

  return (
    <NewsContext.Provider value={{ preferences, updatePreferences }}>
      {children}
    </NewsContext.Provider>
  );
};
