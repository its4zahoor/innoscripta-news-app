import { useState } from "react";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchInput;
