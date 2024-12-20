import React, { useState, useEffect } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["I'm Prabhat Suman", "Competitive Programmer", "and Backend Developer"];

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      const isComplete = text === currentRole;

      if (!isDeleting && isComplete) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1); // Move to the next role
      } else {
        const nextText = isDeleting
          ? currentRole.substring(0, text.length - 1)
          : currentRole.substring(0, text.length + 1);

        setText(nextText);
      }

      const speed = isDeleting ? 50 : 150;
      setTypingSpeed(speed);
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <div className="text-white flex flex-col md:flex-row w-full md:justify-between items-center md:items-start p-6 md:p-20 min-h-screen font-poppins">
      {/* Right Section (Avatar) */}
      <div className="w-48  md:w-80 flex justify-center md:justify-start">
        <img
          className="w-full max-md:rounded-full" // Ensures circular avatar across all devices
          src="/avatar.png"
          alt="Avatar"
        />
      </div>

      {/* Left Section */}
      <div className="md:w-3/5 text-center md:text-left mt-4 md:mt-0 md:ml-10"> {/* Reduced gap */}
        <h1 className="text-2xl sm:text-4xl md:text-7xl font-serif leading-tight tracking-tighter">
          <span className="block text-sm sm:text-2xl font-light md:text-4xl text-gray-300">
            Hello,
          </span>
          <span className="text-green-400">{text}</span>
          <span className="text-white blink-cursor">|</span>
        </h1>
        <a
          href="mailto:mr.prabhatsuman@gmail.com"
          className="mt-5 md:mt-10 text-white py-2 px-4 text-xs sm:text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] inline-block"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Home;
