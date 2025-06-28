import React from "react";
import { NavLink } from "react-router";
import { AiFillHome } from "react-icons/ai";
import { IoCodeSlashOutline } from "react-icons/io5";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { MdOutlineFolderOpen } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink to="/#banner" className="flex items-center gap-1 px-2 py-1">
          <AiFillHome className="text-lg" /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/#skills" className="flex items-center gap-1 px-2 py-1">
          <IoCodeSlashOutline className="text-lg" /> Skills
        </NavLink>
      </li>
      <li>
        <NavLink to="/#education" className="flex items-center gap-1 px-2 py-1">
          <PiChalkboardTeacherFill className="text-lg" /> Education
        </NavLink>
      </li>
      <li>
        <NavLink to="/#projects" className="flex items-center gap-1 px-2 py-1">
          <MdOutlineFolderOpen className="text-lg" /> Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/#contact" className="flex items-center gap-1 px-2 py-1">
          <RiContactsFill className="text-lg" /> Contact
        </NavLink>
      </li>
    </>
  );

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <div>
            <img
              src="https://i.ibb.co/84sF1H1D/abrar-final-logo.png"
              alt="Abrar logo"
              className="w-20 lg:w-20"
              loading="lazy"
            />
          </div>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg gap-4">{navOptions}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative cursor-pointer py-2 px-4 text-xs lg:py-3 md:px-6 md:text-sm text-center font-barlow inline-flex justify-center text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden"
          >
            <span className="relative z-20">Resume</span>
            <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
