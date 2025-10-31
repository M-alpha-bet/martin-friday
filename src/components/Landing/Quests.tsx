import { FaFire } from "react-icons/fa";

export default function Quests() {
  return (
    <>
      <div id="tasks" className="py-[80px]">
        <div className="px-[260px] text-center">
          <div className="flex justify-between pt-[20px]">
            <div className="w-[400px] text-left">
              <h1 className="text-[20px] font-spaceGrotesk font-semibold">
                ⚒️ Quests of the{" "}
                <span className="warrior-text text-[30px]">Horde</span>
              </h1>
              <div className="pt-[20px] space-y-[10px]">
                <div className="flex justify-between gap-5 items-center">
                  <p>Connect X account (10 points)</p>
                  <button className="btn-task">Connect</button>
                </div>
                <div className="flex justify-between gap-5 items-center">
                  <p>Join discord (20 points)</p>
                  <button className="btn-task">Join</button>
                </div>
                <div className="flex justify-between gap-5 items-center">
                  <p>Invite rebels (3 points)</p>
                  <button className="btn-task">Referral link</button>
                </div>
                <div className="flex justify-between gap-5 items-center">
                  <p>Buy rebelOrcs NFT (200 points)</p>
                  <button className="btn-task">Explore NFTs</button>
                </div>
              </div>
            </div>
            <div className="w-[400px]">
              <p className="text-right pt-[20px]">
                Before the main battle begins, every warrior must prove their
                worth. Earn points, climb ranks, and prepare your armor for the
                coming firestorm of mainnet trading. Each quest you complete
                strengthens your standing in the Horde and moves you closer to
                early rewards when the rebelion begins.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-[60px]">
          <div className="flex justify-between px-[130px] relative">
            {/* Animated wriggly ribbon */}
            <div className="roadmap-ribbon"></div>

            <div className="text-center relative z-20">
              <h2 className="warrior-text font-spaceGrotesk heading-text">
                The Forge
              </h2>
              <p>devnet</p>
            </div>
            <div className="text-center relative z-20">
              <h2 className="text-gray-500 font-spaceGrotesk heading-text">
                The Call of the Horde
              </h2>
              <p className="text-gray-500">testnet</p>
            </div>
            <div className="text-center relative z-20">
              <h2 className="text-gray-500 font-spaceGrotesk heading-text">
                The Fire awakens
              </h2>
              <p className="text-gray-500">mainnet</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[40px] text-center pt-[160px] font-spaceGrotesk font-semibold flex items-center justify-center gap-4">
            Where Fire Meets Fortune{" "}
            <FaFire className="text-[40px] text-fogoRed warrior-text" />
          </h1>

          <p className="text-center px-[260px]">
            Orctra isn’t just a trading platform. It’s an ecosystem forged in
            rebellion — powered by the{" "}
            <a href="https://www.fogo.io/" className="text-fogoRed">
              Fogo blockchain
            </a>
            , guarded by RebelOrcs, and built for those bold enough to enter
            early. Every piece of this ecosystem is designed to reward the
            fearless.
          </p>
          <div className="grid grid-cols-3 pt-[40px] px-[130px]">
            <div className="text-center">
              <img
                src=""
                alt=""
                className="w-[200px] mx-auto h-[200px] rounded-3xl bg-fogoWhite"
              />
              <h2 className="font-spaceGrotesk text-[20px] py-[20px]">
                ⚔️ RebelOrcs NFTs
              </h2>
              <p className="font-semibold text-[12px] px-[30px]">
                Exclusive to liquidity providers. Owning one marks you as a
                founding warrior, unlocking higher yields, early access drops,
                and special on-chain privileges. These aren’t just collectibles
                — they’re <span className="text-fogoRed">badges of honor</span>{" "}
                in the Orctra Horde.
              </p>
            </div>
            <div className="text-center">
              <img
                src=""
                alt=""
                className="w-[200px] mx-auto h-[200px] rounded-3xl bg-fogoWhite"
              />
              <h2 className="font-spaceGrotesk text-[20px] py-[20px]">
                🔥 Fogo Blockchain
              </h2>
              <p className="font-semibold text-[12px] px-[30px]">
                The battlefield where Orctra is born. Early battles will unfold
                on Fogo Testnet, where traders and liquidity providers earn
                points, rewards, and test tokens that carry over when Fogo
                marches to Mainnet glory.
              </p>
            </div>
            <div className="text-center">
              <img
                src=""
                alt=""
                className="w-[200px] mx-auto h-[200px] rounded-3xl bg-fogoWhite"
              />
              <h2 className="font-spaceGrotesk text-[20px] py-[20px]">
                💰 Early Rewards System
              </h2>
              <p className="font-semibold text-[12px] px-[30px]">
                Every <span className="text-fogoRed">quest</span> — connecting
                X, joining Discord, recruiting new warriors, and forging
                liquidity — earns you{" "}
                <span className="text-fogoRed">points</span>. These points will
                convert into real rewards when the mainnet fire ignites.
              </p>
            </div>
          </div>
          <div className="text-center pt-[80px]">
            <p className="font-spaceGrotesk text-[20px]">
              Join the Horde. Forge your name in{" "}
              <span className="warrior-text">FIRE</span>
            </p>
            <button className="btn-link pt-[5px]">
              Orctra Early Access →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
