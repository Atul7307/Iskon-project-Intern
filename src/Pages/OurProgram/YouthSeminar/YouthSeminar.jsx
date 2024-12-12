import React from 'react'
import "./styles.css"; 
import forum from './assets/forum1.jpg';
import forum2 from './assets/forum2.jpg';
import mobPage from "./assets/mob-page.jpg";
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';

function YouthSeminar() {
  return (
    <div>
      <Header />
      <div className='flex-col desktop w-full'>
        <img src={forum} alt="" />
        <img src={forum2} alt="" />
      </div>
      <div className='mobile w-full'>
      <img src={mobPage} alt="" />
      </div>
    <Footer />
    </div>

    
  )
}

export default YouthSeminar
