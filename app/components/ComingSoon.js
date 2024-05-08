"use client";

import React from "react";
import { motion } from "framer-motion";
import Typewriter from "./Typewriter";

const ComingSoon = () => {
  return (
    <>
      <div className="w-full h-full text-center">
        <div className="max-w[1240px] w-full h-full mx-auto flex justify-center items-center">
          <div>
            <h1 className="text-[#5651e5] text-4xl">
              Something{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
                className="text-gray-700 font-huge block py-4 uppercase text-5xl"
              >
                hooooge
              </motion.span>{" "}
              <Typewriter text="is Coming Soon..." />
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
