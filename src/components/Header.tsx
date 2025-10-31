import { useEffect, useState } from "react";
import { TbDots } from "react-icons/tb";
import WalletConnectButton from "./WalletConnectButton";

export default function Header() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timePart = now
        .toLocaleTimeString("en-GB", { hour12: false })
        .split(" ")[0];
      const offset = -now.getTimezoneOffset() / 60;
      const sign = offset >= 0 ? "+" : "-";
      setTimeString(`${timePart} UTC${sign}${Math.abs(offset)}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header-nav-container">
      <header className="text-color1">
        <div className="flex items-center gap-[5px]">
          <h1 className="heading-text font-semibold">DEMO/USDT</h1>
          <TbDots className="size-5 text-green9" />
        </div>
        <p className="md:text-[10px] text-[7px] font-semibold">{timeString}</p>
      </header>
      <WalletConnectButton />
    </div>
  );
}
