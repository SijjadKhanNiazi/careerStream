function Pagination({ currentPage, setCurrentPage }) {
  return (
    <div className="mt-10 flex items-center justify-center gap-4">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="rounded-xl border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Previous
      </button>

      <span className="rounded-xl bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
        Page {currentPage}
      </span>

      <button
        onClick={() => setCurrentPage((prev) => prev + 1)}
        className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
