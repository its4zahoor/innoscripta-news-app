export default function Feed() {
  return (
    <div className="py-5 container mx-auto">
      <div className="md:flex md:gap-5 border-b pb-4 mb-5">
        <div className="md:w-1/2 w-full mb-4">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/080.webp"
              className="w-full"
              alt="Slide Image"
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
          <h4 className="text-2xl font-bold mb-3">
            Facilis consequatur eligendi
          </h4>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            consequatur eligendi quisquam doloremque vero ex debitis veritatis
            placeat unde animi laborum sapiente illo possimus, commodi
            dignissimos obcaecati illum maiores corporis.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded shadow">
            Read More
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        <div>
          <div className="relative overflow-hidden rounded-lg shadow-lg mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
              className="w-full"
              alt="City Image"
            />
            <a href="#!">
              <div className="absolute inset-0 bg-white bg-opacity-15"></div>
            </a>
          </div>
          <p className="mb-2 font-bold">Lorem ipsum dolor sit amet</p>
          <p className="text-gray-600">15.07.2020</p>
        </div>

        <div>
          <div className="relative overflow-hidden rounded-lg shadow-lg mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp"
              className="w-full"
              alt="City Image"
            />
            <a href="#!">
              <div className="absolute inset-0 bg-white bg-opacity-15"></div>
            </a>
          </div>
          <p className="mb-2 font-bold">Lorem ipsum dolor sit amet</p>
          <p className="text-gray-600">15.07.2020</p>
        </div>

        <div>
          <div className="relative overflow-hidden rounded-lg shadow-lg mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp"
              className="w-full"
              alt="City Image"
            />
            <a href="#!">
              <div className="absolute inset-0 bg-white bg-opacity-15"></div>
            </a>
          </div>
          <p className="mb-2 font-bold">Lorem ipsum dolor sit amet</p>
          <p className="text-gray-600">15.07.2020</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <a href="#!" className="text-dark">
          <div className="flex items-center border-b pb-2 mb-4">
            <div className="w-1/4">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/014.webp"
                className="w-full rounded shadow-lg"
                alt="Hollywood Sign on The Hill"
              />
            </div>
            <div className="w-3/4 pl-4">
              <p className="mb-2 font-bold">Lorem ipsum dolor sit amet</p>
              <p className="text-gray-600">15.07.2020</p>
            </div>
          </div>
        </a>

        <a href="#!" className="text-dark">
          <div className="flex items-center border-b pb-2 mb-4">
            <div className="w-1/4">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/015.webp"
                className="w-full rounded shadow-lg"
                alt="Another City"
              />
            </div>
            <div className="w-3/4 pl-4">
              <p className="mb-2 font-bold">Lorem ipsum dolor sit amet</p>
              <p className="text-gray-600">16.07.2020</p>
            </div>
          </div>
        </a>
      </div>

      <nav aria-label="Page navigation">
        <ul className="flex justify-center space-x-2 mt-6">
          <li>
            <a href="#" className="px-4 py-2 rounded bg-gray-200">
              Previous
            </a>
          </li>
          <li>
            <a href="#" className="px-4 py-2 rounded bg-blue-500 text-white">
              1
            </a>
          </li>
          <li>
            <a href="#" className="px-4 py-2 rounded bg-gray-200">
              2
            </a>
          </li>
          <li>
            <a href="#" className="px-4 py-2 rounded bg-gray-200">
              3
            </a>
          </li>
          <li>
            <a href="#" className="px-4 py-2 rounded bg-gray-200">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
