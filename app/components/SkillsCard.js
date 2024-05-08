"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const SkillsCard = (props) => {
  return (
    <>
      <motion.div
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
        className="p-4 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
      >
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image
              className="w-auto h-auto"
              src={props.url}
              width={64}
              height={64}
              alt="/"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>{props.skill}</h3>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SkillsCard;
