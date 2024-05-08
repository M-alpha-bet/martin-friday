import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ContactMain from "../components/ContactMain";

const ContactPage = () => {
  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden">
        <NavBar />
        <ContactMain />
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
