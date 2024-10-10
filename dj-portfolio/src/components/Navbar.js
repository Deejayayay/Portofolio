import React from 'react';
import { Link } from 'react-scroll';
import './styles/Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;