import React from "react";
// import Image from "next/image"
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Student Database Project",
    description:
      "The DataStructure used to store is Linked HashMap and other Collection like List, written sorting logic on each data and created a custom exception for the program.",
    // image: "/thankfulthoughts.png",
    github: "https://github.com/NICCK08/Student-Database",
    link: "",
  },
  {
    name: "Employee Database Project",
    description:
      "The DataStructure used to store is Linked HashMap and other Collection like List, written sorting logic on each data and created a custom exception for the program.",
    // image: "/platoio.png",
    github: "https://github.com/NICCK08/Employee-Database-",
    link: "",
  },
  {
    name: "Projects Website",
    description:
      "Contains Multiple Mini Projects using HTML, CSS and JavaScript",
    // image: "/familyphotos.png",
    github: "https://github.com/NICCK08/Neogcamp_mark4-5",
    link: "https://nikhil-savalgi.netlify.app",
  },
];
const projects2 = [
  {
    name: "Student Database Project",
    description:
      "The DataStructure used to store is Linked HashMap and other Collection like List, written sorting logic on each data and created a custom exception for the program.",
    // image: "/thankfulthoughts.png",
    github: "https://github.com/NICCK08/Student-Database",
    link: "",
  },
  {
    name: "Employee Database Project",
    description:
      "The DataStructure used to store is Linked HashMap and other Collection like List, written sorting logic on each data and created a custom exception for the program.",
    // image: "/platoio.png",
    github: "https://github.com/NICCK08/Employee-Database-",
    link: "",
  },
  {
    name: "Projects Website",
    description:
      "Contains Multiple Mini Projects using HTML, CSS and JavaScript",
    // image: "/familyphotos.png",
    github: "https://github.com/NICCK08/Neogcamp_mark4-5",
    link: "https://nikhil-savalgi.netlify.app",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-10 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-20">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="80px 0px 80px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row ">
                  {/* <div className=" md:w-1/2">
                    {/* <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link> 
                  </div> */}

                  <div>
                    <h1 className="text-4xl font-bold col-md-6">
                      {project.name}
                    </h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
