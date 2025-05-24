import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Final-year UG Student @IIIT Kottayam",
          "Intern @I4C",
          "ACMW finalist '24",
          "AL/ ML Enthusiast",
          "DSA Enthusiast",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
