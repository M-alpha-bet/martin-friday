import { useState } from "react";
import {
  TbAlarmMinusFilled,
  TbArrowBigRightLinesFilled,
  TbCurrencyDollar,
} from "react-icons/tb";
import { useTradingStore } from "../lib/store";
import toast from "react-hot-toast";
import { useAppKitAccount } from "@reown/appkit/react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Metrics() {
  const [betAmount, setBetAmount] = useState(100);
  const [showModal, setShowModal] = useState(false);

  const { isConnected } = useAppKitAccount();

  const {
    expiryTime,
    setExpiryTime,
    placeBet,
    currentPrice,
    resolveBet,
    activeBetId,
    bets,
  } = useTradingStore();

  const profitPercent = 95;
  const profit = (betAmount * profitPercent) / 100;

  // Betting logic
  const bet = async (amount: number, position: "LONG" | "SHORT") => {
    const initialPrice = currentPrice;
    let betId: string;

    if (!isConnected) {
      toast.error("wallet not connected");
      return;
    }

    try {
      betId = placeBet(amount, position);
    } catch (err: any) {
      toast.error(err.message);
      return;
    }

    await toast.promise(
      (async () => {
        await sleep(expiryTime);

        const finalPrice = useTradingStore.getState().currentPrice;
        resolveBet(betId, finalPrice);

        const isWin =
          (position === "LONG" && finalPrice > initialPrice) ||
          (position === "SHORT" && finalPrice < initialPrice);

        if (isWin) {
          return `You WON! Profit: $${(amount * 0.95).toFixed(2)}`;
        } else {
          throw new Error(`You LOST! Stake: $${amount}`);
        }
      })(),
      {
        loading: `${position} for ${
          expiryTime / 1000
        }s at ${initialPrice.toFixed(2)}`,
        success: (msg) => msg,
        error: (err) => err.message,
      },
      { duration: 1500 }
    );
  };

  const handleBet = async (position: "LONG" | "SHORT") => {
    await bet(betAmount, position);
  };

  const activeBet = bets.find((b) => b.id === activeBetId && !b.resolved);
  const isLongActive = activeBet?.direction === "LONG";
  const isShortActive = activeBet?.direction === "SHORT";

  return (
    <>
      <footer className="relative z-20 text-color2 metrics-text">
        <div className="">
          <div className="metrics-container">
            <div className="w-full">
              {/* Timer Select */}
              <div className="bg-color4 mb-4 py-2 rounded-2xl flex md:flex-col items-center">
                <div className="icon-container">
                  <TbAlarmMinusFilled className="size-10 text-fogoBlack" />
                </div>
                <select
                  value={expiryTime}
                  onChange={(e) => setExpiryTime(Number(e.target.value))}
                  className="metrics-input bg-color4 text-[18px] pt-3 text-center px-[10px] outline-none appearance-none"
                >
                  <option value="5000">00:00:05</option>
                  <option value="10000">00:00:10</option>
                  <option value="15000">00:00:15</option>
                  <option value="30000">00:00:30</option>
                </select>
              </div>

              {/* bet amoutn Input */}
              <div
                onClick={() => setShowModal(true)}
                className="bg-color4 mb-4 py-2 rounded-2xl flex md:flex-col items-center"
              >
                <div className="icon-container">
                  <TbCurrencyDollar className="size-10 text-fogoBlack" />
                </div>
                <button className="metrics-input text-[18px] pt-3 text-center px-[10px]">
                  {betAmount}
                </button>
              </div>
            </div>

            {/* profit and loss stat */}
            <div className="flex bg-color4 mb-4 px-[10px] justify-between rounded-2xl items-center h-[45px]">
              <p className="w-1/3">PROFIT</p>
              <p className="w-1/3 text-center text-[#22c55e] text-[15px] font-semibold">
                +{profitPercent}%
              </p>
              <p className="text-right w-1/3">+${profit.toFixed(2)}</p>
            </div>

            <div className="w-full h-[120px] pt-[5px] space-y-4 text-white">
              {/* long trade button */}
              <button
                onClick={() => handleBet("LONG")}
                disabled={!!isShortActive}
                className={`button-container bg-green-500 transition-all justify-center duration-300
            ${isShortActive ? "opacity-70 cursor-not-allowed scale-95" : ""}
            ${isLongActive ? "bg-green-400 shadow-lg scale-100" : ""}
          `}
              >
                <TbArrowBigRightLinesFilled className="rotate-315 size-15 text-green-700" />
                <p className="text-center font-semibold heading-text text-[50px]!">
                  LONG
                </p>
              </button>

              {/* short trade button */}
              <button
                onClick={() => handleBet("SHORT")}
                disabled={!!isLongActive}
                className={`button-container bg-[#e25a54] justify-center transition-all duration-300
            ${isLongActive ? "opacity-70 cursor-not-allowed scale-95" : ""}
            ${isShortActive ? "bg-red-500 shadow-lg scale-100" : ""}
          `}
              >
                <TbArrowBigRightLinesFilled className="rotate-45 size-15 text-red-700" />
                <p className="text-center font-semibold heading-text text-[50px]!">
                  SHORT
                </p>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* modal for betAmount input */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-color4 rounded-xl p-6 w-[350px] shadow-lg">
            <h2 className="text-lg font-bold mb-4">Set Bet Amount</h2>
            <input
              type="number"
              value={betAmount}
              onChange={(e) => setBetAmount(Number(e.target.value))}
              className="w-full p-2 basic-border rounded-md text-black"
            />
            <div className="flex justify-end mt-4 gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg border border-color2"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg border border-color3"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
