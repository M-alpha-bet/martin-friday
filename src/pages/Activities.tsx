import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Landing/Navbar";
import { useTheme } from "../lib/ThemeContext";
import type { TradeRecord } from "../lib/types";
import { initialTradingSnapshot } from "../lib/store";

const DB_NAME = "orctra-trades";
const DB_VERSION = 1;
const STORE_NAME = "activities";

async function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getAllTrades(db: IDBDatabase): Promise<TradeRecord[]> {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => resolve(request.result as TradeRecord[]);
    request.onerror = () => reject(request.error);
  });
}

async function putTrades(
  db: IDBDatabase,
  trades: TradeRecord[]
): Promise<void> {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);

    trades.forEach((trade) => store.put(trade));

    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
}

async function addTrade(db: IDBDatabase, trade: TradeRecord): Promise<void> {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);

    const request = store.put(trade);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

const demoTrades = initialTradingSnapshot.trades;

function createRandomTrade(): TradeRecord {
  const baseId = crypto.randomUUID();
  const directions: TradeRecord["predictionDirection"][] = ["UP", "DOWN"];
  const tokens = ["SOL/USDC", "BONK/USDC", "ETH/USDC"];
  const stake = [50, 75, 100, 200][Math.floor(Math.random() * 4)];
  const direction = directions[Math.floor(Math.random() * directions.length)];
  const token = tokens[Math.floor(Math.random() * tokens.length)];
  const entryTimestamp = Date.now() - Math.floor(Math.random() * 30_000);
  const settleTimestamp = entryTimestamp + 60_000;
  const settlementResult = Math.random() > 0.45 ? "WIN" : "LOSS";
  const amountWon = settlementResult === "WIN" ? stake * 1.95 : 0;

  return {
    id: baseId,
    traderAddress: "DemoWallet" + baseId.slice(0, 4),
    nthGlobalTradeCount: Math.floor(Math.random() * 500) + 100,
    nthTraderCount: Math.floor(Math.random() * 60) + 1,
    predictionToken: token,
    targetTradePrice: Number((Math.random() * 200 + 20).toFixed(2)),
    predictionDirection: direction,
    stakeToken: "USDC",
    stakeAmount: stake,
    startTradeTime: entryTimestamp,
    endTradeTime: entryTimestamp + 30_000,
    settleTradeTime: settleTimestamp,
    settlementTradePrice: Number((Math.random() * 200 + 20).toFixed(2)),
    settlementResult,
    amountWon,
  };
}

export default function Activities() {
  const [trades, setTrades] = useState<TradeRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const pageClasses = isDark
    ? "bg-fogoBlack text-fogoWhite"
    : "bg-fogoWhite text-fogoBlack";
  const accentText = isDark ? "text-fogoWhite/70" : "text-gray-700";
  const cardBorder = isDark
    ? "border-white/10 bg-fogoBlack/70"
    : "border-black/5 bg-white";
  const statValueTone = isDark ? "text-fogoWhite" : "text-slate-900";
  const statLabelTone = isDark ? "text-fogoWhite/60" : "text-gray-700";
  const primaryButton = isDark
    ? "bg-fogoWhite text-fogoBlack hover:bg-fogoWhite/90"
    : "bg-fogoBlack text-fogoWhite hover:bg-fogoBlack/80";
  const secondaryButton = isDark
    ? "border-fogoWhite text-fogoWhite hover:bg-fogoWhite/10"
    : "border-color3 text-gray-700 hover:bg-color3/10";
  const tableHeadClasses = isDark
    ? "bg-fogoWhite text-fogoBlack"
    : "bg-slate-900 text-white";
  const tableWrapper = isDark
    ? "border-white/10 bg-fogoBlack/70"
    : "border-black/5";
  const tableRowDivider = isDark ? "divide-white/10" : "divide-black/5";
  const resultWin = isDark ? "text-emerald-400" : "text-emerald-600";
  const resultLoss = isDark ? "text-rose-400" : "text-rose-500";
  const errorStyles = isDark
    ? "border-rose-400/40 bg-rose-400/10 text-rose-200"
    : "border-red-200 bg-red-50 text-red-700";

  useEffect(() => {
    let dbRef: IDBDatabase | null = null;
    let cancelled = false;

    async function hydrateFromIndexedDb() {
      try {
        const db = await openDatabase();
        dbRef = db;

        let existing = await getAllTrades(db);
        if (existing.length === 0) {
          await putTrades(db, demoTrades);
          existing = await getAllTrades(db);
        }

        if (!cancelled) {
          setTrades(existing);
          setLoading(false);
        }
      } catch (dbError) {
        if (!cancelled) {
          setError(
            dbError instanceof Error ? dbError.message : String(dbError)
          );
          setLoading(false);
        }
      }
    }

    hydrateFromIndexedDb();

    return () => {
      cancelled = true;
      dbRef?.close();
    };
  }, []);

  const totalVolume = useMemo(
    () => trades.reduce((sum, trade) => sum + trade.stakeAmount, 0),
    [trades]
  );

  const wins = useMemo(
    () => trades.filter((trade) => trade.settlementResult === "WIN").length,
    [trades]
  );

  const handleLogDemoTrade = async () => {
    try {
      const db = await openDatabase();
      const trade = createRandomTrade();
      await addTrade(db, trade);
      setTrades((current) => [trade, ...current]);
      db.close();
    } catch (dbError) {
      setError(dbError instanceof Error ? dbError.message : String(dbError));
    }
  };

  const handleReset = async () => {
    try {
      const db = await openDatabase();
      const transaction = db.transaction(STORE_NAME, "readwrite");
      transaction.objectStore(STORE_NAME).clear();
      await putTrades(db, demoTrades);
      const refreshed = await getAllTrades(db);
      setTrades(refreshed);
      setError(null);
      db.close();
    } catch (dbError) {
      setError(dbError instanceof Error ? dbError.message : String(dbError));
    }
  };

  return (
    <div
      className={`${pageClasses} min-h-screen transition-colors duration-300`}
    >
      <Navbar />
      <div className="mx-auto max-w-5xl space-y-8 px-4 pb-16 pt-12 md:px-10">
        <header className="space-y-3">
          <p className={`text-sm uppercase tracking-[0.4em] ${accentText}`}>
            Recent Trading Activity
          </p>
          <h1 className="text-3xl font-semibold md:text-4xl">User Activity</h1>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <div className={`rounded-2xl border p-5 shadow-sm ${cardBorder}`}>
            <p className={`text-xs uppercase tracking-wider ${statLabelTone}`}>
              Total Trades
            </p>
            <p className={`mt-2 text-2xl font-semibold ${statValueTone}`}>
              {loading ? "--" : trades.length}
            </p>
          </div>
          <div className={`rounded-2xl border p-5 shadow-sm ${cardBorder}`}>
            <p className={`text-xs uppercase tracking-wider ${statLabelTone}`}>
              Wins (Demo)
            </p>
            <p
              className={`mt-2 text-2xl font-semibold ${
                isDark ? "text-emerald-400" : "text-emerald-600"
              }`}
            >
              {loading ? "--" : wins}
            </p>
          </div>
          <div className={`rounded-2xl border p-5 shadow-sm ${cardBorder}`}>
            <p className={`text-xs uppercase tracking-wider ${statLabelTone}`}>
              Volume (USDC)
            </p>
            <p className={`mt-2 text-2xl font-semibold ${statValueTone}`}>
              {loading ? "--" : totalVolume.toLocaleString()}
            </p>
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleLogDemoTrade}
            className={`rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition hover:opacity-90 ${primaryButton}`}
          >
            Log random trade
          </button>
          <button
            type="button"
            onClick={handleReset}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${secondaryButton}`}
          >
            Reset data
          </button>
        </div>

        {error && (
          <div className={`rounded-2xl border p-4 text-sm ${errorStyles}`}>
            {error}
          </div>
        )}

        <div
          className={`overflow-hidden rounded-3xl border shadow-[0_25px_45px_-40px_rgba(31,41,55,0.25)] ${tableWrapper}`}
        >
          <table className={`min-w-full divide-y ${tableRowDivider}`}>
            <thead className={tableHeadClasses}>
              <tr className="text-left text-xs uppercase tracking-wide md:text-sm">
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Trader</th>
                <th className="px-4 py-3">Pair</th>
                <th className="px-4 py-3">Direction</th>
                <th className="px-4 py-3">Stake</th>
                <th className="px-4 py-3">Result</th>
                <th className="px-4 py-3">Amount Won</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 ">
              {loading ? (
                <tr>
                  <td
                    colSpan={7}
                    className={`px-4 py-6 text-center text-sm ${
                      isDark ? "text-fogoWhite/60" : "text-slate-500"
                    }`}
                  >
                    Loading trades from IndexedDB...
                  </td>
                </tr>
              ) : trades.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className={`px-4 py-6 text-center text-sm ${
                      isDark ? "text-fogoWhite/60" : "text-slate-500"
                    }`}
                  >
                    No trades logged yet. Use the button above to add a demo
                    trade.
                  </td>
                </tr>
              ) : (
                trades.map((trade) => (
                  <tr
                    key={trade.id}
                    className={`text-sm md:text-base ${
                      isDark ? "border-white/10" : "border-black/5"
                    }`}
                  >
                    <td
                      className={`px-4 py-3 font-mono text-xs md:text-sm ${
                        isDark ? "text-fogoWhite/50" : "text-slate-500"
                      }`}
                    >
                      {trade.id.slice(0, 8)}
                    </td>
                    <td
                      className={`px-4 py-3 ${
                        isDark ? "text-fogoWhite" : "text-slate-700"
                      }`}
                    >
                      {trade.traderAddress}
                    </td>
                    <td
                      className={`px-4 py-3 ${
                        isDark ? "text-fogoWhite/70" : "text-slate-600"
                      }`}
                    >
                      {trade.predictionToken}
                    </td>
                    <td
                      className={`px-4 py-3 ${
                        isDark ? "text-fogoWhite/70" : "text-slate-600"
                      }`}
                    >
                      {trade.predictionDirection}
                    </td>
                    <td
                      className={`px-4 py-3 ${
                        isDark ? "text-fogoWhite/70" : "text-slate-600"
                      }`}
                    >
                      {trade.stakeAmount.toLocaleString()} {trade.stakeToken}
                    </td>
                    <td
                      className={`px-4 py-3 font-semibold ${
                        trade.settlementResult === "WIN"
                          ? resultWin
                          : resultLoss
                      }`}
                    >
                      {trade.settlementResult ?? "PENDING"}
                    </td>
                    <td
                      className={`px-4 py-3 ${
                        isDark ? "text-fogoWhite/70" : "text-slate-600"
                      }`}
                    >
                      {trade.amountWon.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 0,
                      })}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
