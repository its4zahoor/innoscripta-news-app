import { useContext } from "react";
import { NewsContext } from "../context/NewsContext";

const useNewsContext = () => {
  const context = useContext(NewsContext);

  if (!context) {
    throw new Error("useNewsContext must be used within a NewsProvider");
  }
  return context;
};

export default useNewsContext;
