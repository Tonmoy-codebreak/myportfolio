import React from "react";
import {
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiReactrouter,
  SiExpress,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoVercel } from "react-icons/io5";

const skills = {
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <IoLogoCss3 className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "Tailwind", icon: <RiTailwindCssFill className="text-cyan-400" /> },
    { name: "React Router", icon: <SiReactrouter className="text-pink-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-300" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  ],
  Tools: [
    { name: "GitHub", icon: <AiFillGithub className="text-white" /> },
    { name: "Vercel", icon: <IoLogoVercel className="text-white" /> },
    { name: "VS Code", icon: <VscVscode className="text-blue-300" /> },
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

const Skills = () => {
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
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-lg hover:shadow-cyan-500/20 transition duration-300"
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

              <div
                className={`grid ${
                  items.length >= 6 ? "md:grid-cols-3 grid-cols-2" : "grid-cols-2"
                } gap-6 sm:gap-8 place-items-center`}
              >
                {items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center space-y-2 bg-white/10 rounded-xl border border-transparent hover:border-cyan-300 hover:shadow-xl shadow-cyan-200/5 transition-all duration-300 cursor-pointer relative group overflow-hidden"
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 blur-md transition duration-500 z-0" />
                    <motion.div
                      whileHover={{ rotate: [0, 5, -5, 0], scale: 1.2 }}
                      transition={{ duration: 0.4 }}
                      className="text-3xl sm:text-4xl z-10"
                    >
                      {skill.icon}
                    </motion.div>
                    <p className="text-xs text-gray-300 font-medium z-10 group-hover:text-white text-center">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Glow Orbs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#0ff] opacity-10 rounded-full blur-3xl z-[-1]" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-700 opacity-10 rounded-full blur-3xl z-[-1]" />
    </section>
  );
};

export default Skills;
