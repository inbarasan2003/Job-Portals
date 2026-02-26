import {  NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <section className="bg-blue-600 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find Your Dream Job Today
          </h1>

          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Discover thousands of job opportunities with all the information you
            need.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink
              to={"/job"}
              className="bg-white text-blue-600 font-semibold px-10 cursor-pointer py-4 rounded-lg hover: transition-all "
            >
              Find More Jobs
            </NavLink>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-md rounded-xl p-8">
            <h3 className="text-xl font-bold mb-3 text-blue-600">1000+ Jobs</h3>
            <p className="text-gray-600">
              Access thousands of job listings across multiple industries.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-8">
            <h3 className="text-xl font-bold mb-3 text-blue-600">
              Verified Companies
            </h3>
            <p className="text-gray-600">
              We partner with trusted companies to ensure quality listings.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-8">
            <h3 className="text-xl font-bold mb-3 text-blue-600">Easy Apply</h3>
            <p className="text-gray-600">
              Apply to jobs quickly with a simple and smooth process.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Your Career Journey Starts Here
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed font-serif">
            Discover opportunities that match your passion, skills, and
            ambition. Whether you're just starting out or looking for your next
            big move, we connect you with companies that value your talent.
          </p>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 text-center font-serif">
        <p className="text-sm">© 2026 JobSearcher. All rights reserved.</p>
      </footer>
    </div>
  );
}
