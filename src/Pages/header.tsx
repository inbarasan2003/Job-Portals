import AvatarIcon from "@/components/avatar";
import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function Header({ search, setSearch }: Props) {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4">
        <h2 className="text-2xl font-bold text-blue-600 cursor-pointer">
          Job<span className="text-gray-800">Searcher</span>
        </h2>

        <nav className="flex items-center gap-6 relative left-4">
          <IoSearchOutline className="relative left-12 "/>
          <input
            type="search"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full sm:w-96 border rounded-lg px-4 sm:px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <NavLink
            to="/"
            className="text-gray-700 hover:text-blue-600 font-medium transition "
          >
            Home
          </NavLink>

          <NavLink
            to="/job"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Jobs
          </NavLink>

          <AvatarIcon
          alt="Inba"
          src=""
          name="Inbarasan Krishnamoorthy"
          // title='Inbarasan'
          imageClassName="border-2 border-gray-300 
                rounded-full
                hover:border-indigo-500
                transition"
          fallbackClassName="text-gray-600"
          />
        </nav>
      </div>
    </header>
  );
}
