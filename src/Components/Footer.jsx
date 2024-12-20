import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="contact"
      className="flex flex-col md:flex-row justify-between bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div className="mb-6 md:mb-0 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-xl font-normal mt-2">
          Feel free to reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-lg space-y-4 md:space-y-2">
        <li className="flex items-center gap-2">
          <FaPhoneAlt size={20} />
          <span>+91-7979866084</span>
        </li>
        <li className="flex items-center gap-2">
          <MdOutlineEmail size={20} />
          <span>mr.prabhatsuman@gmail.com</span>
        </li>
        <li className="flex items-center gap-2">
          <CiLinkedin size={20} />
          <a
            href="https://www.linkedin.com/in/prabhat07/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/prabhat07
          </a>
        </li>
        <li className="flex items-center gap-2">
          <FaGithub size={20} />
          <a
            href="https://github.com/prabhatsuman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/prabhatsuman
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
