import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 font-mono flex justify-between">
      <div className="border w-10 min-h-full border-t-0 border-l-0 border-gray-600/50  bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.09)_1px,transparent_1px,transparent_8px)]"></div>

      <div className="w-[80%] flex flex-col items-center">
        
        {/* Hero Nav */}
        <div className="fixed w-full h-10 border border-slate-800 mt-10 flex justify-around items-center bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.09)_1px,transparent_1px,transparent_8px)] ">
          <Link
            className="text-[#63D0FF] font-semibold text-l hover:text-slate-200"
            to="hero"
          >
            HERO
          </Link>
          <Link
            className="text-[#63D0FF] font-semibold text-l hover:text-slate-200"
            to="skills"
          >
            SKILLS
          </Link>
          <Link
            className="text-[#63D0FF] font-semibold text-l hover:text-slate-200"
            to="featuredprojects"
          >
            FEATURED
          </Link>
         
        </div>

        {/* Nested content */}
        <div className="w-full h-[80%] mt-29 fixed">
          <Outlet />
        </div>
      </div>

      <div className="border w-10 min-h-full border-t-0 border-r-0 border-gray-600/50  bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.09)_1px,transparent_1px,transparent_8px)]"></div>
    </div>
  );
};

export default Home;
