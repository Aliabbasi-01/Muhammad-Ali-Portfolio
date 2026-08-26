import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Flutter App Developer",
      "Software Engineer",
      ".NET Backend Developer",
      "Mobile App Developer",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-1/2 flex flex-col gap-6 lgl:gap-20">

      <div className="flex flex-col gap-2 sm:gap-3 lgl:gap-5">

        <h4 className="text-[10px] sm:text-xs lgl:text-lg font-normal">
          WELCOME TO MY WORLD
        </h4>

        <h1 className="text-lg sm:text-2xl lgl:text-6xl font-bold text-white leading-tight">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">
            Muhammad Ali
          </span>
        </h1>

        <h2 className="text-base sm:text-xl lgl:text-4xl font-bold text-white leading-tight">
          a <span>{text}</span>
          <Cursor
            cursorBlinking={false}
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>

        <p className="text-[10px] sm:text-sm lgl:text-base font-bodyFont leading-4 sm:leading-5 lgl:leading-6 text-justify tracking-wide">
          A passionate Software Engineer and Mobile App Developer specializing
          in Flutter and modern application development. Experienced in
          building scalable applications, REST APIs, Firebase, databases,
          and backend services with .NET Core.
        </p>

      </div>

      <Media />

    </div>
  );
};

export default LeftBanner;