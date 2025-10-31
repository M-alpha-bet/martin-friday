import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <>
      <div className="py-[80px] lg:min-h-[90%]">
        <div className="font-spaceGrotesk px-[260px]">
          <div className="flex items-center">
            <h1 className="hero-heading">trade</h1>
            <div className="h-[80px] w-[280px] mt-[30px] ml-[40px] bg-fogoWhite rounded-full"></div>
          </div>
          <div className="flex justify-center">
            <div className="h-[80px] w-[180px] mt-[30px] mr-[40px] bg-fogoWhite rounded-full"></div>
            <h1 className="text-center hero-heading">like a</h1>
          </div>
          <div className="flex justify-between">
            <div className="max-w-[400px] pt-[80px] font-spectral">
              <p>
                Orctra is the binary options trading platform forged in the
                fires of the Fogo Blockchain — built for traders who crave
                control, speed, and power.
              </p>
              <button
                onClick={() => navigate("/binary-trade")}
                className="btn-primary mt-[20px]"
              >
                Start Trading
              </button>
            </div>
            <div className="flex">
              <h1 className="text-end hero-heading warrior-text">Rebel</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-[260px] justify-between py-[80px]">
        <div className="pt-[80px] max-w-[500px]">
          <p>
            Welcome to Orctra — the trading hand of RebelOrc. Born from a vision
            of trader freedom, Orctra transforms how binary options work —
            combining the speed of the Fogo blockchain with the strength of the
            RebelOrc NFT community
          </p>
          <button className="btn-secondary pt-[20px]">explore NFTs</button>
        </div>

        <div>
          <img src="" alt="" className="w-[300px] h-[400px] -rotate-[15deg]" />
        </div>
      </div>
    </>
  );
}
