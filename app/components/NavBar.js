"use client";

import Image from "next/image";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import React, { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="fixed w-full h-20 shadow-xl z-[100]">
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-20 bg-[#e3e6e7]">
          <Link href="/">
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
            >
              <Image
                priority={true}
                src="/assets/logo.png"
                alt="/"
                width={125}
                height={50}
                className="px-3"
              />
            </motion.div>
          </Link>
          <div>
            <ul className="hidden md:flex px-4">
              <Link href="/about">
                <li className="ml-10 text-lg uppercase hover:border-b-4 hover:scale-125">
                  About
                </li>
              </Link>
              <Link href="/skills">
                <li className="ml-10 text-lg uppercase hover:border-b-4 hover:scale-125">
                  Skills
                </li>
              </Link>
              <Link href="/projects">
                <li className="ml-10 text-lg uppercase hover:border-b-4 hover:scale-125">
                  Projects
                </li>
              </Link>
              <Link href="/contact">
                <li className="ml-10 text-lg uppercase hover:border-b-4 hover:scale-125">
                  Contact
                </li>
              </Link>
              <a href="/Martin's-CV.pdf" download>
                <li className="ml-10 text-lg uppercase hover:border-b-4 hover:scale-125">
                  Read CV
                </li>
              </a>
            </ul>
            <div onClick={handleNav} className="md:hidden px-3">
              <IoIosMenu size={40} />
            </div>
          </div>
        </div>
        <div
          className={
            nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""
          }
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              backgroundImage: `url("https://www.transparenttextures.com/patterns/bright-squares.png")`,
            }}
            className={
              nav
                ? "fixed left-0 top-0 w-[100%] sm:w-[80%] md:w-[55%] h-screen p-10 pt-5 ease-in duration-700"
                : "fixed left-[-200%] top-0 p-10 ease-in duration-700"
            }
          >
            <div>
              <div className="flex w-full pb-4 items-center justify-between">
                <Link href="/">
                  <Image
                    priority={true}
                    src="/assets/logo.png"
                    alt="/"
                    width={115}
                    height={45}
                  />
                </Link>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose size={15} />
                </div>
              </div>
              <div className="border-b border-gray-300 my-5">
                <p className="w-[85%] md:w-[90%] py-4 inline">
                  Let's build something amazing together
                </p>
              </div>
            </div>
            <div>
              <ul>
                <Link href="/about">
                  <li className="py-2 text-3xl">About</li>
                </Link>
                <Link href="/skills">
                  <li className="py-2 text-3xl">Skills</li>
                </Link>
                <Link href="/projects">
                  <li className="py-2 text-3xl">Projects</li>
                </Link>
                <Link href="/contact">
                  <li className="py-2 text-3xl">Contact</li>
                </Link>
                <a href="/Martin's-CV.pdf" download>
                  <li className="py-2 text-3xl">Read CV</li>
                </a>
              </ul>
              <div className="pt-10">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Let's Connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <Link href="https://www.linkedin.com/in/martin-friday-0b43152b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <FaLinkedinIn />
                  </Link>
                  <div className="rounded-full shadow-lg shawdow-gray-400 p-3 cursor-pointer hover:scale-115 ease-in duration-300">
                    <Link href="mailto:fridaymartin500@gmail.com">
                      <MdOutlineEmail />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shawdow-gray-400 p-3 cursor-pointer hover:scale-115 ease-in duration-300">
                    <Link href="https://wa.link/36m0tn">
                      <FaWhatsapp />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shawdow-gray-400 p-3 cursor-pointer hover:scale-115 ease-in duration-300">
                    <Link href="https://x.com/MartinFriday5?s=09">
                      <FaXTwitter />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
