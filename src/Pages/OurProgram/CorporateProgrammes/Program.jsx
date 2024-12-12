import React from 'react';
import bg from './assets/bg.jpg';
import ProgramSlider from './ProgramSlider';
import mobFirst from './assets/mob-first.jpg';
import mobSecond from './assets/mob-second.jpg';
import afterSlider from './assets/mob-afterSlider.jpg';
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';

function Program() {
  return (
    <div>
      <Header />
      <div className="desktop relative w-full">
        <img src={bg} alt="Saturday Satsang" className="w-full h-auto" />

        <div
          className="absolute top-0 mt-[110%] mx-[50%]"
          style={{      
            transform: 'translateX(-50%)',
            width: '80%',
          }}
        >
          <ProgramSlider />
        </div>
      </div>

      <div className='mobile w-full'>
        <img src={mobFirst} className='w-full' alt="" />
        <img src={mobSecond} className='w-full' alt="" />
        <div className='slider-section'>
        <ProgramSlider />
        </div>
        <img src={afterSlider} className='w-full' alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default Program;
