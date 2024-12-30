import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";

const CodeChefProfile = ({codechefData}) => {
  const data = {
    username: codechefData.username,
    title: parseInt(codechefData.stars.charAt(0), 10),
    maxRating: codechefData.highestRating,
    currentRating: codechefData.currentRating,
    contestsGiven: codechefData.contestgiven,
    countryRank: codechefData.countryrank,
  };

  return (
    <div className="flex bg-[#0c0e19] shadow-xl shadow-slate-900 bg-opacity-40 rounded-2xl md:p-6 mb-2 text-white relative">
      <div className="flex flex-col gap-0.5 md:gap-4 mb-1">
        <h2 className="md:text-2xl text-sm font-semibold">{data.username}</h2>
        <p className="text-yellow-400 flex items-center gap-1 md:text-xl">
          {data.title}{" "}
          {[...Array(data.title)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-sm md:text-base">
              &#9733;
            </span>
          ))}
        </p>
        <p>
          <span className="max-md:text-xs md:font-bold">Current Rating:</span>{" "}
          {data.currentRating}
        </p>
        <p>
          <span className="max-md:text-xs md:font-bold">Max Rating:</span>{" "}
          {data.maxRating}
        </p>
        <p>
          <span className="max-md:text-xs md:font-bold">Contests Given:</span>{" "}
          {data.contestsGiven}
        </p>
        <p>
          <span className="max-md:text-xs md:font-bold">Country Rank:</span>{" "}
          {data.countryRank}
        </p>

        <a
          href="https://www.codechef.com/users/prabhats_007"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mt-auto flex items-center gap-2 max-md:text-xs"
        >
          <FaExternalLinkAlt /> View Profile
        </a>
      </div>
      <div className="absolute right-2 top-2 md:right-6 md:top-6 h-full flex items-center">
        <SiCodechef className="text-[6rem] md:text-[6rem]" />
      </div>
    </div>
  );
};

export default CodeChefProfile;
