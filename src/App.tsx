import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/LandingPage";
import { ThemeProvider } from "./lib/ThemeContext";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
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
