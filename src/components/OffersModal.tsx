import { motion } from "motion/react";
import { GoDash } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

interface OffersModalProps {
  isOpen: boolean;
  onClose: () => void;
  zIndex?: number;
  onFocus?: () => void;
}

export const OffersModal = ({
  isOpen,
  onClose,
  zIndex,
  onFocus,
}: OffersModalProps) => {
  if (!isOpen) return null;

  const offers = [
    {
      title: "Gym Manager AI Workflow",
      description:
        "Complete automation for gym onboarding, daily meal plans, and payment reminders via WhatsApp.",
      setup: "$400",
      retainer: "$20",
      negotiable: true,
      link: "https://wa.me/message/4C7733GADEQLN1",
      isB2B: false,
    },
    {
      title: "Support FAQ Chatbot",
      description:
        "Standalone or integrated chatbot trained on your business data to handle customer queries 24/7.",
      setup: "$250",
      retainer: "$15",
      negotiable: true,
      link: "https://wa.me/message/4C7733GADEQLN1",
      isB2B: false,
    },
    {
      title: "Smart AI Newsletter Writer",
      description:
        "AI-powered newsletter system using your professional email to generate engaging content and drive traffic.",
      setup: "$250",
      retainer: "$15",
      negotiable: true,
      link: "https://wa.me/message/4C7733GADEQLN1",
      isB2B: false,
    },
    {
      title: "Scan2Order for Restaurants",
      description:
        "A comprehensive B2B inventory, menu, and ordering system specifically built for modern restaurants.",
      link: "https://www.scan2order.online/onboard",
      isB2B: true,
    },
  ];

  return (
    <div
      className="fixed inset-0 flex items-center justify-center pointer-events-none"
      style={{ zIndex }}
    >
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0}
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        whileDrag={{ cursor: "grabbing" }}
        style={{ cursor: "grab" }}
        onPointerDown={onFocus}
        transition={{ duration: 0.2 }}
        className="bg-gray-100 shadow-2xl w-[95vw] md:w-[420px] border-2 border-gray-900 p-[4px] flex flex-col pointer-events-auto"
      >
        {/* Modal Header */}
        <div className="flex bg-gray-900 justify-between items-center mb-[4px] px-[12px] py-[6px] shrink-0">
          <h2 className="text-body-medium font-semibold text-white">
            My Offers
          </h2>
          <div
            onClick={onClose}
            className="bg-gray-100 border-2 border-gray-900 cursor-pointer hover:bg-gray-300 transition-colors p-0.5"
          >
            <GoDash className="size-5 text-gray-900" />
          </div>
        </div>

        {/* Content */}
        <div className="bg-white border-2 border-gray-600 p-1 overflow-y-auto max-h-[70vh]">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="border-2 border-gray-100 p-4 flex flex-col hover:border-gray-900 transition-all bg-gray-50 relative group"
              >
                {offer.negotiable && (
                  <div className="absolute top-2 right-2 bg-yellow-400 text-[10px] font-bold px-2 py-0.5 border border-gray-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase">
                    Negotiable
                  </div>
                )}

                <h3 className="font-pixtech text-lg mb-2 pr-12">
                  {offer.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex-1">
                  {offer.description}
                </p>

                {!offer.isB2B ? (
                  <div className="mb-4 space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-gray-500">SETUP FEE:</span>
                      <span className="font-bold text-gray-900">
                        {offer.setup}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-gray-500">MONTHLY RETAINER:</span>
                      <span className="font-bold text-gray-900">
                        {offer.retainer}/mo
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="mb-4 py-2 border-y border-dashed border-gray-300">
                    <p className="text-[10px] font-mono text-center text-gray-500 italic">
                      CHECK PRICING ON WEBSITE
                    </p>
                  </div>
                )}

                <a
                  href={offer.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white py-2 px-4 flex items-center justify-center gap-2 hover:bg-black transition-colors text-sm font-bold"
                >
                  {offer.isB2B ? (
                    <>
                      Onboard Restaurant <MdArrowOutward />
                    </>
                  ) : (
                    <>
                      Get Started <FaWhatsapp />
                    </>
                  )}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-6 p-3 bg-gray-900 text-white text-center">
            <p className="text-xs font-mono tracking-widest uppercase">
              Custom Solutions Available // DM for Inquiries
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
