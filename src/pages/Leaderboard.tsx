import { useMemo } from "react";
import Navbar from "../components/Landing/Navbar";
import { useTheme } from "../lib/ThemeContext";

type Trader = {
  id: string;
  name: string;
  winRate: number;
  trades: number;
  points: number;
};

const demoTraders: Trader[] = [
  {
    id: "1",
    name: "Ragnar Ironjaw",
    winRate: 72,
    trades: 182,
    points: 1820,
  },
  {
    id: "2",
    name: "Sylra Moonshadow",
    winRate: 69,
    trades: 168,
    points: 1755,
  },
  {
    id: "3",
    name: "Goruk Stormcaller",
    winRate: 66,
    trades: 159,
    points: 1630,
  },
  {
    id: "4",
    name: "Thalia Emberheart",
    winRate: 64,
    trades: 151,
    points: 1540,
  },
  {
    id: "5",
    name: "Karn Voidstrider",
    winRate: 62,
    trades: 147,
    points: 1485,
  },
  {
    id: "6",
    name: "Velra Nightbloom",
    winRate: 60,
    trades: 138,
    points: 1420,
  },
  {
    id: "7",
    name: "Drogath Ironveil",
    winRate: 58,
    trades: 132,
    points: 1380,
  },
  {
    id: "8",
    name: "Seris Windwalker",
    winRate: 57,
    trades: 129,
    points: 1335,
  },
  {
    id: "9",
    name: "Mira Emberlash",
    winRate: 55,
    trades: 121,
    points: 1290,
  },
  {
    id: "10",
    name: "Torin Frostfang",
    winRate: 54,
    trades: 118,
    points: 1245,
  },
];

const medalStyles: Record<number, string> = {
  1: "bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-slate-900",
  2: "bg-gradient-to-r from-slate-200 via-slate-100 to-slate-300 text-slate-900",
  3: "bg-gradient-to-r from-orange-300 via-amber-400 to-amber-500 text-slate-900",
};

export default function Leaderboard() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const pageClasses = isDark
    ? "bg-fogoBlack text-fogoWhite"
    : "bg-fogoWhite text-fogoBlack";
  const headingAccent = isDark ? "text-fogoWhite/70" : "text-gray-700";
  const descriptionTone = isDark ? "text-fogoWhite/60" : "text-slate-500";
  const tableWrapper = isDark
    ? "border-white/10 bg-fogoBlack/70"
    : "border-black/5 bg-white";
  const tableHeadClasses = isDark
    ? "bg-fogoWhite text-fogoBlack"
    : "bg-fogoBlack text-white";
  const tableBodyClasses = isDark
    ? "divide-white/10 bg-fogoBlack"
    : "divide-black/5 bg-white";
  const fallbackBadge = isDark
    ? "bg-fogoWhite text-fogoBlack"
    : "bg-fogoBlack text-fogoWhite";
  const infoSectionTone = isDark
    ? "border-white/10 bg-fogoBlack/70 text-fogoWhite/70"
    : "border-color3/30 bg-white/60 text-slate-600";

  const rankedTraders = useMemo(
    () =>
      [...demoTraders]
        .sort((a, b) => b.points - a.points)
        .map((trader, index) => ({ ...trader, rank: index + 1 })),
    []
  );

  return (
    <div className={`${pageClasses} min-h-screen transition-colors duration-300`}>
      <Navbar />
      <div className="mx-auto max-w-5xl space-y-8 px-4 pb-16 pt-12 md:px-10">
        <header className="space-y-3 text-center md:text-left">
          <p className={`text-sm uppercase tracking-[0.4em] ${headingAccent}`}>
            Orctra Elite Board
          </p>
          <h1 className="text-3xl font-semibold md:text-4xl">Leaderboard</h1>
          <p className={`text-sm md:text-base ${descriptionTone}`}>
            Ranking our top participants and traders
          </p>
        </header>

        <div
          className={`overflow-hidden rounded-3xl border shadow-[0_25px_45px_-40px_rgba(31,41,55,0.4)] ${tableWrapper}`}
        >
          <table className="min-w-full">
            <thead className={tableHeadClasses}>
              <tr className="text-left text-xs uppercase tracking-wide md:text-sm">
                <th className="px-4 py-4 font-semibold">Rank</th>
                <th className="px-4 py-4 font-semibold">Trader</th>
                <th className="px-4 py-4 font-semibold">Trades</th>
                <th className="px-4 py-4 font-semibold">Points</th>
              </tr>
            </thead>
            <tbody className={`text-sm md:text-base ${tableBodyClasses}`}>
              {rankedTraders.map(
                ({ rank, id, name, trades, points }) => {
                  const rankBadge = medalStyles[rank] ?? fallbackBadge;

                  return (
                    <tr
                      key={id}
                      className={
                        isDark ? "border-white/10" : "border-black/5"
                      }
                    >
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold md:h-10 md:w-10 md:text-base ${rankBadge}`}
                        >
                          {rank}
                        </span>
                      </td>
                      <td
                        className={`px-4 py-4 font-medium ${
                          isDark ? "text-fogoWhite" : "text-slate-800"
                        }`}
                      >
                        {name}
                      </td>
                      <td
                        className={`px-4 py-4 ${
                          isDark ? "text-fogoWhite/70" : "text-slate-600"
                        }`}
                      >
                        {trades}
                      </td>
                      <td
                        className={`px-4 py-4 font-semibold ${
                          isDark ? "text-fogoWhite" : "text-slate-900"
                        }`}
                      >
                        {points}
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>

        <section
          className={`rounded-3xl border border-dashed p-6 text-sm md:text-base ${infoSectionTone}`}
        >
          <h2
            className={`mb-2 text-lg font-semibold md:text-xl ${
              isDark ? "text-fogoWhite" : "text-slate-900"
            }`}
          >
            How the point system works
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-semibold">Base Points:</span> Each resolved
              trade awards 10 points per 100 USDC staked.
            </li>
            <li>
              <span className="font-semibold">Win Bonus:</span> Successful
              trades grant an additional 50% of the base points.
            </li>
            <li>
              <span className="font-semibold">Streak Boost:</span> Consecutive
              wins stack a 5% multiplier per win, capped at 25%.
            </li>
            <li>
              <span className="font-semibold">Activity Reward:</span> Traders
              earn points per social reward they do.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
