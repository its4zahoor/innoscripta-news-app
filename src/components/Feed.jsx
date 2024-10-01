import Skeleton from "./Skeleton";
import useNewsAPI from "../hooks/useNewsAPI";

export default function Feed({ query }) {
  const [data] = useNewsAPI(query);

  if (!data?.length) {
    return <Skeleton isLoading={!data} />;
  }

  const [newsOfDay, ...restNews] = data;

  return (
    <div className="py-5 container max-w-[1200px] mx-auto">
      <div className="md:flex md:gap-5 border-b mb-5 bg-white p-3 rounded-lg">
        <div className="md:w-1/2 w-full">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={newsOfDay?.urlToImage || "https://placehold.co/800x420"}
              className="w-full min-h-[400px] object-cover"
              alt="Top News"
            />
            <a href="#!">
              <div className="absolute inset-0 bg-white bg-opacity-15"></div>
            </a>
          </div>
        </div>

        <div className="md:w-1/2 w-full mb-4">
          <span className="inline-block bg-red-500 text-white px-3 py-1 rounded mb-3 shadow">
            News of the day
          </span>
          <h4 className="text-2xl font-bold mb-3">{newsOfDay?.title}</h4>
          <p className="text-gray-600 mb-4">{newsOfDay?.description}</p>
          <a href={newsOfDay.url} target="_blank" rel="noreferrer">
            <button className="bg-blue-500 text-white px-4 py-2 rounded shadow">
              Read More
            </button>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {restNews.slice(0, 6).map((article) => (
          <div key={article.title} className="bg-white p-3 rounded-lg h-full">
            <div className="relative overflow-hidden rounded-lg mb-3">
              <img
                src={article.urlToImage || "https://placehold.co/200x100"}
                className="w-full object-fit h-[200px] rounded shadow-lg"
                alt={article.title}
              />
              <a href={article.url} target="_blank" rel="noreferrer">
                <div className="absolute inset-0 bg-white bg-opacity-15"></div>
              </a>
            </div>
            <p className="mb-2 font-bold mt-5">{article.title}</p>
            <p className="text-gray-600 mt-4 flex justify-between items-center">
              {new Date(article.publishedAt).toDateString()}
              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 text-sm"
              >
                Read More...
              </a>
            </p>
          </div>
        ))}
      </div>

      <div className="md:flex md:gap-5 border-b mb-5" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {restNews.slice(-12).map((article) => (
          <a
            key={article.title}
            href={article.url}
            className="flex items-start border-b pb-2 mb-4"
          >
            <div className="w-1/4">
              <img
                src={article.urlToImage || "https://placehold.co/200"}
                className="w-full rounded shadow-lg h-[100px]"
                alt={article.title}
              />
            </div>
            <div className="w-3/4 pl-4">
              <p className="mb-2 font-bold">{article.title}</p>
              <p className="text-gray-600">
                {new Date(article.publishedAt).toDateString()}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
