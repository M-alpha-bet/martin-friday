import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const ContactMain = () => {
  return (
    <>
      <div className="w-full h-full text-center">
        <div className="max-w[1240px] w-full h-full mx-auto flex justify-center items-center">
          <div>
            <h1 className="text-7xl pb-12">
              Say <span className="block">Hi</span>
            </h1>
            <p className="w-[80%] m-auto">
              You can reach out to me on{" "}
              <span className="text-gray-900 font-medium">
                <Link href="https://www.linkedin.com/in/martin-friday-0b43152b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  LinkedIn
                </Link>
              </span>
              , via{" "}
              <span className="text-gray-900 font-medium">
                <Link href="mailto:fridaymartin500@gmail.com">Email</Link>
              </span>
              ,{" "}
              <span className="text-gray-900 font-medium">
                <Link href="https://wa.link/36m0tn">Whatsapp</Link>
              </span>{" "}
              or{" "}
              <span className="text-gray-900 font-medium">
                <Link href="https://x.com/MartinFriday5?s=09">Twitter(X)</Link>
              </span>{" "}
              by clicking on the corresponding icon below.{" "}
              <span className="block">Thank You!</span>
            </p>
            <div className="flex items-center justify-center my-4 w-full">
              <div className="rounded-full shadow-lg shawdow-gray-400 mx-4 p-3 cursor-pointer hover:scale-135 ease-in duration-300">
                <Link href="https://www.linkedin.com/in/martin-friday-0b43152b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <FaLinkedinIn size={20} />
                </Link>
              </div>
              <div className="rounded-full shadow-lg shawdow-gray-400 mx-4 p-3 cursor-pointer hover:scale-115 ease-in duration-300">
                <Link href="mailto:fridaymartin500@gmail.com">
                  <MdOutlineEmail size={20} />
                </Link>
              </div>
              <div className="rounded-full shadow-lg shawdow-gray-400 mx-4 p-3 cursor-pointer hover:scale-115 ease-in duration-300">
                <Link href="https://wa.link/36m0tn">
                  <FaWhatsapp size={20} />
                </Link>
              </div>
              <div className="rounded-full shadow-lg shawdow-gray-400 mx-4 p-3 cursor-pointer hover:scale-115 ease-in duration-300">
                <Link href="https://x.com/MartinFriday5?s=09">
                  <FaXTwitter size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMain;
