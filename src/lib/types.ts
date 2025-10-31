export type Address = string;

export type BetDirection = "LONG" | "SHORT";
export type PredictionDirection = "UP" | "DOWN";
export type SettlementResult = "WIN" | "LOSS" | null;

export interface TradeRecord {
  id: string;
  traderAddress: Address;
  nthGlobalTradeCount: number;
  nthTraderCount: number;
  predictionToken: string;
  targetTradePrice: number;
  predictionDirection: PredictionDirection;
  stakeToken: string;
  stakeAmount: number;
  startTradeTime: number;
  endTradeTime: number;
  settleTradeTime: number | null;
  settlementTradePrice: number | null;
  settlementResult: SettlementResult;
  amountWon: number;
}

export interface TraderStats {
  address: Address;
  globalCount: number;
  totalTimeInTrades: number;
  tradesCount: number;
  wonTradesCount: number;
  predictionTokensCount: number;
  highsTradesCount: number;
  lowsTradesCount: number;
  stakeTokensCount: number;
}

export interface GlobalPredictionTokenDetails {
  tokenMint: string;
  nthGlobalCount: number;
  tradersCount: number;
  tradesCount: number;
  totalInTradesTime: number;
  totalWonCount: number;
  isCurrentlyAllowed: boolean;
}

export interface UserPredictionTokenDetails {
  tokenMint: string;
  traderAddress: Address;
  nthTraderCount: number;
  tradesCount: number;
  totalInTradesTime: number;
  totalWonCount: number;
}

export interface GlobalStakeTokenDetails {
  tokenMint: string;
  nthGlobalCount: number;
  tradersCount: number;
  tradesCount: number;
  totalInTradesTime: number;
  totalWonCount: number;
  totalStakedAmount: number;
  totalWonAmount: number;
  isCurrentlyAllowed: boolean;
}

export interface UserStakeTokenDetails {
  tokenMint: string;
  traderAddress: Address;
  nthTraderCount: number;
  tradesCount: number;
  totalInTradesTime: number;
  totalWonCount: number;
  totalStakedAmount: number;
  totalWonAmount: number;
}

export interface GlobalStats {
  tradersCount: number;
  tradesCount: number;
  wonTradesCount: number;
  totalInTradesTime: number;
  stakeTokensCount: number;
  predictionTokensCount: number;
}

export interface TradingConfig {
  owner: Address;
  feeCollector: Address;
  tradeWinPercent: number;
}

export interface TradingDataSnapshot {
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
}
