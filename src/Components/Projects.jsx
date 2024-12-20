import React from "react";
import { FaGithub, FaPlay } from "react-icons/fa";

const ProjectCard = ({ title, description, demoLink, sourceLink }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      {/* Placeholder for Image */}
      <div className="h-40 w-full bg-gray-700 rounded-t-2xl flex items-center justify-center text-white">
        <p className="italic">Image Placeholder</p>
      </div>
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal mt-4">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">
        {description}
      </p>
      <div className="mt-auto p-2 md:p-4 flex gap-2 md:gap-4 justify-end">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            <FaPlay /> Demo
          </a>
        )}
        {sourceLink && (
          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            <FaGithub /> Source Code
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const projectData = [
    {
      title: "Process Scheduling Visualizer",
      description:
        "A visualizer for CPU scheduling algorithms (SJF, Round Robin, FCFS, Priority-based) with real-time progress tracking and interactive UI using Java Swing.",
      demoLink: "https://github.com/prabhatsuman/CPUSchedulingVisualizer",
      sourceLink: "https://github.com/prabhatsuman/CPUSchedulingVisualizer",
    },
    {
      title: "Random Chat Platform",
      description:
        "An anonymous chat platform with real-time messaging using WebSockets, interest-based matching, and Redis caching.",
      demoLink: "https://github.com/prabhatsuman/RandomChat",
      sourceLink: "https://github.com/prabhatsuman/RandomChat",
    },
    {
      title: "Duck Farm Management System",
      description:
        "A system to manage multi-farm data, including egg collection, sales, and dealer operations. Features dashboards, filtering, and JWT-secured APIs.",
      demoLink: "https://www.duckfarm.run.place",
      sourceLink: "https://github.com/prabhatsuman/DuckFarm",
    },
  ];

  return (
    <div id="projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 justify-center">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            demoLink={project.demoLink}
            sourceLink={project.sourceLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
