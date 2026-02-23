import { motion } from "motion/react";
import { GoDash } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectsModal = ({ isOpen, onClose }: ProjectsModalProps) => {
  if (!isOpen) return null;

  const projects = [
    {
      title: "Rox mart",
      image: "/images/projects/roxmart.png",
      description:
        "Rox Tech Mart is an online ecommerce store focused on making smart electronics and lifestyle gadgets easy to shop for and enjoy.",
      link: "https://roxtechmart.com",
    },
    {
      title: "Teemo AI",
      image: "/images/projects/teemoai.png",
      description:
        "Teemo AI helps job seekers automate the application process so they can focus on interview preparation and securing offers.",
      link: "https://teemo.ai",
    },
    {
      title: "Scan2order",
      image: "/images/projects/scan2order.png",
      description:
        "Scan2Order is a B2B inventory, menu and ordering systems for restaurants, eliminating waiting times, reduce errors, and increase revenue.",
      link: "https://scan2order.online",
    },
    {
      title: "Tarsleh books",
      image: "/images/projects/tarslehbooks.png",
      description:
        "Tarsleh books is a personal book website for Mr Paul Tarsleh's books which are faith rooted christian books.",
      link: "https://tarslehbooks.com", // Assumed link based on context, update if needed
    },
  ];

  return (
    <div className="fixed z-40 inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        whileDrag={{ cursor: "grabbing" }}
        style={{ cursor: "grab" }}
        transition={{ duration: 0.2 }}
        className="bg-gray-100 shadow-2xl w-[95vw] md:w-[900px] border-2 border-gray-900 p-[4px] h-auto flex flex-col pointer-events-auto"
      >
        {/* Modal Header */}
        <div className="flex bg-gray-900 justify-between items-center mb-[4px] px-[12px] py-[6px] shrink-0">
          <h2 className="text-body-medium font-semibold text-white">
            My Projects
          </h2>
          <div
            onClick={onClose}
            className="bg-gray-100 border-2 border-gray-900 cursor-pointer hover:bg-gray-300 transition-colors p-0.5"
          >
            <GoDash className="size-5 text-gray-900" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-x-auto no-scrollbar bg-white border-2 border-gray-600">
          <div className="flex h-full min-w-max p-1 gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-[350px] flex flex-col border border-gray-200 bg-gray-50 hover:border-gray-900 transition-all shrink-0"
              >
                <div className="h-[250px] overflow-hidden border-b-2 border-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:grayscale-50 transition-all duration-500"
                  />
                </div>
                <div className="px-3 pt-2 flex flex-col">
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:translate-x-1 transition-transform group"
                  >
                    Visit {project.title}
                    <MdArrowOutward className="group-hover:rotate-45 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-1 flex justify-end items-center px-2 py-0.5">
          <p className="text-[10px] text-gray-500 font-mono">
            SOME OF MY WORK // SCROLL HORIZONTALLY
          </p>
        </div>
      </motion.div>
    </div>
  );
};
