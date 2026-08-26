import React from "react";

const ProjectsCard = ({ title, des, src }) => {
  return (
    <div className="w-full p-4 xl:px-6 xl:py-8 h-[400px] rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[60%] overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt={title}
        />
      </div>
      <div className="w-full h-[40%] mt-4 flex flex-col justify-between">
        <div className="flex flex-col h-full overflow-hidden custom-scrollbar">
          <h3 className="text-base uppercase text-designColor font-semibold">
            {title}
          </h3>
          <p className="Paragraph text-sm tracking-wide mt-2 text-gray-300 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
