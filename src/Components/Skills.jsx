import React, { useState } from "react";
import {
  FaChartPie,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiShieldKeyholeFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiReactrouter,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiAxios,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoVercel } from "react-icons/io5";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FiBarChart } from "react-icons/fi";


// Main Code xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const skills = {
  Frontend: [
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: IoLogoCss3, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { name: "Tailwind", icon: RiTailwindCssFill, color: "text-cyan-400" },
    { name: "React Router", icon: SiReactrouter, color: "text-pink-400" },
    { name: "React", icon: FaReact, color: "text-cyan-300" },
    { name: "Axios", icon: SiAxios, color: "text-blue-400" },
    { name: "Framer Motion", icon: TbBrandFramerMotion, color: "text-pink-400" },
    { name: "Recharts", icon: FaChartPie, color: "text-indigo-400" }
  ],
  Backend: [
    { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
    { name: "Express", icon: SiExpress, color: "text-gray-300" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
    { name: "Firebase", icon: SiFirebase, color: "text-yellow-400" },
    { name: "JWT", icon: RiShieldKeyholeFill, color: "text-yellow-400" },
    
  ],
  Tools: [
    { name: "GitHub", icon: AiFillGithub, color: "text-white" },
    { name: "Vercel", icon: IoLogoVercel, color: "text-white" },
    { name: "VS Code", icon: VscVscode, color: "text-blue-300" },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// Main Component xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const Skills = () => {
  const [hoveredIcons, setHoveredIcons] = useState({});

  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 px-4 sm:px-8 md:px-16 lg:px-24 text-white font-inter overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <h1 className="text-4xl sm:text-6xl font-bold text-transparent py-2 lg:pb-10 bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-500">
          My Skills
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
          {Object.entries(skills).map(([category, items], idx) => {
            const HoverIcon = hoveredIcons[category];

            return (
              <motion.div
                key={category}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-lg hover:shadow-cyan-500/20 transition duration-300 overflow-hidden"
              >
                <h2
                  className={`text-xl font-semibold text-center mb-6 ${
                    category === "Frontend"
                      ? "text-cyan-300"
                      : category === "Backend"
                      ? "text-green-400"
                      : "text-yellow-300"
                  }`}
                >
                  {category}
                </h2>

                {/* Background hover icon */}
                {HoverIcon && (
                  <div className="absolute -right-6 bottom-0 z-0 opacity-5">
                    <HoverIcon className="text-[25vw] md:text-[15vw] lg:text-[10vw] text-white" />
                  </div>
                )}

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 place-items-center z-10 relative">
                  {items.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.15 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        onMouseEnter={() =>
                          setHoveredIcons((prev) => ({
                            ...prev,
                            [category]: Icon,
                          }))
                        }
                        onMouseLeave={() =>
                          setHoveredIcons((prev) => ({
                            ...prev,
                            [category]: null,
                          }))
                        }
                        className="w-[70%] aspect-square flex flex-col items-center justify-center space-y-2 rounded-xl border border-transparent hover:border-cyan-300 hover:shadow-xl shadow-cyan-200/5 transition-all duration-300 cursor-pointer relative group"
                      >
                        <motion.div
                          whileHover={{ rotate: [0, 5, -5, 0], scale: 1.2 }}
                          transition={{ duration: 0.4 }}
                          className={`text-[5vw] sm:text-[3vw] md:text-3xl z-10 ${skill.color}`}
                        >
                          <Icon />
                        </motion.div>
                        <p className="text-xs text-gray-300 font-medium z-10 group-hover:text-white text-center">
                          {skill.name}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background Glow Orbs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#0ff] opacity-10 rounded-full blur-3xl z-[-1]" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-700 opacity-10 rounded-full blur-3xl z-[-1]" />
    </section>
  );
};

export default Skills;
