import p1 from '../../assets/p1.webp'
import p4 from '../../assets/p4.webp'
import p5 from '../../assets/p5.webp'
import p6 from '../../assets/p6.webp'
import servcie from '../../assets/hisab.jpg'
import cvpilot from '../../assets/cvpilot.jpg'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard';

const projects = [
  {
    title: "Service Your Car – Service Station Management",
    des: "A complete Android-based service station management system built with Kotlin and .NET Core Web API. The application allows customers to find nearby service stations, view available services and bays, select time slots, and make bookings. The system also provides station owners with tools to manage stations, bays, services, and bookings.",
    src: p1
  },
  {
    title: "HISAB – Expense & Budget Management",
    des: "A personal finance Android application designed to manage daily expenses, income, savings goals, and financial activity. Built with Kotlin and Firebase, the app provides an intuitive dashboard, expense tracking, visual reports, PDF generation, and secure data management.",
    src: servcie
  },
  {
    title: "CVPilot – Resume Builder",
    des: "A modern Android resume builder that allows users to create, edit, and preview professional CVs using customizable templates. The application uses Kotlin, Room Database, MVVM architecture, and dynamic UI components to manage resume information efficiently.",
    src:cvpilot
  },
  {
    title: "Android Applications",
    des: "Developed multiple Android applications using Kotlin, following modern development practices and clean architecture principles. Implemented features including REST API integration, authentication, image handling, local storage, Firebase services, and responsive user interfaces.",
    src: p4
  },
  {
    title: "REST API Development",
    des: "Designed and developed backend REST APIs using .NET Core and ASP.NET Web API with SQL Server. Implemented authentication, CRUD operations, booking workflows, business logic, and database integration to support Android applications.",
    src: p5
  },
  {
    title: "Software Testing & QA",
    des: "Applied software testing concepts including test case design, unit testing, SDLC practices, and functional testing. Gained hands-on experience with Katalon Studio during university projects and focused on identifying defects and improving software quality.",
    src: p6
  }
];

const ProjectList = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-6 xl:gap-14">
      {projects.map((project, index) => (
        <ProjectsCard
          key={index}
          title={project.title}
          des={project.des}
          src={project.src}
        />
      ))}
      </div>
    </section>
  );
};

export default ProjectList;
