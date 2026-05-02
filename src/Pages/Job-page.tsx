import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import {Mosaic} from 'react-loading-indicators';
import { NavLink } from "react-router-dom";

type Com = {
  id: number;
  title: string;
  company: string;
  description: string;
  location: string;
  jobType: string;
  salary: number;
};

type Props = {
  search: string;
};

export default function JobPage({ search }: Props) {
  const [page, setPage] = useState(1);
  const limit = 6;

  const fetchJobs = async (): Promise<Com[]> => {
    const response = await axios.get<Com[]>(
      "http://localhost:3001/Companies"
    );
    return response.data;
  };

  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["Com"],
    queryFn: fetchJobs,
  });

  useEffect(() => {
    setPage(1);
  }, [search]);

  const filteredData = data?.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const pageData = filteredData?.slice(
    (page - 1) * limit,
    page * limit
  );

  const totalPages = Math.ceil(
    (filteredData?.length || 0) / limit
  );
   
     if (isLoading)
    return <span className="flex justify-center items-center h-screen"><Mosaic color="#32cd32" size="large" text="loading..." textColor=""  /></span>
    
  if (isError)
    return (
      <p className="text-center mt-10 text-red-500 text-4xl">
        {error.message}
      </p>
    );

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden relative">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[600px] h-[600px] bg-pink-400/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="px-4 sm:px-6 lg:px-12 py-16 relative z-10">

        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-600 drop-shadow-sm">
          Explore Opportunities
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {pageData?.map((item) => (
            <div
              key={item.id}
              className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl p-6 border border-white/60 hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex-1">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 mb-2 group-hover:from-pink-500 group-hover:to-purple-500 transition-colors duration-300">
                  {item.title}
                </h2>

                <p className="text-gray-800 font-semibold mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-100 to-pink-100 text-indigo-700 flex items-center justify-center text-xs font-bold shadow-sm">
                    {item.company.charAt(0)}
                  </span>
                  {item.company}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold">{item.jobType || "Full Time"}</span>
                  <span className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-xs font-bold">{item.location}</span>
                </div>

                <p className="text-sm text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                <span className="text-xl font-black text-gray-900 tracking-tight">
                  ₹{item.salary.toLocaleString()}
                </span>

                <NavLink to={`/job/${item.id}`} className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Apply
                </NavLink>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Pagination
            Page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  );
}