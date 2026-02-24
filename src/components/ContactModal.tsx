import { motion } from "motion/react";
import { GoDash } from "react-icons/go";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  zIndex?: number;
  onFocus?: () => void;
}

export const ContactModal = ({
  isOpen,
  onClose,
  zIndex,
  onFocus,
}: ContactModalProps) => {
  if (!isOpen) return null;

  const contactLinks = [
    {
      name: "Email",
      icon: <IoMailOutline className="size-8" />,
      url: "mailto:fridayokeomamartin@gmail.com",
      label: "fridayokeomamartin@gmail.com",
      color: "hover:text-red-500",
    },
    {
      name: "X (Twitter)",
      icon: <FaXTwitter className="size-8" />,
      url: "https://x.com/MartinFriday5",
      label: "@MartinFriday5",
      color: "hover:text-blue-400",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="size-8" />,
      url: "https://wa.me/message/4C7733GADEQLN1",
      label: "Chat on WhatsApp",
      color: "hover:text-green-500",
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
        initial={{ y: 200, opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        whileDrag={{ cursor: "grabbing" }}
        style={{ cursor: "grab" }}
        onPointerDown={onFocus}
        transition={{ duration: 0.2 }}
        className="bg-gray-100 shadow-2xl w-[70vw] md:w-[400px] border-2 border-gray-900 p-[4px] flex flex-col pointer-events-auto"
      >
        {/* Modal Header */}
        <div className="flex bg-gray-900 justify-between items-center mb-[4px] px-[12px] py-[6px] shrink-0">
          <h2 className="text-body-medium font-semibold text-white">
            Get in Touch
          </h2>
          <div
            onClick={onClose}
            className="bg-gray-100 border-2 border-gray-900 cursor-pointer hover:bg-gray-300 transition-colors p-0.5"
          >
            <GoDash className="size-5 text-gray-900" />
          </div>
        </div>

        {/* Content */}
        <div className="bg-white border-2 border-gray-600 p-1">
          <div className="flex flex-col gap-6">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 hover:border-gray-900 transition-all group ${link.color}`}
              >
                <div className="bg-gray-900 text-white p-3 group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                    {link.name}
                  </p>
                  <p className="font-semibold text-gray-900">{link.label}</p>
                </div>
              </a>
            ))}
          </div>

          <h3 className="text-body-medium mt-6 text-center">
            Available for freelance projects, full time roles and collaborations
          </h3>
        </div>
      </motion.div>
    </div>
  );
};
