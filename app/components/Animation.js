"use client";
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "../components/styles/Animation.css";

const Animation = () => {
  return (
    <>
      <div className="animate positioning animationed">
        <Player
          src="https://lottie.host/77e98272-04f3-44c5-96b2-6fd9d2d5e2d4/IkHubDH17O.json"
          style={{ width: "300px", height: "300px" }}
          loop
          autoplay
          speed={2}
        />
      </div>
    </>
  );
};

export default Animation;
