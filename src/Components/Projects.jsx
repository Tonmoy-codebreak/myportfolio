import React from 'react';
import { motion } from 'framer-motion';
import { FaLink } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  },
});

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'LeafLink',
      image: 'https://i.ibb.co/C5YGDqkj/Screenshot-1788.png',
      description:
        'LeafLink is a vibrant gardening platform where users share tips, join events, and connect with growers. It features public/private posts, event sliders, and rich profiles.',
      features: [
        'Tip sharing (public/private)',
        'Event showcasing',
        'Gardener network',
        'Post management tools',
      ],
      technologies: [
        'React',
        'Tailwind CSS',
        'Node.js',
        'MongoDB',
        'Axios',
        'JWT',
        'Firebase Auth',
      ],
      liveLink: 'https://leaf-link-app.web.app/',
      githubLink: 'https://github.com/Tonmoy-codebreak/leaflink-clientside',
    },
    {
      id: 2,
      title: 'BlogBox',
      image: 'https://i.ibb.co/7tGmGn9t/Screenshot-1789.png',
      description:
        'BlogBox is a full-stack blog platform with modern UI, wishlist system, category filters, and animation-rich experience. Auth is secure and smooth.',
      features: [
        'Blog creation/reading',
        'Secure authentication',
        'Wishlist + category filter',
        'Search functionality',
      ],
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      liveLink: 'https://blogbox-1d1b8.web.app/',
      githubLink: 'https://github.com/Tonmoy-codebreak/blogbox-clientside',
    },
    {
      id: 3,
      title: 'DocTalk',
      image: 'https://i.ibb.co/hRCjBWjZ/Screenshot-1790.png',
      description:
        'DocTalk lets users easily find doctors, check their profiles, and book appointments for virtual or in-person visits with real-time availability.',
      features: [
        'Doctor directory + filters',
        'Appointment scheduling',
        'Responsive profiles',
        'Clean UI for mobile/desktop',
      ],
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      liveLink: 'https://doc-talk-tonmoy.netlify.app/',
      githubLink: 'https://github.com/Tonmoy-codebreak/doctalk',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 sm:px-10 lg:px-20">
      <motion.h2
        variants={fadeIn()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-5xl font-extrabold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r py-2 from-cyan-400 to-blue-700"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={fadeIn(index * 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-cyan-500/30 transition-all duration-300 group"
          >
            {/* Overlay Title Bottom Right on Hover */}
            <h3
              className="pointer-events-none absolute bottom-4 right-4
                text-white font-extrabold uppercase select-none opacity-0 group-hover:opacity-2
                transition-opacity duration-300 truncate max-w-[90%]
                text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[4rem] leading-none"
              aria-hidden="true"
            >
              {project.title}
            </h3>

            {/* Actual content */}
            <div className="relative z-10">
              <div className="w-full overflow-hidden rounded-xl mb-4 border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-2 text-white relative z-20">{project.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">{project.description}</p>

              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="before:content-['•'] before:mr-2 before:text-cyan-400">
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-200">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white/10 px-3 py-1 rounded-full font-medium hover:scale-105 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-cyan-500 text-white hover:scale-105 transition"
                >
                  <FaLink className="mr-2" /> Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-black/40 text-white hover:bg-white/20 transition"
                >
                  <AiFillGithub className="mr-2" /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
