import React from "react";

const About = () => {
  return (
    <div className="bg-[#030712] w-full min-h-screen flex justify-between text-slate-200 font-mono">

      <div className="border w-10 min-h-screen border-t-0 border-l-0 border-gray-600/50  bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.09)_1px,transparent_1px,transparent_8px)]"></div>
      <div id="About" className="w-full h-130 border border-slate-800 my-16 flex justify-center items-center">
       <div className=" w-250 ">
        <div className="header  mb-10 mt-10 mx-20 text-lg">
          <h1 className="text-3xl font-bold ">About Me</h1>
          <p className="text-slate-400 max-w-xl mt-5">
            A quick snapshot of who I am and how I approach front end development.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2  w-1/2">


          <div className="text-slate-400 leading-relaxed space-y-5 w-200 mx-20 text-lg">
            <p>
              I’m a front end developer focused on building clean, responsive,
              and accessible user interfaces using modern web technologies.
            </p>

            <p>
              Over the past year, I’ve worked on real world projects where I
              collaborated with teams, consumed APIs, and translated designs
              into reliable front end code.
            </p>

            <p>
              I care about writing maintainable components, improving user
              experience, and continuously sharpening my skills through
              hands on development.
            </p>
          </div>
        </div>
        </div>
              <div className="border w-10 min-h-full border-t-0 border-b-0  border-gray-600/50  bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.09)_1px,transparent_1px,transparent_8px)]"></div>

        <div className="right w-100 h-100  overflow-hidden ">
          <img className="object-cover" src="https://cdni.iconscout.com/illustration/premium/thumb/working-on-computer-illustration-svg-download-png-9039212.png" alt="" />
        </div>
      </div>
      <div className="border w-10 min-h-screen border-t-0 border-r-0 border-gray-600/50  bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.09)_1px,transparent_1px,transparent_8px)]"></div>

    </div>
  );

};

export default About;
