import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  const educationData = [
    {
      title: "Bachelor's Degree in Software Engineering",
       subTitle: "Barani Institute of Information Technology (Completed)",
      des: "Completed a Bachelor's degree in Software Engineering with a strong foundation in software development, SDLC, database systems, software testing, and modern programming practices.",
    },
    {
      title: "Intermediate",
      subTitle: "Pre-Engineering / Computer Science",
      des: "Completed intermediate education with a foundation in mathematics, computer science, and analytical problem-solving.",
    },
    {
      title: "Matriculation",
      subTitle: "Science",
      des: "Completed secondary education with a focus on science and fundamental computing concepts.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            EDUCATION
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Education Quality
          </h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {educationData.map((item, index) => (
            <ResumeCard
              key={index}
              title={item.title}
              subTitle={item.subTitle}
              des={item.des}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;