function FilterBar({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <input
          type="text"
          name="search"
          value={filters.search}
          onChange={handleChange}
          placeholder="Search jobs, skills, companies..."
          className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />

        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleChange}
          placeholder="Location"
          className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />

        <select
          name="jobType"
          value={filters.jobType}
          onChange={handleChange}
          className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="">All Types</option>
          <option value="fulltime">Full-time</option>
          <option value="parttime">Part-time</option>
          <option value="internship">Internship</option>
        </select>

        <select
          name="workMode"
          value={filters.workMode}
          onChange={handleChange}
          className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="">Remote / Onsite</option>
          <option value="remote">Remote</option>
          <option value="onsite">Onsite</option>
        </select>
      </div>
    </section>
  );
}

export default FilterBar;
