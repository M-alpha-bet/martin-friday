import { motion } from "motion/react";
import { GoDash } from "react-icons/go";

interface AboutMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutMeModal = ({ isOpen, onClose }: AboutMeModalProps) => {
  if (!isOpen) return null;

  const sections = [
    {
      title: "Philosophy & Character",
      image: "/images/headshot.jpeg",
      text: "A stoic in character and an artist at heart. I'm often found deep in philosophical rabbit holes, trying to figure out why humans exist.",
    },
    {
      title: "Nature & Serenity",
      image: "/images/hiking.jpeg",
      text: "I love things that feel intentional, meaningful, and beautifully imperfect. Nature is where I find that perfect balance of chaos and peace.",
    },
    {
      title: "Chaotic Curiosity",
      image: "/images/beach.jpeg",
      text: "Whether it's hiking through trails or reflecting by the beach, I embrace the Japanese concept of wabi-sabi—the charm of imperfect things.",
    },
    {
      title: "Growth & Discipline",
      image: "/images/gym.jpeg",
      text: "Outside of code, the gym is my sanctuary for discipline. I believe in continuous improvement, both in life and in my craft.",
    },
    {
      title: "You'll Never Walk Alone",
      image: "/images/liverpool.jpeg",
      text: "When I'm not shipping code, I'm probably shouting at my screen supporting Liverpool. Passionate about the game and the community.",
    },
    {
      title: "Favorite Podcast",
      image: "/images/how-to-take-over-the-world.jpeg",
      text: "A huge fan of the 'How to Take Over the World' podcast. I enjoy taking leadership lessons from the most interesting people in history.",
    },
    {
      title: "Chaotic Curiosity",
      image: "/images/image1.jpeg",
      text: "Conspiracies, creativity, and constant learning. If you like deep conversations and chaotic curiosity, we'll get along perfectly.",
    },
  ];

  return (
    <div className="fixed z-40 inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0}
        initial={{ x: -200, y: 50, opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        whileDrag={{ cursor: "grabbing" }}
        style={{ cursor: "grab" }}
        transition={{ duration: 0.2 }}
        className="bg-gray-100 shadow-2xl w-[90vw] md:w-[1000px] border-2 border-gray-900 p-[4px] h-[450px] flex flex-col pointer-events-auto"
      >
        {/* Modal Header */}
        <div className="flex bg-gray-900 justify-between items-center mb-[4px] px-[12px] py-[6px] shrink-0">
          <h2 className="text-body-medium font-semibold text-white">
            About Me - Friday Martin
          </h2>
          <div
            onClick={onClose}
            className="bg-gray-100 border-2 border-gray-900 cursor-pointer hover:bg-gray-300 transition-colors p-0.5"
          >
            <GoDash className="size-5 text-gray-900" />
          </div>
        </div>

        {/* Horizontal Scroll Content */}
        <div className="flex-1 overflow-x-auto no-scrollbar bg-white border-2 border-gray-600">
          <div className="flex h-full min-w-max">
            {/* Introduction Card */}
            <div className="w-[300px] p-4 flex flex-col justify-center border-r-2 border-gray-200 shrink-0">
              <h1 className="text-heading-medium font-pixtech mb-4">
                Hello World
              </h1>

              <div className="flex gap-2 text-xs font-mono text-gray-400">
                <span>.STOIC</span>
                <span>.ARTIST</span>
                <span>.WABI-SABI</span>
              </div>
            </div>

            {/* Iterated Section Cards */}
            {sections.map((section, index) => (
              <div
                key={index}
                className="w-[350px] relative group overflow-hidden border-r-2 border-gray-200 shrink-0"
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-pixtech text-lg mb-2">
                    {section.title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {section.title === "Favorite Podcast" ? (
                      <>
                        A huge fan of the{" "}
                        <a
                          href="https://open.spotify.com/show/1gqvQ7h7BxNSVoQVTnwihr?si=b200165579744487"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-blue-500 transition-colors cursor-pointer"
                        >
                          'How to Take Over the World'
                        </a>{" "}
                        podcast. I enjoy taking leadership lessons from the most
                        interesting people in history.
                      </>
                    ) : (
                      section.text
                    )}
                  </p>
                </div>
                {/* Visual Label for non-hover state */}
                <div className="absolute top-4 left-4 bg-gray-900/80 text-white text-[10px] px-2 py-1 font-mono group-hover:hidden">
                  {section.title.toUpperCase()}
                </div>
              </div>
            ))}

            {/* Final Closing Card */}
            <div className="w-[300px] p-8 flex flex-col justify-center bg-gray-900 text-white shrink-0">
              <h2 className="text-heading font-pixtech mb-4">Let's Connect.</h2>
              <p className="text-gray-300 text-sm mb-6">
                Honestly, that’s how I approach both life and code. Beautifully
                imperfect and intentionally meaningful.
              </p>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-1 flex justify-end items-center px-2 py-0.5">
          <p className="text-[10px] text-gray-500 font-mono tracking-tighter">
            SCROLL HORIZONTALLY TO EXPLORE // [→]
          </p>
        </div>
      </motion.div>
    </div>
  );
};
