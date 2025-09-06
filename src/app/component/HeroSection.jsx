"use client"
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import * as motion from "motion/react-client"
import Link from 'next/link';


export default function HeroSection() {

  return (
    <div>
        <div className='grid grid-cols-1 lg:grid-cols-12 py-20'>
      <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
             className='col-span-7 place-self-center text-center sm:text-left'>

      <h2 className='text-white text-xl lg:text-6xl font-extrabold mb-4'>
        <p className='text-transparent text-4xl lg:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
          Hello,I'm {" "}
          </p>
         <TypeAnimation
      sequence={[
        'Abdelmageed Baher',
        1000, 
        'Frontend Developer',
        1000,
        'React.js Developer',
        1000,
        'Next.js Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
        </h2>

      <p className='text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl'>
        Passionate and detail-oriented frontend developer focused on building responsive, 
        user-friendly web interfaces using modern technologies. Skilled in React, Tailwind CSS, 
        and JavaScript, with a strong emphasis on clean UI/UX design and performance optimization.
         I enjoy bringing creative ideas to life in the browser, turning designs into smooth, interactive experiences.
         </p>
        <div>
            <button className='px-6 py-3 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 mr-4 cursor-pointer text-white'>Hire Me</button>
            <Link
  href="https://drive.google.com/file/d/1rXiaTdhrXaQaz3lj-PW_H6Q1i7lyzdL-/view?usp=sharing"
  download
  target="_blank"
  rel="noopener noreferrer"
>
  <button className='px-1 py-1 rounded-full w-full sm:w-fit text-white mt-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 cursor-pointer hover:bg-slate-800'>
    <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
      Download CV
    </span>
  </button>
</Link >

        </div>
      </motion.div>

      <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }} className="col-span-5 place-self-center mt-4 lg-mt-0">
        <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
        <Image 
        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
        src="/images/hero.png"
        alt='hero img'
        width={300}
        height={300}
        />
        </div>
      </motion.div>
        </div>
    </div>
  )
}
