import { useState, useEffect } from "react";

const SearchBar = ({ onChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onChange(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, onChange]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="w-full flex flex-row justify-between items-center gap-0 rounded-lg has-[:focus]:ring-2 has-[:focus]:ring-blue-500">
      <input
        id="searchInput"
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search news..."
        className="p-4 md:border w-full border-gray-300 rounded-l-lg border-r-0 shadow-sm focus:outline-none"
      />
      <button
        // onClick={onClick}
        disabled={!searchTerm}
        className="p-4 w-[60px] md:border border-l-gray-200 border-gray-400 rounded-r-lg text-gray-500 cursor-pointer bg-white hover:text-blue-600 hover:bg-gray-200 disabled:opacity-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
