import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { NavLink, useParams } from "react-router-dom"
import { Mosaic } from "react-loading-indicators"
import UserForm from "./User-form"
import { useState } from "react"

export default function JobDetails() {

  const[isApplyOpen,setApplyOpen]=useState(false);

  type JobDetailType = {
    id: number
    title: string
    company: string
    description: string
    location: string
    jobType: string
    salary: number
    postedDate: string
    responsibilities: string[]
    requirements: string[]
    skills: string[]
    companySize: string
  }

  const { id } = useParams()

  const fetchJob = async (): Promise<JobDetailType> => {
    const res = await axios.get(`http://localhost:3001/Companies/${id}`)
    return res.data
  }

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['JobDetail', id],
    queryFn: fetchJob,
    enabled: !!id,
  })

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Mosaic color="#32cd32" size="large" text="Loading..." />
      </div>
    )

  if (isError)
    return (
      <p className="text-center mt-10 text-red-500 text-2xl">
        {error.message}
      </p>
    )

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-12 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 -translate-y-20 translate-x-1/3 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto mb-8 relative z-10">
        <NavLink
          to="/job"
          className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition bg-white/50 backdrop-blur-md px-4 py-2 rounded-full shadow-sm hover:shadow-md"
        >
          ← Back to Jobs
        </NavLink>
      </div>

      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-6 md:p-12 border border-white/60 relative z-10">  

        <div className="border-b border-gray-100 pb-8 mb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 tracking-tight mb-2">
            {data?.title}
          </h1>
          <p className="text-indigo-600 font-bold text-xl flex items-center gap-2">
            {data?.company}
          </p>

          <div className="flex flex-wrap gap-3 mt-6 text-sm font-bold">
            <span className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-4 py-1.5 rounded-full shadow-sm border border-blue-200">
              {data?.location}
            </span>
            <span className="bg-gradient-to-r from-pink-50 to-pink-100 text-pink-700 px-4 py-1.5 rounded-full shadow-sm border border-pink-200">
              {data?.jobType}
            </span>
            <span className="bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 px-4 py-1.5 rounded-full shadow-sm border border-purple-200">
              ₹ {data?.salary?.toLocaleString()}
            </span>
            <span className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full shadow-sm border border-gray-200">
              Posted: {data?.postedDate}
            </span>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
            <div className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-pink-500 rounded-full"></div>
            Job Description
          </h2>
          <p className="text-gray-600 leading-relaxed font-medium text-lg">
            {data?.description}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
            <div className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-pink-500 rounded-full"></div>
            Responsibilities
          </h2>
          <ul className="list-none space-y-3 text-gray-600 font-medium">
            {data?.responsibilities.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-indigo-500 mt-1">✔</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
            <div className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-pink-500 rounded-full"></div>
            Requirements
          </h2>
          <ul className="list-none space-y-3 text-gray-600 font-medium">
            {data?.requirements.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-pink-500 mt-1">★</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
            <div className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-pink-500 rounded-full"></div>
            Skills Required
          </h2>
          <div className="flex flex-wrap gap-2">
            {data?.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold text-gray-700 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-2 text-gray-800">Company Size</h2>
          <p className="text-gray-600 font-medium bg-gray-50 inline-block px-4 py-2 rounded-lg border border-gray-100">{data?.companySize} Employees</p>
        </section>

        <div className="text-center pt-8 border-t border-gray-100">
          <button 
            className="w-full md:w-auto cursor-pointer bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 transition-all text-white px-12 py-4 rounded-full font-extrabold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
            onClick={()=> setApplyOpen(true)}
          >
            Apply for this Job
          </button>
        </div>

       {isApplyOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
              onClick={() => setApplyOpen(false)}
            ></div>

            <div
              className="relative z-50 w-full max-w-4xl mx-4"
              onClick={(e) => e.stopPropagation()}   
            >
              <UserForm onClose={() => setApplyOpen(false)} />
            </div>
          </div>
        )}

      </div>
    </div>
  )
}