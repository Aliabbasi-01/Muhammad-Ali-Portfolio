import React from "react";
import { Profile } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full mb-10 lgl:w-1/2 flex justify-center items-end relative h-[600px]">
      {/* Emboss effect */}
      <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px]  bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne rounded-lg z-0"></div>
      {/* Profile image */}
      <img
        className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-[300px] h-[400px] object-contain lgl:w-[500px] lgl:h-[480px]  z-10"
        src={Profile}
        alt="bannerImg"
      />
    </div>
  );
};

export default RightBanner;
