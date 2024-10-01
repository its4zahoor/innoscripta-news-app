import { useState, useCallback } from "react";
import Feed from "./components/Feed";
import { NewsProvider } from "./context/NewsContext";
import { Header } from "./components/Header";
import SearchBar from "./components/SearchBar";
import Preferences from "./components/Preferences";
import TuningButton from "./components/TuningButton";
import Filters from "./components/Filters";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  const handleSearch = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  return (
    <>
      <Header />
      <div className="container max-w-[1200px] mx-auto flex flex-col p-3">
        <div className="flex w-full py-4 mt-[100px] items-stretch h-[90px] gap-4">
          <SearchBar onChange={handleSearch} />
          <TuningButton onClick={handleToggle} />
        </div>
        <NewsProvider>
          <div className="w-full rounded-lg bg-white  border-gray-300 p-3">
            <Filters />
          </div>
          <div className="flex-1">
            <Feed query={searchTerm} />
            <Preferences isOpen={isToggled} onClose={handleToggle} />
          </div>
        </NewsProvider>
      </div>
    </>
  );
}

export default App;
