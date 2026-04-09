import {
  FaTimes,
  FaMapMarkerAlt,
  FaBuilding,
  FaMoneyBillWave,
} from "react-icons/fa";

function JobDetails({ job, onClose }) {
  if (!job) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              {job.job_title}
            </h2>
            <p className="mt-2 text-gray-600">{job.employer_name}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
          >
            <FaTimes />
          </button>
        </div>

        <div className="space-y-4 text-sm text-gray-600">
          <p className="flex items-center gap-2">
            <FaBuilding className="text-blue-500" />
            {job.employer_name || "Not listed"}
          </p>

          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-500" />
            {job.job_city || job.job_country || "Remote"}
          </p>

          <p className="flex items-center gap-2">
            <FaMoneyBillWave className="text-blue-500" />
            {job.job_salary || "Salary not disclosed"}
          </p>
        </div>

        <div className="mt-8">
          <h3 className="mb-3 text-xl font-semibold text-gray-800">
            Job Description
          </h3>
          <p className="whitespace-pre-line leading-7 text-gray-600">
            {job.job_description || "No detailed description available."}
          </p>
        </div>

        <div className="mt-8">
          <a
            href={job.job_apply_link}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Apply for this Job
          </a>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
