import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="w-full min-h-screen flex justify-between bg-slate-950 ">
                  <div className="border w-10 min-h-full border-t-0 border-l-0 border-gray-600/50  bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.09)_1px,transparent_1px,transparent_8px)]"></div>
                      <section
      id="contact"
      className="w-full py-24 border font-mono"
    >

      <div className="max-w-3xl h-100 mx-auto px-6 text-center ">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-slate-200 mb-4">
          Let’s work together
        </h2>

        {/* CTA */}
        <p className="text-slate-400 mb-10">
          I’m open to front end developer roles and freelance opportunities.
          Feel free to reach out if you’d like to collaborate or discuss a role.
        </p>

        {/* Email */}
        <a
          href="mailto:rd540032@gmail.com"
          className="inline-block text-lg font-medium text-indigo-400
                     hover:text-indigo-300 transition mb-10"
        >
          rd540032@gmail.com
        </a>

        {/* Social */}
        <div className="flex justify-center gap-6 text-slate-400 text-xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-200 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-200 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-200 transition"
            aria-label="Twitter"
          >
            <FaXTwitter />
          </a>
        </div>

        {/* Availability */}
        <p className="text-slate-500 text-sm mt-12">
          Available for opportunities · Remote or onsite
        </p>
      </div>
      <Footer />
    </section>
                  <div className="border w-10 min-h-full border-t-0 border-r-0 border-gray-600/50  bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.09)_1px,transparent_1px,transparent_8px)]"></div>


    </div>
  );
};

export default Contact;
