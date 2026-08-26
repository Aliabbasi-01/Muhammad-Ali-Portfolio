import React from "react";
import { Profile } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-1/2 flex justify-center items-start relative">

      {/* Background Card */}
      <div
        className="
          absolute top-8
          w-[140px] h-[180px]
          sm:w-[200px] sm:h-[240px]
          lgl:w-[300px] lgl:h-[300px]
          bg-gradient-to-r from-[#1e2024] to-[#202327]
          shadow-shadowOne rounded-lg
        "
      ></div>

      {/* Profile Image */}
      <img
        className="
          relative z-10
          w-[170px] h-[250px]
          sm:w-[220px] sm:h-[320px]
          lgl:w-[500px] lgl:h-[480px]
          object-contain
        "
        src={Profile}
        alt="Muhammad Ali"
      />

    </div>
  );
};

export default RightBanner;