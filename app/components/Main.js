import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import React from "react";
import Typewriter from "./Typewriter";
import Animation from "./Animation";

const Main = () => {
  return (
    <div className="w-full h-full text-center">
      <div className="max-w[1240px] w-full h-full mx-auto flex justify-center items-center">
        <div className="m-0 mt-10">
          <p className="uppercase text-xs md:text-sm tracking-widest text-gray-600 pt-10 animate-pulse">
            let's build something together
          </p>
          <h1 className="pt-0 text-gray-700">
            Hi, I'm{" "}
            <span className="text-[#5651e5]">
              <Typewriter text="Friday Martin" />
            </span>
          </h1>
          <h1 className="py-2 text-gray-700">A Full-Stack Developer</h1>
          <p className="pt-0 text-gray-500 max-w-[90%] md:max-w-[70%] m-auto">
            I am a full stack web3 developer from Nigeria passionate about
            building interactive digital experiences, the blockchain and it's
            decentralization properties.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="hidden md:block rounded-full shadow-lg shawdow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="hidden md:block rounded-full shadow-lg shawdow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300">
              <MdOutlineEmail />
            </div>
            <div className="hidden md:block rounded-full shadow-lg shawdow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300">
              <FaWhatsapp />
            </div>
            <div className="hidden md:block rounded-full shadow-lg shawdow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300">
              <FaXTwitter />
            </div>
          </div>
          <div className="-m-10">
            <Animation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
