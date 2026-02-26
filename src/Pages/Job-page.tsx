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
    <div className="h-screen bg-gray-100 overflow-x-hidden">
      <div className="px-4 sm:px-6 lg:px-12 py-8">

        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Explore Jobs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {pageData?.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-5 border"
            >
              <h2 className="text-xl font-semibold text-blue-600 mb-2">
                {item.title}
              </h2>

              <p className="text-gray-700 font-medium mb-1">
                {item.company}
              </p>

              <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                {item.description}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-800">
                  ₹{item.salary.toLocaleString()}
                </span>

                <NavLink to={`/job/${item.id}`} className="bg-blue-600! cursor-pointer  px-4 py-2 rounded-lg text-sm hover:bg-blue-300 text-white! transition">
                  Apply
                </NavLink>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          Page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}