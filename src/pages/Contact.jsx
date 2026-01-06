import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-24 border bg-slate-950"
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
  );
};

export default Contact;
