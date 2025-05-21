import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEye } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function ProjectCard({ imgUrl, title, description, repoUrl, demoUrl }) {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: '100% 100%' }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 h-full w-full bg-[#181818] opacity-0 hidden group-hover:opacity-80 group-hover:flex transition-all duration-1000">
          <Link href={repoUrl} passHref legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 relative border-2 rounded-full border-[#ADB7BE] hover:border-white mr-2 group/link"
            >
              <FontAwesomeIcon
                icon={faCode}
                className="w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-[#ADB7BE] group-hover/link:text-white"
              />
            </a>
          </Link>

          <Link href={`https://${demoUrl}`} passHref legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 relative border-2 rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <FontAwesomeIcon
                icon={faEye}
                className="w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-[#ADB7BE] group-hover/link:text-white"
              />
            </a>
          </Link>
        </div>
      </div>

      <div className="text-white rounded-b-xl mt-2 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] h-24">{description}</p>
      </div>
    </div>
  );
}
