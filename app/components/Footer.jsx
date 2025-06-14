import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-36 mx-auto mb-2"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          nithinravi2bcommb@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Nithin Ravi. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/NithinRavi09" 
            className="flex items-center gap-1"
            >
            <FontAwesomeIcon icon={faGithub} className={isDarkMode ? 'text-white' : 'text-black'} />
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nithinravi-mern-dev/"
              className="flex items-center gap-1"
            >
              <FontAwesomeIcon icon={faLinkedin} className={isDarkMode ? 'text-white' : 'text-black'} />
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" 
            href="https://www.instagram.com/nithin__ravi__/"
            className="flex items-center gap-1"
            >
              <FontAwesomeIcon icon={faInstagram} className={isDarkMode ? 'text-white' : 'text-black'} />
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
