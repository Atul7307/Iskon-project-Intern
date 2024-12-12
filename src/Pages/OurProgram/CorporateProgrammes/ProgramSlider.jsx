import React, { useState } from 'react';
import './Program.css';
import programImage1 from './assets/pro.png';
import programImage2 from './assets/image2.png';
import programImage3 from './assets/image3.png';
import programImage4 from './assets/image4.png';
import programImage5 from './assets/image5.png';

const ProgramSlider = () => {
  
  const screens = [
    {
      title: "Program Offerings",
      subtitle: "Spiritual Leadership:",
      description: "Enhance Leadership Qualities With Spiritual Principles.",
      image: programImage1,
    },
    
    {
      title:   "Program Offerings",
      subtitle:"Workshops and Seminars:",
      description:"Stress Management: Techniques for mindfulness, meditation, and yoga.",
      image: programImage3,
    },
    {
      title:  "Program Offerings",
      subtitle: "Workshops and Seminars:",
      description:"Stress Management: Techniques for mindfulness, meditation, and yoga.",
      image: programImage2,
    },
    {
      title:  "Program Offerings",
      subtitle: "Workshops and Seminars:",
      description: "Team Building: Enhances collaboration and communication to boost productivity and morale.",
      image: programImage4,
    },
    {
      title:  "Program Offerings",
      subtitle: "Workshops and Seminars:",
      description: "Team Building: Enhances collaboration and communication to boost productivity and morale.",
      image: programImage5,
    },
  ];

  
  const [currentScreen, setCurrentScreen] = useState(0);

  
  const handleNextScreen = () => {
    setCurrentScreen((prevScreen) => (prevScreen + 1) % screens.length);
  };


  const handlePreviousScreen = () => {
    setCurrentScreen((prevScreen) => (prevScreen - 1 + screens.length) % screens.length);
  };

  return (
    <div className="program-container w-full">
      <h2 className="program-title">{screens[currentScreen].title}</h2>
      <div className="program-content">
        <img src={screens[currentScreen].image} alt="Program" className="program-image" />
        <div className="program-description">
          <h3 className="program-subtitle">{screens[currentScreen].subtitle}</h3>
          <ul>
            <li>
              <strong>{screens[currentScreen].description}</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="program-button">
    
        {currentScreen > 0 && (
          <button onClick={handlePreviousScreen} className="program-nav-button">
            ‹
          </button>
        )}
        <button onClick={handleNextScreen} className="program-nav-button">
          ›
        </button>
      </div>
    </div>
  );
};

export default ProgramSlider;

