import { Link, NavLink } from "react-router-dom";
import { FaBookmark, FaBriefcase } from "react-icons/fa";

function Navbar() {
  const savedJobsCount =
    JSON.parse(localStorage.getItem("savedJobs"))?.length || 0;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center bg-blue-600 text-white rounded-2xl shadow-md">
              <FaBriefcase className="text-2xl" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-gray-900">
              CareerStream
            </span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium text-lg transition-colors hover:text-blue-600 ${
                  isActive ? "text-blue-600 font-semibold" : "text-gray-600"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/saved-jobs"
              className={({ isActive }) =>
                `relative flex items-center gap-2 font-medium text-lg transition-colors hover:text-blue-600 ${
                  isActive ? "text-blue-600 font-semibold" : "text-gray-600"
                }`
              }
            >
              <FaBookmark className="text-xl" />
              Saved Jobs
              {savedJobsCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {savedJobsCount}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
