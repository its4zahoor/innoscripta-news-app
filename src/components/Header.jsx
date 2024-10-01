import NewsSvg from "../assets/news.svg";

export const Header = () => {
  return (
    <header className="flex flex-col md:flex-row p-4 border-b bg-white fixed w-full z-50">
      <div className="text-lg font-bold flex md:justify-center items-center w-full md:w-auto">
        <img src={NewsSvg} className="mx-2" />
        Innoscripta News
      </div>
    </header>
  );
};
