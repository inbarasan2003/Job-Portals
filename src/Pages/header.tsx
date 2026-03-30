import AvatarIcon from "@/components/avatar";
import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import NameIcon from "@/components/icon-avatar";

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function Header({ search, setSearch }: Props) {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4">
        <NavLink to={"/"}>
          <div className="flex items-center gap-2">
            <div className="block sm:hidden">
              <NameIcon
                alt="Job Searcher"
                src=""
                name="Job Searcher"
                imageClassName="w-9 h-9 border-2 border-blue-500 rounded-full shadow-sm"
                fallbackClassName="text-gray-600"
              />
            </div>

            <h2 className="hidden sm:block text-2xl font-bold text-blue-600 whitespace-nowrap">
              Job<span className="text-gray-800">Searcher</span>
            </h2>
          </div>
        </NavLink>

        <nav className="flex items-center gap-2 sm:gap-6">
          <div className="relative w-24 sm:w-64">
            <IoSearchOutline className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="search"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-lg pl-7 pr-2 py-1.5 sm:py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <NavLink
            to="/"
            className="text-xs sm:text-base text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap"
          >
            Home
          </NavLink>

          <NavLink
            to="/job"
            className="text-xs sm:text-base text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap"
          >
            Jobs
          </NavLink>

          <div className=" sm:flex shrink-0">
            <AvatarIcon
              alt="Inba"
              src=""
              name="Inbarasan Krishnamoorthy"
              imageClassName="w-8 h-8 sm:w-9 sm:h-9 border-2 border-gray-300 rounded-full hover:border-indigo-500 transition"
              fallbackClassName="text-gray-600"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
