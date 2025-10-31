import { useNavigate } from "react-router-dom";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { useTheme } from "../../lib/ThemeContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`flex items-center justify-between border-b px-6 py-4 md:px-[130px] md:py-[20px] transition-colors duration-300 ${
        isDark
          ? "bg-fogoBlack text-fogoWhite border-white/10"
          : "bg-fogoWhite text-fogoBlack border-black/5"
      }`}
    >
      <h1 className="heading-text">ORCTRA</h1>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className={`relative flex h-10 w-20 items-center rounded-full border transition-colors duration-300 ${
            isDark
              ? "border-white/20 bg-fogoWhite/10"
              : "border-black/10 bg-fogoBlack/5"
          }`}
        >
          <div
            className={`flex w-full items-center justify-between px-3 text-base transition-colors duration-300 ${
              isDark ? "text-fogoWhite/80" : "text-fogoBlack/70"
            }`}
          >
            <BsMoonStarsFill className={isDark ? "text-fogoWhite" : ""} />
            <BsFillSunFill
              className={!isDark ? "text-amber-500" : "text-amber-300"}
            />
          </div>
          <span
            className={`absolute inset-y-1 left-1 flex h-8 w-8 items-center justify-center rounded-full shadow transition-all duration-300 ${
              isDark
                ? "translate-x-9 bg-fogoWhite text-fogoBlack"
                : "translate-x-0 bg-fogoBlack text-fogoWhite"
            }`}
          >
            {isDark ? (
              <BsFillSunFill className="text-lg" />
            ) : (
              <BsMoonStarsFill className="text-lg" />
            )}
          </span>
        </button>
        <button
          onClick={() => navigate("/binary-trade")}
          className={`rounded-full px-[20px] py-[8px] text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 ${
            isDark
              ? "bg-fogoWhite text-fogoBlack hover:bg-fogoWhite/90"
              : "bg-fogoRed text-white hover:bg-red-600"
          }`}
        >
          Start Trading
        </button>
      </div>
    </div>
  );
}
