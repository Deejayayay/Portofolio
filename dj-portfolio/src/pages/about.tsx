

import '../styles/about.css'
import Marquee from 'react-fast-marquee';
const About: React.FC = () => {
    return(
        <div className='about-container'>

            <div className="bento-about">
                <div className="row row-1">
                    <div className="col-1">
                        <div className="col-1 square-1">
                            Work and Experience!
                            <h4>coming soon!</h4>
                        </div>
                        <div className="col-1 square-2">
                            picture
                        </div>
                    </div>

                    <div className="col-2">
                        <div className="col-2 box-2">
                            <div className="col-2 square-2">
                                Languages i'm proficient in!
                                <Marquee speed={25} direction="left" pauseOnHover>
                                    <img className='skill-icon' src="https://static-00.iconduck.com/assets.00/c-icon-912x1024-5383qjbe.png" alt="c++" />
                                    <img className='skill-icon' src="https://static-00.iconduck.com/assets.00/python-icon-2048x2037-wpgoz04a.png" alt="Python" />
                                    <img className='skill-icon' src="https://static-00.iconduck.com/assets.00/react-icon-2048x1774-y25d4tz1.png" alt="React" />
                                </Marquee>

                                <Marquee speed={25} direction="right" pauseOnHover>
                                    <img className='skill-icon' src="https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png" alt="JS" />
                                    <img className='skill-icon' src="https://static-00.iconduck.com/assets.00/html-5-icon-449x512-uii6qqbu.png" alt="html" />
                                    <img className='skill-icon' src="https://static-00.iconduck.com/assets.00/css-3-icon-440x512-ro22zra3.png" alt="React" />
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