import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Pages/header";
import JobPage from "./Pages/Job-page";
import { useState } from "react";
import JobDetails from "./Pages/JobDetail";

export default function Router() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header search={search} setSearch={setSearch} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job" element={<JobPage search={search} />} />
        <Route path="/job/:id" element={<JobDetails/>}/>
      </Routes>
    </>
  );
}