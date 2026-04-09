import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaMoneyBillWave,
  FaBookmark,
} from "react-icons/fa";
import { saveJob, isJobSaved } from "../../utils/localStorage";

function JobCard({ job, onViewDetails }) {
  const [saved, setSaved] = useState(isJobSaved(job.job_id));

  const handleSave = () => {
    saveJob(job);
    setSaved(true);
    window.dispatchEvent(new Event("savedJobsUpdated"));
  };

  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-gray-800 line-clamp-2">
          {job.job_title}
        </h3>

        <button
          onClick={handleSave}
          disabled={saved}
          className={`rounded-full p-2 transition ${
            saved
              ? "bg-blue-100 text-blue-600"
              : "bg-gray-100 text-gray-500 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          <FaBookmark />
        </button>
      </div>

      <p className="text-sm text-gray-600">{job.employer_name}</p>

      <div className="mt-6 flex items-center justify-between">
        <a
          href={job.job_apply_link}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Apply Now
        </a>

        <button
          onClick={() => onViewDetails(job)}
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          View Details
        </button>
      </div>
    </article>
  );
}

export default JobCard;
