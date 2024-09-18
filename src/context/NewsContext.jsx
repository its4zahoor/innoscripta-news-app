import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const NewsContext = createContext();

const INIT_PREFERENCES = {
  sources: [],
  categories: [],
};

const INIT_FILTERS = {
  category: "",
  source: "",
  dateFrom: "",
  dateTo: "",
};

export const NewsProvider = ({ children }) => {
  const [storedPreferences, setStoredPreferences] = useLocalStorage(
    "preferences",
    INIT_PREFERENCES
  );
  const [preferences, setPreferences] = useState(
    storedPreferences ?? INIT_PREFERENCES
  );
  const [filters, setFilters] = useState(INIT_FILTERS);

  const updatePreferences = (key, value) => {
    const newPreferences = { ...preferences, [key]: value };
    setPreferences(newPreferences);
    setStoredPreferences(newPreferences);
  };

  const resetPreferences = () => {
    setPreferences(INIT_PREFERENCES);
    setStoredPreferences(INIT_PREFERENCES);
  };

  const updateFilters = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const resetFilters = () => {
    setFilters(INIT_FILTERS);
  };

  return (
    <NewsContext.Provider
      value={{
        preferences,
        updatePreferences,
        resetPreferences,
        filters,
        updateFilters,
        resetFilters,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
