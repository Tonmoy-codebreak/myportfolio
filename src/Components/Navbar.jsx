import React from "react";

const Navbar = () => {
  return (
    <div className="my-6">
      <div
        className="navbar shadow-md text-white max-w-6xl mx-auto md:rounded-3xl px-6 py-3"
        style={{
          backgroundImage:
            "linear-gradient(111.4deg, rgba(7,7,9,1) 6.5%, rgba(27,24,113,1) 93.2%)",
        }}
      >
        {/* Navbar Start (Logo + Dropdown) */}
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
              <li><a>Item 1</a></li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bold tracking-wide">Abrar</a>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </div>

        {/* Navbar End (Fancy Button) */}
        <div className="navbar-end">
          <button className="relative px-5 py-2 h-12 bg-black text-white font-bold rounded-full overflow-hidden group transition-all duration-300">
            <span className="relative z-10">Button</span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 z-0"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-700 z-0"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-1000 z-0"></span>
            <span className="absolute top-2.5 left-6 opacity-0 group-hover:opacity-100 text-white transition-opacity duration-700 z-10">Explore!</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
