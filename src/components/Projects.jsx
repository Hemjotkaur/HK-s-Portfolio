import React from "react";
import pomo from "../assets/pomo.png"
import gemini from "../assets/Gemini.png"
import portfolioimage from "../assets/portfolio.png"
import { FaGithub } from 'react-icons/fa'

const portfolios = () => {

    const portfolio = [
      {
        id:1,
        src: gemini,
        href:"https://gemini-vercel-three.vercel.app",
        link:"https://github.com/Hemjotkaur/Gemini-vercel"
      },
      {
        id:2,
        src: pomo,
        href:"https://pomodoro-timer-dun-delta.vercel.app/",
        link:"https://github.com/Hemjotkaur/Pomodoro-Timer"
      },
      {
        id:3,
        src:portfolioimage,
        href:"https://hk-portfolio-gamma.vercel.app/",
        link:"https://github.com/Hemjotkaur/HK-s-Portfolio"
      },
    ]


  return (
    <div
      name="projects"
      className="bg-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="py-10 pt-30">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
          {/* <p className="py-2">Check out some of my work right here.</p> */}
        </div>

        <div
           className="grid sm:grid-cols-2  md:grid-cols-2 gap-20 px-12 sm:px-0">
        {portfolio.map(({id,src,href,link})=>(
           
           <div key={id} className="shadow-lg shadow-gray-600 rounded-lg duration-200 hover:scale-105 w-80 ">
             <img 
               src={src}
               alt=""
               className="rounded-md "
               />
             <div className="flex items-center justify-between gap-28">
              <a href={href} target="_blank" rel="noopener noreferrer" >
               <button className="w-1/2 px-6 py-6 m-4 duration-200 hover:scale-105 hover:text-gray-600">Link</button>
               </a>

              <a href={link} target="_blank" rel="noopener noreferrer" >
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 "> <FaGithub size={30} /></button>
              </a>

             </div>
           </div>
        ))}
       </div>
       
      </div>
    </div>
  );
};

export default portfolios;
