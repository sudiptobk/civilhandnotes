import React from 'react';
import './AboutUs.css';
import teamImage from '../assets/about_us.png'; // Make sure to have an image in your assets folder

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <div className="about-us-text">
          <h1>About Us</h1>
          <p>We are a small team of two engineers with a shared passion for education and a desire to help GATE aspirants achieve their dreams. Recognizing the challenges students face in preparing for this competitive exam, we decided to create and sell high-quality PDF notes at a low cost. Our notes are designed to be comprehensive, easy to understand, and affordable, making them accessible to everyone.</p>
        </div>
        <div className="about-us-image">
          <img src={teamImage} alt="Our Team" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
