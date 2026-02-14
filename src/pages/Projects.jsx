import React from "react";
import Footer from "../components/Footer";
import { href } from "react-router-dom";
import issueImg from "../assets/issue.png";
import coffee from "../assets/cofee.png";
import education from "../assets/edu.png";
import validation from "../assets/validation.png";
import port from "../assets/port.png";

const Projects = () => {
    const projects = [
    {
      title: "Issue tracker",
      description:
        "Issue tracker is a user management dashboard similar to what admins use internally.",
      tech: ["React","Tailwind CSS", "React Router"],
      github: "https://github.com/your-username/portfolio",
      live: " https://rajat-das247365.github.io/issue-tracker/",
      image:issueImg,
    },
 
      {
      title: "Coffee Cafe",
      description:
        "Coffee Cafe is a responsive coffee shop landing page built with React and Tailwind CSS. It showcases featured drinks, daily deals.",
      tech: ["React", "Tailwind CSS", "React Router"],
      github: "https://github.com/your-username/portfolio",
      live: "https://rajat-das247365.github.io/coffee-cafe/",
      image:coffee,
    },
         {
      title: "Form validation",
      description:
        "A production-level authentication form Includes advanced password validation, visibility toggle, animated toast notifications, and GitHub Pages deployment support.",
      
      github: "https://github.com/your-username/portfolio",
      live: "https://rajat-das247365.github.io/form/",
      image:validation,
    },
      {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with React and Tailwind CSS to showcase projects and skills with a clean, responsive layout.",
      tech: ["React", "Tailwind CSS", "React Router"],
      github: "https://github.com/your-username/portfolio",
      live: "https://yourportfolio.com",
      image:port,
    },
         {
      title: "Study in India",
      description:
        "A responsive education landing page built with React, Vite, and Tailwind CSS, featuring modern UI, gradient styling, and reusable components.",
      tech: ["React", "Tailwind CSS", "React Router"],
      github: "https://github.com/your-username/portfolio",
      live: " https://rajat-das247365.github.io/education-company/",
      image:education,
    },
      {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with React and Tailwind CSS to showcase projects and skills with a clean, responsive layout.",
      tech: ["React", "Tailwind CSS", "React Router"],
      github: "https://github.com/your-username/portfolio",
      live: "https://yourportfolio.com",
    },
 
  ]
  return (
    <div className="w-full min-h-screen flex justify-between bg-slate-950 font-mono font-extrabold">
      <div className="border w-10 min-h-full border-t-0 border-l-0 border-gray-600/50  bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.09)_1px,transparent_1px,transparent_8px)]"></div>
        <div className="wrapper w-full min-h-screen">
          <section id="project" className="w-full min-h-screen">
            <div className="header border-l-0 border-r-0 mt-5 text-slate-200 text-4xl uppercase w-full flex justify-center border border-gray-600/50 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.09)_1px,transparent_1px,transparent_8px)]">
              <h1>My Projects</h1>
          
            </div>
            <div className="tagline w-full flex justify-center mt-12 text-center text-lg border border-gray-600/50 border-l-0 border-r-0">
                    <p className="text-slate-400 max-w-xl">
            Selected projects that demonstrate my front end skills,
            problem solving ability, and real world experience.
          </p>
            </div>
            <div className="w-full h-235 mt-12 border border-gray-600/50 grid grid-flow-col grid-rows-2">
            {projects.map((project,idx)=>
           <div key={project} className=" border border-gray-600/50 text-slate-400 px-8 py-2">
            
            <h3 className="text-slate-100 text-lg tracking-wider">{project.title}</h3>
            <p className="mt-5">{project.description}</p>
              <div className="img w-full  border overflow-hidden border-gray-600/50 my-4">
            <img className=" object-cover " src={project.image} alt="" />
            </div>
            <p className="w-full flex justify-around">{project.tech}
            </p>
          
            <div className="linkss w-full flex justify-around mt-2">
          <a className="text-indigo-500 hover:border-b" href={project.github}>Github</a>
          <a target="blank" className="hover:text-slate-100" href={project.live}>Live demo</a>
          </div>
            

            
           </div>
           )}
        
        
            </div>
          </section>
<Footer />
</div>
      <div className="border w-10 min-h-full border-t-0 border-r-0 border-gray-600/50  bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.09)_1px,transparent_1px,transparent_8px)]"></div>
    
    </div>
  );
};

export default Projects;
