import React from 'react';
import "./styles.css"; 
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';
import swamiphoto from "./assets/swamiphoto.png"


function Counselling() {
  return (
    <div>
        <Header />
    <div className='flex-col bg-[#ffecdb]' >
      {/* <img src={counselling1}  /> */}
      <div className='md:rounded-b-2xl rounded-none text-center bg-cover bg-center bg-no-repeat w-full overflow-hidden mb-3 background-container'>
        <h1 className='inline-block items-center justify-center mx-auto md:text-4xl text-[20px] md:pt-3 mt-1 bg-red text-white font-bold md:border-2 border-1 border-white py-2.5 px-10 shadow-lg ' style={{borderRadius: "0 0 20px 20px"}} >COUNSELLING</h1>
        <h1 className='items-center md:text-[68px] text-[20px] mt-3 text-red font-semibold'>ISKCON Vijayawada Youth Counseling:</h1>
        <h1 className='md:text-[68px] text-[20px] text-red font-bold'>Guiding You on Your Spiritual Journey</h1>
        <p className='pb-2 leading-tight md:text-4xl text-[14px] w-full mx-auto text-black md:pt-5 mt-3 text-justify max-w-[85%]'>In today's world, with countless spiritual paths available, it can be overwhelming to decide which one is right for you. Should you follow a single path, or can you combine teachings to create your own unique spiritual journey? These are questions many youth face today, and finding empowering answers is crucial for your spiritual growth. At ISKCON Vijayawada, we offer personalized spiritual counseling to guide you toward a fulfilling and enlightened path, helping you navigate life’s challenges with wisdom and clarity</p>

      </div>
      {/* <img src={counselling2}  /> */}
      <div className='flex md:flex-row flex-col md:mt-12 mt-6 mx-auto items-center max-w-[85%]'>
        <img src={swamiphoto} alt="swamiphoto" className='md:w-[487px] w-[339px] md:h-[720px] h-[416px]  bg-[#ffecdb] ' />
        <div className='my-auto'>
          <h1 className='inline-block md:pt-0 pt-3 md:whitespace-nowrap text-center md:text-[52px] text-[32px] text-bold bg-[radial-gradient(circle,_#C61D21,_#AA191C,_#600E10)] bg-clip-text text-transparent'>The Teachings of Srila Prabhupada</h1>
          <p className=' max-w-[90%] mx-auto mt-3 text-justify ml-2 leading-snug md:text-left md:text-[40px] text-[16px] text-black'>His Divine Grace A.C. Bhaktivedanta Swami Prabhupada taught that this material world is <span className='text-red font-semibold'>"dukhalaya ashasvatam"</span>—a temporary place of suffering, like a prison. While human beings are endowed with higher consciousness, many struggle to find true happiness despite their intellectual abilities. At ISKCON, we believe that the ultimate solution to life's challenges is bhakti-yoga, the process of devotional service.</p>
        </div>
      </div>
      
      <div className='text-center md:max-w-[85%] max-w-[90%] mx-auto border-4 border-red rounded-xl md:py-8 py-4 md:mt-16 mt-6 bg-[#ffecdb]'>
        <h2 className='font-semibold md:text-[68px] text-[32px] text-red font-serif md:pb-4 pb-3' >Our Counseling Programs</h2>
        <p className='px-6  md:leading-normal leading-relaxed w-full text-justify font-semibold md:text-[32px] text-[16px] text-black'>ISKCON Vijayawada is at the forefront of initiating spiritual counseling programs to benefit society at large. Through our weekly counseling sessions, both online and offline, we offer guidance on transcending the three modes of material nature—goodness, passion, and ignorance. Our counselors work with individuals to help resolve the issues they face in daily life and remove the bottlenecks in their spiritual practices.</p>
        <p className='px-6 md:leading-normal leading-relaxed md:pt-8 pt-2 w-full text-justify font-semibold md:text-[32px] text-[16px] text-black'>We have seen remarkable results from these sessions, including success in helping prison inmates reform their lives and become contributing members of society. Whether you're dealing with personal challenges or seeking deeper spiritual fulfillment, our counseling programs are designed to help you unlock your true potential.</p>
      </div>

      <div className='text-center md:max-w-[95%] max-w-[100%] mx-auto md:rounded-3xl rounded-none md:mt-16 mt-10 md:py-8 py-2 shadow-2xl bg-cover w-full bg-no-repeat image-container'>
        <h2 className='md:text-[68px] text-[32px]  font-semibold text-red font-serif md:py-4 py-2'>Our Mission</h2>
        <p className='md:font-semibold font-bold md:text-[32px] text-[14px] text-black md:px-20 px-5 text-justify '>Our mission is to provide youth with holistic spiritual counseling that assists in your quest for permanent happiness and transcendental bliss. We aim to empower you with knowledge that dispels ignorance, so you can experience eternal spiritual joy. Through our counseling, we help you overcome the challenges you face—material, emotional, and spiritual—so that you can live a more purposeful and fulfilling life.</p>
      </div>

      <div className='md:text-[32px] text-16px text-center md:max-w-[85%] max-w-[90%] mx-auto border-4 border-red rounded-3xl py-8 md:mt-16 mt-10 bg-[#ffecdb]'>
        <h2 className='font-semibold md:text-[68px] text-32px text-red font-serif pb-6 md:pt-4 pt-2'>Counseling Objectives</h2>
        <ul className='md:leading-normal leading-relaxed md:px-10 px-7 font-semibold text-justify md:text-[32px] text-[16px]'>
          <li>
          <span className='pr-2'>&#8226;</span><span className='font-bold'>Answer Your Questions:</span> We help resolve both materialistic and spiritual queries, giving clarity to the challenges you face daily.
          </li>
          <li>
          <span className='pr-2'>&#8226;</span><span className='font-bold'>Revive Your Devotion:</span> Our counseling focuses on reigniting your love and devotion for Lord Krishna, the ultimate source of happiness.
          </li>
          <li>
          <span className='pr-2'>&#8226;</span><span className='font-bold'>Guide You Spiritually:</span> We guide you through the process of spiritualism, ensuring your mental and spiritual well-being.
          </li>
          <li>
          <span className='pr-2'>&#8226;</span><span className='font-bold'>Purify Your Heart:</span> Through our teachings, we help uplift your spiritual consciousness and purify your heart from material miseries.
          </li>
          <li>
          <span className='pr-2'>&#8226;</span><span className='font-bold'>Knowledge for Life:</span> We distribute practical knowledge to enable every individual to grow spiritually, paving the way for your return to the eternal spiritual world.
          </li>
        </ul>

        <p className='md:leading-normal leading-relaxed text-black text-justify md:px-10 px-7 md:text-[32px] text-[16px]  font-bold md:mt-8 mt-4'>
        Based on the teachings of Srila Prabhupada, ISKCON Vijayawada presents spiritual knowledge to youth through highly interactive and practical counseling sessions. Topics covered in these sessions include:
        </p>

        <ul className='md:leading-normal leading-relaxed md:px-10 px-7 font-semibold text-justify md:text-[32px] text-[16px] md:mt-8 mt-4'>
          <li>
          <span className=''>&#8226;</span>Secrets of Success
          </li>
          <li>
          <span className=''>&#8226;</span>Stress and Time Management
          </li>
          <li>
          <span className=''>&#8226;</span>Power of Habits
          </li>
          <li>
          <span className=''>&#8226;</span>Discovering Your Life's Purpose
          </li>
        </ul>
        

        <p className='md:leading-normal leading-relaxed text-black text-justify md:px-10 px-7 md:text-[32px] text-[16px] font-semibold md:mt-8 mt-4'>
        Based on the teachings of Srila Prabhupada, ISKCON Vijayawada presents spiritual knowledge to youth through highly interactive and practical counseling sessions. Topics covered in these sessions include:
        </p>

      </div>

      <div className='text-center max-w-[95%] mx-auto md:mt-16 mt-4 md:pb-20 pb-10'>
        <h2 className='font-semibold md:text-[68px] text-[32px] text-red font-serif md:pb-4 pb-2 pt-2'>
        Join Our Counseling Sessions
        </h2>
        <p className='md:leading-normal leading-relaxed md:px-16 px-8 w-full text-justify font-semibold md:text-[32px] text-[16px] text-black'>
        If you're searching for answers to life’s biggest questions or simply need guidance on your spiritual journey, ISKCON Vijayawada’s counseling programs are here for you. Through our holistic, compassionate, and knowledge-based approach, we aim to guide you toward a life of inner peace, success, and spiritual fulfillment.
        </p>
      </div>
      <Footer />
    </div>

    <div className='mobile w-full'>
      {/* <img src={mobPage}  /> */}
    </div>
    <Footer />
    
    </div>
  )
}

export default Counselling
