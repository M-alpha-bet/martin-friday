import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import RebelOrcsPage from "./pages/RebelOrcsPage";
import OrctraLandingPage from "./pages/OrctraPage";
import BinaryTradePage from "./pages/BinaryTrade";
import Leaderboard from "./pages/Leaderboard";
import Activities from "./pages/Activities";
import { ThemeProvider } from "./lib/ThemeContext";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<RebelOrcsPage />} />
            <Route path="/orctra" element={<OrctraLandingPage />} />
            <Route path="/binary-trade" element={<BinaryTradePage />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/activities" element={<Activities />} />
          </Routes>
        </Router>
      </ThemeProvider>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 1000,
          style: {
            background: "#333",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 600,
            borderRadius: "8px",
            padding: "10px 15px",
          },
        }}
      />
    </>
  );
}
