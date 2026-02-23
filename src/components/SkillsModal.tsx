import { motion } from "framer-motion";
import { GoDash } from "react-icons/go";

export const SkillsModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  // Get all NFT images from public/NFTs directory
  const nftImages = [
    "1-2.jpeg",
    "316.jpeg",
    "ACCESS-LIVE-3.jpeg",
    "ARISE.jpeg",
    "BANNER-MAIN2.jpeg",
    "NEVER-GIVE-UP-3.jpeg",
    "PARACHUTE-1.jpeg",
    "PIRB.jpeg",
    "SRABON.jpeg",
    "STRIKEBACK-1.jpeg",
    "THE-HEAT-2.jpeg",
    "TIME-TO-LOCK-TF-IN.jpeg",
    "UTILITY2.jpeg",
    "a-dream2.jpeg",
    "aura3.jpeg",
    "breaking-the-limits.jpeg",
    "dabby.jpeg",
    "discord-2.jpeg",
    "discord-3.jpeg",
    "kill-bill3.jpeg",
    "laugh.jpeg",
    "meme-original-3.jpeg",
    "number-11.jpeg",
    "number-8.jpeg",
    "page-2.jpeg",
    "sample-3-2.jpeg",
    "smoke.jpeg",
    "the-beginning2.jpeg",
    "the-flag-1.jpeg",
    "weekend-1.jpeg",
    "worked-so-hard-on-orctra-1.jpeg",
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed z-30 flex items-center justify-center pointer-events-none">
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0}
        initial={{ x: 400, y: 100 }}
        whileDrag={{ cursor: "grabbing" }}
        style={{ cursor: "grab" }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="bg-gray-100 shadow-xl w-[900px] border border-gray-900 p-[4px] h-[400px] flex flex-col pointer-events-auto"
      >
        <div className="flex bg-gray-900 justify-between items-center mb-[4px] px-[10px] py-[4px] shrink-0">
          <h2 className="text-body-medium text-gray-100">
            Our NFT Collections
          </h2>
          <div
            onClick={onClose}
            className="bg-gray-100 text-4xl cursor-pointer hover:bg-gray-200"
          >
            <GoDash className="size-5" />
          </div>
        </div>

        <div className="flex-1 overflow-x-auto pb-6 border-3 border-gray-900">
          <div className="flex gap-6 items-stretch min-w-max px-[4px] h-full">
            {nftImages.map((imageName, index) => (
              <div
                key={index}
                className="flex flex-col max-w-[350px] gap-3 shrink-0 h-full"
              >
                <div
                  className="flex-1 flex items-center justify-center relative overflow-hidden"
                  style={{ minHeight: "280px" }}
                >
                  <img
                    src={`/NFTs/${imageName}`}
                    alt={`NFT ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <button className="bg-gray-900 text-gray-100 hover:bg-gray-700 text-sm w-full font-pixtech py-2 px-4 rounded transition-colors">
                  See Collection
                </button>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
