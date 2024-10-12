import React from 'react';
import './styles/About.css'
function About() {
  return (
    <section id="about" className="about-section">
      <div className='skills-content'>
        <h1>Skills</h1>  
        <img src='https://static-00.iconduck.com/assets.00/logo-python-icon-506x512-t38ct41x.png' alt='python'/>
        <img src='https://static-00.iconduck.com/assets.00/c-icon-1820x2048-2ys190xs.png' alt='c++'/>
        <img src='https://static-00.iconduck.com/assets.00/javascript-icon-2048x2048-cxxy0d6c.png' alt='javascript'/>
        <img src='https://static-00.iconduck.com/assets.00/programming-language-c-icon-1926x2048-3r58uty1.png' alt='C'/>
        <img src='https://static-00.iconduck.com/assets.00/react-icon-512x449-reiviifo.png' alt='React'/>
        <img src='https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png' alt='Nex.js'/>
        <img src='https://static-00.iconduck.com/assets.00/html5-icon-450x512-e75wr4w8.png' alt='html'/>
        <img src='https://static-00.iconduck.com/assets.00/css-icon-463x512-huiplwey.png' alt='css'/>
        <img src='https://static-00.iconduck.com/assets.00/mongodb-icon-231x512-yqn2wen9.png' alt='mongodb'/>
        <img src='https://static-00.iconduck.com/assets.00/git-icon-512x512-92i10pil.png' alt='git'/>
        
      </div>
      
      <div className='about-content'>
        <div className='about-text'>
        <h1>About Me</h1>
            Ever since I was a child I've always been in love with tech. 
            Despite having limited access to learn all I wanted, I never gave up
            and am now pursuing my dream. I hope that one day I can educate younger
            individuals about tech and provide them with the resource I wish I had
            when I was younger.
        </div>
      </div>


    </section>
  );
}

export default About;
