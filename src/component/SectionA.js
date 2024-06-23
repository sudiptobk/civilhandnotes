import React from 'react';
import './SectionA.css';
import section_a from '../assets/section_a.png'; // Make sure you have an image file in your project

const SectionA = () => {
    return (
        <div className="body">
            <div className="body-content">
                <div className="body-image">
                    <img src={section_a} alt="Description" />
                </div>
                <div className="body-text">
                    <h6 className="orange-title">HIGH QUALITY PDF NOTES</h6>
                    <h1 className="black-title">Master the GATE Exam with Self-Study Using Our Comprehensive Notes.</h1>
                    <p className="black-paragraph">Prepare for the GATE exam with confidence using our meticulously handwritten civil engineering notes. Each page is designed to simplify complex concepts, providing you with a clear and concise study resource perfect for self-study. Our notes cover every topic in the civil engineering syllabus, ensuring you have all the information you need in one place.</p>
                    <ul className="bullet-points">
                        <li>✅ High Quality Colourful Handwritten Notes​</li>
                        <li>✅ Covered every topics in details​</li>
                        <li>✅ Previous Year GATE Question & Solution Included​</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SectionA;
