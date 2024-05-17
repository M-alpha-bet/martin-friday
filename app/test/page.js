"use client";
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "../components/styles/Animation.css";

const TestPage = () => {
  const text = "Hooge";
  return (
    <div className="h-full w-full text-center">
      <div className="h-full w-full justify-center flex py-44">
        <div>
          <div className="animate">
            <Player
              src="https://lottie.host/77e98272-04f3-44c5-96b2-6fd9d2d5e2d4/IkHubDH17O.json"
              style={{ width: "350px", height: "350px" }}
              loop
              autoplay
              speed={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
