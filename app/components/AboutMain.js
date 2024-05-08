"use client";

import React, { useRef } from "react";
import styles from "../components/styles/AboutMain.module.css";
import { motion } from "framer-motion";
import Typewriter from "./Typewriter";

const AboutMain = () => {
  const constraintsRef = useRef(null);

  return (
    <div className="w-full h-full text-center">
      <div className="max-w[1240px] w-full h-full mx-auto flex justify-center items-center">
        <div>
          <h1 className="text-[#5651e5] pb-4 text-5xl">
            <Typewriter text="About" />
          </h1>
          <p className="text-gray-500 max-w-[90%] md:max-w-[70%] m-auto">
            I always had a passion for technology. I picked up coding in 2022
            when I learnt about python but later switched to JavaScript for it's
            amazing and interactive features on the web. Now, I just spend most
            of my time coding and learning about web3 and the blockchain.
          </p>
          <div className="pt-5">
            <motion.div className={styles.container} ref={constraintsRef}>
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
                className={styles.item}
                drag
                dragConstraints={constraintsRef}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
