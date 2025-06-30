import React from "react";
import { FaLink } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const projectChallenges = {
  LeafLink:
    "While developing LeafLink, I faced challenges with dashboard outlet rendering, needing to rerender specific components dynamically to properly display updated content without full reloads. Managing complex state in this multi-user environment required careful optimization to maintain smooth UX.",
  BlogBox:
    "Setting up the Axios interceptor with JWT tokens was tricky initially, but integrating Firebase JWT resolved authentication smoothly. Additionally, backend token verification setup posed challenges, especially ensuring secure, seamless token refresh and validation flows across the app.",
  DocTalk:
    "One major challenge was correctly configuring each doctor's availability based on the current date and real-time appointment schedules. Handling concurrent bookings and keeping the calendar updated in real-time demanded careful synchronization between frontend and backend.",
};

const projectImprovements = {
  LeafLink:
    "Future improvements include implementing live event management with real-time updates, enhancing the gardener networking features, and adding advanced post analytics to help users track engagement. Integration of community-driven event suggestions and better moderation tools are also planned.",
  BlogBox:
    "Upcoming plans involve expanding category options, allowing users to embed YouTube videos directly in their blog posts, and improving search with advanced filters. Additionally, I aim to introduce personalized reading recommendations and richer post formatting capabilities.",
  DocTalk:
    "Plans for DocTalk include adding more granular doctor availability options, integrating notification reminders for upcoming appointments, and improving the booking UI for smoother scheduling. I also plan to support multiple visit types with enhanced virtual consultation tools and patient feedback features.",
};

const briefDescriptions = {
  LeafLink:
    "LeafLink is a dynamic gardening platform that empowers users to share valuable tips, participate in engaging events, and connect with a community of passionate growers. The platform supports both public and private posts, vibrant event sliders, and comprehensive user profiles that foster an interactive and supportive experience.",
  BlogBox:
    "BlogBox is a modern full-stack blogging platform that combines a sleek and intuitive user interface with powerful features such as wishlists, category filtering, and rich animations. It offers secure authentication and a smooth, personalized experience for both reading and creating blogs across devices.",
  DocTalk:
    "DocTalk is a user-friendly healthcare appointment system designed to help users find doctors, explore detailed profiles, and book appointments for virtual or in-person visits with real-time availability. The platform simplifies scheduling while ensuring timely access to healthcare professionals with an intuitive interface.",
};

const Details = ({ project, onClose }) => {
  if (!project) return null;

  const challenges = projectChallenges[project.title] || "";
  const improvements = projectImprovements[project.title] || "";
  const description = briefDescriptions[project.title] || project.description;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 text-white max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl p-6 sm:p-8 rounded-2xl shadow-lg relative overflow-auto max-h-[90vh] sm:max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
        style={{minWidth: "280px"}}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-cyan-400 focus:outline-none"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Project Image */}
        {project.image && (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full max-h-64 sm:max-h-72 md:max-h-80 object-contain rounded-2xl mb-6"
          />
        )}

        <h1 className="text-3xl sm:text-4xl font-bold mb-4 truncate">{project.title}</h1>

        {/* Main Technology Stack */}
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Main Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-white/10 text-xs sm:text-sm text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Brief Description */}
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Brief Description</h2>
          <p className="text-gray-300 whitespace-pre-line text-sm sm:text-base">{description}</p>
        </div>

        {/* Challenges Faced */}
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Challenges Faced</h2>
          <p className="text-gray-300 whitespace-pre-line text-sm sm:text-base">{challenges}</p>
        </div>

        {/* Potential Improvements */}
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            Potential Improvements & Future Plans
          </h2>
          <p className="text-gray-300 whitespace-pre-line text-sm sm:text-base">{improvements}</p>
        </div>

        {/* Links */}
        <div className="mb-6 flex flex-wrap gap-3 justify-center sm:justify-start">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 rounded-full text-sm sm:text-base hover:scale-105 transition transform"
          >
            <FaLink /> Live
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-full text-sm sm:text-base hover:bg-white/20 transition"
          >
            <AiFillGithub /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Details;
