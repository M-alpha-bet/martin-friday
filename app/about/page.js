import React from "react";

import AboutMain from "../components/AboutMain";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden">
        <NavBar />
        <AboutMain />
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
