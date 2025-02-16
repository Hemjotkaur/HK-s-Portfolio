import React from 'react'
import leetcode from "../assets/leetcode.png"
import { SiCodechef } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";

const About = () => {
  return (
    <div 
    name="about"
    className='w-full h-screen bg-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 mt-10'> 
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>About</p>
            </div>

            <p className='text-xl my-10'>
           <span className='font-bold text-gray-700'>Hemjot Kaur</span> : A driven 3rd-year Computer Science and Engineering student at Bhai Gurdas Institute of Engineering and Technology, Sangrur. I am  eager to apply my technical skills in a professional environment.
            </p>

            <br/>
            <p className='text-xl mb-10 '>
           <span className='font-bold text-gray-700'>Frontend Focus</span>: I specialize in frontend development using React, creating dynamic and user-friendly websites. I leverage Tailwind CSS to ensure responsiveness and modern design principles.
            </p>

            <br/>
            <p className='text-xl '>
           <span className='font-bold text-gray-700'> Machine Learning Interest</span>: My portfolio showcases Python-based machine learning project, demonstrating my interest in this field. I'm always learning and expanding my knowledge in both frontend and machine learning domains.
            </p>

        


      <div className='flex mt-10  gap-15'>

        <p className='font-bold text-2xl text-gray-700 '>Competitive Programming Profiles:</p>

        <a href="https://leetcode.com/u/HemjotKaur786/" target="_blank" rel="noopener noreferrer" className='text-5xl'>
        <TbBrandLeetcode />
        </a>

        <a className='text-5xl'  href='https://www.codechef.com/users/hemjotkaur'target="_blank" rel="noopener noreferrer" >
        <SiCodechef className=''/>
        </a>
        </div>
        
      </div>
    </div>
  )
}

export default About
