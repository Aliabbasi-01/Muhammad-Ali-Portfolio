import React from "react";
import { Profile } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-1/2 flex justify-center items-start relative">
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