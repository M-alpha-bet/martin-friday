import { useEffect } from "react";
import toast from "react-hot-toast";
import { TbWallet } from "react-icons/tb";
import { useTradingStore } from "../lib/store";
import {
  useAppKit,
  useAppKitAccount,
  useDisconnect,
} from "@reown/appkit/react";

export default function WalletConnectButton() {
  const { balance } = useTradingStore();
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (isConnected && address) {
      toast.success("Wallet connected successfully!", { id: "wallet" });
    }
  }, [isConnected, address]);

  const handleConnect = async () => {
    toast.loading("Connecting wallet...", { id: "wallet" });
    try {
      await open();
    } catch (err) {
      console.error(err);
      toast.error("Wallet connection failed", { id: "wallet" });
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
      toast.success("Wallet disconnected", { id: "wallet" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to disconnect", { id: "wallet" });
    }
  };

  return (
    <div className="border border-[#e25a54] md:rounded-[20px] rounded-[15px] md:px-[15px] px-[10px] py-[3px] ">
      {isConnected && address ? (
        <div
          onClick={handleDisconnect}
          className="text-center justify-center cursor-pointer"
        >
          <p className="font-bold pt-[3px] metrics-text truncate max-w-[120px] leading-[12px]">
            Bal: ${balance}
          </p>
          <p className="text-[9px] font-bold">
            {address.slice(0, 5)}...{address.slice(-5)}
          </p>
        </div>
      ) : (
        <button
          onClick={handleConnect}
          className="flex items-center text-fogoBlack gap-1 cursor-pointer metrics-text md:text-[16px]! text-[9px]!"
        >
          Connect wallet
          <TbWallet className="md:size-[18px] size-[14px] ml-[3px] text-fogoBlack" />
        </button>
      )}
    </div>
  );
}
