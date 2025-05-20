import Image from 'next/image'
import React from 'react'
import TabSkills from '../component/TabSkills'

export default function About() {
  return (
    <div className='text-white py-12' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16'>
        <Image 
        src='/images/about.png'
        alt='about'
        width={500}
        height={500}
        />
        <div>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className="text-base lg:text-lg py-2">I'm a passionate Frontend Developer specializing in building fast, accessible, and 
            responsive web applications using React and Next.js. With a strong 
            eye for design and a love for clean, efficient code, I focus on 
            creating modern user interfaces that deliver great user experiences.

            I thrive on turning ideas into interactive, scalable, and production-ready solutions 
            — whether it’s a single-page application or a dynamic, server-rendered site. My tech toolbox includes React, Next.js, Tailwind CSS, TypeScript, and more.
          </p>
          <TabSkills />
        </div>
      </div>
    </div>
  )
}
