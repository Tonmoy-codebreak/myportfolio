import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { AiFillHome } from "react-icons/ai";
import { IoCodeSlashOutline } from "react-icons/io5";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { MdOutlineFolderOpen } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

const navItems = [
  { id: "banner", label: "Home", icon: AiFillHome, offset: -120 },
  { id: "skills", label: "Skills", icon: IoCodeSlashOutline, offset: -80 },
  { id: "education", label: "Education", icon: PiChalkboardTeacherFill, offset: -80 },
  { id: "projects", label: "Projects", icon: MdOutlineFolderOpen, offset: -80 },
  { id: "contact", label: "Contact", icon: RiContactsFill, offset: 0 },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("banner");

  useEffect(() => {
    const timer = setTimeout(() => setActiveSection("banner"), 100);
    return () => clearTimeout(timer);
  }, []);

  const renderNavItems = () =>
    navItems.map(({ id, label, icon: Icon, offset }) => (
      <li
        key={id}
        className={`${
          activeSection === id ? "text-cyan-400 font-semibold" : ""
        }`}
      >
        <Link
          to={id}
          spy={true}
          smooth={true}
          offset={offset}
          duration={500}
          onSetActive={() => setActiveSection(id)}
          className="flex items-center gap-1 px-2 py-1 cursor-pointer"
        >
          <Icon className="text-lg" /> {label}
        </Link>
      </li>
    ));

  return (
    <div className="sticky top-0 lg:top-6 z-50 lg:mt-6 font-inter">
      <div
        className="navbar border-b-2 lg:border-2 border-gray-50 shadow-md text-white max-w-6xl mx-auto lg:rounded-3xl px-6 py-3"
        style={{
          backgroundImage:
            "linear-gradient(111.4deg, rgba(7,7,9,1) 6.5%, rgba(27,24,113,1) 93.2%)",
        }}
      >
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {renderNavItems()}
            </ul>
          </div>
          <img
            src="https://i.ibb.co/84sF1H1D/abrar-final-logo.png"
            alt="Abrar logo"
            className="w-20"
            loading="lazy"
          />
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg gap-4">{renderNavItems()}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative cursor-pointer py-2 px-4 text-xs lg:py-3 md:px-6 md:text-sm text-center font-barlow inline-flex justify-center text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline-2 focus:outline-white overflow-hidden"
          >
            <span className="relative z-20">Resume</span>
            <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
            <span className="absolute h-[20%] w-1/2 border-[#D4EDF9] rounded-tl-lg border-l-2 border-t-2 top-0 left-0" />
            <span className="absolute h-[60%] w-1/2 border-[#D4EDF9] rounded-tr-lg border-r-2 border-t-2 top-0 right-0 group-hover:h-[90%]" />
            <span className="absolute h-[60%] w-1/2 border-[#D4EDF9] rounded-bl-lg border-l-2 border-b-2 bottom-0 left-0 group-hover:h-[90%]" />
            <span className="absolute h-[20%] w-1/2 border-[#D4EDF9] rounded-br-lg border-r-2 border-b-2 bottom-0 right-0" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
