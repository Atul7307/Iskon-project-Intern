import React from 'react';
import "./styles.css"; 
import gita1 from './assets/gita1.png';
import gita2 from './assets/gita2.png';
import mobPage from "./assets/mob-page.jpg";
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';

function GitaForYou() {
  return (
    <div className=' w-full'>
      <Header />
      <div className='desktop w-full'>
        <img src={gita1} alt="" />
        <img src={gita2} alt="" />
      </div>

      <div className='mobile w-full'>
        <img src={mobPage} alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default GitaForYou;
