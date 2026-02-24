import { useState } from "react";
import { motion } from "motion/react";
import { GoDash } from "react-icons/go";
import { CvModal } from "../components/CvModal";
import { AboutMeModal } from "../components/AboutMe";
import { ContactModal } from "../components/ContactModal";
import { ProjectsModal } from "../components/ProjectsModal";
import { OffersModal } from "../components/OffersModal";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  // const [isSkillsModal, setIsSkillsModal] = useState(false);
  const [isCvModal, setIsCvModal] = useState(false);
  const [isAboutModal, setIsAboutModal] = useState(false);
  const [isContactModal, setIsContactModal] = useState(false);
  const [isProjectsModal, setIsProjectsModal] = useState(false);
  const [isOffersModal, setIsOffersModal] = useState(false);

  const [zIndices, setZIndices] = useState({
    cv: 40,
    about: 40,
    contact: 40,
    projects: 40,
    offers: 40,
    welcome: 10,
  });

  const [maxZ, setMaxZ] = useState(50);

  const bringToFront = (modalKey: keyof typeof zIndices) => {
    const nextZ = maxZ + 1;
    setMaxZ(nextZ);
    setZIndices((prev) => ({ ...prev, [modalKey]: nextZ }));
  };

  const toggleModal = (
    modalKey: keyof typeof zIndices,
    setter: (val: boolean) => void,
    currentVal: boolean,
  ) => {
    if (!currentVal) {
      bringToFront(modalKey);
    }
    setter(!currentVal);
  };

  return (
    <div>
      {isModalOpen && (
        <motion.div
          className="fixed bg-gray-100 border border-gray-600 shadow-lg z-10 p-1 w-[600px] min-w-[384px]"
          drag
          dragMomentum={false}
          dragElastic={0}
          initial={{ x: 100, y: 20 }}
          whileDrag={{ cursor: "grabbing" }}
          style={{ cursor: "grab", zIndex: zIndices.welcome }}
          onPointerDown={() => bringToFront("welcome")}
        >
          <div className="flex bg-gray-900 justify-between items-center mb-[4px] px-[10px] py-[4px]">
            <h2 className="text-body-medium font-semibold text-white">
              Welcome to my portfolio
            </h2>
            <div className="bg-white border-2 border-gray-600 text-4xl cursor-pointer hover:bg-gray-300">
              <GoDash
                onClick={() => setIsModalOpen(false)}
                className="size-5 text-gray-900"
              />
            </div>
          </div>
          <div className="text-gray-900 bg-white px-[5px] pt-[4px] pb-5 border-2 border-gray-600">
            <p className="mb-2">
              My name is Friday Martin, currently based in Lagos, Nigeria
            </p>
            <p className="mb-4">
              I help businesses create websites and systems that automate their
              workflow.
            </p>

            <p>
              Click on the{" "}
              <span className="font-semibold text-gray-900">Projects icon</span>{" "}
              to see some of my work
            </p>
            <p>
              Click on the{" "}
              <span className="font-semibold text-gray-900">Contact me</span> to
              reach out
            </p>
            <p>
              Click on the{" "}
              <span className="font-semibold text-gray-900">About icon</span> to
              know more about me
            </p>
          </div>
        </motion.div>
      )}

      <div className="fixed bottom-8 left-0 right-0 flex justify-center gap-16">
        {/* <div className="flex flex-col items-center gap-2">
          <div
            onClick={() => setIsSkillsModal(!isSkillsModal)}
            className="cursor-pointer"
          >
            {skillIcon}
          </div>
          <p className="font-semibold">Skills</p>
        </div> */}
        <div className="flex flex-col items-center gap-2">
          <div
            onClick={() =>
              toggleModal("projects", setIsProjectsModal, isProjectsModal)
            }
            className="cursor-pointer transition-transform hover:scale-110"
          >
            {workIcon}
          </div>
          <p className="font-semibold text-gray-900">Projects</p>
        </div>
        <div
          onClick={() =>
            toggleModal("contact", setIsContactModal, isContactModal)
          }
          className="flex flex-col items-center gap-2 cursor-pointer transition-transform hover:scale-110"
        >
          {contactIcon} <p className="font-semibold text-gray-900">Contact</p>
        </div>

        <div
          onClick={() => toggleModal("about", setIsAboutModal, isAboutModal)}
          className="flex flex-col items-center gap-2 cursor-pointer transition-transform hover:scale-110"
        >
          {aboutIcon} <p className="font-semibold text-gray-900">About</p>
        </div>

        <div
          onClick={() => toggleModal("offers", setIsOffersModal, isOffersModal)}
          className="flex flex-col items-center gap-2 cursor-pointer transition-transform hover:scale-110"
        >
          {offersIcon} <p className="font-semibold text-gray-900">Offers</p>
        </div>

        <div
          onClick={() => toggleModal("cv", setIsCvModal, isCvModal)}
          className="flex flex-col items-center gap-2 cursor-pointer transition-transform hover:scale-110"
        >
          {cvIcon} <p className="font-semibold text-gray-900">CV</p>
        </div>
      </div>

      <CvModal
        isOpen={isCvModal}
        onClose={() => setIsCvModal(false)}
        zIndex={zIndices.cv}
        onFocus={() => bringToFront("cv")}
      />

      <AboutMeModal
        isOpen={isAboutModal}
        onClose={() => setIsAboutModal(false)}
        zIndex={zIndices.about}
        onFocus={() => bringToFront("about")}
      />

      <ContactModal
        isOpen={isContactModal}
        onClose={() => setIsContactModal(false)}
        zIndex={zIndices.contact}
        onFocus={() => bringToFront("contact")}
      />

      <ProjectsModal
        isOpen={isProjectsModal}
        onClose={() => setIsProjectsModal(false)}
        zIndex={zIndices.projects}
        onFocus={() => bringToFront("projects")}
      />

      <OffersModal
        isOpen={isOffersModal}
        onClose={() => setIsOffersModal(false)}
        zIndex={zIndices.offers}
        onFocus={() => bringToFront("offers")}
      />
    </div>
  );
}

// Icons

// const skillIcon = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 32 32"
//     id="Money-Payments-Diamond--Streamline-Pixel"
//     height={38}
//     width={38}
//   >
//     <g>
//       <path d="M30.47 28.95H32v1.53h-1.53Z" fill="#000000" strokeWidth={1} />
//       <path
//         d="m30.47 1.52 -1.52 0 0 1.53 -1.52 0 0 1.52 1.52 0 0 1.53 1.52 0 0 -1.53 1.53 0 0 -1.52 -1.53 0 0 -1.53z"
//         fill="#000000"
//         strokeWidth={1}
//       />
//       <path d="M28.95 22.86h1.52v1.52h-1.52Z" fill="#000000" strokeWidth={1} />
//       <path d="M27.43 24.38h1.52v1.53h-1.52Z" fill="#000000" strokeWidth={1} />
//       <path d="M27.43 21.33h1.52v1.53h-1.52Z" fill="#000000" strokeWidth={1} />
//       <path d="M27.43 15.24h1.52v1.52h-1.52Z" fill="#000000" strokeWidth={1} />
//       <path d="M27.43 9.14h1.52v1.53h-1.52Z" fill="#000000" strokeWidth={1} />
//       <path d="M25.9 22.86h1.53v1.52H25.9Z" fill="#000000" strokeWidth={1} />
//       <path d="M25.9 16.76h1.53v1.53H25.9Z" fill="#000000" strokeWidth={1} />
//       <path d="M25.9 7.62h1.53v1.52H25.9Z" fill="#000000" strokeWidth={1} />
//       <path d="M24.38 18.29h1.52v1.52h-1.52Z" fill="#000000" strokeWidth={1} />
//       <path d="M24.38 6.1h1.52v1.52h-1.52Z" fill="#000000" strokeWidth={1} />
//       <path
//         d="m24.38 32 0 -1.52 1.52 0 0 -1.53 -1.52 0 0 -1.52 -1.53 0 0 1.52 -1.52 0 0 1.53 1.52 0 0 1.52 1.53 0z"
//         fill="#000000"
//         strokeWidth={1}
//       />
//       <path d="M22.85 19.81h1.53v1.52h-1.53Z" fill="#000000" strokeWidth={1} />
//       <path d="M21.33 21.33h1.52v1.53h-1.52Z" fill="#000000" strokeWidth={1} />
//       <path d="M21.33 15.24h1.52v1.52h-1.52Z" fill="#000000" strokeWidth={1} />
//       <path d="M21.33 9.14h1.52v1.53h-1.52Z" fill="#000000" strokeWidth={1} />
//       <path d="M21.33 1.52h1.52v1.53h-1.52Z" fill="#000000" strokeWidth={1} />
//       <path d="M19.81 22.86h1.52v1.52h-1.52Z" fill="#000000" strokeWidth={1} />
//       <path d="M19.81 16.76h1.52v3.05h-1.52Z" fill="#000000" strokeWidth={1} />
//       <path d="M19.81 7.62h1.52v1.52h-1.52Z" fill="#000000" strokeWidth={1} />
//       <path d="M18.28 19.81h1.53v3.05h-1.53Z" fill="#000000" strokeWidth={1} />
//       <path
//         d="m18.28 22.86 -1.52 0 0 4.57 1.52 0 0 -1.52 1.53 0 0 -1.53 -1.53 0 0 -1.52z"
//         fill="#000000"
//         strokeWidth={1}
//       />
//       <path d="M16.76 0h1.52v1.52h-1.52Z" fill="#000000" strokeWidth={1} />
//       <path d="M13.71 27.43h3.05v1.52h-3.05Z" fill="#000000" strokeWidth={1} />
//       <path
//         d="m13.71 22.86 -1.52 0 0 1.52 -1.53 0 0 1.53 1.53 0 0 1.52 1.52 0 0 -4.57z"
//         fill="#000000"
//         strokeWidth={1}
//       />
//       <path d="M10.66 19.81h1.53v3.05h-1.53Z" fill="#000000" strokeWidth={1} />
//       <path d="M9.14 22.86h1.52v1.52H9.14Z" fill="#000000" strokeWidth={1} />
//       <path d="M9.14 16.76h1.52v3.05H9.14Z" fill="#000000" strokeWidth={1} />
//       <path d="M9.14 7.62h1.52v1.52H9.14Z" fill="#000000" strokeWidth={1} />
//       <path d="M9.14 1.52h1.52v1.53H9.14Z" fill="#000000" strokeWidth={1} />
//       <path d="M7.62 27.43h1.52v1.52H7.62Z" fill="#000000" strokeWidth={1} />
//       <path d="M7.62 21.33h1.52v1.53H7.62Z" fill="#000000" strokeWidth={1} />
//       <path d="M7.62 15.24h1.52v1.52H7.62Z" fill="#000000" strokeWidth={1} />
//       <path d="M7.62 9.14h1.52v1.53H7.62Z" fill="#000000" strokeWidth={1} />
//       <path
//         d="m10.66 6.1 0 1.52 1.53 0 0 -1.52 6.09 0 0 1.52 1.53 0 0 -1.52 4.57 0 0 -1.53 -18.29 0 0 1.53 4.57 0z"
//         fill="#000000"
//         strokeWidth={1}
//       />
//       <path d="M6.09 19.81h1.53v1.52H6.09Z" fill="#000000" strokeWidth={1} />
//       <path d="M4.57 18.29h1.52v1.52H4.57Z" fill="#000000" strokeWidth={1} />
//       <path d="M4.57 6.1h1.52v1.52H4.57Z" fill="#000000" strokeWidth={1} />
//       <path d="M3.04 24.38h1.53v1.53H3.04Z" fill="#000000" strokeWidth={1} />
//       <path d="M3.04 16.76h1.53v1.53H3.04Z" fill="#000000" strokeWidth={1} />
//       <path d="M3.04 7.62h1.53v1.52H3.04Z" fill="#000000" strokeWidth={1} />
//       <path d="M1.52 30.48h1.52V32H1.52Z" fill="#000000" strokeWidth={1} />
//       <path d="M1.52 25.91h1.52v1.52H1.52Z" fill="#000000" strokeWidth={1} />
//       <path d="M1.52 22.86h1.52v1.52H1.52Z" fill="#000000" strokeWidth={1} />
//       <path d="M1.52 15.24h1.52v1.52H1.52Z" fill="#000000" strokeWidth={1} />
//       <path
//         d="m1.52 13.71 4.57 0 0 1.53 1.53 0 0 -1.53 15.23 0 0 1.53 1.53 0 0 -1.53 4.57 0 0 1.53 1.52 0 0 -4.57 -1.52 0 0 1.52 -4.57 0 0 -1.52 -1.53 0 0 1.52 -15.23 0 0 -1.52 -1.53 0 0 1.52 -4.57 0 0 -1.52 -1.52 0 0 4.57 1.52 0 0 -1.53z"
//         fill="#000000"
//         strokeWidth={1}
//       />
//       <path d="M1.52 9.14h1.52v1.53H1.52Z" fill="#000000" strokeWidth={1} />
//       <path
//         d="m1.52 4.57 1.52 0 0 -1.52 1.53 0 0 -1.53 -1.53 0 0 -1.52 -1.52 0 0 1.52 -1.52 0 0 1.53 1.52 0 0 1.52z"
//         fill="#000000"
//         strokeWidth={1}
//       />
//       <path d="M0 24.38h1.52v1.53H0Z" fill="#000000" strokeWidth={1} />
//     </g>
//   </svg>
// );

const workIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    id="Interface-Essential-Wrench-2--Streamline-Pixel"
    height={38}
    width={38}
  >
    <g>
      <path
        d="m30.48 25.9 -1.53 0 0 1.53 3.05 0 0 -6.1 -1.52 0 0 4.57z"
        fill="#000000"
        strokeWidth={1}
      />
      <path
        d="m28.95 4.57 0 1.52 1.53 0 0 4.58 1.52 0 0 -6.1 -3.05 0z"
        fill="#000000"
        strokeWidth={1}
      />
      <path d="M28.95 19.81h1.53v1.52h-1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M28.95 10.67h1.53v1.52h-1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M27.43 24.38h1.52v1.52h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M27.43 6.09h1.52v1.53h-1.52Z" fill="#000000" strokeWidth={1} />
      <path
        d="m22.86 22.86 0 4.57 1.52 0 0 1.52 1.53 0 0 1.53 -4.57 0 0 1.52 7.61 0 0 -3.05 -1.52 0 0 -1.52 -1.52 0 0 -3.05 1.52 0 0 -1.52 -4.57 0z"
        fill="#000000"
        strokeWidth={1}
      />
      <path d="M22.86 12.19h6.09v1.52h-6.09Z" fill="#000000" strokeWidth={1} />
      <path d="M24.38 3.05h1.53v1.52h-1.53Z" fill="#000000" strokeWidth={1} />
      <path
        d="m22.86 9.14 4.57 0 0 -1.52 -3.05 0 0 -3.05 -1.52 0 0 4.57z"
        fill="#000000"
        strokeWidth={1}
      />
      <path
        d="m25.91 1.52 0 1.53 1.52 0 0 -3.05 -6.09 0 0 1.52 4.57 0z"
        fill="#000000"
        strokeWidth={1}
      />
      <path d="M19.81 28.95h1.53v1.53h-1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M19.81 19.81h1.53v1.52h-1.53Z" fill="#000000" strokeWidth={1} />
      <path
        d="m19.81 12.19 -1.52 0 0 -3.05 -3.05 0 0 -6.09 -1.52 0 0 -1.53 -1.53 0 0 -1.52 -7.62 0 0 3.05 1.53 0 0 -1.53 4.57 0 0 1.53 1.52 0 0 6.09 1.53 0 0 1.53 1.52 0 0 1.52 1.52 0 0 1.52 1.53 0 0 1.53 1.52 0 0 1.52 1.53 0 0 1.52 1.52 0 0 1.53 6.09 0 0 -1.53 -4.57 0 0 -1.52 -1.52 0 0 -3.05 -3.05 0 0 -1.52z"
        fill="#000000"
        strokeWidth={1}
      />
      <path d="M19.81 1.52h1.53v1.53h-1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M18.29 22.86h1.52v6.09h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M18.29 18.28h1.52v1.53h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M18.29 3.05h1.52v6.09h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M16.76 21.33h1.53v1.53h-1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M16.76 16.76h1.53v1.52h-1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M15.24 19.81h1.52v1.52h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M15.24 15.24h1.52v1.52h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M13.72 21.33h1.52v1.53h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M13.72 18.28h1.52v1.53h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M13.72 13.71h1.52v1.53h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M12.19 22.86h1.53v6.09h-1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M12.19 16.76h1.53v1.52h-1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M12.19 12.19h1.53v1.52h-1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M10.67 28.95h1.52v1.53h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M10.67 15.24h1.52v1.52h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M10.67 10.67h1.52v1.52h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M9.15 16.76h1.52v1.52H9.15Z" fill="#000000" strokeWidth={1} />
      <path d="M9.15 13.71h1.52v1.53H9.15Z" fill="#000000" strokeWidth={1} />
      <path
        d="m6.1 30.48 0 -1.53 -1.53 0 0 3.05 6.1 0 0 -1.52 -4.57 0z"
        fill="#000000"
        strokeWidth={1}
      />
      <path
        d="m9.15 22.86 -4.58 0 0 1.52 3.05 0 0 3.05 1.53 0 0 -4.57z"
        fill="#000000"
        strokeWidth={1}
      />
      <path d="M3.05 12.19h6.1v1.52h-6.1Z" fill="#000000" strokeWidth={1} />
      <path d="M6.1 27.43h1.52v1.52H6.1Z" fill="#000000" strokeWidth={1} />
      <path d="M6.1 3.05h1.52v1.52H6.1Z" fill="#000000" strokeWidth={1} />
      <path d="M3.05 18.28h6.1v1.53h-6.1Z" fill="#000000" strokeWidth={1} />
      <path
        d="m9.15 9.14 0 -4.57 -1.53 0 0 3.05 -3.05 0 0 1.52 4.58 0z"
        fill="#000000"
        strokeWidth={1}
      />
      <path d="M3.05 24.38h1.52v1.52H3.05Z" fill="#000000" strokeWidth={1} />
      <path d="M3.05 6.09h1.52v1.53H3.05Z" fill="#000000" strokeWidth={1} />
      <path d="M1.53 19.81h1.52v1.52H1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M1.53 10.67h1.52v1.52H1.53Z" fill="#000000" strokeWidth={1} />
      <path
        d="m1.53 21.33 -1.53 0 0 6.1 3.05 0 0 -1.53 -1.52 0 0 -4.57z"
        fill="#000000"
        strokeWidth={1}
      />
      <path
        d="m1.53 6.09 1.52 0 0 -1.52 -3.05 0 0 6.1 1.53 0 0 -4.58z"
        fill="#000000"
        strokeWidth={1}
      />
    </g>
  </svg>
);

const aboutIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    id="Email-Emoji-Smile-Smart--Streamline-Pixel"
    height={38}
    width={38}
  >
    <g>
      <path d="M30.48 12.19H32v7.62h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M28.95 19.81h1.53v3.04h-1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M27.43 22.85h1.52v3.05h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M27.43 6.09h1.52v3.05h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M25.91 25.9h1.52v1.52h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M25.91 4.57h1.52v1.52h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M22.86 27.42h3.05v1.53h-3.05Z" fill="#000000" strokeWidth={1} />
      <path d="M22.86 3.04h3.05v1.53h-3.05Z" fill="#000000" strokeWidth={1} />
      <path d="M19.81 28.95h3.05v1.52h-3.05Z" fill="#000000" strokeWidth={1} />
      <path d="M19.81 1.52h3.05v1.52h-3.05Z" fill="#000000" strokeWidth={1} />
      <path d="M12.19 30.47h7.62V32h-7.62Z" fill="#000000" strokeWidth={1} />
      <path d="M13.72 22.85h6.09v1.53h-6.09Z" fill="#000000" strokeWidth={1} />
      <path d="M12.19 0h7.62v1.52h-7.62Z" fill="#000000" strokeWidth={1} />
      <path d="M12.19 21.33h1.53v1.52h-1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M9.14 28.95h3.05v1.52H9.14Z" fill="#000000" strokeWidth={1} />
      <path d="M9.14 1.52h3.05v1.52H9.14Z" fill="#000000" strokeWidth={1} />
      <path d="M6.1 27.42h3.04v1.53H6.1Z" fill="#000000" strokeWidth={1} />
      <path d="M6.1 3.04h3.04v1.53H6.1Z" fill="#000000" strokeWidth={1} />
      <path d="M4.57 25.9H6.1v1.52H4.57Z" fill="#000000" strokeWidth={1} />
      <path d="M4.57 4.57H6.1v1.52H4.57Z" fill="#000000" strokeWidth={1} />
      <path d="M3.05 22.85h1.52v3.05H3.05Z" fill="#000000" strokeWidth={1} />
      <path
        d="m3.05 15.23 1.52 0 0 1.53 1.53 0 0 1.52 6.09 0 0 -1.52 1.53 0 0 -1.53 1.52 0 0 -1.52 3.05 0 0 1.52 1.52 0 0 1.53 1.52 0 0 1.52 6.1 0 0 -1.52 1.52 0 0 -4.57 1.53 0 0 -3.05 -1.53 0 0 1.52 -25.9 0 0 -1.52 -1.52 0 0 3.05 1.52 0 0 3.04z"
        fill="#000000"
        strokeWidth={1}
      />
      <path d="M3.05 6.09h1.52v3.05H3.05Z" fill="#000000" strokeWidth={1} />
      <path d="M1.53 19.81h1.52v3.04H1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M0 12.19h1.53v7.62H0Z" fill="#000000" strokeWidth={1} />
    </g>
  </svg>
);

const contactIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    id="Vintage-Phone--Streamline-Pixel"
    height={38}
    width={38}
  >
    <g>
      <path d="M29.715 4.57h1.52v4.57h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M28.195 19.8h1.52v9.15h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M28.195 3.04h1.52v1.53h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M26.665 28.95h1.53v1.52h-1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M26.665 16.76h1.53v3.04h-1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M25.145 9.14h4.57v1.52h-4.57Z" fill="#000000" strokeWidth={1} />
      <path d="M26.665 1.52h1.53v1.52h-1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M25.145 15.23h1.52v1.53h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M5.335 30.47h21.33V32H5.335Z" fill="#000000" strokeWidth={1} />
      <path d="M23.625 6.09h1.52v3.05h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M8.385 4.57h15.24v1.52H8.385Z" fill="#000000" strokeWidth={1} />
      <path d="M20.575 19.8h1.52v6.1h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M19.045 25.9h1.53v1.52h-1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M19.045 18.28h1.53v1.52h-1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M12.955 27.42h6.09v1.53h-6.09Z" fill="#000000" strokeWidth={1} />
      <path
        d="m17.525 19.8 -3.05 0 0 1.53 -1.52 0 0 3.05 1.52 0 0 1.52 3.05 0 0 -1.52 1.52 0 0 -3.05 -1.52 0 0 -1.53z"
        fill="#000000"
        strokeWidth={1}
      />
      <path d="M12.955 16.76h6.09v1.52h-6.09Z" fill="#000000" strokeWidth={1} />
      <path d="M11.435 25.9h1.52v1.52h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M11.435 18.28h1.52v1.52h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M9.905 19.8h1.53v6.1h-1.53Z" fill="#000000" strokeWidth={1} />
      <path
        d="m9.905 12.19 3.05 0 0 3.04 6.09 0 0 -3.04 3.05 0 0 3.04 3.05 0 0 -1.52 -1.52 0 0 -3.05 -6.1 0 0 3.05 -3.05 0 0 -3.05 -6.09 0 0 3.05 -1.53 0 0 1.52 3.05 0 0 -3.04z"
        fill="#000000"
        strokeWidth={1}
      />
      <path d="M6.855 6.09h1.53v3.05h-1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M5.335 0h21.33v1.52H5.335Z" fill="#000000" strokeWidth={1} />
      <path d="M5.335 15.23h1.52v1.53h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M3.815 28.95h1.52v1.52h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M3.815 16.76h1.52v3.04h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M2.285 9.14h4.57v1.52h-4.57Z" fill="#000000" strokeWidth={1} />
      <path d="M3.815 1.52h1.52v1.52h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M2.285 19.8h1.53v9.15h-1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M2.285 3.04h1.53v1.53h-1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M0.765 4.57h1.52v4.57H0.765Z" fill="#000000" strokeWidth={1} />
    </g>
  </svg>
);

const offersIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    id="Coding-Apps-Websites-Phone-Tablet--Streamline-Pixel"
    height={38}
    width={38}
  >
    <g>
      <path d="M29.71 24.38h1.53v1.52h-1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M28.19 22.85h1.52v1.53h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M28.19 25.9h1.52v1.53h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M26.66 21.33h1.53v1.52h-1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M26.66 27.43h1.53v1.52h-1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M25.14 19.81h1.52v1.52h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M25.14 25.9h1.52v1.53h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M23.62 18.28h1.52v1.53h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M23.62 24.38h1.52v1.52h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M22.09 16.76h1.53v1.52h-1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M22.09 22.85h1.53v1.53h-1.53Z" fill="#000000" strokeWidth={1} />
      <path
        d="m20.57 21.33 0 -1.52 -1.52 0 0 1.52 1.51 0 0 1.52 1.53 0 0 -1.52 -1.52 0z"
        fill="#000000"
        strokeWidth={1}
      />
      <path
        d="M2.28 1.52H0.76v28.95h1.52V32h18.28v-1.53h1.53V25.9h-1.53v3.05H2.28V3.04h4.57v1.53h9.14V3.04h4.57v9.15h1.53V1.52h-1.53V0H2.28Zm9.14 0h3.05v1.52h-3.05Zm-3.05 0H9.9v1.52H8.37Z"
        fill="#000000"
        strokeWidth={1}
      />
      <path d="M17.52 18.28h1.53v1.53h-1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M16 7.62h3.05v3.04H16Z" fill="#000000" strokeWidth={1} />
      <path
        d="m20.56 15.23 0 1.53 1.53 0 0 -1.53 -1.52 0 0 -1.52 -4.57 0 0 4.57 1.52 0 0 -3.05 3.04 0z"
        fill="#000000"
        strokeWidth={1}
      />
      <path d="M9.9 7.62h3.05v3.04H9.9Z" fill="#000000" strokeWidth={1} />
      <path
        d="m12.95 24.38 0 -1.53 1.52 0 0 -1.52 -1.52 0 0 -1.52 -1.52 0 0 1.52 -1.53 0 0 1.52 1.53 0 0 1.53 1.52 0z"
        fill="#000000"
        strokeWidth={1}
      />
      <path d="M9.9 13.71h3.05v3.05H9.9Z" fill="#000000" strokeWidth={1} />
      <path d="M3.81 7.62h3.05v3.04H3.81Z" fill="#000000" strokeWidth={1} />
      <path d="M3.81 13.71h3.05v3.05H3.81Z" fill="#000000" strokeWidth={1} />
      <path d="M3.81 19.81h3.05v3.04H3.81Z" fill="#000000" strokeWidth={1} />
    </g>
  </svg>
);

const cvIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    id="Content-Files-Note--Streamline-Pixel"
    height={38}
    width={38}
  >
    <g>
      <path d="M27.432 4.575h1.52v25.9h-1.52Z" fill="#000000" strokeWidth={1} />
      <path d="M25.902 3.045h1.53v1.53h-1.53Z" fill="#000000" strokeWidth={1} />
      <path d="M24.382 1.525h1.52v1.52h-1.52Z" fill="#000000" strokeWidth={1} />
      <path
        d="M25.9 7.615h-1.52V6.1h-1.52V4.575h-1.53v-1.53H3.052V32H25.9Zm-1.52 22.86H4.572v-25.9h13.71v6.09h6.1Z"
        fill="#000000"
        strokeWidth={1}
      />
      <path
        d="M4.572 -0.005h19.81v1.53H4.572Z"
        fill="#000000"
        strokeWidth={1}
      />
      <path
        d="M7.622 25.905h13.71v1.52H7.622Z"
        fill="#000000"
        strokeWidth={1}
      />
      <path
        d="M7.622 19.805h13.71v1.53H7.622Z"
        fill="#000000"
        strokeWidth={1}
      />
      <path
        d="M7.622 13.715h13.71v1.52H7.622Z"
        fill="#000000"
        strokeWidth={1}
      />
      <path d="M7.622 7.615h6.09v1.53h-6.09Z" fill="#000000" strokeWidth={1} />
    </g>
  </svg>
);
