import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

  
const Footer = () => {
    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
}
  return (
    <div className="w-full h-40 flex justify-between items-center bg-slate-950">

    <footer className="w-full h-full border-t border-slate-800  ">

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <div className="text-center md:text-left">
          <p className="text-slate-200 font-medium">
            Rajat Kumar Das
          </p>
          <p className="text-slate-500 text-sm">
            Front End Developer
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5 text-slate-400 text-lg">
          <a
            href=""
            className="hover:text-slate-200 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href=""
            className="hover:text-slate-200 transition"
            aria-label="Twitter"
          >
            <FaXTwitter />
          </a>
          <a
            href=""
            className="hover:text-slate-200 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-slate-500 text-xs pb-6">
        © {new Date().getFullYear()} Rajat Kumar Das. All rights reserved.
      </div>
      <div className="backToTop w-full  flex justify-end ">
        <div className="w-10 h-10 border border-slate-300 rounded-full flex justify-center items-center mx-5">
        <button onClick={scrollToTop} className="text-2xl text-slate-200"  ><FaArrowUp /></button>
        </div>
      </div>
    </footer>

    </div>
  );
};

export default Footer;
