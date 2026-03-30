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
    <div className="min-h-screen bg-gray-100 px-4 py-8">
           <div className="max-w-4xl mx-auto mb-4">
      <NavLink
        to="/job"
        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition"
      >
        ← Back to Jobs
      </NavLink>
    </div>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">  

        <div className="border-b pb-6 mb-6">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
            {data?.title}
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            {data?.company}
          </p>

          <div className="flex flex-wrap gap-3 mt-4 text-sm">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              {data?.location}
            </span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
              {data?.jobType}
            </span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
              ₹ {data?.salary?.toLocaleString()}
            </span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">
              Posted: {data?.postedDate}
            </span>
          </div>
        </div>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Job Description</h2>
          <p className="text-gray-700 leading-relaxed">
            {data?.description}
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {data?.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Requirements</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {data?.requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Skills Required</h2>
          <div className="flex flex-wrap gap-2">
            {data?.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Company Size</h2>
          <p className="text-gray-700">{data?.companySize} Employees</p>
        </section>

        <div className="text-center">
          <button className="w-full md:w-auto bg-blue-600! cursor-pointer hover:bg-blue-700 transition text-white px-8 py-3 rounded-xl font-semibold shadow-md"
          onClick={()=> setApplyOpen(true)}>
            Apply Job
          </button>
        </div>

       {isApplyOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
       
    <div
      className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      
    ></div>

    <div
      className="relative z-50 w-full max-w-3xl mx-4"
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