import React, { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

 

  return (
    <div className="w-full bg-[#030712] text-slate-200 border-b border-slate-800 font-mono sticky top-0">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-14 py-4 h-12">
        {/* Logo */}
        <h1 className="font-semibold text-[25px]">
          RKD<span className="text-[#63D0FF]">.STUDIO</span>
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-[18px]">
          <Link
            className="hover:text-[#63D0FF] transition inline-block border-b-2 border-transparent hover:border-[#63D0FF]"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-[#63D0FF] transition inline-block border-b-2 border-transparent hover:border-[#63D0FF]"
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className="hover:text-[#63D0FF] transition inline-block border-b-2 border-transparent hover:border-[#63D0FF]"
            to="/about"
          >
            About
          </Link>
          <Link
            className="hover:text-[#63D0FF] transition inline-block border-b-2 border-transparent hover:border-[#63D0FF]"
            to="/contact"
          >
            Contact
          </Link>
          

          <a
            href="https://github.com/rajat-das247365"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-[#63D0FF] transition"
          >
            <FaGithub />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-[#030712] border-t border-slate-800 text-[18px]">
          <a onClick={() => setOpen(false)} className={linkClass} href="#">
            Home
          </a>
          <a onClick={() => setOpen(false)} className={linkClass} href="#">
            Projects
          </a>
          <a onClick={() => setOpen(false)} className={linkClass} href="#">
            About
          </a>
          <a onClick={() => setOpen(false)} className={linkClass} href="#">
            Contact
          </a>

          <a
            href="https://github.com/rajat-das247365"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-[#63D0FF] transition"
          >
            <FaGithub />
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
