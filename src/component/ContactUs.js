import React from 'react';
import './ContactUs.css';
import contactImage from '../assets/contact_us.png'; // Make sure to have an image in your assets folder

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-us-content">
        <div className="contact-us-image">
          <img src={contactImage} alt="Contact Us" />
        </div>
        <div className="contact-us-text">
          <h1>Contact Us</h1>
          <p>If you have any questions regarding the notes or our app, feel free to reach out to us. We are here to help you!</p>
          <p>Email: civilhandnotes@gmail.com</p>
          <p>Phone: +918609522792</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
