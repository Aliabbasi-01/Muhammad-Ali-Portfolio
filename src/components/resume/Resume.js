import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";

const Resume = () => {
  const [educationData, setEducationData] = useState(false);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(true);

  return (
    <section
      id="resume"
      className="w-full py-36 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="ANDROID DEVELOPER & SOFTWARE ENGINEER"
          des="My Resume"
        />
      </div>

      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-3">

          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
              setExperienceData(false);
            }}
            className={`${
              skillData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>

          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setExperienceData(true);
            }}
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>

          <li
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
              setExperienceData(false);
            }}
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>

        </ul>
      </div>

      {skillData && <Skills />}
      {experienceData && <Experience />}
      {educationData && <Education />}
    </section>
  );
};

export default Resume;