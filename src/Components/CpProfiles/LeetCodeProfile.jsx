import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const LeetCodeProfile = () => {
  // Data for the LeetCode profile
  const data = {
    username: "Prabhat_007",
    title: "Knight",
    maxRating: 2027,
    currentRating: 2027,
    contestsGiven: 23,
    problemsSolved: 450,
  };

  return (
    <div className="flex bg-[#0c0e19] shadow-xl shadow-slate-900 bg-opacity-40 rounded-2xl md:p-6 text-white relative">
      <div className="flex flex-col gap-0.5 md:gap-4 mb-1">
        <h2 className="md:text-2xl text-sm font-semibold">{data.username}</h2>
        <p className="text-orange-500 flex items-center gap-1">
          {data.title} 
        </p>
        <p>
          <span className="max-md:text-xs md:font-bold">Current Rating:</span> {data.currentRating}
        </p>
        <p>
          <span className="max-md:text-xs md:font-bold">Max Rating:</span> {data.maxRating}
        </p>
        <p>
          <span className="max-md:text-xs md:font-bold">Contests Given:</span> {data.contestsGiven}
        </p>
        <p>
          <span className="max-md:text-xs md:font-bold">Problems Solved:</span> {data.problemsSolved}
        </p>

        <a
          href="https://leetcode.com/u/Prabhat_007/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mt-auto flex items-center gap-2 max-md:text-xs"
        >
          <FaExternalLinkAlt /> View Profile
        </a>
      </div>
      <div className="absolute right-2 top-2 md:right-6 md:top-6 h-full flex items-center">
        <SiLeetcode className="text-orange-500 text-[6rem] md:text-[6rem]" />
      </div>
    </div>
  );
};

export default LeetCodeProfile;
