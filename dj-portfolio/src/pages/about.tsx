

import '../styles/about.css'
import Marquee from 'react-fast-marquee';
const About: React.FC = () => {
    return(
        <div className='about-container'>

            <div className="bento-about">
                <div className="row row-1">
                    <div className="col-1">
                        <div className="col-1 square-1">
                            work
                        </div>
                        <div className="col-1 square-2">
                            picture
                        </div>
                        <div className="col-1 square-3">
                            socials
                        </div>
                    </div>

                    <div className="col-2">
                        <div className="col-2 box-2">
                            <div className="col-2 square-1">
                            <Marquee speed={50} direction="left" pauseOnHover>
                                Your scrolling text goes here! This is a marquee effect.
                            </Marquee>                                
                            </div>

                            <div className="col-2 square-2">
                                <Marquee speed={50} direction="left" pauseOnHover>
                                    Your scrolling text goes here! This is a marquee effect.
                                </Marquee>
                            </div>
                            </div>
                        <div className="col-2 box-3">
                            <a href="https://github.com/Deejayayay" target="_blank" rel="noopener noreferrer">
                            <img className='github-icon' src="https://avatars.githubusercontent.com/u/122236585?v=4" alt="dj" />
                            </a>
                        </div>

                        <div className="col-2 box-1">
                            <div className="col-2 square-1">
                                <a href="https://www.linkedin.com/in/deangelojoshuaola/" target="_blank" rel="noopener noreferrer">
                                <img className="linkedin-icon" src="https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-b5owxava.png" alt="linked-in" />
                                </a>
                            </div>
                            <div className="col-2 square-2">
                                oregon state University
                                Bachelors of science electrical and computer engineering candiate

                                seattle pacific university 
                                bachelors of science in computer sciene candidate
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="col-3 square-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus veritatis incidunt iusto doloribus magnam 
                            consectetur reprehenderit facilis autem molestiae aperiam repellat quidem, ducimus voluptatum provident dolorem 
                            consequatur maiores ipsam error.
                        </div>
                        <div className="col-3 square-2"></div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;