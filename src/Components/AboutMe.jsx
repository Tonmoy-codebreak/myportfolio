import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen px-6 py-24 md:py-32 flex items-center justify-center font-inter text-white overflow-hidden "
    >
      <motion.div
        className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left: Profile Image */}
        <motion.div
          variants={itemVariants}
          className="relative w-full max-w-md mx-auto group"
        >
          <div className="relative rounded-xl overflow-hidden border-4 border-cyan-500 transition-transform duration-500 group-hover:scale-105">
            <img
              src="https://i.ibb.co/cXFYYt3K/best-black-and-white.jpg"
              alt="Abrar"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition duration-500"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/500x600/cccccc/333333?text=Image";
              }}
            />
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left space-y-8"
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 leading-relaxed"
          >
            I’ve always had a thing for anything digital whether it's coding,
            graphics designing, or video editing. But for a while, I wasn’t sure
            what path to follow. Even though design fascinated me with its elegance,
            web development gave me the perfect blend of logic and creativity.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-400 leading-relaxed border-l-4 border-cyan-500 pl-5 italic"
          >
            Building the front end feels like painting on a limitless canvas. I’m
            currently pursuing a B.Sc. in CSE at National University while constantly
            growing, learning, and adding more strokes of possibility with each line
            of code.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
