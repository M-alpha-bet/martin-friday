import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ComingSoon from "../components/ComingSoon";

const projectPage = () => {
  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden">
        <NavBar />
        <ComingSoon />
        <Footer />
      </div>
    </>
  );
};

export default projectPage;
