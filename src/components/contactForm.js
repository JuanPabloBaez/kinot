import React from "react";
import emailjs from 'emailjs-com';

const ContactForm = () => {
  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_psfwpap', 'contact-form-beatkino', e.target, 'user_UQ4ajvyGl91jhvnTxqIut')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  
  return (
    <form  className="form-body" onSubmit={sendEmail} >
        <input type="hidden" name="contact_number"  />
      <div className="form-name">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="from_name" required />
      </div>
      
      <div className="form-mail">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="from_email" required />
      </div>
      
      <div className="form-message">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;