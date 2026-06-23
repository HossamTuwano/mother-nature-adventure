import { Routes, Route } from "react-router";
import HomePage from "./pages/home";
import KilimanjaroRoutesPage from "./pages/routes";
import KilimanjaroRouteDetailPage from "./pages/routes/detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/routes" element={<KilimanjaroRoutesPage />} />
      <Route path="/routes/:id" element={<KilimanjaroRouteDetailPage />} />
    </Routes>
  );
}

export default App;
