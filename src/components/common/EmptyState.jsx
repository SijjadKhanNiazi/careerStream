function EmptyState({ title, message }) {
  return (
    <div className="mt-10 rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">
      <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-3 text-gray-500">{message}</p>
    </div>
  );
}

export default EmptyState;
