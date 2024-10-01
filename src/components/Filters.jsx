import Dropdown from "../components/Dropdown";
import { CATEGORIES, SOURCES } from "../constants/index";
import useNewsContext from "../hooks/useNewsContext";

const Filters = () => {
  const { filters, updateFilters, resetFilters } = useNewsContext();

  const handleFilters = (key) => (e) => {
    const value = e.target.value;
    updateFilters(key, value);
  };

  return (
    <div>
      <div className="flex flex-wrap lg:flex-nowrap gap-4 space-evenly items-center">
        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          <label
            htmlFor="category"
            className="text-sm w-full md:w-auto font-medium text-gray-700 mr-3"
          >
            Category
          </label>
          <Dropdown
            id="category"
            value={filters.category}
            options={CATEGORIES}
            onChange={handleFilters("category")}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center md:items-center w-full">
          <label
            htmlFor="source"
            className="text-sm font-medium text-gray-700 md:mr-3"
          >
            Source
          </label>
          <Dropdown
            id="source"
            value={filters.source}
            options={SOURCES}
            onChange={handleFilters("source")}
          />
        </div>

        <div className="flex items-center flex-wrap md:flex-nowrap w-full">
          <label
            htmlFor="dateFrom"
            className="text-sm font-medium text-gray-700 mr-3"
          >
            From
          </label>
          <input
            id="dateFrom"
            type="date"
            value={filters.dateFrom}
            className="px-4 py-2 border border-gray-300 rounded-lg w-full"
            onChange={handleFilters("dateFrom")}
          />
          <label
            htmlFor="dateTo"
            className="text-sm font-medium text-gray-700 mx-3"
          >
            To
          </label>
          <input
            id="dateTo"
            type="date"
            value={filters.dateTo}
            className="px-4 py-2 border border-gray-300 rounded-lg w-full"
            onChange={handleFilters("dateTo")}
          />
        </div>
        <div>
          <button
            onClick={resetFilters}
            className="px-4 py-2 w-full bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 disabled:opacity-50"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
