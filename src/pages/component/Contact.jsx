"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWhatsapp, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok) {
        console.log('Message sent.');
        setStatus('Message sent!');
        e.target.reset(); // clear form
      } else {
        console.error('Send failed:', resData);
        setStatus('Something went wrong.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setStatus('Error sending message.');
    }
  };

  return (
  
    <div className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 " id='contact'>
      <div className="z-10 pt-10">
        <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <p className='text-[#ADB7BE] mb-2 max-w-md'>
          Feel free to reach out if you have any questions, ideas, or opportunities 
          to collaborate. I'm always open to connecting and would love to hear from you!
        </p>
        <div className="socials flex flex-row gap-2">
          
          <Link href="https://github.com/abdelmageedbaher" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className='text-white text-4xl'/>            
           </a>
          </Link>

          <Link href="https://www.linkedin.com/in/abdelmageed-baher-b04b82262/" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-blue-400 px-0.5 text-4xl" />
            </a>
          </Link>

          <Link href="https://wa.me/01050564777" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} className='text-green-400 px-0.5 text-4xl'/>            
           </a>
          </Link>
          
          <Link href="https://www.instagram.com/abdelmageed_72" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className='bg-gradient-to-r from-[#E1306C] to-purple-500 bg-transparent rounded-lg px-0.5 text-4xl'/>            
           </a>
          </Link>
          
        </div>
      </div>
      <form className="flex flex-col my-6" onSubmit={handleSubmit}>
       <div className="mb-6">
        <label htmlFor="email"  className="text-white block mb-2 text-sm font-medium">Your Email</label>
        <input type="email" id="email" name="email"
       required placeholder="Enter Your Email" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"/>
        </div> 
       <div className="mb-6">
        <label htmlFor="subject"  className="text-white block mb-2 text-sm font-medium">Subject</label>
        <input type="text" id="subject" name="subject" 
        required placeholder="Just saying hi" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"/>
        </div> 
        <div className="mb-2">
            <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">Message</label>
            <textarea name="message" id='message' 
        placeholder="Let's talk about..." className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"/>
        </div>
        <button type="submit" className="bg-purple-500 cursor-pointer hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
            Send Message
        </button>
             {status &&(
             <p className="text-green-300 text-lg py-2">Email sent successfully</p>
             )} 
        </form>

    </div>
  );
}


