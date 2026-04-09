import { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import JobCard from "../components/jobs/JobCard";
import { getSavedJobs, removeSavedJob } from "../utils/localStorage";

function SavedJobs() {
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    setSavedJobs(getSavedJobs());
  }, []);

  const handleRemove = (jobId) => {
    removeSavedJob(jobId);
    setSavedJobs(getSavedJobs());
    window.dispatchEvent(new Event("savedJobsUpdated"));
  };

  return (
    <MainLayout>
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Saved Jobs</h1>

      {!savedJobs.length ? (
        <p className="text-gray-500">No saved jobs yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {savedJobs.map((job) => (
            <div key={job.job_id} className="space-y-3">
              <JobCard job={job} onViewDetails={() => {}} />
              <button
                onClick={() => handleRemove(job.job_id)}
                className="w-full rounded-xl border border-red-300 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-50"
              >
                Remove Bookmark
              </button>
            </div>
          ))}
        </div>
      )}
    </MainLayout>
  );
}

export default SavedJobs;
