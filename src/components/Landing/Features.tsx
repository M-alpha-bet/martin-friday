export default function Features() {
  return (
    <>
      <div>
        <div id="about" className="py-[80px]">
          <div>
            <h1 className="text-center font-spaceGrotesk text-[40px] font-semibold">
              from the Horde comes{" "}
              <span className="text-[70px] warrior-text">Strength</span>
            </h1>
          </div>
          <div className="px-[260px]">
            <p className="text-center">
              RebelOrc was born as a symbol of{" "}
              <span className="text-fogoRed">defiance</span>, a tribe of digital
              warriors owning their power. From that strength, Orctra emerged —
              the financial arm of the horde, turning raw liquidity into
              precision trading. Every Orctra trade is backed by liquidity from
              RebelOrc NFT holders, creating a decentralized ecosystem where
              community and capital collide.
            </p>
          </div>
          <div className="w-full h-[300px] mt-[30px]">
            <img
              src="/images/homeBackground.png"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <div className="py-[80px] w-[500px] mx-auto">
          <div className="bg-fogoWhite h-[60px] rounded-full"></div>
        </div>
        <div className="px-[130px] py-[80px] flex justify-between">
          <div>
            <p className="font-spaceGrotesk text-[40px] font-semibold">
              Trading the <span className="warrior-text">Storm</span>
            </p>
            <p className="pt-[20px] w-[550px]">
              Pick your asset, set your direction, choose your duration, and
              lock in your position. When the timer ends, victory belongs to the
              sharper rebel.
            </p>
            <button className="btn-primary mt-[20px]">Start trading</button>
          </div>
          <div className="flex">
            <img src="" alt="" className="bg-fogoWhite carousel-image-holder" />
            <img src="" alt="" className="carousel-image-holder bg-fogoRed" />
            <img src="" alt="" className="bg-fogoWhite carousel-image-holder" />
          </div>
        </div>
      </div>
    </>
  );
}
