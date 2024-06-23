import React, { useState } from 'react';
import './SectionB.css'; // Import SectionB specific CSS file
import hydrology from '../assets/hydrology.png';
import strength from '../assets/strength.png';
import cpm from '../assets/cpm.png';
import enviromental from '../assets/enviromental.png';
import fluid from '../assets/fluid.png';
import general from '../assets/general.png';
import irrigation from '../assets/irrigation.png';
import maths from '../assets/maths.png';
import mechnaics from '../assets/mechnaics.png';
import open from '../assets/open.png';
import reinforcement from '../assets/reinforcement.png';
import soil from '../assets/soil.png';
import steel from '../assets/steel.png';
import structural from '../assets/structural.png';
import transportation from '../assets/transportation.png';
import surveying from '../assets/surveying.png';


const subjects = [
  { name: 'Engineering Mathematics', image: maths },
  { name: 'General Aptitude', image: general },
  { name: 'Environmental Engineering', image: enviromental },
  { name: 'Soil Mechanics', image:  soil},
  { name: 'Transportation Engineering', image: transportation },
  { name: 'Fluid Mechanics', image: fluid },
  { name: 'Irrigation & Hydrology', image: irrigation },
  { name: 'Geomatics Engineering (Surveying)', image: surveying },
  { name: 'Reinforcement Cement Concrete', image: reinforcement },
  { name: 'Structural Analysis', image: structural },
  { name: 'Steel Structures', image: steel },
  { name: 'Open channel flow', image: open },
  { name: 'Engineering Mechanics', image: mechnaics },
  { name: 'CPM & PERT', image: cpm },
  { name: 'Engineering Hydrology', image: hydrology },
  { name: 'Strength of Materials', image: strength },
];

const SectionB = () => {
  // State to manage the selected image index
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Function to handle button click and update selected image index
  const handleButtonClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="body-section-b">
      <div className="body-content">
        <div className="body-image">
          {/* Display selected image */}
          <p className="subject-title">{subjects[selectedImageIndex].name}</p>
          <img src={subjects[selectedImageIndex].image} alt={subjects[selectedImageIndex].name} />
        </div>
        <div className="body-text">
          <h6 className="orange-title">EXPLORE OUR EXCLUSIVE SAMPLE NOTES</h6>
          <h1 className="black-title">Discover Stunning Handwritten Sample Notes of Civil Engineering GATE Exam.</h1>
          <p className="black-paragraph">Explore our curated PDF notes of civil engineering gate exam. Dive into the world of civil engineering with confidence, knowing you have the best study material at your fingertips.</p>
          <div className="button-container">
            {/* Buttons for selecting images */}
            {subjects.map((subject, index) => (
              <button
                key={index}
                className={`image-button ${selectedImageIndex === index ? 'active' : ''}`}
                onClick={() => handleButtonClick(index)}
              >
                {subject.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionB;

