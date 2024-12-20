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
    <div className="flex bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl bg-opacity-40 p-6 text-white relative">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">{data.username}</h2>
        <p className="text-orange-500">
           {data.title}
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
          href="https://leetcode.com/u/Prabhat_007/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mt-auto flex items-center gap-2"
        >
          <FaExternalLinkAlt /> View Profile
        </a>
      </div>
      <div className="absolute right-0 top-0 h-full pr-6 flex items-center">
        <SiLeetcode className="text-orange-500 md:text-[6rem] text-[4rem]" />
      </div>
    </div>
  );
};

export default LeetCodeProfile;
