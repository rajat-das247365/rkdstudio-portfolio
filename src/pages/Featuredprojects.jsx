import React from "react";
import team from "../assets/team.png";
import port from "../assets/port.png";
import arcbyte from "../assets/arcbyte.png";
import validation from "../assets/validation.png";

const projects = [
       {
      title: "Form validation",
      description:
        "A production-level authentication form Includes advanced password validation, visibility toggle, animated toast notifications, and GitHub Pages deployment support.",
      tech: "React · REST API · Tailwind",
      github: "https://github.com/your-username/portfolio",
      live: "https://rajat-das247365.github.io/form/",
      image:validation,
    },
  {
    title: "Arcbyte",
    description:
      "A modern, cinematic landing page built with React + Vite, featuring glassmorphism UI, subtle neon interactions, and a dark sci-fi design system.",
    tech: "React · REST API · Tailwind",
    live: "https://rajat-das247365.github.io/Arcbyte-Studio/",
    code: "*",
    image: arcbyte,
  },
  {
    title: "Team Console",
    description:
      "Team console is a user management dashboard similar to what admins use internally. It handles real world cases like loading states, validation, error handling, and responsive layouts.",
    tech: "React · JavaScript · Tailwind",
    live: "https://rajat-das247365.github.io/Team-console/",
    code: "*",
    image: team,
  },
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="w-full h-[90%] py-20 border border-slate-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col  ">

        {/* Section Header */}
        <div className="mb-12 max-w-xl">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-100">
            Featured Projects
          </h2>
          <p className="mt-3 text-slate-400">
            A selection of projects that highlight my front end development
            approach and problem solving skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-slate-800 rounded-xl p-6 bg-slate-900/40 flex flex-col justify-between hover:border-indigo-500/50 transition"
            >
              <div>
                <h3 className="text-lg font-medium text-slate-100">
                  {project.title}
                </h3>

                <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              <img className="my-8   object-fill" src={project.image} alt="" />

                <p className="mt-4 text-sm text-slate-500">
                  {project.tech}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <a
                  href={project.live}
                  target="blank"
                  className="text-indigo-500 text-sm font-medium hover:underline underline-offset-4"
                >
                  Live Demo
                </a>
                <a
                  href={project.code}
                  className="text-slate-400 text-sm font-medium hover:text-slate-200"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;

