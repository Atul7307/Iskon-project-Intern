import React from 'react'
import "./styles.css";
import bhakti1 from './assets/bhakti1.jpg';
import bhakti2 from './assets/bhakti2.jpg';
import mobPage from './assets/mob-page.jpg';
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';

function BhaktiVriksha() {
  return (
    <div>
      <Header />
      <div className='desktop w-full bg-[#ffecdb] '>
        <img src={bhakti1} alt="" />
        <img src={bhakti2} alt="" />
      </div>
      <div className='mobile w-full'>
        <img src={mobPage} alt="" />
      </div>
      <Footer />
    </div>

  )
}

export default BhaktiVriksha
