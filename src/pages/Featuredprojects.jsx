import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built to showcase front end skills and projects.",
    tech: "React · Tailwind CSS · React Router",
    live: "*",
    code: "*",
  },
  {
    title: "API Dashboard",
    description:
      "Data driven dashboard with API integration, filtering, and loading states.",
    tech: "React · REST API · Tailwind",
    live: "*",
    code: "*",
  },
  {
    title: "UI Form System",
    description:
      "Reusable form components with validation and clean UX patterns.",
    tech: "React · JavaScript · Tailwind",
    live: "*",
    code: "*",
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
              className="border border-slate-800 rounded-xl p-6 bg-slate-900/40 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-medium text-slate-100">
                  {project.title}
                </h3>

                <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <p className="mt-4 text-sm text-slate-500">
                  {project.tech}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <a
                  href={project.live}
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

