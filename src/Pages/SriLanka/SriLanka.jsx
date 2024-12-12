import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Page from "./assets/image/page.jpg";
import whyJoinImg from './assets/image/why-join-img.png';
import RamayanBanner from './assets/image/RamayanBanner.jpg';
import explore1 from './assets/image/explore1.jpg';
import explore2 from './assets/image/explore2.png';
import explore3 from './assets/image/explore3.png';
import explore4 from './assets/image/explore4.png';
import explore5 from './assets/image/explore5.png';
import explore6 from './assets/image/explore6.png';
import explore7 from './assets/image/explore7.png';
import explore8 from './assets/image/explore8.png';
import explore9 from './assets/image/explore9.png';
import explore10 from './assets/image/explore10.png';
import explore11 from './assets/image/explore11.png';
import comfort1 from './assets/image/comfor_care_1.png';
import comfort2 from './assets/image/comfor_care_2.png';
import comfort3 from './assets/image/comfor_care_3.png';
import comfort4 from './assets/image/comfor_care_4.png';
import styles from "./SriLanka.module.css";
import Phone from './assets/image/phone.svg';
const SriLanka = () => {
    return (
        <>
          <Header/>
          <img src={RamayanBanner} alt="" className="w-full" />
          <div className={styles.ramayanPage}>
            <div className={styles.ramayanDiv}>
              <div className={styles.ramayanSection}>
                <h1 className={styles.borderedText}>ISKCON Vijayawada’s Sri Lanka Ramayana Yatra</h1>
                <h4 className={styles.sectionDesc} style={{margin: "30px 0"}}><strong>Hare Krishna!</strong></h4>
                <h4 className={styles.sectionDesc}>
                Join ISKCON Vijayawada for a special journey <strong>The Sri Lanka Ramayana Yatra</strong> from
                <strong> November 28 to December 4, 2024.</strong> This is not just a trip; it’s a chance to connect with the
                stories and teachings of the Ramayana in the beautiful land of Sri Lanka</h4>
              </div>
            </div>
            <div className={styles.whyJoinSection}>
              <div className={styles.whyJoinInnerSec}>
                <h1 className={styles.whyJoinHeading}>Why You Should Join This Yatra</h1>
                <img src={whyJoinImg} alt="" className={styles.whyJoinImg} />
                <h4 className={styles.whyJoinDesc}>
                Experience the Ramayana Visiting sacred places tied to the Ramayana allows you to walk where Lord Rama, Sita, and Hanuman walked. Each location is filled with stories that bring the epic to life. You’ll feel a deeper connection to your faith and the values of love, duty, and devotion.
                </h4>
              </div>
            </div>
            <div className={styles.exploreLocationSection}>
              <h1 className={styles.exploreHeading}>Explore amazing locations</h1>
              <div className={styles.exploreImagesRow}>
                <div className={styles.exploreImageItem}>
                  <img src={explore1} alt="" className={styles.exploreImage}/>
                  <h3 className={styles.exploreItemText}>Chilav</h3>
                </div>
                <div className={styles.exploreImageItem}>
                  <img src={explore2} alt="" className={styles.exploreImage}/>
                  <h3 className={styles.exploreItemText}>Anuradhapura</h3>
                </div>
                <div className={styles.exploreImageItem}>
                  <img src={explore3} alt="" className={styles.exploreImage} />
                  <h3 className={styles.exploreItemText}>Trincomalee</h3>
                </div>
              </div>
              <div className={styles.exploreImagesRow}>
                <div className={styles.exploreImageItem}>
                  <img src={explore4} alt="" className={styles.exploreImage}/>
                  <h3 className={styles.exploreItemText}>Kandy</h3>
                </div>
                <div className={styles.exploreImageItem}>
                  <img src={explore5} alt="" className={styles.exploreImage}/>
                  <h3 className={styles.exploreItemText}>Dambulla Cave
                  Temple</h3>
                </div>
                <div className={styles.exploreImageItem}>
                  <img src={explore6} alt="" className={styles.exploreImage}/>
                  <h3 className={styles.exploreItemText}>Nagadweep Shakti
                  Peetham</h3>
                </div>
              </div>
              <div className={styles.exploreImagesRow}>
                <div className={styles.exploreImageItem}>
                  <img src={explore7} alt="" className={styles.exploreImage}/>
                  <h3 className={styles.exploreItemText}>Nawara Eliya</h3>
                </div>
                <div className={styles.exploreImageItem}>
                  <img src={explore8} alt="" className={styles.exploreImage}/>
                  <h3 className={styles.exploreItemText}>Kataragama</h3>
                </div>
                <div className={styles.exploreImageItem}>
                  <img src={explore9} alt="" className={styles.exploreImage}/>
                  <h3 className={styles.exploreItemText}>Ussangoda</h3>
                </div>
              </div>
              <div className={styles.exploreImagesRow}>
                <div className={styles.exploreImageItem}>
                  <img src={explore10} alt="" className={styles.exploreImage}/>
                  <h3 className={styles.exploreItemText}>Rumssala</h3>
                </div>
                <div className={styles.exploreImageItem}>
                  <img src={explore11} alt="" className={styles.exploreImage}/>
                  <h3 className={styles.exploreItemText}>Colomba</h3>
                </div>
              </div>
            </div>
            <div className={styles.comfortCareSection}>
              <h1 className={styles.comfortCareHeading}>Enjoy Comfort and Care</h1>
              <div className={styles.comfortCareImages}>
                <div className={styles.comfortCareItem}>
                  <img src={comfort1} alt="" />
                  <h4 className={styles.comfortCareText}>Air Travel</h4>                
                </div>
                <div className={styles.comfortCareItem}>
                  <img src={comfort2} alt="" />
                  <h4 className={styles.comfortCareText}>3- Star Accommodation</h4>                     
                </div>
                <div className={styles.comfortCareItem}>
                  <img src={comfort3} alt="" />
                  <h4 className={styles.comfortCareText}>Satvik Meal</h4>                      
                </div>
                <div className={styles.comfortCareItem}>
                  <img src={comfort4} alt="" />
                  <h4 className={styles.comfortCareText}>Experienced Guides</h4>                 
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className={styles.comfortCareCard}>
                  <div className={styles.comfortCardHead}>
                    <h1 className={styles.cardHeading}>Limited Spots</h1>
                  </div>
                  <div className={styles.comfortCardTail}>
                    <p>This unique journey is available for the <strong>first 30 people only</strong><br/>
                      (first come, first serve). 
                    </p>
                    <h1>Don’t miss out!</h1>
                  </div>
                </div> 
              </div>
              <div className={styles.comfortCardBottom}>
                <div className={styles.comfortPhone}>
                  <img src={Phone} alt="phone" />
                  <h3>For More Information Contact us at <strong>9700562621</strong> for any questions</h3>
                </div>
                <h2>Yatra Fee</h2>
                <h2>Rs.42,999/- <span>only</span></h2>
                <h4>(Airfare not Included)</h4>
                <NavLink to="https://rzp.io/rzp/G3pl2SC" style={{ width: "fit-content", textDecoration: "none"}}>
                  <span className={styles.textSpan}>Register Now</span>
                </NavLink>
              </div>
            </div>
          </div>
          <Footer/>  
        </>
    )
}

export default SriLanka;