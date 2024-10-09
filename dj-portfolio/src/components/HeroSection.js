import React from 'react';
import { Link } from 'react-scroll';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Hello, I'm <span className="highlight">[Your Name]</span>.</h1>
        <h2>I'm a full stack web developer.</h2>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="view-work-button"
        >
          View my work <span>&#8595;</span>
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
