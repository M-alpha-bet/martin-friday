import React from "react";
import SkillsMain from "../components/SkillsMain";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const skillsPage = () => {
  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden">
        <NavBar />
        <SkillsMain />
        <Footer />
      </div>
    </>
  );
};

export default skillsPage;
