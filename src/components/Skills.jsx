import React from 'react'

import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import c from "../assets/c++.png"
import reactimage from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import vite from "../assets/vite.png"
import streamlit from "../assets/streamlit.png"
import github from "../assets/github.png"
import vercel from "../assets/Vercel.png"

const Experience = () => {

    const tech = [
        {
            id:1,
            src:html,
            title:'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title:'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src:c,
            title:'C++',
            style: 'shadow-blue-300'
        },
        {
            id:5,
            src:reactimage,
            title:'React',
            style: 'shadow-blue-600'
        },
        {
            id:6,
            src:tailwind ,
            title:'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id:7,
            src:vite,
            title:'VITE',
            style: 'shadow-purple-500'
        },
        {
            id:8,
            src: github,
            title:'Github',
            style: 'shadow-gray-400'
        },
        {
            id:9,
            src: vercel,
            title:'Vercel',
            style: 'shadow-gray-400'
        },
       
    ]


  return (
    <div name='My Skills' className='bg-black w-full h-screen pt-20'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline  '>| My skills |</p>
            {/* <p className='py-6'>These are the technologies I've worked with</p> */}
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-11 px-12 sm:px-0'> 
           
           {
             tech.map(({id,src,title,style}) =>(
                <div 
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg  ${style}`}>
                <img  src={src} alt='' className='w-15 mx-auto animate-bounce'/>
                <p className='mt-4'>{title}</p>
                </div>

             ))}
           
           
        </div>
      </div>
    </div>
  )
}

export default Experience
