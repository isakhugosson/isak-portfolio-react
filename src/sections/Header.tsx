"use client";

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export const Header = () => {
  return (
  <div className="flex justify-center items-center fixed top-3 w-full z-10">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      <ScrollLink
        className="nav-item"   
        to="hero" 
        spy={true} 
        smooth={true} 
        offset={-50} 
        duration={750}
       >
        Home
      </ScrollLink>
      <ScrollLink
        className="nav-item"   
        to="projects" 
        spy={true} 
        smooth={true} 
        offset={-100} 
        duration={750}
       >
        Projects
      </ScrollLink>
      <ScrollLink
        className="nav-item"   
        to="about" 
        spy={true} 
        smooth={true} 
        offset={0} 
        duration={750}
       >
        About
      </ScrollLink>
      <ScrollLink 
      className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"     
      to="contact" 
      spy={true} 
      smooth={true} 
      offset={-50} 
      duration={750}
     >
      Contact
    </ScrollLink>
    </nav>
  </div>
  );
};
