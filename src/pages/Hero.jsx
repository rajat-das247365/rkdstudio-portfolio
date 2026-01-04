import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
    return (
        <div className=' w-full h-[95%] border border-slate-800 flex '>
            <div className=" left w-[70%] h-full  flex flex-col items-center justify-center px-10 gap-5 text-slate-500">
                <h4 className='text-3xl font-bold tracking-widest'>HELLO<span className='text-indigo-500'>!</span></h4>
                <h1 className='text-6xl font-bold'>I'm <span className='text-indigo-500 tracking-wider' >RAJAT KUMAR DAS</span></h1>
                <h4 className='text-5xl font-extrabold text-slate-300 leading-relaxed tracking-wider'>Front End Developer</h4>
                <h4 className='text-center text-xl'>Front end developer with hands on experience building real world web interfaces using <span className='text-indigo-500 font-semibold underline decoration-indigo-500 underline-offset-4' >React and modern CSS</span></h4>
                <div className='btn  text-center leading-relaxed text-slate-200 rounded-2xl '>
                    <button className='w-40 bg-[#032236] text-xl font-semibold p-1 hover:text-[] border border-[#63D0FF] text-[#63D0FF] mt-4 cursor-pointer'>Hire Me</button>
                </div>
                <div className="social flex w-50 justify-around p-3 text-2xl text-slate-200">
                    <a href=""><FaGithub /></a>
                    <a href=""><FaXTwitter /></a>
                    <a href=""><FaLinkedin /></a>
                </div>
            </div>
            <div className="right border w-[30%]"></div>
        </div>
    )
}

export default Hero
