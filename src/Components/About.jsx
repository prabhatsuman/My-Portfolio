import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";

const About = () => {
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

  return (
    <div id="about" className="p-6 md:p-24 text-white">
      {/* Static Heading */}
      <h1
        className="text-2xl md:text-4xl font-bold "
        
      >
        About
      </h1>

      {/* Main Content */}
      <div
       
        ref={sectionRef}
        className="text-white bg-[#0c0e19] shadow-xl shadow-slate-900 md:max-h-screen rounded-2xl bg-opacity-40 mt-4 md:p-16"
      >
        <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-12">
          {/* Avatar Section */}
          <div className="md:w-1/3 flex justify-center items-center">
            <div className="bg-gray-700 w-full h-full flex justify-center items-center rounded-2xl max-md:p-6">
              <FaLaptopCode size={120} className="max-md:w-16 max-md:h-16 rounded-xl" color="white" />
            </div>
          </div>

          {/* About Text Section */}
          <div className="md:w-2/3">
            <ul className="space-y-4" >
              {/* Education Section */}
              <motion.li
                initial={{ x: -50, opacity: 0 }}
                animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex gap-4 py-2"
              >
                <IoArrowForward size={30} className="mt-1 max-md:w-5 max-md:h-5" />
                <span className="w-full">
                  <h1 className="text-xl md:text-3xl font-semibold leading-normal">
                    Education
                  </h1>
                  <p className="text-sm md:text-lg leading-tight">
                    Final-year BTech Computer Science student at IIIT Jabalpur.
                    Focused on mastering software development.
                  </p>
                </span>
              </motion.li>

              {/* Competitive Programming Section */}
              <motion.li
                initial={{ x: -50, opacity: 0 }}
                animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-4 py-2 "
              >
                <IoArrowForward size={30} className="mt-1 max-md:w-5 max-md:h-5" />
                <span className="w-full">
                  <h1 className="text-lg md:text-3xl font-semibold leading-normal">
                    Competitive Programmer
                  </h1>
                  <p className="text-sm md:text-lg leading-tight">
                    Specialist on Codeforces with a peak rating of 1494. Achieved
                    top 2.35% globally on LeetCode with a maximum rating of 2027.
                    Active participant in coding contests and problem-solving
                    platforms.
                  </p>
                </span>
              </motion.li>

              {/* Backend Development Section */}
              <motion.li
                initial={{ x: -50, opacity: 0 }}
                animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex gap-4 py-2"
              >
                <IoArrowForward size={30} className="mt-1 max-md:w-5 max-md:h-5" />
                <span className="w-full">
                  <h1 className="text-lg md:text-3xl font-semibold leading-normal">
                    Backend Developer
                  </h1>
                  <p className="text-sm md:text-lg leading-tight">
                    Proficient in building robust REST APIs and WebSocket
                    applications using Django and PostgreSQL. Experienced in
                    containerizing applications with Docker for seamless
                    deployment.
                  </p>
                </span>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
