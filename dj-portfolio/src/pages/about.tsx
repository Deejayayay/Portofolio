import { useState } from 'react'

import '../styles/about.css'

const About: React.FC = () => {
    return(
        <div className='about-container'>
            <h1>About Me</h1>
            <div className="about-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Provident cupiditate eveniet magni possimus tempora officiis 
                numquam quae? Blanditiis quae commodi illo voluptatum omnis iure nulla. 
                Alias tempora architecto illo esse?
            </div>
        </div>
    );
};

export default About;