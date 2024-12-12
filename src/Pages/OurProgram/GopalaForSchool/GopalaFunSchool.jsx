import React from 'react'
import "./styles.css"; 
import gopala from './assets/gopala1.png';
import gopala2 from './assets/gopala2.jpg';
import mobPage from './assets/mob-page.jpg';
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';
function GopalaForSchool() {
  return (
    <div className='w-full bg-[#EDD9CB]'>
      <Header />
      <div className='desktop w-full'>
        <img src={gopala} alt="" />
        <img src={gopala2} alt="" />
      </div>

      <div className='mobile w-full'>
        <img src={mobPage} alt="" />
      </div>
      <Footer />
    </div>
  )
}

export default GopalaForSchool
