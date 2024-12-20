import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";

const CodeforcesProfile = () => {
  // Data extracted from the template in the image
  const data = {
    username: "Prabhat_007",
    title: "Specialist",
    maxTitle: "Specialist",
    contestRating: 1541,
    maxContestRating: 1541,
    ratedContests: 88,
    problemsSolved: 885,
  };

  return (
    <div className="flex bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl bg-opacity-40 p-6 text-white relative">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">{data.username}</h2>
        <p className="text-cyan-300">
          {data.title} (max: {data.maxTitle})
        </p>
        <p>
          <span className="font-bold">Contest Rating:</span> {data.contestRating}
        </p>
        <p>
          <span className="font-bold">Max Rating:</span> {data.maxContestRating}
        </p>
        <p>
          <span className="font-bold">Rated Contests:</span> {data.ratedContests}
        </p>
        <p>
          <span className="font-bold">Problems Solved:</span> {data.problemsSolved}
        </p>

        <a
          href="https://codeforces.com/profile/Prabhat_007"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mt-auto flex items-center gap-2"
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
