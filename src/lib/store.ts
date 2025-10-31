import { create } from "zustand";
import type {
  Address,
  BetDirection,
  GlobalPredictionTokenDetails,
  GlobalStakeTokenDetails,
  GlobalStats,
  TradeRecord,
  TraderStats,
  TradingConfig,
  TradingDataSnapshot,
  UserPredictionTokenDetails,
  UserStakeTokenDetails,
} from "./types";
export type { TradingConfig, TradingDataSnapshot } from "./types";

type Bet = {
  id: string;
  amount: number;
  entryPrice: number;
  expiry: number;
  direction: BetDirection;
  resolved?: boolean;
  won?: boolean;
};

const traderA: Address = "So1Trader1111111111111111111111111111111";
const traderB: Address = "So1Trader2222222222222222222222222222222";
const SOL_USDC = "SOL/USDC";
const BONK_USDC = "BONK/USDC";
const USDC = "USDC";

const now = Date.now();
const fiveMinutes = 5 * 60 * 1000;

const mockTrades: TradeRecord[] = [
  {
    id: "trade-1",
    traderAddress: traderA,
    nthGlobalTradeCount: 128,
    nthTraderCount: 42,
    predictionToken: SOL_USDC,
    targetTradePrice: 157.34,
    predictionDirection: "UP",
    stakeToken: USDC,
    stakeAmount: 250,
    startTradeTime: now - fiveMinutes * 6,
    endTradeTime: now - fiveMinutes * 5,
    settleTradeTime: now - fiveMinutes * 5 + 30_000,
    settlementTradePrice: 160.12,
    settlementResult: "WIN",
    amountWon: 487.5,
  },
  {
    id: "trade-2",
    traderAddress: traderB,
    nthGlobalTradeCount: 129,
    nthTraderCount: 9,
    predictionToken: BONK_USDC,
    targetTradePrice: 0.000017,
    predictionDirection: "DOWN",
    stakeToken: USDC,
    stakeAmount: 100,
    startTradeTime: now - fiveMinutes * 2,
    endTradeTime: now - fiveMinutes,
    settleTradeTime: null,
    settlementTradePrice: null,
    settlementResult: null,
    amountWon: 0,
  },
];

const createEmptyTraderStats = (address: Address): TraderStats => ({
  address,
  globalCount: 0,
  totalTimeInTrades: 0,
  tradesCount: 0,
  wonTradesCount: 0,
  predictionTokensCount: 0,
  highsTradesCount: 0,
  lowsTradesCount: 0,
  stakeTokensCount: 0,
});

const initialMockTradingData: TradingDataSnapshot = {
  trades: mockTrades,
  traders: {
    [traderA]: {
      address: traderA,
      globalCount: 94,
      totalTimeInTrades: fiveMinutes * 40,
      tradesCount: 58,
      wonTradesCount: 41,
      predictionTokensCount: 3,
      highsTradesCount: 33,
      lowsTradesCount: 25,
      stakeTokensCount: 2,
    },
    [traderB]: {
      address: traderB,
      globalCount: 21,
      totalTimeInTrades: fiveMinutes * 12,
      tradesCount: 18,
      wonTradesCount: 7,
      predictionTokensCount: 2,
      highsTradesCount: 9,
      lowsTradesCount: 9,
      stakeTokensCount: 1,
    },
  },
  globalPredictionTokens: {
    [SOL_USDC]: {
      tokenMint: SOL_USDC,
      nthGlobalCount: 63,
      tradersCount: 142,
      tradesCount: 328,
      totalInTradesTime: fiveMinutes * 1_250,
      totalWonCount: 189,
      isCurrentlyAllowed: true,
    },
    [BONK_USDC]: {
      tokenMint: BONK_USDC,
      nthGlobalCount: 12,
      tradersCount: 54,
      tradesCount: 120,
      totalInTradesTime: fiveMinutes * 420,
      totalWonCount: 45,
      isCurrentlyAllowed: true,
    },
  },
  userPredictionTokens: {
    [traderA]: {
      [SOL_USDC]: {
        tokenMint: SOL_USDC,
        traderAddress: traderA,
        nthTraderCount: 17,
        tradesCount: 26,
        totalInTradesTime: fiveMinutes * 140,
        totalWonCount: 19,
      },
    },
    [traderB]: {
      [BONK_USDC]: {
        tokenMint: BONK_USDC,
        traderAddress: traderB,
        nthTraderCount: 5,
        tradesCount: 9,
        totalInTradesTime: fiveMinutes * 45,
        totalWonCount: 3,
      },
    },
  },
  globalStakeTokens: {
    [USDC]: {
      tokenMint: USDC,
      nthGlobalCount: 77,
      tradersCount: 210,
      tradesCount: 448,
      totalInTradesTime: fiveMinutes * 1_600,
      totalWonCount: 230,
      totalStakedAmount: 128_500,
      totalWonAmount: 115_380,
      isCurrentlyAllowed: true,
    },
  },
  userStakeTokens: {
    [traderA]: {
      [USDC]: {
        tokenMint: USDC,
        traderAddress: traderA,
        nthTraderCount: 23,
        tradesCount: 34,
        totalInTradesTime: fiveMinutes * 160,
        totalWonCount: 22,
        totalStakedAmount: 12_400,
        totalWonAmount: 10_800,
      },
    },
    [traderB]: {
      [USDC]: {
        tokenMint: USDC,
        traderAddress: traderB,
        nthTraderCount: 7,
        tradesCount: 12,
        totalInTradesTime: fiveMinutes * 60,
        totalWonCount: 4,
        totalStakedAmount: 3_200,
        totalWonAmount: 2_150,
      },
    },
  },
  globalStats: {
    tradersCount: 412,
    tradesCount: 1_208,
    wonTradesCount: 675,
    totalInTradesTime: fiveMinutes * 3_200,
    stakeTokensCount: 6,
    predictionTokensCount: 12,
  },
  config: {
    owner: "So1Owner111111111111111111111111111111111",
    feeCollector: "So1FeeCollector111111111111111111111111",
    tradeWinPercent: 9500,
  },
};

type TradingState = {
  bets: Bet[];
  currentPrice: number;
  expiryTime: number;
  activeBetId: string | null;
  balance: number;

  trades: TradeRecord[];
  traders: Record<Address, TraderStats>;
  globalPredictionTokens: Record<string, GlobalPredictionTokenDetails>;
  userPredictionTokens: Record<
    Address,
    Record<string, UserPredictionTokenDetails>
  >;
  globalStakeTokens: Record<string, GlobalStakeTokenDetails>;
  userStakeTokens: Record<Address, Record<string, UserStakeTokenDetails>>;
  globalStats: GlobalStats;
  config: TradingConfig;

  setExpiryTime: (time: number) => void;
  setCurrentPrice: (price: number) => void;
  placeBet: (amount: number, direction: BetDirection) => string;
  resolveBet: (id: string, finalPrice: number) => void;

  hydrateTradingData: (snapshot: TradingDataSnapshot) => void;
  upsertTradeRecord: (trade: TradeRecord) => void;
  updateTraderSnapshot: (
    address: Address,
    updater: (current: TraderStats) => TraderStats
  ) => void;
  updateGlobalStats: (stats: Partial<GlobalStats>) => void;
  updateConfig: (config: Partial<TradingConfig>) => void;
  togglePredictionTokenAllowance: (
    tokenMint: string,
    isAllowed: boolean
  ) => void;
  toggleStakeTokenAllowance: (tokenMint: string, isAllowed: boolean) => void;
};

export const initialTradingSnapshot = initialMockTradingData;

export const useTradingStore = create<TradingState>((set, get) => ({
  bets: [],
  currentPrice: 100,
  expiryTime: 10_000,
  activeBetId: null,
  balance: 10_000,

  trades: initialMockTradingData.trades,
  traders: initialMockTradingData.traders,
  globalPredictionTokens: initialMockTradingData.globalPredictionTokens,
  userPredictionTokens: initialMockTradingData.userPredictionTokens,
  globalStakeTokens: initialMockTradingData.globalStakeTokens,
  userStakeTokens: initialMockTradingData.userStakeTokens,
  globalStats: initialMockTradingData.globalStats,
  config: initialMockTradingData.config,

  setExpiryTime: (time) => set({ expiryTime: time }),
  setCurrentPrice: (price) => set({ currentPrice: price }),

  placeBet: (amount, direction) => {
    const { currentPrice, expiryTime, bets, balance } = get();
    if (balance < amount) throw new Error("Insufficient balance");

    const newBet: Bet = {
      id: Date.now().toString(),
      amount,
      entryPrice: currentPrice,
      expiry: Date.now() + expiryTime,
      direction,
      resolved: false,
    };

    set({
      bets: [...bets, newBet],
      activeBetId: newBet.id,
      balance: balance - amount,
    });

    return newBet.id;
  },

  resolveBet: (id, finalPrice) =>
    set((state) => {
      let nextBalance = state.balance;
      const updated = state.bets.map((bet) => {
        if (bet.id !== id) return bet;
        const won =
          (bet.direction === "LONG" && finalPrice > bet.entryPrice) ||
          (bet.direction === "SHORT" && finalPrice < bet.entryPrice);

        if (won) {
          nextBalance += bet.amount + bet.amount * 0.95;
        }

        return { ...bet, resolved: true, won };
      });

      return {
        bets: updated,
        activeBetId: state.activeBetId === id ? null : state.activeBetId,
        balance: nextBalance,
      };
    }),

  hydrateTradingData: (snapshot) =>
    set((state) => ({
      ...state,
      trades: snapshot.trades,
      traders: snapshot.traders,
      globalPredictionTokens: snapshot.globalPredictionTokens,
      userPredictionTokens: snapshot.userPredictionTokens,
      globalStakeTokens: snapshot.globalStakeTokens,
      userStakeTokens: snapshot.userStakeTokens,
      globalStats: snapshot.globalStats,
      config: snapshot.config,
    })),

  upsertTradeRecord: (trade) =>
    set((state) => {
      const tradeIndex = state.trades.findIndex((item) => item.id === trade.id);
      const trades =
        tradeIndex >= 0
          ? state.trades.map((item) => (item.id === trade.id ? trade : item))
          : [trade, ...state.trades];
      return { trades };
    }),

  updateTraderSnapshot: (address, updater) =>
    set((state) => {
      const current = state.traders[address] ?? createEmptyTraderStats(address);
      return {
        traders: {
          ...state.traders,
          [address]: updater(current),
        },
      };
    }),

  updateGlobalStats: (stats) =>
    set((state) => ({
      globalStats: {
        ...state.globalStats,
        ...stats,
      },
    })),

  updateConfig: (config) =>
    set((state) => ({
      config: {
        ...state.config,
        ...config,
      },
    })),

  togglePredictionTokenAllowance: (tokenMint, isAllowed) =>
    set((state) => {
      const existing = state.globalPredictionTokens[tokenMint];
      if (!existing) return state;
      return {
        globalPredictionTokens: {
          ...state.globalPredictionTokens,
          [tokenMint]: {
            ...existing,
            isCurrentlyAllowed: isAllowed,
          },
        },
      };
    }),

  toggleStakeTokenAllowance: (tokenMint, isAllowed) =>
    set((state) => {
      const existing = state.globalStakeTokens[tokenMint];
      if (!existing) return state;
      return {
        globalStakeTokens: {
          ...state.globalStakeTokens,
          [tokenMint]: {
            ...existing,
            isCurrentlyAllowed: isAllowed,
          },
        },
      };
    }),
}));
