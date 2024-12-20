import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaReact,
  FaDocker,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiCplusplus,
  SiC,
  SiTailwindcss,
  SiMongodb,
  SiRedis,
  SiNginx,
  SiDjango,
} from "react-icons/si";

const techIcons = [
  { icon: <SiDjango color="green" size={50} />, name: "Django" },
  { icon: <SiPostgresql color="#336791" size={50} />, name: "PostgreSQL" },
  { icon: <FaPython color="#3776AB" size={50} />, name: "Python" },
  { icon: <FaJava color="#007396" size={50} />, name: "Java" },
  { icon: <SiCplusplus color="#00599C" size={50} />, name: "C++" },
  { icon: <SiC color="#A8B9CC" size={50} />, name: "C" },
  { icon: <FaHtml5 color="#E34F26" size={50} />, name: "HTML5" },
  { icon: <SiTailwindcss color="#06B6D4" size={50} />, name: "Tailwind CSS" },
  { icon: <SiMongodb color="#47A248" size={50} />, name: "MongoDB" },
  { icon: <FaReact color="#61DAFB" size={50} />, name: "React" },
  { icon: <SiRedis color="#DC382D" size={50} />, name: "Redis" },
  { icon: <FaDocker color="#2496ED" size={50} />, name: "Docker" },
  { icon: <SiNginx color="#009639" size={50} />, name: "Nginx" },
];

const Experience = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div id="experience" className="p-10 md:p-24">
      {/* Static Heading */}
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-10">
        Experience
      </h1>

      {/* Animated Content */}
      <motion.div
        className="flex flex-col md:flex-row flex-wrap items-center md:items-start md:justify-between"
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        {/* Technology Icons Section */}
        <motion.div
          className="flex flex-wrap md:w-1/2 md:gap-8 gap-4 py-10 relative"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {techIcons.map((tech, index) => (
            <motion.div
              key={index}
              className="p-3 bg-gray-900 bg-opacity-25 flex items-center rounded-2xl relative cursor-pointer"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {tech.icon}
              {hoveredTech === tech.name && (
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded p-2"
                >
                  {tech.name}
                </motion.span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Company Details Section */}
        <motion.div
          className="flex flex-col bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl bg-opacity-45 p-6 w-full md:w-2/5"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="text-white">
            <h2 className="text-lg font-bold leading-tight">
              Database & Integration Lead, Fusion IIIT
            </h2>
            <p className="text-sm leading-tight font-thin mb-4">
              Jan 2024 - Apr 2024
            </p>
            <ul className="text-sm p-2 list-disc list-inside">
              <li>
                Reviewed and merged 50+ pull requests for web modules in Django,
                ensuring data integrity and resolving conflicts.
              </li>
              <li>
                Managed database migrations for 30+ modules, populating data
                while avoiding redundancy and ensuring integrity.
              </li>
              <li>
                Led a team of 5 web developers to implement 10 critical use
                cases for the Health Center module.
              </li>
            </ul>
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience;
