import React from "react";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiJquery, SiNetlify } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
    { name: "ReactJS", icon: <FaReact className="text-blue-500 text-4xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 text-4xl" /> },
    { name: "jQuery", icon: <SiJquery className="text-blue-600 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-4xl" /> },
    { name: "Git & GitHub", icon: <FaGithub className="text-gray-800 text-4xl" /> },
    { name: "Deployment", icon: <SiNetlify className="text-green-500 text-4xl" /> },
  ];

  return (
    <div className="bg-[rgb(55,55,55)] py-10" id="skills">
      <h2 className="text-center text-white text-3xl font-bold mb-10">My Tech Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 sm:p-5 hover:scale-105 transition-transform duration-300"
          >
            {skill.icon}
            <p className="text-gray-800 text-lg font-semibold mt-3">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
