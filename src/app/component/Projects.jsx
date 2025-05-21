"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import ProjectCard from './ProjectCard';


const projectsData = [
    {
        id:1,
        title:"Portfolio App Using Next.js",
        description:"The portfolio site uses Next.js for server-side rendering and routing, Tailwind CSS for utility-first styling, Material UI (MUI) for ready-made React UI components, and Resend for email functionality.",
        image:"/images/projects/portfolio.png",
        demo:"portofolio-c0pa1jtl8-abdelmageedbahers-projects.vercel.app/",
        repo:"https://github.com/AbdelmageedBaher/Portofolio.git",
    },
    {
        id:2,
        title:"Ecommerce App Using React.js",
        description:"A modern eCommerce web app built using React.js, Tailwind CSS, and context api, cart management, and responsive design.",
        image:"/images/projects/fresh-cart.png",
        demo:"ecommerce-app-mauve-one.vercel.app",
        repo:"https://github.com/AbdelmageedBaher/ecommerce-app.git",
    },
    {
        id:3,
        title:"Register and Login App ",
        description:"A simple and functional login system built with HTML, CSS, and JavaScript, featuring user authentication and form validation.",
        image:"/images/projects/login.png",
        demo:"abdelmageedbaher.github.io/LoginSystem/",
        repo:"https://github.com/AbdelmageedBaher/LoginSystem.git",
    },
    {
        id:4,
        title:"Weather App",
        description:"A simple weather app displaying current conditions by city or location. Built with JavaScript, HTML, CSS and Bootstrap using the OpenWeatherMap API.",
        image:"/images/projects/weather.jpg",
        demo:"abdelmageedbaher.github.io/WeatherApp/",
        repo:"https://github.com/AbdelmageedBaher/WeatherApp.git",
    },
    ,
    {
        id:5,
        title:"CRUD App",
        description:"A basic CRUD app that stores data locally in the browser using localStorage for persistent and easy data management.",
        image:"/images/projects/crud.png",
        demo:"abdelmageedbaher.github.io/crud/",
        repo:"https://github.com/AbdelmageedBaher/crud.git",
    },
    {
        id:6,
        title:"Mealify App",
        description:"A Mealify app built with Bootstrap, HTML, CSS, and JavaScript, featuring a clean, responsive design for browsing meals and recipes.",
        image:"/images/projects/burger.jpg",
        demo:"abdelmageedbaher.github.io/Mealify-Project/",
        repo:"https://github.com/AbdelmageedBaher/Mealify-Project.git",
    },
    {
        id:7,
        title:"Movies App",
        description:"A dynamic movies web app built with vanilla JavaScript and styled using Tailwind CSS, integrating the TMDB API for real-time movie data.",
        image:"/images/projects/movie.jpg",
        demo:"abdelmageedbaher.github.io/movies-app/",
        repo:"https://github.com/AbdelmageedBaher/ecommerce-app.git",
    }
]

export default function Projects() {

  const ref = useRef(null);
  const isInView = useInView(ref, {once:true});

  const cardVariants = {
    initial: {y: 50, opacity: 0},
    animate: {y: 0, opacity: 1},
  }

  return (
    <div className="py-12" id='projects'>
      <h2 className="text-white text-4xl font-semibold text-center py-10 ">My Projects</h2>
      <ul ref={ref} className='grid gap-8 md:grid-cols-3 md:gap-16'>
        {projectsData.map((project,index)=> (
        <motion.li
        key={index}
         variants={cardVariants}
        transition={{ duration: 0.6 , delay: index * 0.6}}        
        initial="initial"
        animate={isInView ? "animate" : "initial" }
        >
          <ProjectCard 
          key={project.id} 
          title={project.title}
          imgUrl={project.image}
          description={project.description}
          repoUrl={project.repo}
          demoUrl={project.demo} 
          />
          </motion.li>
         ))}
      </ul>
    </div>
  )
}
