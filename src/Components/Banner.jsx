import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { motion } from "framer-motion";

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

const Banner = () => {
  return (
    <section className="relative min-h-screen w-full px-6 py-16 md:py-24 bg-transparent text-white font-inter overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            variants={fadeUp}
            custom={0}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
          >
            <span className="block text-gray-300">Hi, I'm</span>
            <span className="bg-gradient-to-r from-[#11c7fc] to-indigo-400 bg-clip-text text-transparent">
              Atef Abrar Hossain
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="text-xl sm:text-2xl lg:text-3xl font-medium text-blue-200"
          >
            Front-End Developer • MERN Stack Enthusiast
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed mx-auto md:mx-0"
          >
            I design and develop modern, responsive web applications using technologies like{" "}
            <span className="text-[#11c7fc] font-semibold">React</span>,{" "}
            <span className="text-cyan-300 font-semibold">Tailwind CSS</span>, and{" "}
            <span className="text-yellow-300 font-semibold">Node.js</span>. I also build scalable
            backends with{" "}
            <span className="text-green-300 font-semibold">Express</span> and{" "}
            <span className="text-emerald-300 font-semibold">MongoDB</span>. Currently studying
            Computer Science.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-wrap gap-3 pt-4 justify-center md:justify-start text-sm font-medium"
          >
            {["React", "Tailwind", "Node.js", "MongoDB", "Express", "Firebase", "JWT"].map(
              (tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-[0_0_10px_#11c7fc77]"
                >
                  {tech}
                </span>
              )
            )}
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={4}
            className="pt-8 flex gap-4 justify-center md:justify-start"
          >
            <button className="bg-cyan-950 text-cyan-400 border border-cyan-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
              <span className="bg-cyan-400 shadow-cyan-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              Resume
            </button>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 hover:scale-105 transition-all"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#11c7fc] shadow-[0_0_50px_rgba(17,199,252,0.4)]"
        >
          <img
            src="https://i.ibb.co/gFTHkkvf/BestPic.jpg"
            alt="Atef Abrar"
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </motion.div>
      </div>

      {/* Glow Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#11c7fc] opacity-20 rounded-full blur-3xl z-[-1]" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-700 opacity-20 rounded-full blur-3xl z-[-1]" />

      {/* Scroll Icon */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hidden lg:block absolute bottom-32 left-1/2 transform -translate-x-1/2 text-[#11c7fc] text-5xl cursor-pointer"
      >
        <IoIosArrowDropdown />
      </motion.div>
    </section>
  );
};

export default Banner;
