import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
   const linkClass =
    "text-[#63D0FF] font-semibold text-l hover:text-slate-200";

  const activeClass =
    "text-slate-200 font-bold";
  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 font-mono flex justify-between">
      <div className="border w-10 min-h-full border-t-0 border-l-0 border-gray-600/50  bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.09)_1px,transparent_1px,transparent_8px)]"></div>

      <div className="w-full flex flex-col items-center">

        {/* Hero Nav */}
        <div className="sticky top-20 w-full h-15 text-xl border border-slate-800 mt-10 flex justify-around items-center bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.09)_1px,transparent_1px,transparent_8px)] ">
          <NavLink
               className={({ isActive }) =>
              isActive ? activeClass : linkClass
            }
            to="hero"
          >
            HERO
          </NavLink>
          <NavLink
              className={({ isActive }) =>
              isActive ? activeClass : linkClass
            }
            to="skills"
          >
            SKILLS
          </NavLink>
          <NavLink
              className={({ isActive }) =>
              isActive ? activeClass : linkClass
            }
            to="featuredprojects"
          >
            FEATURED
          </NavLink>
             <NavLink
              className={({ isActive }) =>
              isActive ? activeClass : linkClass
            }
            to="certifications"
          >
            CERTIFICATIONS
          </NavLink>

        </div>

        {/* Nested content */}
        <div className="w-full h-[80%] mt-20 ">
          <Outlet />
        </div>
        <div className="w-full my-10">
        <Footer />
        </div>
      </div>


      <div className="border w-10 min-h-full border-t-0 border-r-0 border-gray-600/50  bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.09)_1px,transparent_1px,transparent_8px)]"></div>
      
    </div>
  );
};

export default Home;
