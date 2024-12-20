import React from "react";
import CodeforcesProfile from "./CpProfiles/CodeforcesProfile";
import CodeChefProfile from "./CpProfiles/CodeChefProfile";
import LeetCodeProfile from "./CpProfiles/LeetCodeProfile";
import { motion } from "framer-motion";

const CompetitiveProgramming = () => {
  return (
    <div id="CompetitiveProgramming" className="p-6 md:p-24 text-white md:max-h-screen mb-9">
      <h1 className="text-2xl md:text-4xl font-bold mb-10">Competitive Programming Profiles</h1>
      <motion.div
        className="grid grid-cols-1 xl:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
      >
        <CodeforcesProfile />
        <CodeChefProfile />
        <LeetCodeProfile />
      </motion.div>
    </div>
  );
};

export default CompetitiveProgramming;