import React from "react";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const iconVariants = {
  rest: { x: 0, opacity: 1 },
  hover: { x: -20, opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

const textVariants = {
  rest: { x: 20, opacity: 0 },
  hover: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeInOut", delay: 0.15 } },
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-24 text-white font-inter overflow-hidden"
    >
      {/* Background Glows */}
      <motion.div
        className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 bg-blue-700 opacity-5 rounded-full blur-3xl z-[-1]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-1/4 -left-1/4 w-3/4 h-3/4 bg-purple-700 opacity-5 rounded-full blur-3xl z-[-1]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Title */}
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500  drop-shadow-lg px-4 sm:px-0 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Let’s Connect
      </motion.h2>

      {/* Description */}
      <motion.p
        className="max-w-5xl px-4 sm:px-0 mx-auto text-center mb-12 sm:mb-16 text-gray-300 text-base sm:text-lg leading-relaxed"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        I’m always open to learning, collaborating, and exploring new opportunities. Feel free to reach out whether to share ideas, solve challenges, or just say hello. Let’s connect and create something great.
      </motion.p>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left column: LinkedIn ,github and Phone */}
        <div className="flex flex-col gap-6 col-span-1">
          {/* linkedin */}
          <motion.a
            href="https://www.linkedin.com/in/atefabrarhossain/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="group relative flex items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-blue-800 to-blue-600 shadow-xl overflow-hidden hover:scale-[1.03] transition-transform duration-300 ease-out min-h-[110px] sm:min-h-[120px]"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <motion.div variants={iconVariants} className="text-white text-4xl sm:text-5xl flex-shrink-0">
              <AiFillLinkedin />
            </motion.div>
            <motion.span
              variants={textVariants}
              className="absolute top-0 bottom-0 flex items-center text-lg sm:text-xl font-semibold text-white select-none pointer-events-none"
            >
              LinkedIn
            </motion.span>
          </motion.a>
          {/* github */}
          <motion.a
            href="https://github.com/Tonmoy-codebreak"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="group relative flex items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 shadow-xl overflow-hidden hover:scale-[1.03] transition-transform duration-300 ease-out min-h-[110px] sm:min-h-[120px]"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <motion.div variants={iconVariants} className="text-white text-4xl sm:text-5xl flex-shrink-0">
              <AiFillGithub />
            </motion.div>
            <motion.span
              variants={textVariants}
              className="absolute top-0 bottom-0 flex items-center text-lg sm:text-xl font-semibold text-white select-none pointer-events-none"
            >
              GitHub
            </motion.span>
          </motion.a>
          
        </div>

        {/* Middle column: Email */}
        <motion.a
          href="mailto:atefabrar1@gmail.com"
          aria-label="Send an Email"
          className="group relative flex items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-purple-800 to-purple-600 shadow-xl overflow-hidden hover:scale-[1.03] transition-transform duration-300 ease-out col-span-1 min-h-[240px] sm:min-h-[264px]"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <motion.div variants={iconVariants} className="text-white text-6xl sm:text-7xl flex-shrink-0">
            <IoMail />
          </motion.div>
          <motion.span
            variants={textVariants}
            className="absolute top-0 bottom-0 flex items-center text-sm sm:text-lg font-semibold text-white select-none pointer-events-none px-2 text-center"
          >
            atefabrar1@gmail.com
          </motion.span>
        </motion.a>

        {/* Right column: Location */}
        <motion.a
          href="https://www.google.com/maps/search/?api=1&query=Dhaka,+Bangladesh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Location on Google Maps"
          className="group relative flex items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-green-700 to-green-600 shadow-xl overflow-hidden hover:scale-[1.03] transition-transform duration-300 ease-out col-span-1 min-h-[110px] sm:min-h-[120px]"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <motion.div variants={iconVariants} className="text-white text-4xl sm:text-5xl flex-shrink-0">
            <FaLocationDot />
          </motion.div>
          <motion.span
            variants={textVariants}
            className="absolute top-0 bottom-0 flex items-center text-lg sm:text-xl font-semibold text-white select-none pointer-events-none"
          >
            Dhaka, Bangladesh
          </motion.span>
        </motion.a>
      </motion.div>

      {/* Quick Response Message */}
      <motion.p
  className="mt-16 max-w-xl px-4 sm:px-0 mx-auto text-center text-gray-300 text-base sm:text-lg italic"
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  Feel free to reach out via <span className="text-gray-100">WhatsApp</span> at{" "}
  <a 
    href="https://wa.me/743253534" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-green-400 font-bold not-italic hover:underline"
  >
    +8801835212768
  </a>
  {" "}for a quicker response!
</motion.p>
    </section>
  );
};

export default Contact;
