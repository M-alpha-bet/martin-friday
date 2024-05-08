import React from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Loading from "./loading";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="flex flex-col h-screen overflow-hidden">
          <NavBar />
          <Main />
          <Footer />
        </div>
      </Suspense>
    </>
  );
}
