import React from 'react';
import './ScrollToTopButton.css'; // Create CSS for ScrollToTopButton if needed
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button className="scroll-to-top-button" onClick={scrollToTop}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
