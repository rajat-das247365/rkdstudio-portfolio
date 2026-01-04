import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="w-full py-20 border border-slate-950">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-12 max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100">
            Skills
          </h2>
          <p className="mt-3 text-slate-400">
            Technologies and tools I use to build clean, scalable front end
            applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Frontend */}
          <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
            <h3 className="text-lg font-medium text-slate-100 mb-4">
              Frontend
            </h3>
            <ul className="space-y-2 text-slate-400">
              <li>React</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>

          {/* Styling */}
          <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
            <h3 className="text-lg font-medium text-slate-100 mb-4">
              Styling & UI
            </h3>
            <ul className="space-y-2 text-slate-400">
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
              <li>Accessible UI (Basics)</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/40">
            <h3 className="text-lg font-medium text-slate-100 mb-4">
              Tools & Workflow
            </h3>
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
  );
};

export default Skills;
