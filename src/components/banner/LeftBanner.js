import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: [
  "Android App Developer",
   "Software Engineer",
   ".NET Backend Developer",
  "Kotlin Developer"
  
 
],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-3xl lg:text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Muhammad Ali</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-2 text-justify tracking-wide">
       A passionate Software Engineer and Android Developer specializing in Kotlin, 
       Android application development, and backend API development. Experienced in
        building modern, scalable, and user-friendly mobile applications using Kotlin, MVVM, Retrofit, Room, Firebase, and REST APIs. Skilled in developing backend services with .NET Core and ASP.NET Web API, along with SQL Server and raw SQL. Familiar with software testing, SDLC, unit testing, and Katalon Studio. Passionate about creating reliable software solutions, solving real-world problems,
        and continuously learning modern technologies to deliver high-quality applications.
      </p>      
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner