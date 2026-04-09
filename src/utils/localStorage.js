export const getSavedJobs = () => {
  return JSON.parse(localStorage.getItem("savedJobs")) || [];
};

export const saveJob = (job) => {
  const savedJobs = getSavedJobs();

  const alreadyExists = savedJobs.some((item) => item.job_id === job.job_id);

  if (!alreadyExists) {
    localStorage.setItem("savedJobs", JSON.stringify([...savedJobs, job]));
  }
};

export const removeSavedJob = (jobId) => {
  const savedJobs = getSavedJobs().filter((job) => job.job_id !== jobId);
  localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
};

export const isJobSaved = (jobId) => {
  return getSavedJobs().some((job) => job.job_id === jobId);
};
