import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa6";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";

const Hero = () => {
    return (
        <div className="w-full border border-slate-800 flex  items-center flex-col lg:flex-row ">
<div className="left w-full lg:w-[70%] flex flex-col items-center justify-center px-6 lg:px-10 gap-6 lg:gap-8 py-12">
                <h4 className="text-3xl font-bold tracking-widest">
                    HELLO<span className="text-indigo-500">!</span>
                </h4>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center">
                    I'm{" "}
                    <span className="text-indigo-500 tracking-wider">
                        RAJAT KUMAR DAS
                    </span>
                </h1>
<h4 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-300 text-center">
                    Front End Developer
                </h4>
<h4 className="text-center text-base sm:text-lg lg:text-xl max-w-2xl">
                    Front end developer with hands on experience building real world web
                    interfaces using{" "}
                    <span className="text-indigo-500 font-semibold underline decoration-indigo-500 underline-offset-4">
                        React and modern CSS
                    </span>
                </h4>
<div className="btn flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <button className="text-lg w-40  px-6 py-3 border border-[#63D0FF] text-[#63D0FF] rounded hover:bg-[#63D0FF] hover:text-[#030712] transition cursor-pointer">
                        Hire Me
                    </button>
                    <button className="text-lg w-40  px-6 py-3 border border-[#63D0FF] text-[#63D0FF] rounded hover:bg-[#63D0FF] hover:text-[#030712] transition cursor-pointer">
                        <a
                            href='/rkd.pdf'
                            download
                            target="_blank"
                            rel="noreferrer"
             
                        >
                            Download CV
                        </a>


                    </button>
                </div>
<div className="icons flex flex-wrap justify-center gap-6 text-2xl w-full max-w-md border border-slate-800 py-4">
                    <FaReact />
                    <FaJs />
                    <SiHtml5 />
                    <SiCss3 />
                    <TbBrandTailwind />
                </div>
            </div>
<div className="right w-full lg:w-[30%] flex justify-center">
<div className="rightCard w-full max-w-sm lg:w-full my-8 lg:my-15 px-6 py-8 border border-slate-800 rounded-3xl bg-slate-900/40">
                    <div className="">
<ul className="text-slate-300 flex flex-col gap-6 text-base sm:text-lg">
                            <li className="mb-10">
                                <span className="text-[#63D0FF]">#</span> Currently working as
                                Front End Developer.
                            </li>
                            <li className="mb-10">
                                <span className="text-[#63D0FF]">#</span> 1+ year experience building frontend applications.
                            </li>
                            <li className="mb-10">
                                <span className="text-[#63D0FF]">#</span> React · HTML · CSS ·
                                JavaScript · Tailwind CSS{" "}
                            </li>
                            <li className="">
                                <span className="text-[#63D0FF]">#</span> Open to frontend developer roles opportunities.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
