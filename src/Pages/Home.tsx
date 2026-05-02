import {  NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-slate-50 overflow-hidden">
      <section className="relative bg-gradient-to-br from-indigo-900 via-blue-800 to-indigo-600 text-white py-32 px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-10 translate-x-20 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 translate-y-20 -translate-x-20 w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 drop-shadow-lg">
            Find Your Dream Job Today
          </h1>

          <p className="text-lg md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto font-medium leading-relaxed">
            Discover thousands of job opportunities with all the information you
            need to accelerate your career.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink
              to={"/job"}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg px-12 cursor-pointer py-4 rounded-full shadow-[0_0_40px_rgba(236,72,153,0.5)] hover:shadow-[0_0_60px_rgba(236,72,153,0.7)] hover:scale-105 transition-all duration-300"
            >
              Find More Jobs
            </NavLink>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative z-20 -mt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-white/50 hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-indigo-100 to-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
              <span className="text-3xl font-black text-indigo-600">1K</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">1000+ Jobs</h3>
            <p className="text-gray-500 font-medium">
              Access thousands of job listings across multiple industries seamlessly.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-white/50 hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-100 to-rose-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
              <span className="text-3xl font-black text-pink-600">✓</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">
              Verified Companies
            </h3>
            <p className="text-gray-500 font-medium">
              We partner with trusted companies to ensure quality listings and safety.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-white/50 hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-100 to-fuchsia-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
              <span className="text-3xl font-black text-purple-600">⚡</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Easy Apply</h3>
            <p className="text-gray-500 font-medium">
              Apply to jobs quickly with a simple, smart, and smooth process.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-white"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-gray-900">
            Your Career Journey <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">Starts Here</span>
          </h2>

          <p className="text-gray-600 text-xl leading-relaxed font-medium">
            Discover opportunities that match your passion, skills, and
            ambition. Whether you're just starting out or looking for your next
            big move, we connect you with companies that value your talent.
          </p>
        </div>
      </section>

      <footer className="bg-gray-950 text-white py-12 text-center">
        <p className="text-gray-400 font-medium">© 2026 JobSearcher. All rights reserved.</p>
      </footer>
    </div>
  );
}
