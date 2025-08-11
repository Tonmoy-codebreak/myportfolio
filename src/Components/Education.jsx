import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaPaintBrush, FaRocket } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const timelineItem = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Education = () => {
  const journeyPoints = [
    {
      year: "2020 - Present",
      title: "B.Sc. in Computer Science & Engineering",
      institution: "National University of Bangladesh",
      description:
        "Laying the academic groundwork for computational thinking and core CS principles. Currently in the final year, building a strong theoretical foundation.",
      icon: <FaGraduationCap className="text-2xl md:text-4xl text-purple-400" />,
    },
    {
      year: "2023",
      title: "Exploration into Graphics & Visual Design",
      institution: "Self-Initiated Learning",
      description:
        "My curiosity first led me to the visual side of technology, understanding aesthetics and user experience, which later became crucial for web development.",
      icon: <FaPaintBrush className="text-2xl md:text-3xl text-[#11c7fc]" />,
    },
    {
      year: "2025",
      title: "Web Development Bootcamp",
      institution: "Renowned Training Company",
      description:
        "Joined a rigorous bootcamp to elevate my development skills to a professional standard. Gained hands-on experience, solidified best practices, and embraced full-stack workflows.",
      icon: <FaCode className="text-2xl md:text-4xl text-purple-400" />,
    },
    {
      year: "Upcoming Years",
      title: "Expanding Horizons & Continuous Growth",
      institution: "Future Roadmap",
      description:
        "I aim to extend my skillset beyond the current stack, stay committed to lifelong learning, and actively contribute to impactful projects that push the boundaries of my capabilities.",
      icon: <FaRocket className="text-2xl md:text-3xl text-[#11c7fc]" />,
    },
  ];

  return (
    <section
      id="education"
      className="relative py-24 px-6 sm:px-12 md:px-20 text-white font-inter overflow-hidden bg-transparent"
    >
      {/* Glowing Background Effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#11c7fc] opacity-10 rounded-full blur-3xl z-[-1]" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-700 opacity-10 rounded-full blur-3xl z-[-1]" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center text-4xl sm:text-5xl font-extrabold py-2 bg-gradient-to-r from-[#11c7fc] to-purple-400 text-transparent bg-clip-text"
        >
          Education & My Learning Journey
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-300 text-xl text-center leading-relaxed max-w-3xl mx-auto border-b border-gray-700 pb-8"
        >
          My growth as a developer isn't just about degrees, but a continuous journey of curiosity, self-discovery, and hands-on building.
        </motion.p>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16 relative"
        >
          {/* Vertical line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#11c7fc] to-purple-400 rounded-full z-0" />

          {journeyPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={timelineItem}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Desktop Icon & Year */}
              <div className="hidden md:flex flex-col items-center w-32 shrink-0">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-900 border-4 border-purple-500 shadow-xl z-10">
                  {point.icon}
                </div>
                <span className="mt-3 text-sm font-medium text-gray-300">
                  {point.year}
                </span>
              </div>

              {/* Card */}
              <div
                className={`bg-gray-800 bg-opacity-70 backdrop-blur-md p-6 rounded-xl shadow-lg w-full md:w-3/5 border border-gray-700 hover:scale-[1.015] transition-transform duration-300 ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
              >
                {/* Mobile Icon + Year */}
                <div className="md:hidden flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 border border-purple-500">
                    {point.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-300">
                    {point.year}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#11c7fc] to-purple-400">
                  {point.title}
                </h3>
                <p className="text-sm text-gray-400 mb-2">{point.institution}</p>
                <p className="text-base text-gray-300 leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final Statement */}
        <motion.p
          variants={fadeUp}
          custom={6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-300 text-lg leading-relaxed pt-12 border-t border-gray-700 mt-20 text-center"
        >
          Today, I’m not just studying computer science, I’m living it. Every project I build, every problem I solve, and every hour I spend coding is a step forward on this journey. And the best part? I’ve only just begun.
        </motion.p>
      </div>
    </section>
  );
};

export default Education;
