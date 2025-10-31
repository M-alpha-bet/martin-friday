import Navbar from "../components/Landing/Navbar";
import Hero from "../components/Landing/Hero";
import Features from "../components/Landing/Features";
import Quests from "../components/Landing/Quests";
import Footer from "../components/Landing/Footer";
import { useTheme } from "../lib/ThemeContext";

export default function OrctraLandingPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const pageClasses = isDark
    ? "bg-fogoBlack text-fogoWhite"
    : "bg-fogoWhite text-fogoBlack";

  return (
    <div className={`${pageClasses} min-h-screen transition-colors duration-300`}>
      <Navbar />
      <main className="space-y-12">
        <Hero />
        <Features />
        <Quests />
      </main>
      <Footer />
    </div>
  );
}
