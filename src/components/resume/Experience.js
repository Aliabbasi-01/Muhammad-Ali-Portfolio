import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const experienceData = [
  {
    id: 1,
    title: "Android Developer",
    subTitle: "Zeesign Technologies - (2024 - 2026)",
    result: "Professional Experience",
    des: "Worked on Android application development using Kotlin, building modern and user-friendly applications. Worked with REST APIs, MVVM architecture, Firebase, Room Database, and other Android development tools."
  },
  {
    id: 2,
    title: "Backend Developer",
    subTitle: "Service Your Car - FYP Project",
    result: ".NET Core / SQL Server",
    des: "Developed RESTful APIs using .NET Core and ASP.NET Web API with SQL Server. Implemented authentication, booking workflows, business logic, and API integration with the Android application."
  },
  {
    id: 3,
    title: "Android App Developer",
    subTitle: "CVPilot - Resume Builder",
    result: "Kotlin / Room / MVVM",
    des: "Developed an Android resume builder that allows users to manage personal information, education, skills, and CV data with local storage and customizable templates."
  },
  {
    id: 4,
    title: "Android App Developer",
    subTitle: "HISAB - Expense Management",
    result: "Kotlin / Firebase",
    des: "Developed an expense management application with income and expense tracking, savings goals, dashboard visualization, Firebase integration, and PDF generation."
  },
  {
    id: 5,
    title: "Software Testing",
    subTitle: "Academic & Practical Projects",
    result: "Katalon Studio / Unit Testing",
    des: "Performed functional testing, unit testing, test case design, and software quality assurance activities using SDLC concepts and Katalon Studio."
  },
  {
    id: 6,
    title: "Android Developer",
    subTitle: "Personal & Academic Projects",
    result: "Kotlin / Android",
    des: "Built multiple Android applications using Kotlin, MVVM, Retrofit, Room Database, Firebase, Coroutines, RecyclerView, and REST API integration."
  }
];

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      {/* Professional Experience */}
      <div className="flex-1">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2024 - 2026
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Employment History
          </h2>
        </div>

        <div className="mt-6 border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {experienceData.slice(0, 3).map((item) => (
            <ResumeCard
              key={item.id}
              title={item.title}
              subTitle={item.subTitle}
              result={item.result}
              des={item.des}
            />
          ))}
        </div>
      </div>

      {/* Projects & Practical Experience */}
      <div className="flex-1">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            PROJECTS & TESTING
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Practical Experience
          </h2>
        </div>

        <div className="mt-6 border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {experienceData.slice(3, 6).map((item) => (
            <ResumeCard
              key={item.id}
              title={item.title}
              subTitle={item.subTitle}
              result={item.result}
              des={item.des}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;