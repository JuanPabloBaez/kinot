import React from "react";
import ContactForm from './contactForm';
import './contact.css';
import InstaIcon from'../assets/instagram.png';

const Contact = () => {  
    return(
        <>
            <h2 className="contact-title">Contact</h2>
            <ContactForm />
            <div className="social-icon">
                <p>also on</p>
                <a href=""> <img className='icon' alt="instagram icon" src={InstaIcon}/> </a>             
            </div>
        </>  
    )
}

export default Contact;