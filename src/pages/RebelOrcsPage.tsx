import { useEffect, useState } from "react";
import { HiCollection } from "react-icons/hi";
import { PiDiscordLogoFill } from "react-icons/pi";
import { HiMiniGift } from "react-icons/hi2";
import { RiTwitterXFill, RiStockFill } from "react-icons/ri";
import { BsEmojiSmileFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import WalletConnectButton from "../components/WalletConnectButton";

const loadingTexts = [
  "note 1...",
  "note 2...",
  "note 3...",
  "note 4...",
  "note 5...",
  "note 6...",
  "note 7...",
  "note 8...",
];

export default function NFTLandingPage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const img = new Image();
    img.src = "/images/homeBackground.png";
    img.onload = () => setImageLoaded(true);
  }, []);

  useEffect(() => {
    let index = -1;
    const interval = setInterval(() => {
      index++;
      if (index < loadingTexts.length) {
        setCurrentTextIndex(index);
        setProgress(((index + 1) / loadingTexts.length) * 100);
      } else {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const ready = imageLoaded && currentTextIndex === loadingTexts.length - 1;

  if (!ready) {
    return (
      <div className="flex flex-col justify-between h-dvh w-full bg-green9 text-white px-6 py-8">
        <div className="flex flex-col gap-2">
          {loadingTexts.map((text, index) => (
            <p
              key={index}
              className={`md:text-xl text-[16px] font-semibold transition-opacity duration-500 ${
                index <= currentTextIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {text}
            </p>
          ))}
        </div>
        <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden mt-6">
          <div
            className="h-full bg-fogoRed transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="hero-bg relative h-dvh w-full">
      <div className="z-10">
        <div className="flex p-[20px] md:gap-[40px] gap-[30px]">
          <div className="space-y-[30px]">
            <div className="text-center drag-handle">
              <div className="menu-container flex justify-center items-center">
                <BsEmojiSmileFill className="md:size-[30px] size-[18px] text-fogoWhite" />
              </div>
              <p className="menu-text md:pt-[10px] pt-[5px]">Memes</p>
            </div>
            <div className="text-center">
              <div className="menu-container flex justify-center items-center">
                <PiDiscordLogoFill className="md:size-[30px] size-[18px] text-fogoWhite" />
              </div>
              <p className="menu-text md:pt-[10px] pt-[5px]">Discord</p>
            </div>
            <div className="text-center">
              <div className="menu-container flex justify-center items-center">
                <HiMiniGift className="md:size-[30px] size-[18px] text-fogoWhite" />
              </div>
              <p className="menu-text md:pt-[10px] pt-[5px]">Claim</p>
            </div>
            <div className="text-center">
              <div className="menu-container flex justify-center items-center">
                <RiTwitterXFill className="md:size-[30px] size-[18px] text-fogoWhite" />
              </div>
              <p className="menu-text md:pt-[10px] pt-[5px]">Twitter</p>
            </div>
          </div>
          <div className="space-y-[30px]">
            <div className="text-center">
              <div className="menu-container flex justify-center items-center">
                <HiCollection className="md:size-[30px] size-[18px] text-fogoWhite" />
              </div>
              <p className="menu-text md:pt-[10px] pt-[5px]">Gallery</p>
            </div>
            <div className="text-center">
              <div
                onClick={() => navigate("/orctra")}
                className="menu-container flex justify-center items-center cursor-pointer"
              >
                <RiStockFill className="md:size-[30px] size-[18px] text-fogoWhite" />
              </div>
              <p className="menu-text md:pt-[10px] pt-[5px]">Trade</p>
            </div>
          </div>
        </div>
        <div className="w-full absolute bottom-0 h-auto bg-fogoWhite">
          <div className="flex justify-between h-full items-center">
            <div className="bg-color2 md:w-[100px] w-[80px] md:px-[20px] pl-[20px] pr-[10px] py-[10px]">
              <p
                onClick={() => navigate("/binary-trade")}
                className="text-fogoWhite font-semibold tracking-widest cursor-pointer"
              >
                Start
              </p>
            </div>
            <div className="md:px-[20px] pl-[20px] pr-[10px]">
              <WalletConnectButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
