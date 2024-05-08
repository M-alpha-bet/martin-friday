"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Typewriter = (props) => {
  const [text] = useTypewriter({
    words: [props.text],
    loop: {},
    typeSpeed: 240,
    deleteSpeed: 50,
  });

  return (
    <>
      <span>{text}</span>
      <span>
        <Cursor />
      </span>
    </>
  );
};

export default Typewriter;
