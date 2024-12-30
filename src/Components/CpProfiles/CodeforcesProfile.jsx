import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";

const CodeforcesProfile = ({codeforcesData}) => {
 
  const data = {
    username: codeforcesData.username,
    title: codeforcesData.title.charAt(0).toUpperCase() + codeforcesData.title.slice(1),
    maxTitle: codeforcesData.maxTitle,
    contestRating: codeforcesData.contestRating,
    maxContestRating: codeforcesData.maxContestRating,
    ratedContests: codeforcesData.ratedContests,
    problemsSolved: codeforcesData.problemsSolved,
  };

  return (
    <div className="flex bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl bg-opacity-40 md:p-6 text-white relative">
      <div className="flex flex-col gap-0.5 md:gap-4 mb-1">
        <h2 className="text-sm md:text-2xl font-semibold">{data.username}</h2>
        <p className="text-cyan-300 max-md:text-sm md:text-xl">
          {data.title} (max: {data.maxTitle})
        </p>
        <p>
          <span className="max-md:text-xs md:font-bold">Contest Rating:</span> {data.contestRating}
        </p>
        <p>
          <span className="max-md:text-xs md:font-bold">Max Rating:</span> {data.maxContestRating}
        </p>
        <p>
          <span className="max-md:text-xs md:font-bold">Rated Contests:</span> {data.ratedContests}
        </p>
        <p>
          <span className="max-md:text-xs md:font-bold">Problems Solved:</span> {data.problemsSolved}
        </p>

        <a
          href="https://codeforces.com/profile/Prabhat_007"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mt-auto flex items-center gap-2 max-md:text-xs"
        >
          <FaExternalLinkAlt /> View Profile
        </a>
      </div>
      <div className="absolute right-0 top-0 h-full pr-6 flex items-center">
        <SiCodeforces className=" md:text-[6rem] text-[4rem]" />
      </div>
    </div>
  );
};

export default CodeforcesProfile;
