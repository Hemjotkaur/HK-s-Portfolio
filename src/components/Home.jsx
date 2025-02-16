import React from 'react'
import { RiArrowRightSLine } from "react-icons/ri";
import {Link} from "react-scroll"
import {useTypewriter} from 'react-simple-typewriter'


const Home = () => {

  const [text] = useTypewriter({
    words:['Developer','Coder'],
    loop:true,
    typeSpeed:70,
    deleteSpeed:80,
  })

  return (
    <div name="home" className=' w-full bg-black '>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center  min-h-screen h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h3 className='text-4xl sm:text-4xl  text-white mt-10 py-10 ml-2'>
            {">"}Hi, i am
          </h3>
          <h2 className='text-4xl sm:text-8xl font-bold text-white hemjot-style my-5 '>Hemjot kaur</h2>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>
              I'm a {' '}
              <span className='inline-block w-[200px] sm:w-[300px] text-4xl sm:text-7xl font-bold text-white'>
                {text}
              </span>  
            </h2>
          

            <div className='py-10'>
                <Link 
                 to="projects"
                 smooth
                 duration={500}
                 className= 'group text-white w-fit px-6 py-4 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Projects
                  <span className='group-hover:rotate-90 duration-300'>
                     <RiArrowRightSLine  size={25}
                     className='ml-1'/>
                  </span> 
                </Link>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home
