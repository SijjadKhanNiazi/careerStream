import { useEffect, useState } from "react";
import { fetchJobs } from "../../services/jobApi";
import JobCard from "./JobCard";
import JobDetails from "./JobDetails";
import Pagination from "./Pagination";
import LoadingSpinner from "../common/LoadingSpinner";
import EmptyState from "../common/EmptyState";
import useDebounce from "../../hooks/useDebounce";

function JobList({ filters }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const debouncedFilters = useDebounce(filters, 500);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedFilters]);

  const loadJobs = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchJobs({
        search: debouncedFilters.search || "developer",
        location: debouncedFilters.location || "Pakistan",
        page: currentPage,
      });
      setJobs(data);
    } catch {
      setError("Unable to fetch jobs right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadJobs();
  }, [debouncedFilters, currentPage]);

  if (loading) return <LoadingSpinner />;

  if (error) {
    return <EmptyState title="Something went wrong" message={error} />;
  }

  if (!jobs.length) {
    return (
      <EmptyState
        title="No Jobs Found"
        message="Try adjusting your search or filters."
      />
    );
  }

  return (
    <>
      <section className="mt-8">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          Jobs Found: {jobs.length}
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {jobs.map((job) => (
            <JobCard
              key={job.job_id}
              job={job}
              onViewDetails={setSelectedJob}
            />
          ))}
        </div>

        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </section>

      <JobDetails job={selectedJob} onClose={() => setSelectedJob(null)} />
    </>
  );
}

export default JobList;
