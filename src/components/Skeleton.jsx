const Skeleton = ({ isLoading }) => {
  return (
    <>
      <div className="py-5 container max-w-[1200px] mx-auto">
        {!isLoading && (
          <div className="text-center py-5 bg-white mb-4">
            <p className="text-red-500">
              Sorry, no results to display. Try adjusting your filters,
              preferences or search query.
            </p>
          </div>
        )}
        <div className="md:flex md:gap-5 border-b mb-5">
          <div className="md:w-1/2 w-full mb-4">
            <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-300 animate-pulse h-[400px]"></div>
          </div>
          <div className="md:w-1/2 w-full mb-4">
            <span className="inline-block bg-gray-300 text-transparent px-3 py-1 rounded mb-3 shadow animate-pulse">
              News of the day
            </span>
            <h4 className="text-2xl font-bold mb-3 bg-gray-300 text-transparent animate-pulse h-8"></h4>
            <p className="text-gray-300 mb-4 animate-pulse h-6"></p>
            <button className="bg-gray-300 text-transparent px-4 py-2 rounded shadow animate-pulse">
              Read More
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index}>
              <div className="relative overflow-hidden rounded-lg mb-3 bg-gray-300 animate-pulse h-32"></div>
              <p className="text-gray-300 animate-pulse h-4 mb-2"></p>
              <p className="bg-gray-300 text-transparent animate-pulse h-6"></p>
            </div>
          ))}
        </div>

        <div className="md:flex md:gap-5 border-b mb-5" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 18 }).map((_, index) => (
            <div key={index} className="flex items-start border-b pb-2 mb-4">
              <div className="w-1/4 bg-gray-300 animate-pulse h-24 rounded"></div>
              <div className="w-3/4 pl-4">
                <p className="bg-gray-300 text-transparent animate-pulse h-6 mb-2"></p>
                <p className="text-gray-300 animate-pulse h-4"></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skeleton;
