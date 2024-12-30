import React, { useState, useEffect, useRef } from "react";
import CodeforcesProfile from "./CpProfiles/CodeforcesProfile";
import CodeChefProfile from "./CpProfiles/CodeChefProfile";
import LeetCodeProfile from "./CpProfiles/LeetCodeProfile";
import { motion } from "framer-motion";

const CompetitiveProgramming = ({codeforcesData,codechefData,leetcodeData}) => {
  
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
    <div
      id="CompetitiveProgramming"
      ref={sectionRef}
      className="p-6 md:p-24 text-white md:max-h-screen md:mb-9"
    >
      {/* Heading with dynamic text */}
      <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-10">
        <span className="block md:hidden">CP Profiles</span>
        <span className="hidden md:block">Competitive Programming Profiles</span>
      </h1>
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Codeforces Profile */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CodeforcesProfile
            codeforcesData={codeforcesData}
           />
        </motion.div>

        {/* CodeChef Profile */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CodeChefProfile
            codechefData={codechefData}
           />
        </motion.div>

        {/* LeetCode Profile */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <LeetCodeProfile
            leetcodeData={leetcodeData}
           />
        </motion.div>
      </div>
    </div>
  );
};

export default CompetitiveProgramming;
