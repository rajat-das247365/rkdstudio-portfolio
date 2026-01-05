import React from "react";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa6";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";

const Skills = () => {
  return (
    <div className="w-full">
      <div className="icon w-full flex justify-center mb-10">
           <div className="icons flex justify-around items-center text-2xl text-slate-200 h-15 w-150 border border-slate-800 ">
                      <FaReact />
                      <FaJs />
                      <SiHtml5 />
                      <SiCss3 />
                      <TbBrandTailwind />
                  </div>
                  </div>
      <section className="w-full border border-slate-800 flex justify-center mb-10 px-4 py-6">
        <div className="w-full max-w-6xl text-slate-300">
          <h1 className="mt-10 text-4xl font-semibold">Skills</h1>

          <p className="mt-6 max-w-2xl text-slate-400">
            Technologies and tools I use to build clean, scalable front end
            applications.
          </p>

          {/* Cards */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-slate-800 rounded-2xl bg-slate-900/40 px-8 py-6">
              <h3 className="mb-4 text-lg font-medium">Frontend</h3>
              <ul className="space-y-2 text-slate-400">
                <li>React</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </div>

            <div className="border border-slate-800 rounded-2xl bg-slate-900/40 px-8 py-6">
              <h3 className="mb-4 text-lg font-medium">Styling & UI</h3>
              <ul className="space-y-2 text-slate-400">
                <li>Tailwind CSS</li>
                <li>Responsive Design</li>
                <li>Accessible UI (Basics)</li>
              </ul>
            </div>

            <div className="border border-slate-800 rounded-2xl bg-slate-900/40 px-8 py-6">
              <h3 className="mb-4 text-lg font-medium">Tools & Workflow</h3>
              <ul className="space-y-2 text-slate-400">
                <li>Git & GitHub</li>
                <li>REST APIs</li>
                <li>Vite</li>
                <li>VS Code</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
