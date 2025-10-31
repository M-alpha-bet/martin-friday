import { FaFire, FaTelegram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { PiDiscordLogoFill } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="py-[20px] px-[130px] border-t border-gray-700">
      <div className="text-center">
        {/* Header */}
        <div className="mb-[20px]">
          <h2 className="text-[24px] font-spaceGrotesk font-semibold flex items-center justify-center gap-2">
            <FaFire className="text-fogoRed warrior-text" />
            <span className="warrior-text">Orctra</span> — Forged in Fire, Built
            for Warriors
          </h2>
        </div>

        {/* Navigation Links */}
        <div className="mb-[30px]">
          <nav className="flex justify-center gap-8 text-[16px] font-spaceGrotesk">
            <a href="#about" className="btn-nav">
              About
            </a>
            <a href="https://fogo.io/" className="btn-nav">
              Ecosystem
            </a>
            <a href="#tasks" className="btn-nav">
              Tasks & Rewards
            </a>
            <a href="/trade" className="btn-nav">
              Trade
            </a>
            <a href="#" className="btn-nav">
              NFTS
            </a>
          </nav>
        </div>

        {/* Social Links */}
        <div className="mb-[30px]">
          <p className="text-[14px] font-spaceGrotesk mb-[15px]">Socials:</p>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="flex items-center gap-2 hover:text-fogoRed transition-colors cursor-pointer"
            >
              <RiTwitterXFill className="size-5" />
              <span className="text-[14px]">X (Twitter)</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-fogoRed transition-colors cursor-pointer"
            >
              <PiDiscordLogoFill className="size-5" />
              <span className="text-[14px]">Discord</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-fogoRed transition-colors cursor-pointer"
            >
              <FaTelegram className="size-5" />
              <span className="text-[14px]">Telegram</span>
            </a>
          </div>
        </div>

        {/* Powered By */}
        <div className="mb-[20px] space-y-2">
          <p className="text-[14px] font-spaceGrotesk flex items-center justify-center gap-2">
            Built on <FaFire className="text-fogoRed" />
            <a
              href="https://www.fogo.io/"
              className="text-fogoRed hover:underline"
            >
              Fogo Blockchain
            </a>
          </p>
          <p className="text-[14px] font-spaceGrotesk flex items-center justify-center gap-2">
            Powered by <span className="warrior-text">RebelOrcs</span> ⚔️
          </p>
        </div>

        {/* Copyright */}
        <div className="text-[12px] text-gray-400 font-spaceGrotesk">
          © 2025 Orctra. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
