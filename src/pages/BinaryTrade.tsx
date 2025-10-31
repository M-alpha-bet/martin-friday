// import { useMemo } from "react";
import { TbMenu, TbCalendarClock, TbHome } from "react-icons/tb";
import { MdLeaderboard } from "react-icons/md";
import Header from "../components/Header";
import DummyChart from "../components/Chart";
import CountdownTimer from "../components/CountdownTimer";
import Metrics from "../components/Metrics";
import { useNavigate } from "react-router-dom";
// import { useTradingStore } from "../../lib/store";

export default function BinaryTradePage() {
  const navigate = useNavigate();
  // const { balance, bets, currentPrice } = useTradingStore();

  // const stats = useMemo(() => {
  //   const activeBets = bets.filter((bet) => !bet.resolved);
  //   const resolved = bets.filter((bet) => bet.resolved);
  //   const wins = resolved.filter((bet) => bet.won).length;
  //   const winRate = resolved.length
  //     ? Math.round((wins / resolved.length) * 100)
  //     : 0;

  //   const currency = new Intl.NumberFormat("en-US", {
  //     style: "currency",
  //     currency: "USD",
  //     maximumFractionDigits: 0,
  //   });

  //   return {
  //     balanceLabel: currency.format(balance),
  //     activeLabel: `${activeBets.length} ${
  //       activeBets.length === 1 ? "position" : "positions"
  //     }`,
  //     winRateLabel: `${winRate}%`,
  //     priceLabel: `$${currentPrice.toFixed(2)}`,
  //   };
  // }, [balance, bets, currentPrice]);

  return (
    <section className="flex min-h-screen flex-col overflow-hidden bg-fogoWhite text-fogoBlack md:h-screen md:flex-row">
      <div className="order-last flex w-full items-center justify-around gap-6 bg-gradient-to-r from-color3 to-color4 px-6 py-4 md:order-first md:h-full md:w-[5%] md:flex-col md:justify-start md:space-y-8 md:bg-gradient-to-t md:px-3 md:py-5">
        <TbMenu className="size-8 md:size-10" />
        <TbHome
          onClick={() => navigate("/orctra")}
          className="size-8 cursor-pointer transition hover:text-fogoRed md:size-10"
        />
        <TbCalendarClock
          onClick={() => navigate("/activities")}
          className="size-8 cursor-pointer transition hover:text-fogoRed md:size-10"
        />
        <MdLeaderboard
          onClick={() => navigate("/leaderboard")}
          className="size-8 cursor-pointer transition hover:text-fogoRed md:size-10"
        />
      </div>
      <div className="flex flex-1 flex-col md:w-[95%]">
        <div className="w-full bg-gradient-to-r from-color3 to-color4 px-4 py-3 md:bg-gradient-to-t md:px-6 md:pt-3 md:pb-1">
          <Header />
        </div>
        <div className="flex flex-1 flex-col gap-4 px-3 pb-8 pt-4 md:min-h-[90%] md:flex-row md:items-stretch md:px-6 md:pb-6 md:pt-3">
          <section className="flex flex-1 flex-col">
            <div className="relative min-h-[320px] flex-1 overflow-hidden rounded-3xl border border-black/5 p-3 text-white shadow-[0_30px_60px_-40px_rgba(15,118,255,0.45)] md:min-h-0 md:p-5">
              <DummyChart />
              <CountdownTimer />
            </div>
          </section>
          <div className="flex w-full flex-col md:w-[280px]">
            <div className="min-h-[280px] rounded-3xl border border-black/5 p-4 text-color1 shadow-[0_25px_45px_-40px_rgba(37,40,37,0.55)] md:flex-1 md:overflow-visible md:p-5">
              <Metrics />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
