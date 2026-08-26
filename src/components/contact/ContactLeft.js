import React from 'react'
import contactImg  from "../../assets/aliprofile.png";
import { faGithub, faLinkedinIn,faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Muhammad Ali</h3>
        <p className="text-lg font-normal text-gray-400">
        Software Engineer | Android Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Android Developer & Software Engineer specializing in Kotlin and modern Android development.
Experienced in MVVM, REST APIs, Firebase, Room, and .NET Core.
Passionate about building clean, scalable, and user-friendly applications.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+923207209909 | +923174703127</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">muhammmadalicodes4@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex flex-wrap gap-4">
          <a
            target="_blank"
            href="https://github.com/Aliabbasi-01"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon" data-tooltip-id="github">
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </a>
          
          <a
            target="_blank"
            href="https://www.linkedin.com/in/muhammad-ali-488060380/"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon" data-tooltip-id="linkedin">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft