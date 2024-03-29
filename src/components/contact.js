import React from "react";
import { useSelector} from 'react-redux'
import ContactForm from './contactForm';

import InstaIcon from'../assets/instagram.png';

const Contact = () => {  
    const lang = useSelector((state) => state.lang.lang);

    return(
    <div className="contact-body">
        <h2 className="contact-title">{lang==="eng" ? "coNtAct":"coNtActo"}</h2>
        <ContactForm />
        <div className="social-icon">
            <p>{lang==="eng" ?"also on":"también en"}</p>
            <a href="https://www.instagram.com/beatkino" target="_blank" rel="noreferrer" > <img className='icon' alt="instagram icon" src={InstaIcon}/> </a>             
        </div>
    </div>  
    )
}

export default Contact;