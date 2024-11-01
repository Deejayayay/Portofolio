import { useState } from 'react'

import '../styles/hero.css'

const Hero: React.FC = () => {
    return(
        <div className='hero-container'>
            <div className='hero-text'>
                <h1>Hi, i'm DJ <br />
                    I like to build things
                </h1>
            </div>

            <div className='hero-subtext'>
                <button className='lead-btn'>Come View My Work</button>
            </div>
        </div>
    );
};

export default Hero;