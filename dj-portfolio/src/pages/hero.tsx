
import '../styles/hero.css'

const Hero: React.FC = () => {
    return(
        <div className='hero-container'>
            <div className='hero-text'>
                <h1>Hi, i'm DJ <br />I like to build things</h1>
            </div>

            <div className='hero-projects'>
                <button className='lead-btn'>Projects</button>
            </div>

            <div className='hero-about'>
                <button className='lead-btn'>More about me</button>
            </div>
            <div className='hero-contact'>
                <button className='lead-btn'>More about me</button>
            </div>
        </div>
    );
};

export default Hero;