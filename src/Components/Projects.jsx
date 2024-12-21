import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaReact,
  FaDocker,
} from "react-icons/fa";
import { SiPostgresql, SiRedis, SiDjango } from "react-icons/si";

const techIconsMapping = {
  scheduling: [<FaJava key="java" color="#007396" size="40" />],
  chat: [
    <FaReact key="react" color="#61DAFB" size="40" />, 
    <SiRedis key="redis" color="#D82C20" size="40" />, 
    <SiDjango key="django" color="green" size="40" />, 
    <FaDocker key="docker" color="#2496ED" size="40" />
  ],
  farm: [
    <SiPostgresql key="postgresql" color="#336791" size="40" />, 
    <FaReact key="react" color="#61DAFB" size="40" />, 
    <SiDjango key="django" color="green" size="40" />, 
    <FaDocker key="docker" color="#2496ED" size="40" />
  ],
};

const ProjectCard = ({
  title,
  description,
  demoLink,
  sourceLink,
  isVisible,
  techIcons,
}) => {
  return (
    <motion.div
      className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.7 }}
    >
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal mt-4 line-clamp-2 overflow-hidden">
        {title}
      </h3>
      <div className="px-4 py-6 flex flex-wrap gap-4 justify-center items-center">
        {techIcons.map((icon, index) => (
          <div key={index} className="text-center">
            {icon}
          </div>
        ))}
      </div>
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
    </motion.div>
  );
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projectData = [
    {
      title: "Process Scheduling Visualizer",
      description:
        "A visualizer for CPU scheduling algorithms (SJF, Round Robin, FCFS, Priority-based) with real-time progress tracking and interactive UI using Java Swing.",
      demoLink: "https://github.com/prabhatsuman/CPUSchedulingVisualizer",
      sourceLink: "https://github.com/prabhatsuman/CPUSchedulingVisualizer",
      techKey: "scheduling",
    },
    {
      title: "Random Chat Platform",
      description:
        "An anonymous chat platform with real-time messaging using WebSockets, interest-based matching, and Redis caching.",
      demoLink: "https://github.com/prabhatsuman/RandomChat",
      sourceLink: "https://github.com/prabhatsuman/RandomChat",
      techKey: "chat",
    },
    {
      title: "Duck Farm Management System",
      description:
        "A system to manage multi-farm data, including egg collection, sales, and dealer operations. Features dashboards, filtering, and JWT-secured APIs.",
      demoLink: "https://www.duckfarm.run.place",
      sourceLink: "https://github.com/prabhatsuman/DuckFarm",
      techKey: "farm",
    },
  ];

  return (
    <div id="projects" ref={sectionRef} className="p-6 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold">Projects</h1>
      <div className="py-12 px-8 flex md:flex-wrap gap-5 md:justify-center max-md:overflow-x-auto scrollbar-hide">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            demoLink={project.demoLink}
            sourceLink={project.sourceLink}
            techIcons={techIconsMapping[project.techKey]}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
