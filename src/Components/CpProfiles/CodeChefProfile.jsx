import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { motion } from "framer-motion";

const CodeChefProfile = () => {
  const data = {
    username: "prabhats_007",
    title: "4-star",
    maxRating: 1870,
    currentRating: 1851,
    contestsGiven: 48,
    problemsSolved: 168,
  };

  return (
    <motion.div
      className="flex bg-[#0c0e19] shadow-xl shadow-slate-900 bg-opacity-40 rounded-2xl p-4 md:p-6 text-white relative"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-2 md:gap-4">
        <h2 className="text-lg md:text-2xl font-semibold">{data.username}</h2>
        <p className="text-yellow-400 flex items-center gap-1">
          {data.title} {[...Array(4)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-sm md:text-base">&#9733;</span>
          ))}
        </p>
        <p>
          <span className="font-bold">Current Rating:</span> {data.currentRating}
        </p>
        <p>
          <span className="font-bold">Max Rating:</span> {data.maxRating}
        </p>
        <p>
          <span className="font-bold">Contests Given:</span> {data.contestsGiven}
        </p>
        <p>
          <span className="font-bold">Problems Solved:</span> {data.problemsSolved}
        </p>

        <a
          href="https://www.codechef.com/users/prabhats_007"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mt-auto flex items-center gap-2"
        >
          <FaExternalLinkAlt /> View Profile
        </a>
      </div>
      <div className="absolute right-2 top-2 md:right-6 md:top-6 h-full flex items-center">
        <SiCodechef className="text-[3rem] md:text-[6rem]" />
      </div>
    </motion.div>
  );
};

export default CodeChefProfile;