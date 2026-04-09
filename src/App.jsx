import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SavedJobs from "./pages/SavedJobs";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved-jobs" element={<SavedJobs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
