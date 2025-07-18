import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {Link} from "react-scroll"


const Navbar = () => {

    const [nav,setNav]=useState(false)

    const links = [
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'projects'
        },
        {
            id:4,
            link:'My Skills'
        },
        {
            id:5,
            link:'contact'
        },
    ]

  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 shadow-md shadow-gray-800'>
     <div>
        <h1 className='text-5xl ml-2 hemjot-style hover:animate-spin '>HK</h1>
        </div>
        <ul className="hidden md:flex">
            {
                links.map(({id,link}) =>(
                    <li
                    key={id}
                    className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-120 duration-200'
                    >
                      <Link to={link} smooth duration={500} >
                        {link}
                      </Link> 
                    </li>
                ))
            }
        </ul>
    <div 
    onClick={()=>setNav(!nav)}
    className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
     {nav ? <FaTimes size={30} /> :  <FaBars size={30}/>}
    </div>


    {nav && (
         <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-gray-500'>
         {
                     links.map(({id,link}) =>(
                         <li
                         key={id}
                         className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-110 duration-200 hover:text-gray-800'>
                         
                         <Link 
                         onClick={()=>setNav(!nav)}
                         to={link} smooth duration={500} >
                           {link}
                         </Link> 
                         </li>
                     ))
                 }
         </ul>
    )}
   

    </div>
  )
}

export default Navbar
