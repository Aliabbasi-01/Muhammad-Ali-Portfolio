import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { faFacebook,faGithub, faLinkedinIn,faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
      <span className="text-designColor capitalize text-2xl">Muhammad Ali</span>  
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
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
        {[{title:"About",link:"home"},{title:"Portfolio",link:"resume"},{title:"Services",link:"features"},{title:"Contact",link:"contact"}].map((item,index)=>(
          <li key={index}>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              <a href={`#${item.link}`}>{item.title}</a>
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        ))}
        </ul>
      </div>

    </div>
  );
}

export default Footer