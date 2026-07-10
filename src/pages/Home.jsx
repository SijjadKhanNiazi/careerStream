import { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import FilterBar from "../components/jobs/FilterBar";
import JobList from "../components/jobs/JobList";

function Home() {
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    jobType: "",
    workMode: "",
  });
  //
  return (
    <MainLayout>
      <section className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-12 text-white shadow-md">
        <h1 className="text-4xl font-bold">Find Jobs & Internships Easily</h1>
        <p className="mt-4 max-w-2xl text-lg text-blue-100">
          Discover the right opportunities with CareerStream .
        </p>
      </section>

      <FilterBar filters={filters} setFilters={setFilters} />
      <JobList filters={filters} />
    </MainLayout>
  );
}

export default Home;
