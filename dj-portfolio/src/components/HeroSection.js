import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import './styles/HeroSection.css';
import { animateText } from './scripts/animateText';

function HeroSection() {
  const titleRef = useRef(null); // Create a ref to reference the h1 element

  useEffect(() => {
    const titleElement = titleRef.current;

    // Function to trigger the animation
    const triggerAnimation = () => {
      if (titleElement) {
        animateText(titleElement);
      }
    };

    // Trigger animation on component mount
    triggerAnimation();

    // Set up idle timer
    let idleTimer;

    const resetIdleTimer = () => {
      // Clear existing timer
      clearTimeout(idleTimer);

      // Set a new random timer (between 3 to 10 seconds)
      const randomDelay = Math.floor(Math.random() * (10000 - 3000 + 1)) + 3000; // Between 3000ms (3s) and 10000ms (10s)
      idleTimer = setTimeout(() => {
        triggerAnimation(); // Call the animation function on idle
      }, randomDelay); // Use the random delay
    };

    // Set up mouse movement and keypress listeners to reset idle timer
    window.addEventListener('mousemove', resetIdleTimer);
    window.addEventListener('keypress', resetIdleTimer);

    // Cleanup on unmount
    return () => {
      clearTimeout(idleTimer); // Clear the timer on unmount
      window.removeEventListener('mousemove', resetIdleTimer);
      window.removeEventListener('keypress', resetIdleTimer);
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 ref={titleRef} data-value="Hello, I'm DJ">Hello, I'm <span className="highlight">DJ</span>.</h1>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="view-work-button"
        >
          Come View My Work <span>&#8595;</span>
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
