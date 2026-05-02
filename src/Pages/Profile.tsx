import {  MapPin,  Calendar, Briefcase,  Mail, Phone } from "lucide-react";


export default function Profile() {
  const profile = {
    name: "Inbarasan Krishnamoorthy",
    title: "Frontend Developer",
    email: "inbarasan@example.com",
    phone: "+91 9876543210",
    location: "Chennai, India",
    experience: "2 Years",
    skills: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    about: "Passionate Frontend Developer with a knack for building beautiful, responsive, and highly animated user interfaces. I love turning complex problems into elegant designs."
  };

  return (
    <div className="flex flex-col w-full min-h-screen pb-10 bg-slate-50">
      {/* Hero Banner Area */}
      <div className="relative w-full h-64 md:h-80 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-hidden shadow-inner">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse mix-blend-overlay" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-72 h-72 bg-white/20 rounded-full blur-2xl animate-pulse mix-blend-overlay" style={{ animationDelay: "1s" }} />
        
        <div className="absolute top-6 right-6 z-10">
          {/* <button className="bg-white/20 hover:bg-white/40 text-white border border-white/30 backdrop-blur-md shadow-lg transition-all rounded-full px-6 py-2 flex items-center gap-2 font-medium">
            <Edit className="h-4 w-4" />
            Edit Profile
          </button> */}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-4 md:px-10 max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Left Column (Avatar & Quick Info) */}
          <div className="w-full md:w-1/3 lg:w-1/4 -mt-20 md:-mt-28 space-y-6">
            <div className="border border-white/40 shadow-2xl overflow-hidden backdrop-blur-xl bg-white/90 rounded-3xl p-8 flex flex-col items-center text-center space-y-5">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative h-36 w-36 md:h-44 md:w-44 border-4 border-white shadow-2xl ring-4 ring-white/30 rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center">
                  <span className="text-6xl text-white font-black shadow-inner">IK</span>
                </div>
              </div>
              
              <div className="space-y-2 w-full mt-4">
                <h2 className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">{profile.name}</h2>
                <div className="flex items-center justify-center gap-2 mt-3 text-indigo-700 bg-indigo-50 py-2 px-4 rounded-full text-sm font-semibold inline-flex mx-auto border border-indigo-100 shadow-sm transition-transform hover:scale-105">
                  <Briefcase className="h-4 w-4" />
                  <span>{profile.title}</span>
                </div>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-4" />
              
              <div className="w-full space-y-5 text-left">
                <div className="flex items-center gap-4 text-sm group">
                  <div className="p-3 bg-gradient-to-br from-pink-100 to-pink-50 rounded-xl text-pink-600 shadow-sm group-hover:scale-110 transition-transform">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Location</p>
                    <p className="font-semibold text-gray-900 text-base">{profile.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm group">
                  <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl text-purple-600 shadow-sm group-hover:scale-110 transition-transform">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Experience</p>
                    <p className="font-semibold text-gray-900 text-base">{profile.experience}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column (Description & Details) */}
          <div className="w-full md:w-2/3 lg:w-3/4 md:mt-10 space-y-8 pb-12">
            <div className="border border-white/40 shadow-xl backdrop-blur-md bg-white/90 rounded-3xl overflow-hidden">
              <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                <h3 className="text-2xl font-extrabold flex items-center gap-3 text-gray-800">
                  <div className="h-10 w-2.5 bg-gradient-to-b from-indigo-500 to-pink-500 rounded-full shadow-sm" />
                  About Me
                </h3>
              </div>
              <div className="p-8">
                <p className="text-gray-600 leading-loose whitespace-pre-wrap font-medium tracking-wide text-lg">
                  {profile.about}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-white/40 shadow-xl backdrop-blur-md bg-white/90 rounded-3xl overflow-hidden p-8">
                <h3 className="text-xl font-bold mb-6 text-gray-800">Contact Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><Mail className="w-5 h-5"/></div>
                    <span className="font-medium text-gray-700">{profile.email}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-pink-100 rounded-lg text-pink-600"><Phone className="w-5 h-5"/></div>
                    <span className="font-medium text-gray-700">{profile.phone}</span>
                  </div>
                </div>
              </div>

              <div className="border border-white/40 shadow-xl backdrop-blur-md bg-white/90 rounded-3xl overflow-hidden p-8">
                <h3 className="text-xl font-bold mb-6 text-gray-800">Top Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {profile.skills.map((skill, index) => (
                    <span key={index} className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-full text-indigo-700 font-semibold shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
