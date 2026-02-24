import { motion } from "motion/react";
import { GoDash } from "react-icons/go";
import { MdOutlineFileDownload } from "react-icons/md";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  zIndex?: number;
  onFocus?: () => void;
}

export const CvModal = ({ isOpen, onClose, zIndex, onFocus }: CvModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center pointer-events-none"
      style={{ zIndex }}
    >
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0}
        initial={{ x: 200, y: 100, opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        whileDrag={{ cursor: "grabbing" }}
        style={{ cursor: "grab" }}
        onPointerDown={onFocus}
        transition={{ duration: 0.2 }}
        className="bg-gray-100 shadow-2xl w-[650px] max-w-[95vw] border-2 border-gray-900 p-[4px] h-[75vh] flex flex-col pointer-events-auto"
      >
        {/* Modal Header */}
        <div className="flex bg-gray-900 justify-between items-center mb-[4px] px-[12px] py-[6px] shrink-0">
          <div className="flex items-center gap-2">
            <h2 className="text-body-medium font-semibold text-white">
              Martin's CV.pdf
            </h2>
          </div>
          <div
            onClick={onClose}
            className="bg-gray-100 border-2 border-gray-900 cursor-pointer hover:bg-gray-300 transition-colors p-0.5"
          >
            <GoDash className="size-5 text-gray-900" />
          </div>
        </div>

        {/* PDF Viewer Container */}
        <div className="flex-1 bg-white border-2 border-gray-600 overflow-hidden relative group">
          <iframe
            src="/cv/Martin's CV.pdf#toolbar=0"
            className="w-full h-full border-none"
            title="CV Viewer"
          />
          {/* Subtle overlay for scrollable hint if needed, but iframe handles it */}
        </div>

        {/* Modal Footer / Action Bar */}
        <div className="p-2 bg-gray-200 border-t-2 border-gray-900 flex justify-end items-center shrink-0">
          <a
            href="/cv/Martin's CV.pdf"
            download="Friday_Martin_CV.pdf"
            className="bg-gray-900 text-gray-100 hover:bg-black text-sm font-pixtech py-2 px-10 border-b-2 border-r-2 border-gray-700 active:border-0 active:translate-y-1 active:translate-x-1 transition-all flex items-center gap-2"
          >
            <MdOutlineFileDownload className="inline-flex size-6 pb-1" />
            Download PDF
          </a>
        </div>
      </motion.div>
    </div>
  );
};
