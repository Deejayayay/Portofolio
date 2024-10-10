import React from 'react';
import './styles/Contact.css'
function Contact() {
  return (
    <section id="contact" className="contact-section">
      <form>
      <h1>Let's Talk.</h1>
        <input type='text' id='name' placeholder='name' required></input>
        <input type='email' id='email' placeholder='email' required></input>
        <h4>Type Your Message here</h4>
        <textarea required></textarea>
        <input type="submit" value="send" id="button"></input>
      </form>
    </section>
  );
}

export default Contact;
