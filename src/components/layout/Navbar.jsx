import { Link, NavLink } from "react-router-dom";
import { FaBookmark, FaBriefcase } from "react-icons/fa";

function Navbar() {
  const savedJobsCount =
    JSON.parse(localStorage.getItem("savedJobs"))?.length || 0;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-blue-600"
        >
          <FaBriefcase className="text-2xl" />
          <span>CareerStream</span>
        </Link>

        <div className="flex items-center gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink
            to="/saved-jobs"
            className="relative flex items-center gap-2"
          >
            <FaBookmark /> Saved Jobs
            {savedJobsCount > 0 && (
              <span className="absolute -top-2 -right-4 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {savedJobsCount}
              </span>
            )}
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
