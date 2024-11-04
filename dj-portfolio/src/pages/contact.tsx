

import '../styles/contact.css'

const Contact: React.FC = () => {
    return(
        <div className='contact-container'>
            <h1>Contact Me</h1>
            <div className="contact-box">
                <div className="names">
                    <input type="text" name="first-name" id="firstName" placeholder='first name'/>
                    <input type="text" name="last-name" id="lastName" placeholder='last name' />
                </div>

                <input type="email" name="email-box" id="email" placeholder='enter your email'/>
                <input type="text" name="contact-box" id="contact" placeholder='type here' />
                <input type="submit" name="" id="" />
            </div>  
        </div>
    );
};

export default Contact;