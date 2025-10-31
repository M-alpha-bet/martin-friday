import { useEffect, useState } from "react";
import { TbAlarmAverage } from "react-icons/tb";
import { useTradingStore } from "../lib/store";

export default function CountdownTimer() {
  // active bets from zustand
  const bets = useTradingStore((s) => s.bets);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const activeBets = bets.filter((b) => !b.resolved);

  const sorted = [...activeBets].sort((a, b) => a.expiry - b.expiry);

  const closest = sorted.slice(0, 3);

  //  count down timer when bets are active
  return (
    <div className="absolute top-[100px] left-1/2 -translate-x-1/2 flex gap-4 z-50">
      {closest.map((bet) => {
        const remaining = Math.max(0, Math.floor((bet.expiry - now) / 1000));

        return (
          <div
            key={bet.id}
            className="px-[10px] py-1 !rounded-3xl flex items-center text-color1 text-sm shadow-md"
          >
            <TbAlarmAverage className="size-[18px] text-[#e25a54] mr-[4px]" />{" "}
            <p>{remaining}s</p>
          </div>
        );
      })}
    </div>
  );
}
